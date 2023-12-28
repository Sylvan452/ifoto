export async function GET(request: Request) {
    //connect to microsoft azure function endpoint
    const response = await fetch("http://localhost:7071/api/getChatGPTSuggestion", {
        cache: 'no-store'
    })
    const textData = await response.text();


    return new Response(JSON.stringify(textData.trim()), {
        status: 200,
    })  
}


