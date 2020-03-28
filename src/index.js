module.exports = bundler => {
  bundler.addAssetType('.js', require.resolve('./ElectronAsset'));
};
