const midi = require('easymidi');

// var Input

var inputList = midi.getInputs();
console.log(inputList);


var midiInput1 = new midi.Input(inputList[0]);


midiInput1.on('noteoff', msg => console.log('1 - noteoff', msg.note, msg.velocity, msg.channel));
midiInput1.on('noteon', msg => console.log('1 - noteon', msg.note, msg.velocity, msg.channel));
midiInput1.on('poly aftertouch', msg => console.log('1 - poly aftertouch', msg.note, msg.pressure, msg.channel));
midiInput1.on('cc', msg => console.log('1 - cc', msg.controller, msg.value, msg.channel));
midiInput1.on('program', msg => console.log('1 - program', msg.number, msg.channel));
midiInput1.on('channel aftertouch', msg => console.log('1 - channel aftertouch', msg.pressure, msg.channel));
midiInput1.on('pitch', msg => console.log('1 - pitch', msg.value, msg.channel));
midiInput1.on('position', msg => console.log('1 - position', msg.value));
midiInput1.on('select', msg => console.log('1 - select', msg.song));
midiInput1.on('clock', () => console.log('1 - clock'));
midiInput1.on('start', () => console.log('1 - start'))
midiInput1.on('continue', () => console.log('1 - continue'));
midiInput1.on('stop', () => console.log('1 - stop'));
midiInput1.on('reset', () => console.log('1 - reset'));


var midiInput2 = new midi.Input(inputList[1]);


midiInput2.on('noteoff', msg => console.log('2 - noteoff', msg.note, msg.velocity, msg.channel));
midiInput2.on('noteon', msg => console.log('2 - noteon', msg.note, msg.velocity, msg.channel));
midiInput2.on('poly aftertouch', msg => console.log('2 - poly aftertouch', msg.note, msg.pressure, msg.channel));
midiInput2.on('cc', msg => console.log('2 - cc', msg.controller, msg.value, msg.channel));
midiInput2.on('program', msg => console.log('2 - program', msg.number, msg.channel));
midiInput2.on('channel aftertouch', msg => console.log('2 - channel aftertouch', msg.pressure, msg.channel));
midiInput2.on('pitch', msg => console.log('2 - pitch', msg.value, msg.channel));
midiInput2.on('position', msg => console.log('2 - position', msg.value));
midiInput2.on('select', msg => console.log('2 - select', msg.song));
midiInput2.on('clock', () => console.log('2 - clock'));
midiInput2.on('start', () => console.log('2 - start'))
midiInput2.on('continue', () => console.log('2 - continue'));
midiInput2.on('stop', () => console.log('2 - stop'));
midiInput2.on('reset', () => console.log('2 - reset'));