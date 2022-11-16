deps:
	cd http-express && npm install --production
	cd http-preactssr && npm install --production
# only inside docker - npm install fails with permissions error when run as root
# chown -R root:root typescript 
# chown -R root:root next-hackernews 
	cd typescript && npm install
	cd next-hackernews && npm install

http:
	deno run -A http.ts

bcd:
	deno run -A bcd.ts api
	deno run -A bcd.ts javascript

run_typescript:
	deno run -A typescript.ts
