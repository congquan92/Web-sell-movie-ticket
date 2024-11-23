//Huy
let logregBox = "";
// console.log(logregBox);
const logonav = document.querySelector(".logo");
const loginLink = document.querySelector(".login-link");

let user = JSON.parse(localStorage.getItem("currentUser"));
if (user != null) {
  let loginicon = document.querySelectorAll(".login-btn");
  loginicon.forEach(function (e) {
    e.innerHTML = `<i class="fa-solid fa-user"></i>`;
  });
  const logoutuser = document.querySelector(".logout");
  logoutuser.style.display = "block";
}

// console.log(a);
function formregister() {
  logregBox.classList.add("active");
}

function formlogin() {
  logregBox.classList.remove("active");
}
const login = document.querySelectorAll(".login-btn");
const midcontent = document.querySelector(".mid-content");
login.forEach(function (e) {
  e.addEventListener("click", () => {
    midcontent.innerHTML = `<div class="box-login">
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
            <form>
              <h2>Sign In</h2>
              <div class="input-box">
                <span class="icon"><i class="bx bxs-envelope"></i></span>
                <input type="email"  id="Email" />
                <label>Email</label>
              </div>
              <div class="input-box">
                <span class="icon"><i class="bx bxs-lock-alt"></i></span>
                <input type="password" id="Password" />
                <label for="Password">Password</label>
              </div>
              <div class="remember-forgot">
                <label for=""><input type="checkbox" /> Remember me</label>
                <a href="#">Forgot password</a>
              </div>
              <button type="submit" class="btn" id="sign-in-button" onclick="signInButton(event);">Sign In</button>
              <div class="login-register">
                <p>
                  Don't have an account?
                  <span class="register-link" onclick="formregister();">Sign up</span>
                </p>
              </div>
            </form>
          </div>
          <div class="form-box register">
            <form>
              <h2>Sign Up</h2>
              <div class="input-box">
                <span class="icon"><i class="bx bxs-user"></i></span>
                <input type="text" required id="register-name" />
                <label for="name">Name</label>
              </div>
              <div class="input-box">
                <span class="icon"><i class="bx bxs-envelope"></i></span>
                <input type="email" id="register-email" />
                <label for="email">Email</label>
              </div>
              <div class="input-box">
                <span class="icon"><i class="bx bxs-lock-alt"></i></span>
                <input type="password" id="register-password"/>
                <label>Password</label>
              </div>
              <div class="input-box">
                <span class="icon"><i class="bx bxs-lock-alt"></i></span>
                <input type="password" id="register-password-retype"/>
                <label>Re-enter password</label>
              </div>
              <div class="remember-forgot">
                <label for=""
                  ><input type="checkbox" id="agreeTermsConditions"/> I agree to the terms &
                  conditions</label
                >
              </div>
              <button type="submit" class="btn" id="register-btn" onclick="registerButton(event);">Sign Up</button>
              <div class="login-register">
                <p>
                  Already have an account?
                  <span class="login-link" onclick="formlogin();">Sign In</span>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>`;
    header_responsive.classList.remove("active");
    backgroud_menu_respon.style.display = "none";
    logregBox = document.querySelector(".logreg-box");
    // console.log(logregBox);
  });
});
const home = document.querySelectorAll(".home"); //nut Home tren nav
home.forEach(function (e) {
  e.addEventListener("click", () => {
    window.location.href = "index.html";
  });
});

const shop = document.querySelectorAll(".shop");
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
logonav.addEventListener("click", () => {
  window.location.href = "index.html";
});

// footer

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
let getRegisterButton = "";
let getRegisterName = "";
let getRegisterEmail = "";
let getRegisterPassword = "";
let getRegisterPasswordRetype = "";
let getAgreeTermsConditions = "";
let getContainer = document.querySelector(".box-login");

function checkEmail(str) {
  let idx = str.indexOf("@");
  let idxWhiteSpace = str.indexOf(" ");
  if (idx === -1 || idxWhiteSpace !== -1) {
    return false;
  } else if (str.substring(idx) !== "@gmail.com") {
    return false;
  }
  return true;
}

function getNextID() {
  let nextID = parseInt(localStorage.getItem("NextID"));
  if (nextID) {
    localStorage.setItem("NextID", ++nextID);
    return parseInt(localStorage.getItem("NextID"));
  } else {
    localStorage.setItem("NextID", 1);
    return parseInt(localStorage.getItem("NextID"));
  }
}

