import { bench, run } from "mitata";
import * as fs from "fs";

try {
  fs.rmSync("./fixtures/_tmp", { recursive: true, force: true });
} catch {
  // ignore if not exists
}
fs.mkdirSync("./fixtures/_tmp");

let i = 0;
bench("copy file", async () => {
  await fs.promises.copyFile("./fixtures/small.txt", `./fixtures/_tmp/small_${i}.txt`);
  i++;
});

await run();
