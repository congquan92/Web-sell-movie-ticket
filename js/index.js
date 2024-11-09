//Huy
const logregBox = document.querySelector(".logreg-box");
const logonav = document.querySelector(".logo");
const loginLink = document.querySelector(".login-link");
const registerLink = document.querySelector(".register-link");
const home = document.querySelectorAll(".home"); //nut Home tren nav
const shop = document.querySelectorAll(".shop");
const address_btn = document.querySelector(".address-btn");
const content_addressbtn = document.querySelector("#footer-paragraph");
const social_btn = document.querySelector(".social-btn");
const content_socialbtn = document.querySelector("#footer-social-ul");
const policy_btn = document.querySelector(".policy-btn");
const content_policybtn = document.querySelector("#footer-policy-ul");
registerLink.addEventListener("click", () => {
  logregBox.classList.add("active");
});
loginLink.addEventListener("click", () => {
  logregBox.classList.remove("active");
});
const login = document.querySelectorAll(".login-btn");
const formlogin = document.querySelector(".box-login");
const midcontent = document.querySelector(".mid-content");
login.forEach(function (e) {
  e.addEventListener("click", () => {
    midcontent.style.display = "none";
    formlogin.style.height = "100%";
    formlogin.classList.add("active");
    header_responsive.classList.remove("active");
    backgroud_menu_respon.style.display = "none";
  });
});
home.forEach(function (e) {
  e.addEventListener("click", () => {
    window.location.href = "index.html";
  });
});
shop.forEach(function (e) {
  e.addEventListener("click", () => {
    window.location.href = "shop.html";
  });
});
const close_nav = document.querySelector(".close-nav");
const menu = document.querySelector(".menu");
const header_responsive = document.querySelector(".header1");
const backgroud_menu_respon = document.querySelector(".backgroud-menu-respon");
menu.addEventListener("click", () => {
  header_responsive.classList.add("active");
  backgroud_menu_respon.style.display = "block";
});
close_nav.addEventListener("click", () => {
  header_responsive.classList.remove("active");
  backgroud_menu_respon.style.display = "none";
});
backgroud_menu_respon.addEventListener("click", () => {
  header_responsive.classList.remove("active");
  backgroud_menu_respon.style.display = "none";
});
home.addEventListener("click", () => {
  window.location.href = "index.html";
});

logonav.addEventListener("click", () => {
  window.location.href = "index.html";
});
shop.addEventListener("click", () => {
  window.location.href = "shop.html";
});
//  footer
let flag_address_btn = 0;
address_btn.addEventListener("click", () => {
  if (flag_address_btn == 0) {
    address_btn.classList.add("active");
    content_addressbtn.classList.add("active");
    flag_address_btn = 1;
  } else {
    address_btn.classList.remove("active");
    content_addressbtn.classList.remove("active");
    flag_address_btn = 0;
  }
});
let flag_social_btn = 0;
social_btn.addEventListener("click", () => {
  if (flag_social_btn == 0) {
    social_btn.classList.add("active");
    content_socialbtn.classList.add("active");
    flag_social_btn = 1;
  } else {
    social_btn.classList.remove("active");
    content_socialbtn.classList.remove("active");
    flag_social_btn = 0;
  }
});
let flag_policy_btn = 0;
policy_btn.addEventListener("click", () => {
  if (flag_policy_btn == 0) {
    policy_btn.classList.add("active");
    content_policybtn.classList.add("active");
    flag_policy_btn = 1;
  } else {
    policy_btn.classList.remove("active");
    content_policybtn.classList.remove("active");
    flag_policy_btn = 0;
  }
});

// Midcontent
const img_improptu = document.querySelectorAll(".imgsrc-impromptu");

img_improptu.forEach((img, index) => {
  img.addEventListener("mouseover", () => {
    img.src = `./img/products/body_${index + 1}_1.jpg`;
  });

  img.addEventListener("mouseout", () => {
    img.src = `./img/products/body_${index + 1}.jpg`;
  });
});
