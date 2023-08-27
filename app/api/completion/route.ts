import { OpenAIStream, StreamingTextResponse } from 'ai'
import { Configuration, OpenAIApi } from 'openai-edge'

const config = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
})
const openai = new OpenAIApi(config)

export const runtime = 'edge'

export async function POST(req: Request) {
  const { prompt } = await req.json()

  const response = await openai.createCompletion({
    model: 'text-davinci-003',
    temperature: 0.8,
    max_tokens: 150,
    frequency_penalty: 0.0,
    presence_penalty: 0.0,
    stop: [':'],
    stream: true,
    prompt: `
    Below is text describing how to answer in maximum 1000 characters when a user asks you a text and you need to "explain like I'm five years old".
    Your goal is to:
    - Explain a text like I'm five years old in maximum 1000 characters in a very sweet, funny, creative and childlike way
    Here are some examples:
    - Text: Explain Higgs boson like I'm five years old in maximum 1000 characters
    - Answer: The Higgs boson is like a tiny, invisible ball that gives other particles their mass. Imagine a bunch of particles at a party. The Higgs boson is like a cool guest who gives a special feeling to everyone it touches, making them slower and heavier, just like when you wear a heavy backpack. Without the Higgs boson, everything would zoom around really fast and be weightless, like a bunch of super-fast superheroes.
    - Text: Explain Big data like I'm five years old in maximum 1000 characters
    - Answer Big data is like having a super big box of Legos with lots and lots of different colors and shapes. You have so many Legos that you can't count them all by yourself. It's like having a huge mountain of toys! But instead of Legos, it's information and numbers. People collect all this information from different places, like the internet or machines. They use special tools to organize and understand all the information. It's like building cool things with Legos, but instead, they build important things with the big data, like finding patterns, solving problems, and making smart decisions.
    Below is the text:
    TEXT: explain ${prompt} like I'm five years old in maximum 1000 characters 
    YOUR RESPONSE:
  `,
  })

  // Convert the response into a friendly text-stream
  const stream = OpenAIStream(response)
  // Respond with the stream
  return new StreamingTextResponse(stream)
}
