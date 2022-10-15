const sassResourcesLoader = require("craco-sass-loader");

module.exports = {
    mode: "development",
    output: {
        path: __dirname,
    },
    plugins: [
        {
            plugin: sassResourcesLoader,
            options: {
                resources: "./src/style/main.scss",
            },
        },
    ],
};
