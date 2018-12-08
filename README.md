# WASM matMul

This repo prototypes matrix multiplication with WASM.

To run the precompiled WASM binary, launch an HTTP server and open `localhost:${PORT}/src/main.html`. This fetches the binary and runs `matmul` 50 times. The console outputs performance numbers and memory information.

To modify the WASM source, edit `src/main.c`, then run:

    $ yarn // to install dependencies
    $ yarn build