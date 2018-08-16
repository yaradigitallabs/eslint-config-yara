# Yara Digital Labs JavaScript Style Guide

## Usage

We export two ESLint configurations for your usage, vanilla JavaScript and React.

### Yara Digital Labs JavaScript Style Guide
Our default export contains all of our ESLint rules, including ECMAScript 6+.
It requires `eslint`, `eslint-config-react`, `eslint-plugin-react`, `eslint-plugin-jest`.

1. Install package:

```
npm install --save-dev eslint-config-yara
```

Alternatively you can use:

```
yarn add eslint-config-yara --dev
```

2. For vanilla JavaScript add `"extends": "yara"` to your .eslintrc.

3. For React add `"extends": "yara/react"` to your .eslintrc.

[To check our rules on vanilla JavaScript lint](https://github.com/yaradigitallabs/eslint-config-yara/wiki/Eslint-rules).

[To check our rules on React lint](https://github.com/yaradigitallabs/eslint-config-yara/wiki/React-eslint-rules).

# Release process

To generate a new release you need to be an admin to push on `master`.

We are using a [semantic version](http://semver.org/) to generate a new release: major, minor and patch, with a `npm version`.

On **branch master** execute:

```bash
git checkout master
```

Generate a new tag:

```bash
git pull --tags origin master
```

```bash
npm version major|minor|patch -m "Message about what is new in that release"
```

After create a new verstion:

```bash
npm publish
```

## 👍 Done
