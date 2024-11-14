const QLTK = document.querySelector(".b1");
const QLDH = document.querySelector(".b2");
const QLSP = document.querySelector(".b3");
const QLND = document.querySelector(".b4");
// console.log(QLTK, QLDH, QLSP, QLND);

QLTK.addEventListener("click", () => {
  QLTK.classList.add("act");
  QLDH.classList.remove("act");
  QLSP.classList.remove("act");
  QLND.classList.remove("act");
  leftpage.classList.remove("active");
  backgroudpage.style.display = "none";
});
QLDH.addEventListener("click", () => {
  QLTK.classList.remove("act");
  QLDH.classList.add("act");
  QLSP.classList.remove("act");
  QLND.classList.remove("act");
  leftpage.classList.remove("active");
  backgroudpage.style.display = "none";
});

//sp
QLSP.addEventListener("click", () => {
  QLTK.classList.remove("act");
  QLDH.classList.remove("act");
  QLSP.classList.add("act");
  QLND.classList.remove("act");
  leftpage.classList.remove("active");
  backgroudpage.style.display = "none";
});
QLND.addEventListener("click", () => {
  QLTK.classList.remove("act");
  QLDH.classList.remove("act");
  QLSP.classList.remove("act");
  QLND.classList.add("act");
  leftpage.classList.remove("active");
  backgroudpage.style.display = "none";
});
//huy
const leftpage = document.querySelector(".page-left");
const backgroudpage = document.querySelector(".backgroud-menu-respon");
const menu = document.querySelector(".menu1");
menu.addEventListener("click", () => {
  leftpage.classList.add("active");
  backgroudpage.style.display = "block";
});
backgroudpage.addEventListener("click", () => {
  leftpage.classList.remove("active");
  backgroudpage.style.display = "none";
});
