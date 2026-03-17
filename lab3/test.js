const memoize = require("./memoize");

function slowAdd(a, b) {
    console.log("calculating...");
    return a + b;
}

const memoAdd = memoize(slowAdd, {
    maxSize: 2,
    policy: "LRU",
    ttl: 5000
});

console.log(memoAdd(1, 2));
console.log(memoAdd(1, 2));

setTimeout(() => {
    console.log(memoAdd(1, 2));
}, 2000);

setTimeout(() => {
    console.log(memoAdd(1, 2));
}, 6000);