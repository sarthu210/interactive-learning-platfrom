import Level from "../models/levels.js";
import generateQuize from "../middleware/generateQuize.js";

async function QuzieGenerator(req,res,next) {
    try{
        const user = req.user;

        if(!user)
        {
            return res.status(400).json({
                message: "User Is Not Authenticated"
            })
        }

        const level = req.body.name;

        console.log(level);

        const input = await Level.find({
            name: level
        });

        console.log(input);

        if(!input)
        {
            return res.status(400).json({
                message: "Invalid Quize"
            })
        }

        const quize = await generateQuize(JSON.stringify(input));

        console.log(quize);

        if(!quize)
        {
            return res.status(400).json({
                message: "Quize Error"
            })
        }

        return res.status(200).json({
            message: "Quize Generated Successfuly!",
            quize
        })

    } catch(error){
        console.log("Error While Generating Quize" ,error);
        return res.status(400).json({
            message: "Quize is not generated"
        })
    }
}

export default QuzieGenerator;