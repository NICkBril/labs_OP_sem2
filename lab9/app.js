const { TextFormatter, ConsoleOutput } = require('./logger-base');
const { LoggerService } = require('./logger-service');
const { createLogDecorator } = require('./log-decorator');

const logger = new LoggerService(new TextFormatter(), new ConsoleOutput(), 'DEBUG');
const log = createLogDecorator(logger);

const sum = log({ level: "INFO" })(function sum(a, b) {
    return a + b;
});

const getRemoteData = log({ level: "DEBUG" })(async function getRemoteData() {
    return new Promise(res => setTimeout(() => res({ status: 200 }), 100));
});

const doDangerousTask = log({ level: "ERROR" })(function doDangerousTask(shouldFail) {
    if (shouldFail) {
        throw new Error("Task failed successfully");
    }
    return "Success";
});

async function run() {
    console.log("--- LAB 9 ---\n");
    sum(10, 20);
    await getRemoteData();
    doDangerousTask(false);
    try {
        doDangerousTask(true);
    } catch (e) {}
}

run();