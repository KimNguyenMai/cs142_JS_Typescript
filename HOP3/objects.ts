let employee: {id: number, name: string} ={
    id:377,
    name: 'Kim'
};

//can add 'readonly'to prevent overwriting later in line 11. eg: let employee: {readonly id: number, name: string}

console.log(employee.id);
console.log(employee.name);

employee.id = 25;
employee.name = 'not Kim';

console.log(employee.id);
console.log(employee.name);