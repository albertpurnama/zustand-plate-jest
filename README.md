# Why

I'm trying to figure out why Plate doesn't play well with Jest.

# Reproduction

1. Install deps (run `yarn`)
2. Run test (run `yarn test`)

# What you should see

You should see an error message similar to the following.

```
yarn run v1.22.19
$ jest
 FAIL  src/pages/index.spec.tsx
  ● Test suite failed to run

    Jest encountered an unexpected token

    Jest failed to parse a file. This happens e.g. when your code or its dependencies use non-standard JavaScript syntax, or when Jest is not configured to support such syntax.

    Out of the box Jest supports Babel, which will be used to transform your files into valid JS based on your Babel configuration.

    By default "node_modules" folder is ignored by transformers.

    Here's what you can do:
     • If you are trying to use ECMAScript Modules, see https://jestjs.io/docs/ecmascript-modules for how to enable it.
     • If you are trying to use TypeScript, see https://jestjs.io/docs/getting-started#using-typescript
     • To have some of your "node_modules" files transformed, you can specify a custom "transformIgnorePatterns" in your config.
     • If you need a custom transformation specify a "transform" option in your config.
     • If you simply want to mock your non-JS modules (e.g. binary assets) you can stub them out with the "moduleNameMapper" config option.

    You'll find more details and examples of these config options in the docs:
    https://jestjs.io/docs/configuration
    For information about custom transformations, see:
    https://jestjs.io/docs/code-transformation

    Details:

    /home/albert/Documents/dev/zustand-plate-jest/node_modules/nanoid/index.browser.js:1
    ({"Object.<anonymous>":function(module,exports,require,__dirname,__filename,jest){import { urlAlphabet } from './url-alphabet/index.js'
                                                                                      ^^^^^^

    SyntaxError: Cannot use import statement outside a module

      10 | // const Home = () => <Button>Hi</Button>
      11 |
    > 12 | export default Home;
         |                ^
      13 |

      at Runtime.createScriptFromCode (node_modules/jest-runtime/build/index.js:1495:14)
      at Object.<anonymous> (src/pages/index.tsx:12:16)
      at Object.<anonymous> (src/pages/index.spec.tsx:7:48)

Test Suites: 1 failed, 1 skipped, 1 of 2 total
Tests:       1 skipped, 1 total
Snapshots:   0 total
Time:        0.79 s, estimated 2 s
Ran all test suites.
error Command failed with exit code 1.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.

```

What I notice:
1. The error comes from using ESM syntax. `import { urlAlphabet } from './url-alphabet/index.js'` which is imported by Plate.

