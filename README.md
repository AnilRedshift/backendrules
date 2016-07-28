# eslint-plugin-backendrules

SAVING_THE_WORLD

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-backendrules`:

```
$ npm install eslint-plugin-backendrules --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-backendrules` globally.

## Usage

Add `backendrules` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "backendrules"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "backendrules/rule-name": 2
    }
}
```

## Supported Rules

* Fill in provided rules here





