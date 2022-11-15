/** @jsx h */
import { h } from "npm:preact";
import { renderToString } from "npm:preact-render-to-string";

function Main() {
  return (
    <html>
      <head>
        <title>preactssr</title>
      </head>
      <body>
        <h1>Hello, world!</h1>
      </body>
    </html>
  );
}

Deno.serve({ port: 7002 }, (_req) => {
  return new Response(renderToString(<Main />), {
    headers: {
      "content-type": "text/html",
      "cache-control": "no-transform", // disable response body compression
    },
  });
});
