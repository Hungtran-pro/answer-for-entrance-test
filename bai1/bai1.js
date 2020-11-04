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
    inputString = prompt('Enter ` merge2String("string a", "string b") `');
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
let len1 = s1.length;
let len2 = s2.length;
for(let i = 0; i < len1 || i < len2; i++){
    ansString = ansString + s1[i] + s2[i];
}

if(len1 < len2){
    for(let i = len1; i < len2; i++){
        ansString = ansString + s2[i];
    }
}

if(len2 < len1){
    for(let i = len2; i < len1; i++){
        ansString = ansString + s1[i];
    }
}
alert(`${ansString}`);