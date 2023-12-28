const fetchSuggestionFromChatGPT = () =>
    fetch("/src/app/api/suggestion", {
        cache: 'no-store'
    }).then(res => res.json())


export default fetchSuggestionFromChatGPT;