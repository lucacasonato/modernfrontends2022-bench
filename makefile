http:
	deno run -A http.ts

bcd:
	deno run -A bcd.ts api
	deno run -A bcd.ts javascript

run_typescript:
	deno run -A typescript.ts

run_ffi:
	./build
	deno run -A --unstable bench_deno_ffi.js 5 1000000
	deno run -A --unstable bench_deno.js 5 1000000
	bun ./bench_bun_ffi.js 5 1000000
	bun ./bench_bun.js 5 1000000
	node ./bench_node.js 5 1000000