#! /usr/bin/env node

import inquirer from 'inquirer';

const myCalc = await inquirer.prompt([{

    message : 'Plz Enter FirstNumber',
    type : 'number',
    name :  'FirstNumber'
},
{

    message : 'Plz Enter SecondNumber',
    type : 'number',
    name :  'SecondNumber'
},
{

    message : 'Plz Select an operator',
    type : 'list',
    name : 'operator',
    choices : ['Addition', 'Substraction', 'Division', 'Multiplication']
    


}])

if (myCalc.operator === 'Addition'){

    console.log(myCalc.FirstNumber + myCalc.SecondNumber);
    

}else if (myCalc.operator === 'Substraction'){

    console.log(myCalc.FirstNumber - myCalc.SecondNumber);
    

}else if (myCalc.operator === 'Division'){

    console.log(myCalc.FirstNumber / myCalc.SecondNumber);
    

}else if (myCalc.operator === 'Multiplication'){

    console.log(myCalc.FirstNumber * myCalc.SecondNumber);
    

}else {

    console.log('Plz enter a valid number');
    
}