// lưu user vào localStorage khi ấn sign-up button
let storageUsers = [];
function saveUser(user) {
  user.userID = getNextID();
  let getStorageUsers = localStorage.getItem("storageUsers");
  if (getStorageUsers === null) {
    localStorage.setItem("storageUsers", JSON.stringify(storageUsers));
    getStorageUsers = localStorage.getItem("storageUsers");
  }
  getStorageUsers = JSON.parse(getStorageUsers);
  getStorageUsers.push(user);
  localStorage.setItem("storageUsers", JSON.stringify(getStorageUsers));
}

function doesEmailExistInLocalStorage(target) {
  let getStorageUsers = JSON.parse(localStorage.getItem("storageUsers"));
  if (localStorage.getItem("storageUsers") !== null) {
    for (let i = 0; i < getStorageUsers.length; i++) {
      if (getStorageUsers[i].email === target) {
        return true;
      }
    }
  }
  return false;
}

function registerButton(event) {
  event.preventDefault();
  getRegisterButton = document.querySelector("#register-btn");
  getRegisterName = document.querySelector("#register-name");
  getRegisterEmail = document.querySelector("#register-email");
  getRegisterPassword = document.querySelector("#register-password");
  getRegisterPasswordRetype = document.querySelector(
    "#register-password-retype"
  );
  getAgreeTermsConditions = document.querySelector("#agreeTermsConditions");
  if (getRegisterName.value.trim() === "") {
    alert("Vui lòng nhập tên đăng ký!");
    getRegisterName.focus();
    return;
  } else if (
    getRegisterEmail.value.trim() === "" ||
    !getRegisterEmail.value.includes("@") ||
    !checkEmail(getRegisterEmail.value)
  ) {
    alert("Vui lòng nhập đúng email!");
    getRegisterEmail.focus();
    return;
  } else if (doesEmailExistInLocalStorage(getRegisterEmail.value)) {
    alert("Email này đã tồn tại!");
    getRegisterEmail.focus();
    return;
  } else if (getRegisterPassword.value.trim() === "") {
    alert("Vui lòng nhập mật khẩu!");
    getRegisterPassword.focus();
    return;
  } else if (getRegisterPasswordRetype.value.trim() === "") {
    alert("Vui lòng nhập xác nhận mật khẩu!");
    getRegisterPasswordRetype.focus();
    return;
  } else if (getRegisterPasswordRetype.value !== getRegisterPassword.value) {
    alert("Mật khẩu xác nhận không khớp!");
    getRegisterPasswordRetype.focus();
    return;
  } else if (!getAgreeTermsConditions.checked) {
    alert("Please agree terms and conditions");
    return;
  } else {
    let user = {
      userID: "",
      name: "",
      email: "",
      phone: "",
      diachi: "",
      shopbag: "",
      statususer: "",
      password: "",
    };
    user.name = getRegisterName.value;
    user.email = getRegisterEmail.value;
    user.password = getRegisterPassword.value;
    logregBox.classList.remove("active");
    // reset input fields
    getRegisterName.value = "";
    getRegisterEmail.value = "";
    getRegisterPassword.value = "";
    getRegisterPasswordRetype.value = "";
    getAgreeTermsConditions.checked = false;
    console.log(user);
    saveUser(user);
  }
}

// vinh sign in form
let getSignInButton = "";
let getEmailSignIn = "";
let getPasswordSignIn = "";
// account đang đăng nhập
let currentUser = {
  userID: "",
  name: "",
  email: "",
  password: "",
  shopbag: "",
  statususer: "",
};
function saveCurrentUser(user) {
  localStorage.setItem("currentUser", JSON.stringify(user));
}

function getCurrentUser(user) {
  let getUser = JSON.parse(localStorage.getItem("currentUser"));
  return getUser;
}
function findUserByEmail(target) {
  let getStorageUsers = JSON.parse(localStorage.getItem("storageUsers"));
  if (localStorage.getItem("storageUsers") !== null) {
    for (let i = 0; i < getStorageUsers.length; i++) {
      if (getStorageUsers[i].email === target) {
        return getStorageUsers[i];
      }
    }
  }
  return null;
}

