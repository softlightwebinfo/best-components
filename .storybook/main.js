const path = require('path');

module.exports = {
    "stories": [
        "../src/stories/**/*.stories.mdx",
        "../src/stories/**/*.stories.@(js|jsx|ts|tsx)"
    ],
    "addons": [
        '@storybook/addon-actions',
        "@storybook/addon-links",
        "@storybook/addon-essentials"
    ],
    webpackFinal: async (config, {configType}) => {
        config.module.rules.push({
            test: /\.scss$/,
            use: ['style-loader', {
                loader: 'css-loader',
            }, 'sass-loader'],
            include: path.resolve(__dirname, '../'),
        });

        return config;
    },
}
