//Bai A.1
let n = Number(prompt('Enter N number'));
let inputNumber = Number(prompt('Enter inputNumber'));
while(inputNumber > n || n < 0 || inputNumber < 0 || isNaN(n) || isNaN(inputNumber) || n == "" || inputNumber == ""){
    n = prompt('Enter N number, again') - '0';
    inputNumber = prompt('Enter inputNumber, again') - '0';
}
findOppositeNumber(n, inputNumber);

function findOppositeNumber(n, inputNumber){
    if(inputNumber > (n / 2)){
        alert(inputNumber - n / 2);
    }
    else{
        alert(inputNumber + n / 2);
    }
}