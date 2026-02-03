import typescript from '@rollup/plugin-typescript';
import terser from '@rollup/plugin-terser';
import license from 'rollup-plugin-license';
import sourcemaps from 'rollup-plugin-include-sourcemaps';

export default {
  input: 'src/entrypoint_webLib.ts',
  output: [
    {
      file: 'dist/hexagonal.min.js',
      format: 'iife',
      sourcemap: 'inline'
    }
  ],
  plugins: [
    typescript({ tsconfig: './tsconfig.rollup.json' }),
    terser({
      ie8: true,
      ecma: 5
    }),
    sourcemaps(),
    license({
      banner: `Hexagonal.js Web Bundle (v<%= pkg.version %>)\nCopyright (c) <%= moment().format('YYYY') %> <%= pkg.author %> (<%= pkg.license %> license)\nUsage is not recommended, as the source map takes up most of the file's size. Use \`npm i <%= pkg.name %>\` instead.`,
    })
  ]
};
