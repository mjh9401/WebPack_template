//import
const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

//export
module.exports={
    // 파일을 읽어들이기 시작하는 진입점 설정
    entry: './js/main.js',
    output: {
        // 결과물(번들)을 반환하는 설정, __dirname은 node.js 환경에서 현재파일이 있는 경로 위치
        // path는 절대경로로 넣어줘야함
        // path: path.resolve(__dirname, 'dist'),
        // filename:'main.js',
        // clean은 기존에 필요하지 않은 내용을 제거 후, 다시 결과물을 만들 수 있음
        clean : true
    },
    module:{
        rules:[
            {
                test: /\.s?css$/,
                use : [
                    'style-loader',
                    'css-loader',
                    'postcss-loader',
                    'sass-loader'
                ]
            },
            {
                test:/\.js$/,
                use:[
                    'babel-loader'
                ]
            }
        ]
    },
    // 번들링 후 결과물의 처리 방식 등 다양한 플러그인들을 설정
    plugins:[
        new HtmlPlugin({
            template:'./index.html'
        }),
        new CopyPlugin({
            patterns:[
                {from: 'static'}
            ]
        })
    ],
    devServer:{
        host: 'localhost'
    }
}