import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI("AIzaSyD9rQtxmSDo6hhkrtzttXIjsg5gS42siU0");
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});

async function generateQuize(input) {
    const prompt = `I will provide you input in json format like this ${input} and have to generate two question on the basis of this input and generate output only in json format don't include any normal string {
	"que1": {
			"Bueno": "1",
			"que": Who I am"
			"a": "Sarthak",
			"b": "Nande",
			"c": "Sae",
			"d": "up",
			"answer": "a"
		}
	"que2": {
			"Bueno": "1",
			"que": Who I am"
			"a": "Sarthak",
			"b": "Nande",
			"c": "Sae",
			"d": "up",
			"answer": "a"
		}
} json format for 2 questions `
  
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    const p1 = text.replace(/`/g , "")
    const p2 = p1.substring(4)
    const ans = JSON.parse(p2);
    return ans;
  }
  
export default generateQuize;