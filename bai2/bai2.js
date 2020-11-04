let count = 0;
document.getElementById("btn-number").addEventListener("click", function () {
  let inputNumber = document.getElementById("input-number").value;
  let randomAns = Math.floor(Math.random() * 10) + 1;
  count++;
  if (inputNumber == randomAns) {
    alert("Bạn đã trúng thưởng");
  }
  else{
    alert("Nhập lại")
  }
  if (count === 3) {
    document.getElementById("btn-number").disabled = true;
    alert("Bạn đã hết lượt chơi");
  }
  console.log(`${randomAns}`);
});
