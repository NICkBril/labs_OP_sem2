function createLogDecorator(logger) {
    return function log(options = {}) {
        const level = options.level || "INFO";

        return function (fn) {
            return function (...args) {
                const res = fn.apply(this, args);
                logger.log(level, `Method '${fn.name}' executed`, { args, result: res });
                return res;
            };
        };
    };
}

module.exports = { createLogDecorator };