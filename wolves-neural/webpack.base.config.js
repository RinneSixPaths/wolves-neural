var path = require('path');

module.exports = function(production) {
    return {
        mode: production ? "production" : "development",

        entry: './src/index.js',

        output: {
            filename: 'bundle.js',
            path: path.resolve(__dirname, 'public')
        },
        
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /(node_modules|bower_components)/,
                    use: {
                      loader: 'babel-loader',
                      options: {
                        presets: ['@babel/preset-env'],
                        plugins: [require('@babel/plugin-proposal-object-rest-spread').default]
                      }
                    }
                },
                {
                    test: /\.scss$/,
                    use: [
                        {
                            loader: "style-loader"
                        },
                        {
                            loader: "css-loader",
                            options: {
                                alias: {
                                "../fonts/bootstrap": "bootstrap-sass/assets/fonts/bootstrap"
                                }
                            }
                        },
                        {
                            loader: "sass-loader",
                            options: {
                                includePaths: [
                                    path.resolve("./node_modules/bootstrap-sass/assets/stylesheets")
                                ]
                            }
                        }
                    ]
                }
            ]
        },
    }
}