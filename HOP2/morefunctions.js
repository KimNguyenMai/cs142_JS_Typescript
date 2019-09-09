//optional parameters
function doSomething(action, object) {
    console.log(action, (object || 'nothing') + '.');
    //if no input given for para object, then will print default "nothing"
}
doSomething('Read');
doSomething('Read', 'a book');
//default parameters
function printSomething(noun, times) {
    if (times === void 0) { times = 5; }
    for (var i = 0; i < times; i++) {
        console.log(noun);
    }
}
printSomething('car');
printSomething('Carpet', 3);
