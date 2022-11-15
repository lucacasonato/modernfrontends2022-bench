import { h } from "preact";
import { renderToString } from "preact-render-to-string";

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
export default {
  port: 9002,
  fetch: (_req) => {
    return new Response(renderToString(<Main />), {
      headers: {
        "content-type": "text/html",
        "cache-control": "no-transform", // disable response body compression
      },
    });
  },
};
