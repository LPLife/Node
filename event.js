var EventEmitter = require('events').EventEmitter; 
var event = new EventEmitter(); 
event.on('some_event', function() { 
    console.log('some_event 事件触发'); 
}); 
setTimeout(function() { 
  console.log('hello,我被触发啦'); 
    event.emit('some_event'); 
}, 1000); 