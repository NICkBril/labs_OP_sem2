const { generate, consumeWithTimeout } = require("../lib");

const gen = generate(5);
consumeWithTimeout(gen, 3);