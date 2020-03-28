# parcel-plugin-electron-dotenv

A plugin for the [Parcel](https://parceljs.org/) code bundler that inlines environment variables when building for [Electron](https://www.electronjs.org/). It mimics exactly the behavior used by Parcel to inline environment variables for browser targets.

## Installation

Add this plugin as a `devDependency`.

`npm install parcel-plugin-electron-dotenv --save-dev`

That's it!

> If it doesn't seem to be working, try clearing your Parcel cache. There's a [known issue](https://github.com/parcel-bundler/parcel/issues/1625) in which cached `.env` values are not updated.


## Why use this plugin?

This plugin will inline environment variables into your bundled Electron code using the same `.env.<test|development|staging>` files you're likely already using for your browser bundle.

Parcel [automatically inlines environment variables](https://parceljs.org/env.html) declared in `.env` files when bundling _browser_ code. However, it doesn't do this when bundling code that will be run in Node or Electron, because both already have direct access to their environment.

Unfortunately, Electron tooling doesn't provide an easy way (as far as I know!) to inject environment variables into an application's runtime. You can get around this by using the same library Parcel uses under the hood, [dotenv](https://github.com/motdotla/dotenv), and populating `process.env` with the contents of your `.env` file at runtime. You can also get around this by including in your Parcel config something like [this babel plugin](https://github.com/brysgo/babel-plugin-inline-dotenv) (which also uses [dotenv](https://github.com/motdotla/dotenv)) to inline your `.env` values at buildtime.

These solutions will work, but only for a single `.env` file. Despite [dotenv's official recommendation](https://github.com/motdotla/dotenv#should-i-have-multiple-env-files) to only use one `.env` file, Parcel will look for any postfix to `.env` that matches `NODE_ENV`. E.g. `.env.test` will be read if `NODE_ENV=test`.

If you want a multitude of `.env` files to seamlessly inline values into both your browser and Electron bundles without any additional config, this is the plugin for you.
