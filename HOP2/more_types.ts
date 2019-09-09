//Type Alias

type Id = number;
let employeeId: Id = 2413;
let studentId: Id = 13722;

console.log (typeof employeeId);
console.log (typeof studentId);

//generic type parameter(polymorphic type parameter)
let arr = [
    'E line',
    14,
    true
];

function filter <T> (input: T) // type T: specify and log type of parameter
{
    console.log (typeof input);
}

arr.forEach(item => filter(item)); 

let a = 1;

function testType <T> (input: T) //T is specified as type input
{
    let var1: any;
    let var2: T; //var2 specified/logged to type T
    var1 = input;
    var2 = input;
    var1 = 'test'; //can run because var1 use type any 
    var2 = 'test'; //will not run as 'test' was not assiged to type T in line 26, var2 must but type input
    console.log (var1);
    console.log(var2);
}
testType (a);