function signInButton(event) {
  event.preventDefault();
  getSignInButton = document.querySelector("#sign-in-button");
  getEmailSignIn = document.querySelector("#Email");
  getPasswordSignIn = document.querySelector("#Password");
  if (
    getEmailSignIn.value.trim() === "" ||
    !getEmailSignIn.value.includes("@") ||
    !checkEmail(getEmailSignIn.value)
  ) {
    alert("Vui lòng nhập đúng email");
    getEmailSignIn.focus();
    return;
  } else if (getPasswordSignIn.value.trim() === "") {
    alert("Vui lòng nhập mật khẩu");
    getPasswordSignIn.focus();
    return;
  }
  let user = findUserByEmail(getEmailSignIn.value);
  if (user !== null && user.password === getPasswordSignIn.value) {
    currentUser.email = user.email;
    currentUser.password = user.password;
    currentUser.name = user.name;
    currentUser.userID = user.userID;
    saveCurrentUser(currentUser);
    console.log(currentUser);
    location.reload();
  } else {
    alert("Email hoặc mật khẩu không đúng!");
    return;
  }
  // localStorage.setItem("CurrentUser", JSON.stringify(currentUser.userID));
  // reset input fields
  getEmailSignIn.value = "";
  getPasswordSignIn.value = "";
}
//contact
const contact = document.querySelectorAll(".contact");
contact.forEach(function (e) {
  e.addEventListener("click", () => {
    window.location.href = "contact.html";
  });
});

//giohang
const shoping1 = document.querySelectorAll(".Shoping");
shoping1.forEach(function (e) {
  e.addEventListener("click", () => {
    const bag = document.querySelector(".cart");
    bag.classList.add("active");
    document.querySelector(".backgroud-menu-respon").style.display = "block";
    shopinginfo(); // Hiển thị thông tin giỏ hàng khi mở
  });
});
let soluong1 = 0; // Số lượng sản phẩm trong giỏ hàng
let tongtien1 = 0;
// Hiển thị thông tin giỏ hàng
function shopinginfo() {
  let arrayshopbag = JSON.parse(localStorage.getItem("arrayshopbag"));
  const cart = document.querySelector(".cart");
  let s = `<div class="shoping-bag">
        <div class="shoping-bag-header">
          <h3>Giỏ hàng</h3>
          <div class="close-shopping" onclick="closeall1()">Đóng</div>
        </div>
        <div class="shoping-bag-info">`;

  // Hiển thị các sản phẩm trong giỏ hàng
  for (let i = 0; i < arrayshopbag.length; i++) {
    s += `<div class="shoping-bag-info-item">
            <div class="shoping-bag-img">
              <img src="${arrayshopbag[i].img}" alt="" />
            </div>
            <div class="cart-info">
              <h4>${arrayshopbag[i].obj.nameSP}</h4>
              <h6>${arrayshopbag[i].color}-${arrayshopbag[i].size}</h6>
              <div class="priceAndCount">
                <div class="count">
                  <i class="fa-solid fa-minus sub" onclick='reduceShopBag(${i});'></i>
                  <input type="text" readonly="readonly" class="countProductbuy" value="${arrayshopbag[i].soluong}" />
                  <i class="fa-solid fa-plus add" onclick='increaseShopBag(${i},"${arrayshopbag[i].size}");'></i>
                </div>
                <div class="price">${arrayshopbag[i].obj.price}₫</div>
              </div>
              <div class="delete effect-for-btn" onclick="removeItem(${i})">Xoá</div>
            </div>
          </div>`;
  }
  s += `</div>
        <div class="pay">
          <div class="main">
            <div class="info_bill">
              <div class="selected">
                <p>ĐÃ CHỌN:</p>
                <p id="totalCount">${soluong1}</p>
              </div>
              <div class="discount">
                <p>KHUYẾN MÃI:</p>
                <p id="discountPercent"></p>
              </div>
              <div class="total">
                <p>TẠM TÍNH:</p>
                <p id="totalBill">${tongtien1}₫</p>
              </div>
            </div>
            <div class="btn-pay">
              <h3 class="effect-for-btn buttonsubmit" onclick="giaodienthanhtoan();" >Xác nhận</h3>
            </div>
          </div>
        </div>
      </div>`;

  cart.innerHTML = s;
  cart.classList.add("active");
  chitiethoadon1(); // Cập nhật lại thông tin giỏ hàng
}
function chitiethoadon1() {
  let arrayshopbag = JSON.parse(localStorage.getItem("arrayshopbag"));
  soluong1 = 0;
  tongtien1 = 0;
  for (let i = 0; i < arrayshopbag.length; i++) {
    soluong1 += parseInt(arrayshopbag[i].soluong);
    tongtien1 +=
      parseInt(arrayshopbag[i].obj.price) * parseInt(arrayshopbag[i].soluong);
  }

  const totalCountElement = document.getElementById("totalCount");
  const totalBillElement = document.getElementById("totalBill");

  if (totalCountElement) {
    totalCountElement.textContent = soluong1;
  }
  if (totalBillElement) {
    totalBillElement.textContent = tongtien1 + "₫";
  }
}
function closeall() {
  document.querySelector(".cart").classList.remove("active");
  document.querySelector(".backgroud-menu-respon").style.display = "none";
}
updateshopingbag();

