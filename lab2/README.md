````md
# Lab2: Project Setup

## Author
Nick Bril

## License
MIT

## Overview
This project demonstrates how to structure a JavaScript library using code from Lab1.  
It includes:
- `generate(start)`: infinite number generator (from Lab1)
- `consumeWithTimeout(generator, durationSeconds, pauseMs)`: consume a generator with a timeout (from Lab1)

## Example Usage
```js
const { generate, consumeWithTimeout } = require("./lib");

const gen = generate(5);
consumeWithTimeout(gen, 3);
````

## Example Output

```js
5
6
7
8
...
The end
```

## Structure

```js
lab2/
├── lib/           # library files: generator.js, timeout.js, index.js
├── example/       # example usage: app.js
├── package.json    # project config with author and license
├── .gitignore
└── README.md       # this file
```