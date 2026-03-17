function memoize(fn, options = {}) {
    const maxSize = options.maxSize || Infinity;
    const policy = options.policy || "LRU";

    const cache = new Map();
    const counts = new Map();

    return function (...args) {
        const key = JSON.stringify(args);

        if (cache.has(key)) {
            const value = cache.get(key);

            if (policy === "LRU") {
                cache.delete(key);
                cache.set(key, value);
            }

            if (policy === "LFU") {
                let c = counts.get(key) || 0;
                counts.set(key, c + 1);
            }

            return value;
        }

        const result = fn(...args);

        if (cache.size >= maxSize) {
            if (policy === "LRU") {
                const first = cache.keys().next().value;
                cache.delete(first);
                counts.delete(first);
            } else if (policy === "LFU") {
                let min = Infinity;
                let badKey = null;

                for (let [k, v] of counts) {
                    if (v < min) {
                        min = v;
                        badKey = k;
                    }
                }

                if (badKey !== null) {
                    cache.delete(badKey);
                    counts.delete(badKey);
                }
            }
        }

        cache.set(key, result);

        if (policy === "LFU") {
            counts.set(key, 1);
        }

        return result;
    };
}

module.exports = memoize;