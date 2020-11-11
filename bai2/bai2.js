let count = 0;
document.getElementById("btn-number").addEventListener("click", function () {
  let inputNumber = document.getElementById("input-number").value;
  let randomAns = Math.floor(Math.random() * 10) + 1;
  if (inputNumber == randomAns) {
    alert("Bạn đã trúng thưởng");
    count++;
  } 
  else if(inputNumber < 0 || inputNumber > 10 || inputNumber ==""){
    alert("Nhập lại số n(0 < n <= 10)");
  }
  else{
    alert(` ${inputNumber} không phải là số may mắn, vui lòng nhập lại!`);
    count++;
  }
  if (count === 3) {
    document.getElementById("btn-number").disabled = true;
    alert("Bạn đã hết lượt chơi");
  }
  console.log(`${randomAns}`);
});
