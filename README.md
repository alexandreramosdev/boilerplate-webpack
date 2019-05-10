# Boilerplate Webpack

> Plain webpack 4 boilerplate with Babel, SASS and Template ejs

## Requirements

You only need <b>node.js</b> pre-installed and you’re good to go.

If you don’t want to work with lodash, just remove it from the node packages and the webpack config.

## Download

Download in current directory

```sh
$ curl -L -o master.zip https://github.com/alexandreramosdev/boilerplate-webpack/archive/master.zip && unzip master.zip && rm master.zip && mv ./boilerplate-webpack-master/{.,}* ./ && rm -r ./boilerplate-webpack-master
```

## Setup

Install dependencies

```sh
$ npm install
```

## Development

Run the local webpack-dev-server with livereload and autocompile on [http://localhost:3333/](http://localhost:3333/)

```sh
$ npm start
```

## Deployment

Build the current application

```sh
$ npm run build
```

## [webpack](https://webpack.js.org/)

If you're not familiar with webpack, the [webpack-dev-server](https://webpack.js.org/configuration/dev-server/) will serve the static files in your build folder and watch your source files for changes.
When changes are made the bundle will be recompiled. This modified bundle is served from memory at the relative path specified in publicPath.
