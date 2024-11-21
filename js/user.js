let logout = document.querySelector(".logout");
arrayshopbag = JSON.parse(localStorage.getItem("arrayshopbag")) || [];
logout.addEventListener("click", () => {
  user = null;
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
  for (let i = 0; i < arrayshopbag.length; i++) {
    s += `<div class="shoping-list-item">
          <div class="shoping-list-item-header">
            <i class="fa-solid fa-car-side"></i>
            <span>Giao hàng thành công</span>
          </div>
          <div class="shoping-list-item-info">
            <div class="img-item-user">
              <img src="${arrayshopbag[i].img}" alt="" />
            </div>
            <div class="item-content">
              <div class="name-item">${arrayshopbag[i].obj.nameSP}</div>
              <div class="size-item">${arrayshopbag[i].size}</div>
              <div class="quatity-price-item">
                <div class="quatity-item">x${arrayshopbag[i].soluong}</div>
                <div class="price-item">${arrayshopbag[i].obj.price}đ</div>
              </div>
              <div class="money">
                <div class="thanhtien">Thành tiền:</div>
                <div class="intomoney">${
                  parseInt(arrayshopbag[i].obj.price) *
                  parseInt(arrayshopbag[i].soluong)
                }</div>
              </div>
            </div>
          </div>
        </div>`;
  }
  s += `</div>`;
  rightcontent.innerHTML = s;
}
