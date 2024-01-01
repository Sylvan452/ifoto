'use client';

import { FormEvent, useState } from 'react';
import fetchSuggestionFromChatGPT from '../lib/fetchSuggestionFromChatGPT';
import useSWR from 'swr';
import fetchImages from '../lib/fetchImages';
import toast, { Toast } from 'react-hot-toast';

function PromptInput() {
  const [input, setInput] = useState('');

  const {
    data: suggestion,
    isLoading,
    mutate,
    isValidating,
  } = useSWR('/api/suggestion', fetchSuggestionFromChatGPT, {
    revalidateOnFocus: false,
  });

  const { mutate: updateImages } = useSWR('/api/getImages', fetchImages, {
    revalidateOnFocus: false,
  });

  const submitPrompt = async (useSuggestion?: boolean) => {
    const inputPrompt = input;
    setInput('');

    //p is the prompt to send to API
    const p = useSuggestion ? suggestion : inputPrompt;

    const notificationPrompt = p;
    const notificationPromptShort = notificationPrompt.slice(0, 20);

    const notification = toast.loading(
      `I'm creating your painting: ${notificationPromptShort}...`,
    );

    const res = await fetch('/api/generateImage', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ prompt: p }),
    });

    const data = await res.json();

    if (data.error) {
      toast.error(data.error);
    } else {
      toast.success(`Your AI drawing is ready`, {
        id: notification,
      });
    }

    updateImages();
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await submitPrompt();
  };

  const loading = isLoading || isValidating;

  return (
    <div className="m-10">
      <form
        onClick={handleSubmit}
        className="flex flex-col lg:flex-row shadow-md shadow-slate-400/10 lg:divide-x border rounded-md "
      >
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={
            (loading && "I'm thinking of suggestion...") ||
            suggestion ||
            'Enter your prompt...'
          }
          className="flex-1 p-4 outline-none rounded-md"
        />
        <button
          type="submit"
          className={`p-4 font-bold ${
            input
              ? 'bg-slate-100 text-slate-600 transition-colors duration-200'
              : 'cursor-not-allowed'
          }`}
          disabled={!input}
        >
          Generate
        </button>
        <button
          className="p-4 bg-slate-200 text-white transition-colors
        duration-200 font-bold disabled:text-gray-300 disabled:cursor-not-allowed
        disabled:bg-gray-400"
          type="button"
          onClick={() => submitPrompt(true)}
        >
          Use Suggestion
        </button>
        <button
          className="p-4 bg-white text-slate-600 border-none
        transition-colors duration-200 rounded-b-md md:rounded-r-md 
        md:rounded-bl-none font-bold"
          type="button"
          onClick={mutate}
        >
          New Suggestion
        </button>
      </form>
      {input && (
        <p>
          Suggestion:{' '}
          <span className="text-slate-600">
            {loading ? "I'm thinking..." : suggestion}
          </span>
        </p>
      )}
    </div>
  );
}

export default PromptInput;
