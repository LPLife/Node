var events = require('events');
var emitter =new  events.EventEmitter();
var listener1 = function (arg1,arg2) {
    console.log('listener1',arg1,arg2);
}
emitter.on('someEvent',listener1);
var listener3 = function () {
    console.log('我们已经监听过一次啦');
}
emitter.once('someEvent',listener3);
emitter.on('someEvent',listener1);
emitter.addListener('someEvent',function (arg1,arg2) {
    console.log('listener3',arg1,arg2);
    
});
var callback = function(){

console.log('监听上了!!');

};
emitter.on('someEvent',callback);
emitter.removeListener('someEvent',callback);

emitter.on('someEvent',function (arg1,arg2) {
    console.log('listener2',arg1,arg2);
    
});

emitter.emit('someEvent','arg1参数','arg2参数');
console.log(emitter.listeners('someEvent'));
console.log(emitter.listenerCount('someEvent'));