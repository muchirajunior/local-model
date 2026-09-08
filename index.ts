// npm i @huggingface/transformers
import { pipeline } from '@huggingface/transformers';

console.log('Loading model .........')
// Allocate pipeline
const pipe = await pipeline(
    'text-generation', 
    'HuggingFaceTB/SmolLM2-135M-Instruct',
    {
        dtype:'q4'
    }
);

console.log('Loaded model sucessfully .........')

const messages = [
  { role: "system", content: "You are a helpful assistant." },
  { role: "user", content: "a story about hyena" },
];


// Generate a response
const output = await pipe(messages, { max_new_tokens: 250 });

console.log(output[0])