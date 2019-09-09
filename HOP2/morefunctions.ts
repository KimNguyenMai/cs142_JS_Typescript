//optional parameters
function doSomething(action: string, object?: string)
//'?' declare optional parameter
{
    console.log(action, (object || 'nothing')+ '.');
    //if no input given for para object, then will print default "nothing"
}

doSomething('Read');
doSomething('Read', 'a book');

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



