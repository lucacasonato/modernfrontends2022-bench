export default {
  port: 9000,
  fetch(_req) {
    return new Response("Hello World");
  },
};
