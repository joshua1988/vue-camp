function* logNames() {
	yield;
	console.log('apple');
	yield;
	console.log('samsung');
	yield;
	console.log('google');
}
undefined
logNames();
logNames {<suspended>}
var iterator = logNames();
undefined
iterator.next();
{value: undefined, done: false}
iterator.next();
VM711:3 apple
{value: undefined, done: false}
iterator.next();
VM711:5 samsung
{value: undefined, done: false}
iterator.next();
VM711:7 google
{value: undefined, done: true}