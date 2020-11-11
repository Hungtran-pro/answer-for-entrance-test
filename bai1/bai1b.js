let string1 = prompt('Enter string 1');
let string2 = prompt('Enter string 2');
let len1 = string1.length;
let len2 = string2.length;
let mergedString = "";

for(let i = 0; i < len1 && i < len2; i++){
    mergedString += string1[i] + string2[i];
}

let i = len1;
let j = len2;

while(i < len2){
    mergedString += string2[i];
    i++;
}

while(j < len1){
    mergedString += string1[j];
    j++;
}

alert(mergedString);