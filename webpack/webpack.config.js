// Ele é um arquivo interpretado pelo node vou usar a sintaxe que o node entende
const modoDev = process.env.NODE_ENV != "production";
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
// Vou exportar toda configuração do meu arquivo webpack

module.exports = {
  // Primeira coisa colocar se estou em modo de dev ou produção
  mode: modoDev ? "development" : "production",
  //   Vou colocar o ponto de entrada a propriedade entry
  entry: "./src/principal.js",
  //   Pasta de saida
  output: {
    //   Nome do arquivo
    filename: "principal.js",
    // Variavel de ambiente do diretorio atual
    path: __dirname + "/public",
  },

  devServer: {
    contentBase: "./public",
    port: 9000,
  },

  optimization: {
    minimizer: [new OptimizeCSSAssetsPlugin({})],
  },

  plugins: [
    // Instanciando uma função construtora plugin, qual é o nome do arquivo que quero gerar
    new MiniCssExtractPlugin({
      filename: "estilo.css",
    }),
    new TerserPlugin({
      parallel: true,
      terserOptions: {
        ecma: 6,
      },
    }),
  ],
  // Cadastrar loader
  module: {
    // Regras que dentro coloco todos os loaders, é um array que posso ter varios loaders
    rules: [
      {
        // Vai ser responsavel por ler arquivos com extensão css
        test: /\.s?[ac]ss$/,
        // Vai ser lido ou não por esse loader
        use: [
          // Plugin que extrai o arquivo pra fora
          MiniCssExtractPlugin.loader,
          // Vou usar 2 plugins relacionados ao sass
          //"style-loader", adiciona CSS a dom injetando a tag <style></style>
          "css-loader", //interpreta @import, url() de imagem exemplo
          // Posso usar varios plugins loaders, para ler um arquivo css
          "sass-loader",
        ],
        // mini-css-extract-plugin, extrair o css para um local especifico
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"],
      },
    ],
  },
};
