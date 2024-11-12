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
    window.location.hash = "#login";
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

logonav.addEventListener("click", () => {
  window.location.href = "index.html";
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
//vinh policy
let getPrivacyPolicy = document.querySelector("#privacy-policy");
let getFAQPolicy = document.querySelector("#FAQ-policy");
let getMembershipCardPolicy = document.querySelector("#membership-card-policy");
let getExchangeCardPolicy = document.querySelector("#exchange-card-policy");
let getShipCardPolicy = document.querySelector("#ship-card-policy");
let getPolicyContact = document.querySelector("#policy-contact");
let getPolices = document.getElementsByClassName("footer-policy-a");
let infoPolices = [
  getPrivacyPolicy,
  getFAQPolicy,
  getMembershipCardPolicy,
  getExchangeCardPolicy,
  getShipCardPolicy,
];

for (let i = 0; i < getPolices.length; i++) {
  getPolices[i].addEventListener("click", (e) => {
    e.preventDefault();
    midcontent.style.display = "none";
    infoPolices.forEach((policy) => {
      policy.style.display = "none";
    });
    infoPolices[i].style.display = "block";
    getPolicyContact.style.display = "flex";
  });
}

// vinh sign up form
let getRegisterButton = document.querySelector('#register-btn');
let getRegisterName = document.querySelector('#register-name');
let getRegisterEmail = document.querySelector('#register-email');
let getRegisterPassword = document.querySelector('#register-password');
let getRegisterPasswordRetype = document.querySelector('#register-password-retype');
let getContainer = document.querySelector('.box-login');
let getAgreeTermsConditions = document.querySelector('#agreeTermsConditions');

function checkEmail(str) {
  let idx = str.indexOf('@');
  let idxWhiteSpace = str.indexOf(' ');
  if(idx === -1 || idxWhiteSpace !== -1) {
    return false;
  } else if(str.substring(idx) !== '@gmail.com') {
    return false;
  }
  return true;
}

getRegisterButton.addEventListener('click', (e) => {
  if(getRegisterName.value.trim() === '' || getRegisterPassword.value.trim() === '' || getRegisterPasswordRetype.value.trim() === '') {
    alert('Vui lòng nhập đầy đủ thông tin!');
    return;
  } else if(getRegisterEmail.value.trim() === '' || !getRegisterEmail.value.includes('@') || !(checkEmail(getRegisterEmail.value))) {
    alert('Vui lòng nhập đúng email!');
    return;
  } else if(getRegisterPasswordRetype.value !== getRegisterPassword.value) {
    alert('Mật khẩu xác nhận không khớp!');
    return;
  } else if(!(getAgreeTermsConditions.checked)) {
    alert('Please agree terms and conditions');
    return;
  } 
  else {
    let user = {
      userID: '',
      name: '',
      email: '',
      password: ''
    }
    user.name = getRegisterName.value;
    user.email = getRegisterEmail.value;
    user.password = getRegisterPassword.value;
    logregBox.classList.remove("active");
    // reset input fields
    getRegisterName.value = '';
    getRegisterEmail.value = '';
    getRegisterPassword.value = '';
    getRegisterPasswordRetype.value = '';
    getAgreeTermsConditions.checked = false;
    saveUser(user);
  }
})

// lưu user vào localStorage khi ấn sign-up button

function getCurrentID() {
  let nextID = parseInt(localStorage.getItem('currentID'));
  if(nextID) {
    localStorage.setItem('currentID', ++nextID);
    return parseInt(localStorage.getItem('currentID'));
  } else {
    localStorage.setItem('currentID', 1);
    return parseInt(localStorage.getItem('currentID'));
  }
}

function saveUser(user) {
  user.userID = getCurrentID();
  localStorage.setItem(user.userID, JSON.stringify(user));
}

function findUserByEmail(target) {
  for(let i = 0; i < localStorage.length; i++) {
    let user = JSON.parse(localStorage.getItem(i + 1));
    if(user.email === target) {
      return user;
    }
  }
  return null;
}

// vinh sign in form
let getSignInButton = document.querySelector('#sign-in-button');
let getEmailSignIn = document.querySelector('#Email');
let getPasswordSignIn = document.querySelector('#Password');
// account đang đăng nhập
let currentUser = {
  userID: '',
  name: '',
  email: '',
  password: ''
}

getSignInButton.addEventListener('click', (e) => {
  if(getEmailSignIn.value.trim() === '' || getPasswordSignIn.value.trim() === '') {
    alert('Vui lòng nhập đầy đủ thông tin!');
    return;
  } else if(getEmailSignIn.value.trim() === '' || !getEmailSignIn.value.includes('@') || !(checkEmail(getEmailSignIn.value))) {
    alert('Vui lòng nhập đúng email');
    return;
  }
  let user = findUserByEmail(getEmailSignIn.value);
  if(user !== null && user.password === getPasswordSignIn.value) {
    currentUser.email = user.email;
    currentUser.password = user.password;
    currentUser.name = user.name;
    currentUser.userID = user.userID;
  } else {
    alert('Email hoặc mật khẩu không đúng!');
    return;
  }
  // reset input fields
  getEmailSignIn.value = '';
  getPasswordSignIn.value = '';
  getContainer.classList.remove('active');
  getContainer.style.height = "0";
  midcontent.style.display = 'block';
});