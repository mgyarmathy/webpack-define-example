const webpack = require('webpack');

module.exports = {
  plugins: [
    new webpack.DefinePlugin({
      'process.env.FLAGR_API_URL': JSON.stringify(process.env.FLAGR_API_URL || 'https://flagr.dev.pga.com/api/v1/')
    }),
  ],
};
