deps:
	cd http-express && npm install --production
	cd http-preactssr && npm install --production
	cd typescript && npm install

upgrade:
	deno upgrade
	bun upgrade

http:
	deno run -A http.ts

bcd:
	deno run -A bcd.ts api
	deno run -A bcd.ts javascript

run_typescript:
	deno run -A typescript.ts
