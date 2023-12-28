import OpenAI from 'openai';

const openai = new OpenAI({
    organization: process.env.OPEN_AI_ORGANIZATION,
    apiKey: process.env.OPENAI_API_KEY,
  
});



export default openai;
