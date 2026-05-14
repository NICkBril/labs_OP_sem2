const { performance } = require('perf_hooks');

function createLogDecorator(logger) {
    return function log(options = {}) {
        const level = options.level || "INFO";

        return function (fn) {
            return function (...args) {
                const start = performance.now();

                const onSuccess = (result) => {
                    const time = (performance.now() - start).toFixed(3);
                    if (level !== "ERROR") {
                        logger.log(level, `Method '${fn.name}' completed`, {
                            duration: `${time}ms`,
                            args,
                            result
                        });
                    }
                };

                const onError = (err) => {
                    logger.log("ERROR", `Method '${fn.name}' failed`, {
                        args,
                        error: err.message || err
                    });
                };

                try {
                    const res = fn.apply(this, args);

                    if (res instanceof Promise) {
                        return res
                            .then(val => {
                                onSuccess(val);
                                return val;
                            })
                            .catch(err => {
                                onError(err);
                                throw err;
                            });
                    }

                    onSuccess(res);
                    return res;
                } catch (err) {
                    onError(err);
                    throw err;
                }
            };
        };
    };
}

module.exports = { createLogDecorator };