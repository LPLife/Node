var events = require('events');
var emitter =new  events.EventEmitter();
emitter.setMaxListeners(20);

emitter.on('someEvent',function (arg1,arg2) {
    console.log('listener2',arg1,arg2);
    
});
emitter.on('someEvent',function (arg1,arg2) {
    console.log('listener2',arg1,arg2);
    
});
emitter.on('someEvent',function (arg1,arg2) {
    console.log('listener2',arg1,arg2);
    
});
emitter.emit('someEvent','arg1参数','arg2参数');

console.log(emitter.listeners('someEvent'));
console.log(emitter.listenerCount('someEvent'));