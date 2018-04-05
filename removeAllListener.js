var events = require('events');
var emitter =new  events.EventEmitter();

var callback = function(){

console.log('监听上了!!');

};
emitter.on('someEvent',callback);

emitter.on('someEvent',function (arg1,arg2) {
    console.log('listener2',arg1,arg2);
    
});
emitter.on('someEvent2',function (arg1,arg2) {
    console.log('listener2',arg1,arg2);
    
});
emitter.removeAllListeners('someEvent');
emitter.emit('someEvent','arg1参数','arg2参数');
emitter.emit('someEvent2','arg1参数','arg2参数');
console.log(emitter.listeners('someEvent'));
console.log(emitter.listenerCount('someEvent'));