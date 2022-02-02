import json from "@rollup/plugin-json";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import {terser} from "rollup-plugin-terser";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import {babel} from "@rollup/plugin-babel";
import packageJson from "./package.json";

const MINIFY = false;

const rollup = {
  input: "src/index.js",
  output: [
    {
      file: packageJson.main,
      format: "cjs",
      exports: "named",
      sourcemap: true,
      strict: false
    },
    {
      file: packageJson.module,
      format: "esm",
      sourcemap: true
    }
  ],
  plugins: [
    peerDepsExternal(),
    json(),
    resolve(),
    commonjs({transformMixedEsModules: true}),
    babel({
      exclude: "node_modules/**",
      babelHelpers: "bundled"
    })
  ],
  external: ["react", "prop-types", "ink"]
};

if (MINIFY === true) {
  rollup.plugins.push(terser());
}

export default rollup;
