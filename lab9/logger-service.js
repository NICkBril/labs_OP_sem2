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
        const currentLevel = Levels[level] || 2;

        if (currentLevel >= this.threshold) {
            const formatted = this.formatter.format(level, message, context);
            this.output.write(formatted);
        }
    }
}

module.exports = { LoggerService };