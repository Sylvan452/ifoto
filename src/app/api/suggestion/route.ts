export const dynamic = 'force-dynamic';

export async function GET(request: Request) {
    //connect to microsoft azure function endpoint
    const response = await fetch("https://ai-image-generator-ifoto.azurewebsites.net/api/getchatgptsuggestion", {
        cache: 'no-store',
    });
    const textData = await response.text();
    
    return new Response(JSON.stringify(textData.trim()), {
        status: 200,
    });  
}


