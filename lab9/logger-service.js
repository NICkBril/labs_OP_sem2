const Levels = {
    DEBUG: 1,
    INFO: 2,
    ERROR: 3
};

class LoggerService {
    constructor(formatter, output, minLevel = 'DEBUG') {
        this.formatter = formatter;
        this.output = output;
        this.threshold = Levels[minLevel] || 1;
    }

    log(level, message, context = {}) {
        // logic ....
    }
}

module.exports = { LoggerService };