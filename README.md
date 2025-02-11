# eslint-plugin-custom

A custom ESLint plugin with project-specific rules.

## Installation

First, ensure you have ESLint installed: [ESLint](https://eslint.org/):

```sh
npm i eslint --save-dev
```

### &#9888; This Plugin is Not Published on NPM

Since this package is not published on NPM, you must install it directly from GitHub or use a local installation.

#### Option 1: Install via GitHub

Install it using:

```sh
npm install nenaki/eslint-plugin-custom
```

Or using SSH:

```sh
npm install git+ssh://git@github.com/nenaki/eslint-plugin-custom.git
```

#### Option 2: Clone and Install Locally

```sh
git clone https://github.com/nenaki/eslint-plugin-custom.git
cd eslint-plugin-custom
npm install
```

## Usage

In your [configuration file](https://eslint.org/docs/latest/use/configure/configuration-files#configuration-file), import the plugin `eslint-plugin-custom` and add `custom` to the `plugins` key:

```js
import custom from "eslint-plugin-custom";

export default [
  {
    plugins: {
      custom,
    },
  },
];
```

Then configure the rules you want to use under the `rules` key.

```js
import custom from "eslint-plugin-custom";

export default [
  {
    plugins: {
      custom,
    },
    rules: {
      "custom/rule-name": "warn",
    },
  },
];
```

## Rules

| Name                                                     | Description                                                               |
| :------------------------------------------------------- | :------------------------------------------------------------------------ |
| [use-inject-function](docs/rules/use-inject-function.md) | Use inject() instead of constructor-based dependency injection in Angular |
