OS := $(shell uname -s)
ifeq ($(OS),Darwin)
	EXT = .dylib
else
	EXT = .so
endif

build/libsqlite3.dylib:
	mkdir -p build
	cd sqlite && mkdir -p build && cd build && ../configure && make
	cp sqlite/build/.libs/libsqlite3$(EXT) build/libsqlite3$(EXT)

build-c:
	gcc -Wall -Wextra -pthread ./sqlite/build/.libs/libsqlite3.a -o bench bench.c

clean:
	rm -rf build/

run_bench:
	./bench
	deno run -A --unstable bench_deno_ffi.js 5 1000000
	deno run -A --unstable bench_deno.js 5 1000000
	bun ./bench_bun_ffi.js 5 1000000
	bun ./bench_bun.js 5 1000000
	node ./bench_node.js 5 1000000