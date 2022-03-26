// Bài 1
const tongNhoNhat = (n) => {
  let sum = 0;
  let i = 0;
  for (i = 0; sum <= n; i++) {
    sum += i;
  }
  return i - 1;
};
document.querySelector(".btn1").addEventListener("click", () => {
  let n = parseInt(document.querySelector("#number").value);
  let thongBao = document.querySelector(".footer1");
  thongBao.innerHTML = "Số nguyên dương nhỏ nhất: " + tongNhoNhat(n);
});
// Bài 2
const tinhTongSoLuyThua = (x, n) => {
  let nhan = 1;
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    nhan = nhan * x;
    sum = sum + nhan;
  }
  return sum;
};
document.querySelector(".btn2").addEventListener("click", () => {
  var so1 = document.getElementById("so1").value * 1;
  var so2 = document.getElementById("so2").value * 1;
  var thongBao = document.querySelector(".footer2");
  thongBao.innerHTML = tinhTongSoLuyThua(so1, so2);
});
// Bài 3
const tinhGiaiThua = (n) => {
  let gt = 1;
  for (let i = 1; i <= n; i++) {
    gt *= i;
  }
  return gt;
};
document.querySelector(".btn3").addEventListener("click", () => {
  var so3 = document.getElementById("so3").value * 1;
  var thongBao = document.querySelector(".footer3");
  thongBao.innerHTML = `Giai thừa của ${so3}: ${tinhGiaiThua(so3)}`;
});
// Bài 4
document.querySelector(".btn4").addEventListener("click", () => {
  var thongBao = document.querySelector(".footer4");
  for (let i = 1; i <= 10; i++) {
    var div = document.createElement("div");
    var p = document.createElement("p");
    if (i % 2 == 0) {
      div.style.backgroundColor = "red";
      div.style.height = "50px";
      p.style.color = "white";
      p.innerHTML = `Thẻ div thứ ${i}`;
    } else {
      div.style.backgroundColor = "blue";
      div.style.height = "50px";
      p.style.color = "white";
      p.innerHTML = `Thẻ div thứ ${i}`;
    }
    div.appendChild(p);
    thongBao.appendChild(div);
  }
});
