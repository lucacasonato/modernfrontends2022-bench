import {
  CompatData,
  Identifier,
} from "https://unpkg.com/@mdn/browser-compat-data@5.2.15/types.d.ts";
import bcd from "https://unpkg.com/@mdn/browser-compat-data@5.2.15/data.json" assert {
  type: "json",
};

const data = bcd as unknown as CompatData;

const browsers: Record<string, number> = {};

for (const browser of Object.keys(data.browsers)) {
  browsers[browser] = 0;
}

walk(data.api);

function walk(data: Identifier) {
  for (const key of Object.keys(data)) {
    if (key === "__compat") {
      for (const [browser, support] of Object.entries(data[key]!.support)) {
        if (
          (Array.isArray(support) && support[0].version_added) ||
          (!Array.isArray(support) && support.version_added)
        ) {
          browsers[browser]++;
        }
      }
    } else {
      walk(data[key]);
    }
  }
}

console.log(browsers);
