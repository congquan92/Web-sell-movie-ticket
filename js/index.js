//Huy
const logregBox = document.querySelector(".logreg-box");
const loginLink = document.querySelector(".login-link");
const registerLink = document.querySelector(".register-link");
const home = document.querySelector("#home"); //nut Home tren nav
registerLink.addEventListener("click", () => {
  logregBox.classList.add("active");
});
loginLink.addEventListener("click", () => {
  logregBox.classList.remove("active");
});
const login = document.querySelector(".login-btn");
const formlogin = document.querySelector(".box-login");
const midcontent = document.querySelector(".mid-content");
login.addEventListener("click", () => {
  midcontent.style.display = "none";
  formlogin.classList.add("active");
});
const close_nav = document.querySelector(".close-nav");
const menu = document.querySelector(".menu");
const header_responsive = document.querySelector(".header1");
menu.addEventListener("click", () => {
  header_responsive.classList.add("active");
});
close_nav.addEventListener("click", () => {
  header_responsive.classList.remove("active");
});

home.addEventListener("click", () => {
  location.reload();
});
