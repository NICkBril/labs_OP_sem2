const fs = require('fs');

class TextFormatter {
    format(level, message, context = {}) {
        const timestamp = new Date().toISOString();
        const ctx = Object.keys(context).length ? ` | Data: ${JSON.stringify(context)}` : '';
        return `[${timestamp}] [${level}] ${message}${ctx}`;
    }
}

class JsonFormatter {
    format(level, message, context = {}) {
        return JSON.stringify({
            time: new Date().toISOString(),
            level,
            message,
            ...context
        });
    }
}

class ConsoleOutput {
    write(msg) {
        console.log(msg);
    }
}

class FileOutput {
    constructor(path) {
        this.path = path;
    }

    write(msg) {
        fs.appendFileSync(this.path, msg + '\n');
    }
}

module.exports = { TextFormatter, JsonFormatter, ConsoleOutput, FileOutput };