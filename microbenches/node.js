import { bench, run } from "mitata";
import * as fs from "fs";

const fileStr = fs.readFileSync("./fixtures/small.txt", "utf8");
const fileBytes = fs.readFileSync("./fixtures/small.txt");

const encoder = new TextEncoder();
const decoder = new TextDecoder();

bench("TextEncoder.encode", () => {
  encoder.encode(fileStr);
});

bench("TextDecoder.decode", () => {
  decoder.decode(fileBytes);
});

bench("Buffer#toString", () => {
  fileBytes.toString("utf8");
});

bench("Buffer#from", () => {
  Buffer.from(fileStr);
});

await run();
