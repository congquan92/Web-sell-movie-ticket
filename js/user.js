let logout = document.querySelector(".logout");
arrayshopbag = JSON.parse(localStorage.getItem("arrayshopbag")) || [];
logout.addEventListener("click", () => {
  user = null;
  let mangrong = [];
  let resetshopbag = 0;
  localStorage.setItem("arrayshopbag", JSON.stringify(mangrong));
  localStorage.setItem("countarrayshopbag", JSON.stringify(resetshopbag));
  localStorage.setItem("currentUser", JSON.stringify(user));
  location.reload();
});
login.forEach(function (e) {
  let user = JSON.parse(localStorage.getItem("currentUser"));
  e.addEventListener("click", () => {
    if (user != null) {
      midcontent.innerHTML = `<div class="leftpage">
        <h1 class="tittleheader">Hồ sơ cá nhân</h1>
        <div class="buttonGroup">
          <div class="buttonTab profilebtn active" id="btnProfile" onclick="profile();">Thông tin cá nhân</div>
          <div class="buttonTab statusbtn" id="btnStatusDelivery" onclick="statusProduct();">
            Tình trạng đơn hàng
          </div>
        </div>
      </div>
      <div class="rightpage">
        <div class="user">
      <h1>THÔNG TIN CÁ NHÂN</h1>
      <div id="profile">
        <div class="profile-body">
          <div class="contentTab">
            <span>Email</span>
            <input
            type="text"
            class="input"
            id="email"
            value="${user.email}"
            readonly
          />
          </div>
          <div class="contentTab">
            <span>Name</span>
            <input
            type="text"
            class="input"
            id="name"
            value="${user.name}"
            readonly
          />
          </div>
          <div class="contentTab">
            <span>Phone</span>
            <input
            type="text"
            class="input"
            id="phone"
            value="${user.phone}"
            readonly
          />
          </div>
          <div class="contentTab">
            <span>Address</span>
            <input
            type="text"
            class="input"
            id="address"
            value="${user.diachi}"
            readonly
          />
          </div>
          <div class="contentTab point">
            <span>Tích điểm</span>
            <span>1000</span>
          </div>
          <div class="contentTab">
            <span>Hạng</span>
            <span>Vàng</span>
          </div>
        </div>
      </div>
      <div id="buttonEdit" onclick="chinhsuainfo()">Chỉnh sửa</div>
    </div>`;
    }
  });
});
function profile() {
  let rightcontent = document.querySelector(".rightpage");
  document.querySelector(".profilebtn").classList.add("active");
  document.querySelector(".statusbtn").classList.remove("active");
  rightcontent.innerHTML = `<div class="user">
      <h1>THÔNG TIN CÁ NHÂN</h1>
      <div id="profile">
        <div class="profile-body">
          <div class="contentTab">
            <span>Email</span>
            <span>${user.email}</span>
          </div>
          <div class="contentTab">
            <span>Name</span>
            <span>${user.name}</span>
          </div>
          <div class="contentTab">
            <span>Phone</span>
            <span>0399097211</span>
          </div>
          <div class="contentTab">
            <span>Address</span>
            <span>94A Lô Tư, Phường Bình Hưng Hoà A, Quận Bình Tân</span>
          </div>
          <div class="contentTab point">
            <span>Tích điểm</span>
            <span>1000</span>
          </div>
          <div class="contentTab">
            <span>Hạng</span>
            <span>Vàng</span>
          </div>
        </div>
      </div>
    </div>`;
}
function donhangcuauser() {
  let donhang = [];
  let shopbagispay = JSON.parse(localStorage.getItem("shopbagispay"));
  let currentUser = JSON.parse(localStorage.getItem("currentUser"));
  for (let i = 0; i < shopbagispay.length; i++) {
    if (shopbagispay[i].IDuser == currentUser.userID) {
      donhang = shopbagispay[i].shopbagispayuser;
    }
  }
  return donhang;
}
function kiemtrangtrangthai(item) {
  let s = "";
  switch (item.status) {
    case "1":
      s = "Chờ xác nhận";
      break;
    case "2":
      s = "Đang gói hàng";
      break;
    case "3":
      s = "Vận chuyển";
      break;
    case "4":
      s = "Hoàn thành";
      break;
  }
  return s;
}
function statusProduct() {
  let rightcontent = document.querySelector(".rightpage");
  document.querySelector(".statusbtn").classList.add("active");
  document.querySelector(".profilebtn").classList.remove("active");
  s = `<div class="filter">
        <div class="filter-item">Tất cả</div>
        <div class="filter-item">Chờ xác nhận</div>
        <div class="filter-item">Đang đóng gói</div>
        <div class="filter-item">Vận chuyển</div>
        <div class="filter-item">Hoàn Thành</div>
      </div>
        <div class="shopingbag-list">`;
  let shopbagispayuser = donhangcuauser();
  for (let i = 0; i < shopbagispayuser.length; i++) {
    s += `<div class="shoping-list-item">
          <div class="shoping-list-item-header">
            <i class="fa-solid fa-car-side"></i>
            <span>${kiemtrangtrangthai(shopbagispayuser[i])}</span>
          </div>
          <div class="shoping-list-item-info">
            <div class="img-item-user">
              <img src="${shopbagispayuser[i].img}" alt="" />
            </div>
            <div class="item-content">
              <div class="name-item">${shopbagispayuser[i].obj.nameSP}</div>
              <div class="size-item">${shopbagispayuser[i].size}</div>
              <div class="quatity-price-item">
                <div class="quatity-item">x${shopbagispayuser[i].soluong}</div>
                <div class="price-item">${shopbagispayuser[i].obj.price}đ</div>
              </div>
              <div class="money">
                <div class="thanhtien">Thành tiền:</div>
                <div class="intomoney">${
                  parseInt(shopbagispayuser[i].obj.price) *
                  parseInt(shopbagispayuser[i].soluong)
                }</div>
              </div>
            </div>
          </div>
        </div>`;
  }
  s += `</div>`;
  rightcontent.innerHTML = s;
}
let isEdit = false;
function chinhsuainfo() {
  const buttonEdit = document.querySelector("#buttonEdit");
  let usercurrent = JSON.parse(localStorage.getItem("currentUser"));
  const input = document.querySelectorAll("input");
  const name = document.querySelector("#name");
  const phone = document.querySelector("#phone");
  const address = document.querySelector("#address");
  if (buttonEdit != null) {
    buttonEdit.addEventListener("click", () => {
      if (isEdit) {
        input.forEach(function (e) {
          e.setAttribute("readonly", true);
          e.classList.remove("active");
        });
        // Save updated user information
        usercurrent.name = name.value;
        usercurrent.phone = phone.value;
        usercurrent.diachi = address.value;
        localStorage.setItem("currentUser", JSON.stringify(usercurrent));
        updateUserDetails(usercurrent); // Update the user details in storageUsers
        buttonEdit.textContent = "Chỉnh sửa";
      } else {
        input.forEach(function (e) {
          e.removeAttribute("readonly");
          e.classList.add("active");
        });
        buttonEdit.textContent = "Lưu lại";
      }
    });
    // Toggle edit state
    isEdit = !isEdit;
  }
}
