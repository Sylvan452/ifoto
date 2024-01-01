const { app } = require('@azure/functions');
const openai = require("../../lib/openai")

app.http('getChatGPTSuggestion', {
    methods: ['GET'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
        const response = await openai.completions.create({
            model: 'text-davinci-003',
            prompt: 'Write a random prompt for DALL-E to generate an image, it will be shown to the user, incluse details such as the genre and what type of painting it would be, options can include; oil painting, watercolour, photo-realistic, 4k, abstract, modern, black and white etc. Do not wrap the answer in a quote',
            max_tokens: 100,
            temperature: 0.8,
        })
        context.log(`Http function processed request for url "${request.url}"`);
        
        const responseText = response.choices[0].text

        return { body: responseText };
    } 
});
