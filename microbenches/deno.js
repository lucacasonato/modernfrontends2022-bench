import { bench, run } from "npm:mitata";

try {
  Deno.removeSync("./fixtures/_tmp", { recursive: true });
} catch {
  // ignore if not exists
}
Deno.mkdirSync("./fixtures/_tmp");

let i = 0;
bench("copy file", async () => {
  await Deno.copyFile("./fixtures/small.txt", `./fixtures/_tmp/small_${i}.txt`);
  i++;
});

await run();
