var a = [1, 2, 3];
var b = ['foo', 'bar'];
var c = [1, 'bird'];
//c.push(true); //type true cant be assigned to type string or number -- push method: append new element to the array and return new length
var d = [];
d.push(3);
d.push('abc');
var e = [];
e.push(1);
//e.push('b'); //'b' is string, this array is type number
var f = [5];
f.push(7);
//f.push('newString'); //'newSring' is string, this array is type number
console.log(a[2]);
console.log(b[0]);
console.log(c[1]);
var g = [
    [10, 21, 32],
    [43, 54, 65],
    [76, 87, 98],
    [12, 23, 34],
];
console.log(g[2][1]);
