//optional parameters
function doSomething(action: string, object?: string)
{
    console.log(action, (object || 'nothing')+ '.');
}

doSomething('Read');
doSomething('Read', 'a book');

/*question1: what is '?' after object?

question2: after || is optional? if no input given, then will print default "nothing"?
*/

//default parameters
function printSomething(noun:string, times:number = 5)
{
    for (let i =0; i<times; i++)
    {
        console.log(noun);
    }
}

printSomething('car');
printSomething ('Carpet', 3);



