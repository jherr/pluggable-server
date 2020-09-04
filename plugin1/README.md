Module Federation Plugin Template
=================================

This is a simple template for building federated module for plugins that are compatiable with [mf-plugins](https://www.npmjs.com/package/mf-plugins).

To use this template first degit it:

``` bash
npx degit https://github.com/jherr/mf-plugin-template.git my-plugin
```

Then make these updates.

1. Update the name in `package.json`.
2. Update the `output.path` in the `webpack.config.js` to point at your plugins directory.
3. Update the `ModuleFederationPlugin` to change the name.
