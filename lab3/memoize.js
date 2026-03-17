function memoize(fn, options = {}) {
    const maxSize = options.maxSize || Infinity;
    const policy = options.policy || 'LRU';
    const ttl = options.ttl || null;

    const cache = new Map();
    const counts = new Map();

    return function (...args) {
        const key = JSON.stringify(args);

        if (cache.has(key)) {
            const entry = cache.get(key);

            if (ttl != null && Date.now() - entry.createdAt > ttl) {
                cache.delete(key);
                counts.delete(key);
            } else {
                if (policy === 'LRU') {
                    cache.delete(key);
                    cache.set(key, entry);
                }
                if (policy === 'LFU') {
                    let c = counts.get(key) || 0;
                    counts.set(key, c + 1);
                }
                return entry.value;
            }
        }

        const result = fn(...args);

        if (cache.size >= maxSize) {
            if (policy === 'LRU') {
                const oldest = cache.keys().next().value;
                cache.delete(oldest);
                counts.delete(oldest);
            } else if (policy === 'LFU') {
                let min = 999999;
                let badKey = null;
                for (let [k, v] of counts) {
                    if (v < min) {
                        min = v;
                        badKey = k;
                    }
                }
                if (badKey) {
                    cache.delete(badKey);
                    counts.delete(badKey);
                }
            }
        }

        cache.set(key, { value: result, createdAt: Date.now() });
        if (policy === 'LFU') {
            counts.set(key, 1);
        }

        return result;
    };
}

module.exports = memoize;