import { build$, CommandBuilder } from "https://deno.land/x/dax@0.15.0/mod.ts";

const cb = new CommandBuilder().printCommand(true).cwd("./typescript");
const $ = build$({ commandBuilder: cb });

await $`hyperfine --prepare 'rm -rf /tmp/denodir_ephemeral' --warmup=3 \
  'node_modules/.bin/ts-node --swc simple.ts' \
  'DENO_DIR=/tmp/denodir_ephemeral deno run simple.ts' \
  'DENO_DIR=/tmp/denodir_persistent deno run simple.ts'`;

await $`hyperfine --prepare 'rm -rf /tmp/denodir_ephemeral' --warmup=3 \
  'node_modules/.bin/ts-node simple.ts' \
  'node_modules/.bin/tsc simple.ts --outDir /tmp/tsc_simple && node /tmp/tsc_simple/simple.js' \
  'DENO_DIR=/tmp/denodir_ephemeral deno run --check simple.ts'`;

await $`hyperfine --prepare 'rm -rf /tmp/denodir_ephemeral' --warmup=3 \
  'node_modules/.bin/tsc simple.ts --noEmit' \
  'DENO_DIR=/tmp/denodir_ephemeral deno check simple.ts'`;
