const { readFileSync } = require('fs');
const Bundler = require('parcel-bundler');

describe('this plugin', () => {
  it('injects environment variables into the build output for electron targets', async () => {
    const bundler = new Bundler('**/test/entryFixture.js', {
      target: 'electron',
      cache: false
    });

    await bundler.bundle();
    const build = readFileSync('./dist/entryFixture.js', {
      encoding: 'utf8'
    });
    expect(build).toContain('flabucci');
  });
});
