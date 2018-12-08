# WASM matMul

This repo prototypes matrix multiplication with WASM.

To install dependencies:

    $ yarn

To run:

    $ yarn build

This will compile the WASM binary from `src/main.c` and place it in `out/main.wasm`.

Then launch an HTTP server and open `localhost:${PORT}/src/main.html`. This page fetches the binary and runs `matmul` 50 times. The console will output the performance numbers and memory information.