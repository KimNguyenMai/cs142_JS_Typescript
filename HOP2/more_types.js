//Type Alias
var employeeId = 2413;
var studentId = 13722;
console.log(typeof employeeId);
console.log(typeof studentId);
//generic type parameter(polymorphic type parameter)
var arr = [
    'E line',
    14,
    true
];
function filter(input) {
    console.log(typeof input);
}
arr.forEach(function (item) { return filter(item); });
var a = 1;
function testType(input) {
    var var1;
    var var2; //var2 specified/logged to type T
    var1 = input;
    var2 = input;
    var1 = 'test'; //can run because var1 use type any 
    var2 = 'test'; //will not run as 'test' was not assiged to type T in line 26, var2 must but type input
    console.log(var1);
    console.log(var2);
}
testType(a);
