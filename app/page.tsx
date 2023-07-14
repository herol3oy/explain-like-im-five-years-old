'use client'

import { useCompletion } from 'ai/react'

export default function Home() {
  const { completion, input, isLoading, handleInputChange, handleSubmit } =
    useCompletion()

  return (
    <main className="m-auto max-w-xl p-4 text-white">
      <div className="mt-8 border-b border-neutral-800 pb-3 text-center">
        <h1 className="text-3xl">Explain like I&#39;m five years old 👶</h1>
      </div>
      <div className="mt-12">
        <form onSubmit={handleSubmit}>
          <div className="space-y-6">
            <input
              name="prompt"
              value={input}
              onChange={handleInputChange}
              type="text"
              placeholder="Type your question"
              className="w-full rounded-md bg-neutral-800 px-2 py-5 outline-none"
              autoFocus
            />
            {completion && (
              <div className="flex items-center rounded-md bg-neutral-800 px-2 py-5">
                <div className="flex-1">
                  <p className="text-xl">{completion}</p>
                </div>
              </div>
            )}
            <button
              disabled={!input || isLoading}
              type="submit"
              className="mt-4 w-full rounded-md bg-neutral-700 px-8 py-2.5 text-base  text-white hover:bg-neutral-800 focus:outline-none focus:ring-1 focus:ring-zinc-600 disabled:cursor-not-allowed disabled:opacity-50"
            >
              Done
            </button>
          </div>
        </form>
      </div>
    </main>
  )
}
