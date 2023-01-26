module.exports = {
    entry: './src/index.js',
    mode: "production",
    output: {
        library: {
            type: "umd",
            name: "@stanislav_laktionov/my-test-lib",
        },
        filename: "index.js",
    }
};