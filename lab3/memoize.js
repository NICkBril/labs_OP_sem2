function memoize(fn, options = {}) {
    const maxSize = options.maxSize || Infinity;
    const policy = options.policy || "LRU";

    const cache = new Map();

    return function (...args) {
        const key = JSON.stringify(args);

        if (cache.has(key)) {
            return cache.get(key);
        }

        const result = fn(...args);

        if (cache.size >= maxSize) {
            const first = cache.keys().next().value;
            cache.delete(first);
        }

        cache.set(key, result);

        return result;
    };
}

module.exports = memoize;