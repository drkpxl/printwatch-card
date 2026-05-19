import { readFileSync } from 'node:fs';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';
import { babel } from '@rollup/plugin-babel';
import json from '@rollup/plugin-json';
import replace from '@rollup/plugin-replace';

// Read package.json
const pkg = JSON.parse(readFileSync(new URL('./package.json', import.meta.url), 'utf8'));

// Generate a timestamp for cache busting
const timestamp = new Date().getTime();

export default {
  input: 'src/main.js',
  output: {
    file: 'dist/printwatch-card.js',
    format: 'es',
    sourcemap: true,
    banner: `/**
 * PrintWatch Card ${pkg.version}
 * Built: ${new Date().toISOString()}
 */`
  },
  plugins: [
    resolve({
      browser: true,
      preferBuiltins: false,
      extensions: ['.js', '.json'],
      moduleDirectories: ['node_modules'],
      mainFields: ['browser', 'module', 'main']
    }),
    commonjs(),
    json({
      compact: true,
      preferConst: true,
      namedExports: true
    }),
    replace({
      preventAssignment: true,
      values: {
        'process.env.VERSION': JSON.stringify(pkg.version),
        'process.env.BUILD_TIMESTAMP': JSON.stringify(timestamp)
      }
    }),
    babel({
      babelHelpers: 'bundled',
      exclude: 'node_modules/**',
      presets: [
        ['@babel/preset-env', {
          targets: {
            browsers: [
              'last 2 Chrome versions',
              'last 2 Firefox versions',
              'last 2 Safari versions',
              'last 2 iOS versions',
              'last 1 Android version',
              'last 1 ChromeAndroid version',
              'ie 11'
            ]
          },
          modules: false
        }]
      ]
    }),
    terser({
      format: {
        comments: /PrintWatch Card/
      }
    })
  ]
};