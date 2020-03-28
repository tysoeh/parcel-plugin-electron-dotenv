const JSAsset = require('parcel-bundler/src/assets/JSAsset');
const envVisitor = require('parcel-bundler/src/visitors/env');

const ENV_RE = /\b(?:process\.env)\b/;

class ElectronAsset extends JSAsset {
  async pretransform() {
    if (ENV_RE.test(this.contents)) {
      await this.parseIfNeeded();
      this.traverseFast(envVisitor);
    }
    return super.pretransform();
  }
}

module.exports = ElectronAsset;
