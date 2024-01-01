import OpenAI from "openai";

const openai = new OpenAI({
    organization: process.env.OPEN_AI_ORGANIZATION,
    apiKey: process.env.OPEN_AI_KEY,
});

export default openai;