const { TemperatureSensor } = require('./event-emitter');

const sensor = new TemperatureSensor();

const display = (temp) => {
  console.log(`[Display]: Temperature is ${temp}°C`);
};

const logger = (temp) => {
  console.log(`[Logger]: Logged value ${temp}`);
};

const alarm = (temp) => {
  if (temp > 30) {
    console.log(`[Alarm]: WARNING! High temperature: ${temp}°C`);
  }
};

const unsubscribeDisplay = sensor.subscribe('tempChange', display);
sensor.subscribe('tempChange', logger);
sensor.subscribe('tempChange', alarm);

console.log('--- First update ---');
sensor.updateTemperature(25);

console.log('\n--- Second update ---');
sensor.updateTemperature(35);

console.log('\n--- Unsubscribe display ---');
unsubscribeDisplay();

sensor.updateTemperature(22);