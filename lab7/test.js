const { TemperatureSensor } = require('./event-emitter');

const sensor = new TemperatureSensor();

const display = (temp) => {
  console.log(`[Display]: Temperature is ${temp}°C`);
};

const logger = (temp) => {
  console.log(`[Logger]: Logged value ${temp}`);
};

sensor.subscribe('tempChange', display);
sensor.subscribe('tempChange', logger);

console.log('--- First update ---');
sensor.updateTemperature(25);

console.log('\n--- Second update ---');
sensor.updateTemperature(30);