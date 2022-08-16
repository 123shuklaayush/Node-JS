const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('WaterFull', () => {
  console.log('Please turn off the Motor');
  setTimeout(() => {
    console.log("A kind reminder....")
  }, 3000);
});
myEmitter.emit('WaterFull');
// You need to remove the "type" : "module" so only it will work