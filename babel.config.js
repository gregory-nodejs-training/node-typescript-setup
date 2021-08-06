module.exports = {
    presets: [
        [
            '@babel/preset-env',
            {
                targets: {
                    node: 'current'
                }
            }
        ],
        '@babel/preset-typescript'
    ],
    plugins: [
        ['module-resolver', {
            alias: {
                '@controllers': './src/controllers',
                '@services': './src/services',
                '@repositories': './src/repositories',
                '@models': './src/models',
                '@middlewares': './src/middlewares',
                '@utils': './src/utils',
                '@exceptions': './src/exceptions',
                '@config': './src/config',
            }
        }]
    ],
    ignore: [
        '**/*.spec.ts'
    ]
}