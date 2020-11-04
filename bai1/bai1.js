//Bai A.1
// let n = prompt('Enter N number') - '0';
// let inputNumber = prompt('Enter inputNumber') - '0';

// findOppositeNumber(n, inputNumber);

// function findOppositeNumber(n, inputNumber){
//     if(inputNumber > (n / 2)){
//         alert(inputNumber - n / 2);
//     }
//     else{
//         alert(inputNumber + n / 2);
//     }
// }

//Bai A.2

let s1 ="", s2 ="", stringTest = `merge2String("`;
let inputString, ansString = "";
while(true){
    inputString = prompt('Enter ` merge2String("stringa", "stringb") `');
    let check = true;
    for(let i = 0; i < 14; i++){
        if(inputString[i] !== stringTest[i]){
            check = false;
            break;
        }
    }
    if(check){
        break;
    }
}

let pos = 14;
while(inputString[pos] != `"`){
    s1 += inputString[pos];
    pos++;
}
pos += 4;
while(inputString[pos] != `"`){
    s2 += inputString[pos];
    pos++;
}

for(let i = 0; i < s1.length && i < s2.length; i++){
    ansString = ansString + s1[i] + s2[i];
}

if(s1.length < s2.length){
    for(let i = s1.length; i < s2.length; i++){
        ansString = ansString + s2[i];
    }
}

if(s2.length < s1.length){
    for(let i = s2.length; i < s1.length; i++){
        ansString = ansString + s1[i];
    }
}
console.log(ansString);