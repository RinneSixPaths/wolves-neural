var path = require('path');

module.exports = function(production) {
    return {
        entry: './src/index.js',

        output: {
            filename: 'bundle.js',
            path: path.resolve(__dirname, '/public')
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
                        //plugins: [require('@babel/plugin-proposal-object-rest-spread')]
                      }
                    }
                  }
            ]
        },
    }
}