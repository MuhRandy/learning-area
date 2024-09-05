# Step to add webpack

## Create folder and init node in it

```shell
mkdir new-folder &&
cd new-folder &&
npm init -y
```

## Install necesarry package

```shell
npm install --save-dev webpack webpack-cli html-webpack-plugin style-loader css-loader html-loader webpack-dev-server webpack-merge
```

## Create necessary file and folder

- create file `webpack.common.js` with content:

```javascript
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
};
```

- create file `webpack.dev.js` with content:

```javascript
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "development",
  devtool: "eval-source-map",
  devServer: {
    watchFiles: ["./src/template.html"],
  },
});
```

- and `webpack.prod.js` with content:

```javascript
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "production",
  devtool: "source-map",
});
```

- create `src` folder and file `template.html` and `index.js` in it

```shell
mkdir src &&
touch src/template.html src/index.js
```

## Add `build`, `dev` and `deploy` script to `package.json`

Add these script to `package.json`:

```json
//...
script {
    //...
    "build": "webpack --config webpack.prod.js",
    "dev": "webpack serve --config webpack.dev.js",
    "predeploy": "npm run build && git add dist && git commit -m '<your message for deploy>'",
    "deploy": "git subtree push --prefix dist origin gh-pages",
    "postdeploy": "rm -r dist"
}
// ...
```

# [Webpack concept](https://webpack.js.org/concepts/)

# [Webpack’s Asset Management guide](https://webpack.js.org/guides/asset-management/)

# [Template repositories](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-template-repository)

Useful to create new repository with templated file and folder. To create repository template you need to choose existing repository then go to setting, there exist checkbox at the top that saying repository template, you just need to check it.

You can use my webpack template on my github repo [webpack-template](https://github.com/MuhRandy/webpack-template)

# Production Mode

The goals of development and production builds differ greatly. In development, we want strong source mapping and a localhost server with live reloading or hot module replacement. In production, our goals shift to a focus on minified bundles, lighter weight source maps, and optimized assets to improve load time. With this logical separation at hand, we typically recommend writing separate webpack configurations for each environment.

# [Deploying webpack to github](https://gist.github.com/cobyism/4730490)

# Sources

- [Production by Webpack](https://webpack.js.org/guides/production/)
