//Huy
let logregBox = "";
const logonav = document.querySelector(".logo");
const home = document.querySelectorAll(".home"); //nut Home tren nav
const shop = document.querySelectorAll(".shop");
const address_btn = document.querySelector(".address-btn");
const content_addressbtn = document.querySelector("#footer-paragraph");
const social_btn = document.querySelector(".social-btn");
const content_socialbtn = document.querySelector("#footer-social-ul");
const policy_btn = document.querySelector(".policy-btn");
const content_policybtn = document.querySelector("#footer-policy-ul");
function formregister(){
  logregBox=document.querySelector(".logreg-box");
   logregBox.classList.add("active");
}

function formlogin(){
  document.querySelector(".logreg-box");
  logregBox.classList.remove("active");
}
const login = document.querySelectorAll(".login-btn");
const midcontent = document.querySelector(".mid-content");
login.forEach(function (e) {
  e.addEventListener("click", () => {
    midcontent.innerHTML=`<div class="box-login">
      <div class="container">
        <div class="content">
          <h2>New Clothes</h2>
          <div class="text-sci">
            <h2 class="logo-form">
              Welcome! <br /><span>To Our Website</span>
            </h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias,
              impedit?
            </p>
            <div class="social-icons">
              <a href="#"><i class="bx bxl-facebook"></i></a>
              <a href="#"><i class="bx bxl-instagram"></i></a>
              <a href="#"><i class="bx bxl-twitter"></i></a>
            </div>
          </div>
        </div>
        <div class="logreg-box">
          <div class="form-box login">
            <form action="#" novalidate>
              <h2>Sign In</h2>
              <div class="input-box">
                <span class="icon"><i class="bx bxs-envelope"></i></span>
                <input type="email" required id="Email" />
                <label>Email</label>
              </div>
              <div class="input-box">
                <span class="icon"><i class="bx bxs-lock-alt"></i></span>
                <input type="password" required id="Password" />
                <label for="Password">Password</label>
              </div>
              <div class="remember-forgot">
                <label for=""><input type="checkbox" /> Remember me</label>
                <a href="#">Forgot password</a>
              </div>
              <button type="submit" class="btn" id="sign-in-button" onclick="signInButton();">Sign In</button>
              <div class="login-register">
                <p>
                  Don't have an account?
                  <a href="#" class="register-link" onclick="formregister();">Sign up</a>
                </p>
              </div>
            </form>
          </div>
          <div class="form-box register">
            <form action="#" novalidate>
              <h2>Sign Up</h2>
              <div class="input-box">
                <span class="icon"><i class="bx bxs-user"></i></span>
                <input type="text" required id="register-name" />
                <label for="name">Name</label>
              </div>
              <div class="input-box">
                <span class="icon"><i class="bx bxs-envelope"></i></span>
                <input type="email" required id="register-email" />
                <label for="email">Email</label>
              </div>
              <div class="input-box">
                <span class="icon"><i class="bx bxs-lock-alt"></i></span>
                <input type="password" required id="register-password"/>
                <label>Password</label>
              </div>
              <div class="input-box">
                <span class="icon"><i class="bx bxs-lock-alt"></i></span>
                <input type="password" required id="register-password-retype"/>
                <label>Re-enter password</label>
              </div>
              <div class="remember-forgot">
                <label for=""
                  ><input type="checkbox" id="agreeTermsConditions"/> I agree to the terms &
                  conditions</label
                >
              </div>
              <button type="submit" class="btn" id="register-btn" onclick="registerButton();">Sign Up</button>
              <div class="login-register">
                <p>
                  Already have an account?
                  <a href="#" class="login-link" onclick="formlogin();">Sign In</a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>`;
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

logonav.addEventListener("click", () => {
  window.location.href = "index.html";
});
document.querySelector(".footer").innerHTML = `<div id="left-footer">
        <h2 class="address-btn">
          Hệ Thống Cửa Hàng <span><i class="bx bx-chevron-down"></i></span>
        </h2>
        <p id="footer-paragraph">
          <i class="fas fa-map-marker-alt"></i> Chi Nhánh Hồ Chí Minh<br />
          <span class="location"
            ><strong>TP. Thủ Đức</strong> - Quận 9 - Tầng 2 TTTM Vincom Mega
            Mall Vinhomes GrandPark.</span
          ><br />
          <span class="location"
            ><strong>Quận 1</strong> - 160 Nguyễn Cư Trinh, Phường Nguyễn Cư
            Trinh.</span
          ><br />
          <span class="location"
            ><strong>Quận 10</strong> - 561 Sư Vạn Hạnh, Phường 13.</span
          ><br />
          <span class="location"
            ><strong>Quận 1</strong> - The New Playground 26 Lý Tự Trọng, Phường
            Bến Nghé.</span
          ><br />
          <span class="location"
            ><strong>Quận Gò Vấp</strong> - 326 Quang Trung, Phường 10.</span
          ><br />
          <i class="fas fa-map-marker-alt"></i> Chi Nhánh Biên Hòa:<br />
          <span class="location"
            ><strong>TP. Biên Hòa</strong> - 151A Phan Trung, Phường Tân
            Mai.</span
          ><br />
          <i class="fas fa-map-marker-alt"></i> Chi Nhánh Bình Dương:<br />
          <span class="location"
            ><strong>TP. Thủ Dầu Một</strong> - 28 Yersin, Phường Hiệp
            Thành.</span
          ><br />
          <i class="fas fa-map-marker-alt"></i> Chi Nhánh Cần Thơ:<br />
          <span class="location"
            ><strong>Quận Ninh Kiều</strong> - 52 Mậu Thân, Phường An Phú.</span
          ><br />
          <i class="fas fa-map-marker-alt"></i> Chi Nhánh Hà Nội:<br />
          <span class="location"
            ><strong>Đống Đa</strong> - 49-51 Hồ Đắc Di, Phường Nam Đồng.</span
          ><br />
          <i class="fas fa-map-marker-alt"></i> Chi Nhánh Hưng Yên:<br />
          <span class="location"
            ><strong>Văn Giang</strong> - PT.TV 136 - Mega Grand World - Ocean
            Park</span
          ><br />
          <i class="fas fa-map-marker-alt"></i> Chi Nhánh Hải Phòng:<br />
          <span class="location"
            ><strong>Lê Chân</strong> - Tầng 2 TTTM Aeon Mall Hải Phòng Lê Chân
            số 10 Võ Nguyên Giáp, Phường Kênh Dương</span
          ><br />
        </p>
      </div>
      <div id="right-footer">
        <h2 class="social-btn">
          Mạng Xã Hội <span><i class="bx bx-chevron-down"></i></span>
        </h2>
        <ul id="footer-social-ul">
          <li class="footer-social-li">
            <a href="#" class="social-icons"><i class="bx bxl-facebook"></i></a>
          </li>
          <li class="footer-social-li">
            <a href="#" class="social-icons"
              ><i class="bx bxl-instagram"></i
            ></a>
          </li>
          <li>
            <a href="#" class="social-icons"><i class="bx bxl-twitter"></i></a>
          </li>
        </ul>
        <h2 class="policy-btn">
          Chính Sách <span><i class="bx bx-chevron-down"></i></span>
        </h2>
        <ul id="footer-policy-ul">
          <li>
            <a href="#" class="footer-policy-a">Chính sách bảo mật</a>
          </li>
          <li>
            <a href="#" class="footer-policy-a">FAQ</a>
          </li>
          <li>
            <a href="#" class="footer-policy-a">Chính sách Thẻ Thành viên</a>
          </li>
          <li>
            <a href="#" class="footer-policy-a"
              >Chính sách Bảo hành & Đổi trả</a
            >
          </li>
          <li>
            <a href="#" class="footer-policy-a">Chính sách giao hàng hỏa tốc</a>
          </li>
        </ul>
      </div>`;
document.getElementById("bottom-footer").innerHTML = `<p id="bottom-paragraph">
        Copyright © 2023 Shop Studio. Powered by ManUtd
      </p>`;
//  footer
// let flag_address_btn = 0;
// address_btn.addEventListener("click", () => {
//   if (flag_address_btn == 0) {
//     address_btn.classList.add("active");
//     content_addressbtn.classList.add("active");
//     flag_address_btn = 1;
//   } else {
//     address_btn.classList.remove("active");
//     content_addressbtn.classList.remove("active");
//     flag_address_btn = 0;
//   }
// });
// let flag_social_btn = 0;
// social_btn.addEventListener("click", () => {
//   if (flag_social_btn == 0) {
//     social_btn.classList.add("active");
//     content_socialbtn.classList.add("active");
//     flag_social_btn = 1;
//   } else {
//     social_btn.classList.remove("active");
//     content_socialbtn.classList.remove("active");
//     flag_social_btn = 0;
//   }
// });
// let flag_policy_btn = 0;
// policy_btn.addEventListener("click", () => {
//   if (flag_policy_btn == 0) {
//     policy_btn.classList.add("active");
//     content_policybtn.classList.add("active");
//     flag_policy_btn = 1;
//   } else {
//     policy_btn.classList.remove("active");
//     content_policybtn.classList.remove("active");
//     flag_policy_btn = 0;
//   }
// });

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
// let getPrivacyPolicy = document.querySelector("#privacy-policy");
// let getFAQPolicy = document.querySelector("#FAQ-policy");
// let getMembershipCardPolicy = document.querySelector("#membership-card-policy");
// let getExchangeCardPolicy = document.querySelector("#exchange-card-policy");
// let getShipCardPolicy = document.querySelector("#ship-card-policy");
// let getPolicyContact = document.querySelector("#policy-contact");
// let getPolices = document.getElementsByClassName("footer-policy-a");
// let infoPolices = [
//   getPrivacyPolicy,
//   getFAQPolicy,
//   getMembershipCardPolicy,
//   getExchangeCardPolicy,
//   getShipCardPolicy,
// ];

// for (let i = 0; i < getPolices.length; i++) {
//   getPolices[i].addEventListener("click", (e) => {
//     e.preventDefault();
//     midcontent.style.display = "none";
//     infoPolices.forEach((policy) => {
//       policy.style.display = "none";
//     });
//     infoPolices[i].style.display = "block";
//     getPolicyContact.style.display = "flex";
//   });
// }

// vinh sign up form
let getRegisterButton = "";
let getRegisterName = "";
let getRegisterEmail = "";
let getRegisterPassword = "";
let getRegisterPasswordRetype = "";
let getAgreeTermsConditions = "";
let getContainer = document.querySelector('.box-login');

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

function checkEmailLocalStorage(target) {
  for(let i = 0; i < localStorage.length; i++) {
    let user = JSON.parse(localStorage.getItem(i + 1));
    if(user !== null && user.email === target) {
      return false;
    }
  }
  return true;
}

function findUserByEmail(target) {
  for(let i = 0; i < localStorage.length; i++) {
    let user = JSON.parse(localStorage.getItem(i + 1));
    // khi user = null -> truy cập email của null -> lỗi
    if(user !== null && user.email === target) {
      return user;
    }
  }
  return null;
}

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

// lưu user vào localStorage khi ấn sign-up button
function saveUser(user) {
  user.userID = getCurrentID();
  localStorage.setItem(user.userID, JSON.stringify(user));
}

function registerButton() {
    getRegisterButton=document.querySelector('#register-btn');
    getRegisterName = document.querySelector('#register-name');
    getRegisterEmail = document.querySelector('#register-email');
    getRegisterPassword = document.querySelector('#register-password');
    getRegisterPasswordRetype = document.querySelector('#register-password-retype');
    getAgreeTermsConditions = document.querySelector('#agreeTermsConditions');
    if(getRegisterName.value.trim() === '') {
      alert('Vui lòng nhập tên đăng ký!');
      getRegisterName.focus();
      return;
    } else if(getRegisterEmail.value.trim() === '' || !getRegisterEmail.value.includes('@') || !(checkEmail(getRegisterEmail.value))) {
      alert('Vui lòng nhập đúng email!');
      getRegisterEmail.focus();
      return;
    } else if(!(checkEmailLocalStorage(getRegisterEmail.value))) {
      alert("Email này đã tồn tại!");
      getRegisterEmail.focus();
      return;
    } else if(getRegisterPassword.value.trim() === '') {
      alert('Vui lòng nhập mật khẩu!');
      getRegisterPassword.focus();
      return;
    } else if(getRegisterPasswordRetype.value.trim() === '') {
      alert('Vui lòng nhập xác nhận mật khẩu!');
      getRegisterPasswordRetype.focus();
      return;
    } else if(getRegisterPasswordRetype.value !== getRegisterPassword.value) {
      alert('Mật khẩu xác nhận không khớp!');
      getRegisterPasswordRetype.focus();
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
}

// vinh sign in form
let getSignInButton = "";
let getEmailSignIn = "";
let getPasswordSignIn = "";
// account đang đăng nhập
let currentUser = {
  userID: '',
  name: '',
  email: '',
  password: ''
}


function signInButton() {
    getSignInButton = document.querySelector('#sign-in-button');
    getEmailSignIn = document.querySelector('#Email');
    getPasswordSignIn = document.querySelector('#Password');
    if(getEmailSignIn.value.trim() === '' || !getEmailSignIn.value.includes('@') || !(checkEmail(getEmailSignIn.value))) {
      alert('Vui lòng nhập đúng email');
      getEmailSignIn.focus();
      return;
    } else if(getPasswordSignIn.value.trim() === '') {
      alert('Vui lòng nhập mật khẩu');
      getPasswordSignIn.focus();
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
}

//contact
const contact = document.querySelectorAll(".contact");
contact.forEach(function (e) {
  e.addEventListener("click", () => {
    window.location.href = "contact.html";
  });
});
