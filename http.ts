import { delay } from "https://deno.land/std@0.164.0/async/delay.ts";
import { build$, CommandBuilder } from "https://deno.land/x/dax@0.15.0/mod.ts";

const cb = new CommandBuilder().printCommand(true);
const $ = build$({ commandBuilder: cb });

const httpTests = [
  {
    name: "http-raw deno",
    fixture: $`deno run -A --unstable http-raw/deno.js`,
    port: 7000,
  },
  {
    name: "http-raw node",
    fixture: $`node http-raw/node.js`,
    port: 8000,
  },
  {
    name: "http-raw bun",
    fixture: $`bun http-raw/bun.js`,
    port: 9000,
  },
  {
    name: "http-express deno",
    fixture: $`deno run -A --unstable http-express/deno.js`,
    port: 7001,
  },
  {
    name: "http-express node",
    fixture: $`node http-express/node.js`,
    port: 8001,
  },
  {
    name: "http-express bun",
    fixture: $`bun http-express/bun.js`,
    port: 9001,
  },
  {
    name: "http-preactssr deno",
    fixture: $`deno run -A --unstable http-preactssr/deno.jsx`,
    port: 7002,
  },
  {
    name: "http-preactssr node",
    fixture: $`node http-preactssr/node.js`,
    port: 8002,
  },
  {
    name: "http-preactssr bun",
    fixture: $`bun http-preactssr/bun.jsx`,
    port: 9002,
  },
  {
    name: "fresh-hackernews",
    fixture: $`deno run -A main.ts`.cwd("./fresh-hackernews"),
    port: 7003,
  },
  {
    name: "next-hackernews",
    fixture: $`PORT=8003 npm run start`.cwd("./next-hackernews"),
    port: 8003,
  },
];

const file = await Deno.create("results.md");
const tes = new TextEncoderStream();
const stream = tes.readable.pipeTo(file.writable);
const writer = tes.writable.getWriter();

const results: Map<string, string[]> = new Map();

for (let i = 0; i < 3; i++) {
  for (const test of httpTests) {
    const cmd = test.fixture.timeout(15000).spawn()
      .catch(() => {});
    await delay(1000);
    const url = `http://localhost:${test.port}/`;
    const bench = $`wrk -c100 ${url}`.text();
    const [_, res] = await Promise.all([cmd, bench]);
    results.set(test.name, results.get(test.name) || []);
    results.get(test.name)!.push(res);
  }
}

for (const [name, res] of results) {
  await writer.write(`### ${name}\n\n`);
  for (const r of res) {
    await writer.write(`\`\`\`\n${r}\n\`\`\`\n\n`);
  }
}

await writer.close();
await stream;