// Cập nhật số lượng sản phẩm trong giỏ hàng khi trang được tải
function updateshopingbag() {
  soluongspgiohang = JSON.parse(localStorage.getItem("countarrayshopbag")) || 0;
  if (soluongspgiohang > 0) {
    document.querySelector(".Shoping span").textContent = soluongspgiohang;
    document.querySelector(".Shoping").style.color = "red";
  } else {
    document.querySelector(".Shoping span").textContent = "0";
    document.querySelector(".Shoping").style.color = "black";
  }
}
function giaodienthanhtoan() {
  let arrayproducts = JSON.parse(localStorage.getItem("arrayshopbag")) || [];
  if (arrayproducts.length == 0) {
    alert("Giỏ hàng rỗng");
  } else {
    let tongtien = 0;
    getarrayshopbag();
    let usercurrent = JSON.parse(localStorage.getItem("currentUser"));
    document.querySelector(".cart").classList.remove("active");
    document.querySelector(".backgroud-menu-respon").style.display = "none";
    let s = `<h1 class="tittleheader">THÔNG TIN GIAO HÀNG</h1>
    <div class="infoCustomer box">
      <div class="infoCustomer-body">
        <div class="contentTab">
          <span>Họ và tên: </span>
          <input
            type="text"
            class="input"
            id="name"
            value="${usercurrent.name}"
            readonly
          />
        </div>
        <div class="contentTab">
          <span>Số điện thoại: </span>
          <input
            type="text"
            class="input"
            id="phone"
            value="${usercurrent.phone}"
            readonly
          />
        </div>
        <div class="contentTab">
          <span>Địa chỉ : </span>
          <input type="text" class="input" id="address" value="${usercurrent.diachi}" readonly />
        </div>
        <div id="buttonEdit" onclick="chinhsua();">Chỉnh sửa</div>
      </div>
    </div>
    <div class="payment box">
      <div class="viewCart">
        <div class="titleCol">
          <span class="idProduct">ID</span>
          <span class="imgProduct">Hình ảnh</span>
          <span class="nameProduct">Tên sản phẩm</span>
          <span class="colorProduct">Màu sắc</span>
          <span class="countProduct">Số lượng</span>
          <span class="priceProduct">Đơn giá</span>
        </div>
        <div id="viewCart-body">`;
    for (let i = 0; i < arrayshopbag.length; i++) {
      tongtien +=
        parseInt(arrayshopbag[i].obj.price) * parseInt(arrayshopbag[i].soluong);
      s += `<div class="product">
            <span class="idProduct">${arrayshopbag[i].obj.idproduct}</span>
            <span class="imgProduct imgsp"
              ><img src="${arrayshopbag[i].img}" alt=""
            /></span>
            <span class="nameProduct">${arrayshopbag[i].obj.nameSP}</span>
            <span class="colorProduct">${arrayshopbag[i].color}</span>
            <span class="countProduct">${arrayshopbag[i].soluong}</span>
            <span class="priceProduct">${arrayshopbag[i].obj.price}</span>
          </div>`;
    }
    s += `</div>
      </div>
      <div class="methodPayment">
        <h4>Phương thức thanh toán</h4>
        <div class="method">
          <input type="radio" name="radio" id="" checked />
          <span>
            <i class="now-ui-icons shopping_credit-card"></i>Thẻ tín dụng / Thẻ
            ghi nợ</span
          >
        </div>
        <div class="method">
          <input type="radio" name="radio" id="" />
          <span
            ><i class="now-ui-icons shopping_delivery-fast"></i>Thanh toán khi
            nhận hàng</span
          >
        </div>
        <div class="infoBill">
          <div class="contentTab">
            <span>Tạm tính:</span>
            <span id="valueTemporary">${tongtien}</span>
          </div>
          <div class="contentTab">
            <span>Tổng:</span>
            <span id="valueBill">${tongtien}</span>
          </div>
        </div>
      </div>
      <div class="buttonsubmit" onclick="thanhtoan()">Thanh toán</div>
    </div>`;
    midcontent.innerHTML = s;
  }
}
function getarrayshopbag() {
  let usercurrent = JSON.parse(localStorage.getItem("currentUser"));
  if (usercurrent != null) {
    let alluser = JSON.parse(localStorage.getItem("storageUsers"));
    for (let i = 0; i < alluser.length; i++) {
      if (alluser[i].userID == usercurrent.userID) {
        usercurrent = alluser[i];
      }
    }
    localStorage.setItem("currentUser", JSON.stringify(usercurrent));
    arrayshopbag = usercurrent.shopbag || [];
    localStorage.setItem("arrayshopbag", JSON.stringify(arrayshopbag));
    localStorage.setItem(
      "countarrayshopbag",
      JSON.stringify(arrayshopbag.length)
    );
  }
}
getarrayshopbag();
updateshopingbag();
function thanhtoan() {
  let shopbagispay = JSON.parse(localStorage.getItem("shopbagispay")) || [];
  let usercurrent = JSON.parse(localStorage.getItem("currentUser"));
  let userIndex = kiemtratontai(usercurrent.userID);

  if (usercurrent.phone === "" || usercurrent.diachi === "") {
    alert("Vui lòng nhập đầy đủ số điện thoại và địa chỉ");
    chinhsua();
  } else {
    if (userIndex !== null) {
      let arrayshopbag = JSON.parse(localStorage.getItem("arrayshopbag")) || [];
      for (let i = 0; i < arrayshopbag.length; i++) {
        shopbagispay[userIndex].shopbagispayuser.push(arrayshopbag[i]);
      }
    } else {
      let shopbagitem = {
        IDuser: usercurrent.userID,
        shopbagispayuser:
          JSON.parse(localStorage.getItem("arrayshopbag")) || [],
      };
      shopbagispay.push(shopbagitem);
    }

    localStorage.setItem("shopbagispay", JSON.stringify(shopbagispay));

    // Ensure the correct list of items is passed for inventory adjustment
    let itemsToAdjust =
      userIndex !== null
        ? shopbagispay[userIndex].shopbagispayuser
        : JSON.parse(localStorage.getItem("arrayshopbag"));

    dieuchinhsoluongtrongkho(itemsToAdjust);

    // Clear user's shopping bag after checkout
    let alluser = JSON.parse(localStorage.getItem("storageUsers"));
    for (let i = 0; i < alluser.length; i++) {
      if (alluser[i].userID == usercurrent.userID) {
        alluser[i].shopbag = [];
        usercurrent.shopbag = [];
      }
    }
    localStorage.setItem("storageUsers", JSON.stringify(alluser));
    localStorage.setItem("currentUser", JSON.stringify(usercurrent));

    // Reload the page to reflect changes
    location.reload();
  }
}
function kiemtratontai(IDuser) {
  let shopbagispay = JSON.parse(localStorage.getItem("shopbagispay")) || [];
  for (let i = 0; i < shopbagispay.length; i++) {
    if (shopbagispay[i].IDuser == IDuser) {
      return i;
    }
  }
  return null;
}
function dieuchinhsoluongtrongkho(arr) {
  console.log(arr);
  let products = JSON.parse(localStorage.getItem("arrayproducts"));
  for (let i = 0; i < products.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j].obj.idproduct == products[i].idproduct) {
        // console.log(arr[j].obj.idproduct, products[i].idproduct);
        switch (arr[j].size) {
          case "A":
            products[i].quantity.A =
              parseInt(products[i].quantity.A) - parseInt(arr[j].soluong);
            break;
          case "B":
            products[i].quantity.B =
              parseInt(products[i].quantity.B) - parseInt(arr[j].soluong);
            break;
          case "C":
            products[i].quantity.C =
              parseInt(products[i].quantity.C) - parseInt(arr[j].soluong);
            break;
          case "D":
            products[i].quantity.D =
              parseInt(products[i].quantity.D) - parseInt(arr[j].soluong);
            break;
        }
      }
    }
  }
  localStorage.setItem("arrayproducts", JSON.stringify(products));
}
// Function to update user details in storageUsers
function updateUserDetails(user) {
  let allUsers = JSON.parse(localStorage.getItem("storageUsers")) || [];
  for (let i = 0; i < allUsers.length; i++) {
    if (allUsers[i].userID == user.userID) {
      allUsers[i] = user;
      break;
    }
  }
  localStorage.setItem("storageUsers", JSON.stringify(allUsers));
}
