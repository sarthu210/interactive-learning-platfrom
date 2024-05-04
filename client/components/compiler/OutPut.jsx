import { useEffect, useState } from "react";
import { Box, Button, Text, useToast } from "@chakra-ui/react";
import { ToastContainer, toast } from 'react-toastify';
import { executeCode } from "../api";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { submit } from "../../src/slices/submitReducer";
import axios from "axios";
import _ from 'lodash';

const Output = ({ editorRef, language }) => {
  const [output, setOutput] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [checkCode, setCheckCode] = useState(false);
  const [checkOutput, setCheckOutput] = useState(false);
  const [compilerState , setCompilerState] = useState(true);

  const level = useSelector((state) => state.levels.levels);
  const course = useSelector((state) => state.course.name); 
  const isSubmit = useSelector((state) => state.submit.isSubmit);
  const dispatch = useDispatch();

  let outputA = "";

  const runCode = async () => {
    
    const sourceCode = editorRef.current.getValue();
    if (!sourceCode) return;
    try {
      setIsLoading(true);
      const { run: result } = await executeCode(language, sourceCode);
      let response = await executeCode(language, sourceCode);
      outputA = response.run.output;
      setOutput(result.output.split("\n"));
      result.stderr ? setIsError(true) : setIsError(false);
    } catch (error) {
      console.log(error);
      toast({
        title: "An error occurred.",
        description: error.message || "Unable to run code",
        status: "error",
        duration: 6000,
      });
    } finally {
      setIsLoading(false);
    }

   
    
  };

  async function checkCodeOutput(){
    const sourceCode = editorRef.current.getValue();
    if (level && level.excersice) {
      let compareValue = level.excersice.compare;
      let finalCompareResult = false;
      let finalIsAnswerCorrect = false;
    
      for (let i = 0; i < compareValue.length; i++) {
        
        if (level.excersice.answer === "") {
          console.log(level.excersice.compare[i]);
          const compareResult = _.includes(sourceCode.toString(), level.excersice.compare[i]);
          finalCompareResult = compareResult;
          finalIsAnswerCorrect = true;
        } else {
          const compareResult = _.includes(sourceCode, level.excersice.compare[i]);
          console.log(outputA);
          console.log(level.excersice.answer)
          const isAnswerCorrect = outputA.includes(level.excersice.answer);
          console.log(isAnswerCorrect);
          finalCompareResult = compareResult;
          finalIsAnswerCorrect = isAnswerCorrect;
        }
      }
    
      setCheckCode(finalCompareResult);
      setCheckOutput(finalIsAnswerCorrect);
    }
  }

async function handleClick(){
     await runCode();
     await checkCodeOutput();
  }

  console.log(checkCode, checkOutput);

  useEffect(() => {
    if (level && level.excersice) {
      if (level.excersice === "null") {
        setCompilerState(false);
      }
    }

  }, [level]); 

  

  async function submitCode() {
    try{
      if(checkCode && checkOutput){
        await axios.post(`http://localhost:3000/level/submit`, {
          enrollId: course.enrollId,
          level: level.name
        }).then((response) => {
          console.log(response);
        });
        dispatch(submit({isSubmit: true}));
        toast("Successfully submitted");
      }
      else if(level.excersice === "null"){
        await axios.post(`http://localhost:3000/level/submit`, {
          enrollId: course.enrollId,
          level: level.name
        }).then((response) => {
          console.log(response);
        });
        dispatch(submit({isSubmit: true}));
        toast("Successfully submitted");
      }
      else{
        toast("Code or Output is not correct");
      }
    }
    catch (error) {
      console.log(error);
      toast({
        title: "An error occurred.",
        description: error.message || "Unable to run code",
        status: "error",
        duration: 6000,
      });
    }
  }

  // console.log(level ? level.excersice  : null);


  return (<>
    <Box w="50%">
    <ToastContainer />
      <Text mb={2} fontSize="lg">
        Output
      </Text>
      <Button
        variant="outline"
        colorScheme="green"
        mb={4}
        isLoading={isLoading}
        onClick={handleClick}
        
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full"
      >
        Run Code
      </Button>
      {!isSubmit ? (
        <Button
          variant="outline"
          colorScheme="green"
          mb={4}
          onClick={submitCode}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full ml-2"
        >
          Submit Code
        </Button>
      ) : null}
      <Box
        height="75vh"
        p={2}
        color={isError ? "red.400" : ""}
        border="1px solid"
        borderRadius={4}
        borderColor={isError ? "red.500" : "#333"}
      >
        {output
          ? output.map((line, i) => <Text key={i}>{line}</Text>)
          : 'Click "Run Code" to see the output here'}
      </Box>
      
    </Box>
    </>
  );
};
export default Output;