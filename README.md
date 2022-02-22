## Instalamos webpack, webpack-cli, webpack-dev-server

npm install webpack webpack-cli webpack-dev-server --save-dev

## Instalamos tailwindcss postcss-cli autoprefixer

npm install tailwindcss postcss-cli autoprefixer --save-dev

## Instalamos el postcss loader y css loader

npm install postcss-loader css-loader style-loader --save-dev

## Crear las config. webpack.config.js, postcss.config.js

touch webpack.config.js
touch postcss.config.js

## En el archivo package.json tener los siguientes scripts:

"start": "webpack-dev-server --mode=development --config webpack.config.js"

"build": "webpack --mode production"


## Vue-loader y babel

npm i vue vue-template-compiler vue-loader -D

npm install html-webpack-plugin -D

npm i @babel/core babel-loader babel-preset-env -D

## TailwindCSS Dependencies

npm install -D @tailwindcss/typography

npm install -D @tailwindcss/aspect-ratio

npm install -D @tailwindcss/line-clamp
