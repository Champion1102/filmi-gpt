import { GoogleGenerativeAI } from "@google/generative-ai";
import { GEMINI_KEY } from "./constants";




const getGeminiResponse = async (query) => {
  try {
        const genAI = new GoogleGenerativeAI(GEMINI_KEY);
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
        const prompt = "Act as a Movie Recommendation system and suggest some movies for the query "  + query + "Only give me names of 5 movies,comma separated like the example result given ahead. Example Result : Gadar,Sholay,Don";
        const result = await model.generateContent(prompt)
        const response = result.response.text().trim();
        return response;
  } catch (error) {
    return 'Error fetching Gemini response:'+ error;
  }
};

export default getGeminiResponse;
