class TextFormatter {
    format(level, message, context = {}) {
        const timestamp = new Date().toISOString();
        const ctx = Object.keys(context).length ? ` | Data: ${JSON.stringify(context)}` : '';
        return `[${timestamp}] [${level}] ${message}${ctx}`;
    }
}

class ConsoleOutput {
    write(msg) {
        console.log(msg);
    }
}

module.exports = { TextFormatter, ConsoleOutput };