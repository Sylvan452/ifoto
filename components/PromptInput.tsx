'use client';

import { useState } from 'react';

function PromptInput() {
  const [input, setInput] = useState('');
  return (
    <div className="m-10">
      <form className="flex flex-col lg:flex-row shadow-md shadow-slate-400/10 lg:divide-x border rounded-md ">
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter your prompt..."
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
        >
          Use Suggestion
        </button>
        <button
          className="p-4 bg-white text-slate-600 border-none
        transition-colors duration-200 rounded-b-md md:rounded-r-md 
        md:rounded-bl-none font-bold"
          type="button"
        >
          New Suggestion
        </button>
      </form>
    </div>
  );
}

export default PromptInput;
