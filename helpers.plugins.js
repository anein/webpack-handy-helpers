/**
 * Collection of the most common used plugins for Webpack:
 *
 * - awesome-typescript-loader
 * - copy-webpack-plugin
 * - html-webpack-plugin
 * - assets-webpack-plugin
 * - html-elements-plugin
 * - webpack-merge
 * - webpack-md5-hash
 * - compression-webpack-plugin
 * - ContextReplacementPlugin [inbuilt]
 * - DefinePlugin [inbuilt]
 * - NamedModulesPlugin [inbuilt]
 */

/**
 * Plugin: ForkCheckerPlugin
 *
 * @description Does type checking in a separate process, so webpack doesn't need to wait.
 *
 * {@link https://github.com/s-panferov/awesome-typescript-loader#forkchecker-boolean-defaultfalse}
 *
 */
exports.ForkCheckerPlugin = require('awesome-typescript-loader').ForkCheckerPlugin;

/**
 * Plugin: CopyWebpackPlugin
 *
 * @description Copies individual files or entire directories to the build directory.
 *
 * {@link https://github.com/kevlened/copy-webpack-plugin#copy-webpack-plugin}
 *
 */
exports.CopyWebpackPlugin = require('copy-webpack-plugin');

/**
 * Plugin: HtmlWebpackPlugin
 *
 * @description Generates a solid base html page for your web application with all your webpack generated css and js files built in.
 *
 * {@link https://github.com/ampedandwired/html-webpack-plugin}
 *
 */
exports.HtmlWebpackPlugin = require('html-webpack-plugin');

/** Plugin: AssetsPlugin
 *
 * @description Emits a json file with assets paths.
 *
 * {@link https://github.com/kossnocorp/assets-webpack-plugin }
 */
exports.AssetsPlugin = require('assets-webpack-plugin');

/**
 * Plugin: ContextReplacementPlugin
 *
 * @description The plugin replaces the default resource.
 *
 * {@link https://webpack.github.io/docs/list-of-plugins.html#contextreplacementplugin}
 *
 * @type {ContextReplacementPlugin}
 */
exports.ContextReplacementPlugin = require('webpack/lib/ContextReplacementPlugin');

/**
 * Plugin: HtmlElementsPlugin
 *
 * @description  Generates html tags based on javascript maps.
 */
exports.HtmlElementsPlugin = require('./html-elements-plugin');

/**
 * Plugin: DefinePlugin
 *
 * @description The DefinePlugin allows you to create global constants which can be configured at compile time.
 *
 * {@link https://webpack.github.io/docs/list-of-plugins.html#defineplugin}
 *
 */
exports.DefinePlugin = require('webpack/lib/DefinePlugin');

/**
 * Plugin: NamedModulesPlugin (experimental)
 *
 * @description: Uses file names as module name.
 *
 */
exports.NamedModulesPlugin = require('webpack/lib/NamedModulesPlugin');

/**
 * Plugin: webpackMerge
 *
 * @description Provides a merge function that concatenates arrays and merges objects
 *
 * {@link https://github.com/survivejs/webpack-merge}
 */
exports.webpackMerge = require('webpack-merge');

/**
 * Plugin: ExternalsPlugin
 *
 * @description considers all modules under the local node_modules/ directory as externals.
 *
 */
exports.ExternalsPlugin = require('webpack-externals-plugin');

/**
 * Plugin: ExtractTextPlugin
 *
 * @description Extract text from bundle into a file.
 */
exports.ExtractTextPlugin = require('extract-text-webpack-plugin');

/**
 * Plugin: WebpackMD5Hash
 *
 * @description Plugin to replace a standard webpack chunkhash with md5
 *
 * {@link https://github.com/erm0l0v/webpack-md5-hash}
 */
exports.WebpackMD5Hash = require('webpack-md5-hash');
/**
 * Plugin: CompressionPlugin
 *
 * @description Prepares compressed versions of assets to serve them with Content-Encoding.
 *
 * {@link https://github.com/webpack/compression-webpack-plugin }
 */
exports.CompressionPlugin = require('compression-webpack-plugin');
