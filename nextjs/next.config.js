module.exports = {
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
      config.module.rules.push({
        test: /\.(wasm)$/,
        loader: 'file-loader',
        type: 'javascript/auto',
        options: {
          outputPath: 'static',
        },
      })
      return config
    }
  }
  