![Logo](https://mir-s3-cdn-cf.behance.net/project_modules/fs/6bcfa521547415.56304fdd8a6c6.jpg)

# Prometheus
> _A starter boilerplate for creating NPM modules. Includes a few goodies to get you going like ES6 ready, ES5 compatibility and compilation, NPM Commands, and more!_

[![Build Status](https://travis-ci.org/DaneTheory/Prometheus.svg?branch=master)](https://travis-ci.org/DaneTheory/Prometheus)

Want to create your own NPM module but have no idea where to start? Hate how tedious it is recreating common project files? Would you rather watch paint dry than setting up yet ANOTHER ES6 compatible development environment? My friend, you've come to the right place. This repo takes care of all the initial fluff with none of the initial fuss.

---

## Features
> Check out the [__Feature Details__](https://github.com/DaneTheory/Prometheus#feature-details) section of this README for additional information regarding individual feature default configurations and, if needed, how to go about reconfiguring individual features for your project needs. To see a complete list of the available NPM commands provided by default in this project and what they do, check out the [__NPM Commands__](https://github.com/DaneTheory/Prometheus#npm-commands) section of this README.

* [ES6](https://github.com/DaneTheory/Prometheus#feature-details)
* Backwards compatibility for older versions of NodeJS
* ES6 => ES5 production build ready
* [Testing](https://github.com/DaneTheory/Prometheus#feature-details)
* [Linting](https://github.com/DaneTheory/Prometheus#feature-details)
* All the basic, but necessary, NPM commands for writing code from development to production ready! Plus, hooks for publishing to NPM!
* A folder for working examples of your module other Devs can use as reference.
* Tutorials for configuring/reconfiguring everything here along the way included inside! Plus, nice NPM commands for removing all excess tutorial code when you're ready to get rollin' like a pro.
* [Code Coverage](https://github.com/DaneTheory/Prometheus#feature-details)
* [Continuos Integration](https://github.com/DaneTheory/Prometheus#feature-details)

---

## Installation
> To get started with your new project, run the following commands:

```
git clone https://github.com/DaneTheory/Prometheus.git <YOUR_PROJECT_NAME>
cd <path/to/YOUR_PROJECT_NAME>
rm -rf .git
npm i
```

And that's it! Edit the `package.json` file with your own project information.

---

## Feature Details

###### __ES6__
> ES6 support provided via [Babel](https://babeljs.io) using `babel-preset-env`. To edit or add to preset configurations, edit the `.babelrc` file found in the root folder of this project.

###### __TESTING__
> [Mocha](https://mochajs.org) is included by default for writing and running tests. However, this repo is compatible with any testing framework you prefer! Just swap out [Mocha](https://mochajs.org) as a project dependency with your favorite testing framework. Then, make any pre-configuration edits your testing framework may need. As a bonus, all tests can be written in ES6!

###### __LINTING__
> [ESLint](eslint.org) is included by default for code linting. To edit or add to preset configurations, edit the `.eslintrc` file. The `.eslintignore` file can be used to define files/folders where you wish linting rules to be ignores. Both the `.eslintrc` and `.eslintignore` files can be found in the root folder of this project. Preconfiguration for linting provided via [AirBnB](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb).

###### __CODE COVERAGE__
> Code Coverage provided via [Istanbul](https://github.com/gotwarlost/istanbul). As a plus, ES6 code support is included in coverage!

###### __CONTINUOS INTEGRATION__
> Continuos Integration, a.k.a CI, provided via [TravisCI](travis-ci.org).

---

## NPM Commands

```
npm run clean
```
> Removes the `./lib/` directory.

```
npm run test
```
> Runs tests.

```
npm run test:watch
```
> Runs your tests, and then has them re-run on any file changes.

```
npm run cover
```
> Runs code coverage.

```
npm run lint
```
> Runs linting against codebase.

```
npm run test:examples
```
> Runs tests against examples provided in `./examples/` directory.

```
npm run build
```
> Compiles all development code in `./src` to ES5. Then, the compiled code is output to the newly created `lib` directory found at the root of this project.

```
npm run prepublish
```
> Hooks for module publication to NPM. Runs all checks (tests/linting) first and then, if successful, publishes to NPM.

---

## Developing
> To start development on your project, run the following command:

```
npm run dev
```

Your project is now running in development mode! Get to makin' some sexy code.

---

## Testing
> To run tests, run the following command:

```
`npm run test`
```

Your project tests status will output to the console.
__Pro-Tip__: Run the following command to run tests that re-run on each file change!

```
npm run test:watch
```

---

## Production Build
> To create a production ready version of your project, run the following command:

```
npm run build
```

A production ready version of your project is now ready! You can find it in the `lib` folder located at the root of your project directory.

---

## Deployment / Publication
> To publish your project to NPM, run the following command:
```
npm run prepublish
```

That's it! Your beautiful new project is now available as a brand new sweet NPM module! Grab a beer, you deserve it!

---

# TODO
- [X] Change logo to something better
- [ ] Fix Travis CI to connect to repo and reflect status in README correctly
- [ ] Add other status descriptors like Travis CI to README
- [ ] Update docs with better info and tutorials
- [ ] Swap out `npm` in favor of `yarn`
- [ ] Add `env` variable configuration for each build mode
- [ ] Add NPM commands to run development version of project
- [ ] Add NPM commands to strip out demo code/comments
- [ ] Better folder hierarchy
- [ ] Alternative to `babel-preset-env`?
- [ ] Better way to consolidate NPM commands?
- [ ] NPM command to start new project that includes console prompts to handle manual file edits for project info automatically.
- [X] Add better markdown for README. (i.e. checkboxes for README)
- [ ] Add better README boilerplate. Best practices and such.
- [ ] Add better `package.json` boilerplate. Best practices and such.
- [ ] Add better `.babelrc`, `.editorconfig`, `.eslintignore`, `.eslintrc`, `.gitignore`, `.travis.yml`, `CONTRIBUTING.md`, etc. following best practices and such.
- [ ] Improve NPM command `prepublish` to hook into NPM
- [ ] Add git hook for github integration
- Add NPM command for running in development mode


---

## Contributing

I created this project to end the constant _boilerplate syndrome_ that comes with starting new projects and plan on keeping it constantly active.

This project is completely open to new contributers. Got a way to improve this project? Check out `CONTRIBUTING.md` for details to add your own idea!

---

## Issues / Bugs

To report any issues or bugs, please visit:
Issue tracker: https://github.com/DaneTheory/Prometheus/issues

---

## Licensing

The code in this project is licensed under MIT license.
