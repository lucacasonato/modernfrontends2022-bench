import { createServer } from "http";
import { h } from "preact";
import { renderToString } from "preact-render-to-string";

function Main() {
  return h(
    "html",
    null,
    h("head", null, h("title", null, "preactssr")),
    h("body", null, h("h1", null, "Hello, world!")),
  );
}

const server = createServer((_req, res) => {
  res.setHeader("content-type", "text/html");
  res.setHeader("cache-control", "no-transform"); // disable response body compression
  res.end(renderToString(h(Main, null)));
});

server.listen(8002, "localhost", (e) => {
  console.log(`Server running at http://localhost:8002/`);
});
