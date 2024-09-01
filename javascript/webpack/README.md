# Step to add webpack

## Create folder and init node in it

```shell
mkdir new-folder &&
cd new-folder &&
npm init -y
```

## Install necesarry package

```shell
npm install --save-dev webpack webpack-cli html-webpack-plugin style-loader css-loader html-loader webpack-dev-server
```

## Create necessary file and folder

- create file `webpack.config.js` with content:

```javascript
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  devtool: "eval-source-map",
  devServer: {
    watchFiles: ["./src/template.html"],
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

- create `src` folder and file `template.html` and `index.js` in it

```shell
mkdir src &&
touch src/template.html src/index.js
```

## Add `build` and `dev` script to `package.json`

Add these script to `package.json`:

```json
...
script {
    ...
    "build": "npx webpack",
    "dev": "npx webpack serve"
}
...
```
