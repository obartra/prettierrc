# Prettier RC

[Prettier](https://github.com/prettier/prettier) is an awesome tool and it's focused on doing what it does best, making your code pretty :sparkles:.

That means there's no much effort going into adding support for configuration options, so this project adds them.

# :clipboard: Install

```bash
yarn add --dev prettier prettierrc
```

# :wrench: Config

Add your `.prettierrc` config file. It should look something like:


```javascript
{
    "useTabs": false,      // Indent lines with tabs instead of spaces.
    "printWidth": 80,      // Specify the length of line that the printer will wrap on.
    "tabWidth": 2,         // Specify the number of spaces per indentation-level.
    "singleQuote": false,  // Use single quotes instead of double quotes.
    /**
     * Print trailing commas wherever possible.
     * Valid options:
     *   - "none" - no trailing commas
     *   - "es5" - trailing commas where valid in ES5 (objects, arrays, etc)
     *   - "all" - trailing commas wherever possible (function arguments)
     */
    "trailingComma": "none",
    /**
     * Do not print spaces between brackets.
     * If true, puts the > of a multi-line jsx element at the end of the last line instead of being
     * alone on the next line
     */
    "jsxBracketSameLine": false,
    /**
     * Specify which parse to use.
     * Valid options:
     *   - "flow"
     *   - "babylon"
     */
    "parser": "babylon",
    /**
     * Do not print semicolons, except at the beginning of lines which may need them.
     * Valid options:
     * - true - add a semicolon at the end of every line
     * - false - only add semicolons at the beginning of lines that may introduce ASI failures
     */
    "noSemi": true,
    /**
     * Add additional logging from prettierrc (not prettier itself).
     * Defaults to false
     * Valid options:
     * - true - enable additional logging
     * - false - disable additional logging
     */
    "rcVerbose": true
}
```

These are prettier defaults, any option omitted will use these values.

# :pencil2: Usage

Check the `/example` folder for usage examples. Other than the `.prettierrc` file the rest of the setup is well described on the [prettier](https://github.com/prettier/prettier) docs.
