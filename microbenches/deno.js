import { bench, run } from "npm:mitata";

const fileStr = Deno.readTextFileSync("./fixtures/small.txt");
const fileBytes = Deno.readFileSync("./fixtures/small.txt");

const encoder = new TextEncoder();
const decoder = new TextDecoder();

bench("TextEncoder.encode", () => {
  encoder.encode(fileStr);
});

bench("TextDecoder.decode", () => {
  decoder.decode(fileBytes);
});

await run();
