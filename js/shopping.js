let Product = JSON.parse(localStorage.getItem("arrayproducts"));
let arrayshopbag = JSON.parse(localStorage.getItem("arrayshopbag")) || [];
let soluong = 0; // Số lượng sản phẩm trong giỏ hàng
let tongtien = 0; // Tổng tiền của giỏ hàng

// Hiển thị thông tin giỏ hàng
function shopinginfo() {
  arrayshopbag = JSON.parse(localStorage.getItem("arrayshopbag")) || [];
  const cart = document.querySelector(".cart");
  let s = `<div class="shoping-bag">
        <div class="shoping-bag-header">
          <h3>Giỏ hàng</h3>
          <div class="close-shopping" onclick="closeall()">Đóng</div>
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
                  <i class="fa-solid fa-plus add" onclick='increaseShopBag(${i});'></i>
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
                <p id="totalCount">${soluong}</p>
              </div>
              <div class="discount">
                <p>KHUYẾN MÃI:</p>
                <p id="discountPercent"></p>
              </div>
              <div class="total">
                <p>TẠM TÍNH:</p>
                <p id="totalBill">${tongtien}₫</p>
              </div>
            </div>
            <div class="btn-pay">
              <h3 class="effect-for-btn">THANH TOÁN</h3>
            </div>
          </div>
        </div>
      </div>`;

  cart.innerHTML = s;
  cart.classList.add("active");
  chitiethoadon(); // Cập nhật lại thông tin giỏ hàng
}

// Tính toán số lượng và tổng tiền của giỏ hàng
function chitiethoadon() {
  arrayshopbag = JSON.parse(localStorage.getItem("arrayshopbag")) || [];
  soluong = 0;
  tongtien = 0;
  for (let i = 0; i < arrayshopbag.length; i++) {
    soluong += parseInt(arrayshopbag[i].soluong);
    tongtien +=
      parseInt(arrayshopbag[i].obj.price) * parseInt(arrayshopbag[i].soluong);
  }

  const totalCountElement = document.getElementById("totalCount");
  const totalBillElement = document.getElementById("totalBill");

  if (totalCountElement) {
    totalCountElement.textContent = soluong;
  }
  if (totalBillElement) {
    totalBillElement.textContent = tongtien + "₫";
  }
}

// Giảm số lượng sản phẩm trong giỏ hàng
function reduceShopBag(index) {
  let count = document.querySelectorAll(".countProductbuy")[index];
  let quantity = parseInt(count.value);

  if (quantity > 1) {
    quantity--;
    count.value = quantity;
    arrayshopbag[index].soluong = quantity; // Cập nhật lại số lượng trong giỏ hàng
    localStorage.setItem("arrayshopbag", JSON.stringify(arrayshopbag)); // Lưu lại giỏ hàng
    chitiethoadon(); // Cập nhật lại thông tin giỏ hàng
  }
}

// Tăng số lượng sản phẩm trong giỏ hàng
function increaseShopBag(index) {
  let count = document.querySelectorAll(".countProductbuy")[index];
  let quantity = parseInt(count.value);
  let maxQuantity = arrayshopbag[index].obj.quantity; // Giới hạn số lượng tối đa

  if (quantity < maxQuantity) {
    quantity++;
    count.value = quantity;
    arrayshopbag[index].soluong = quantity; // Cập nhật lại số lượng trong giỏ hàng
    localStorage.setItem("arrayshopbag", JSON.stringify(arrayshopbag)); // Lưu lại giỏ hàng
    chitiethoadon(); // Cập nhật lại thông tin giỏ hàng
  }
}

// Xóa sản phẩm khỏi giỏ hàng
function removeItem(index) {
  arrayshopbag = JSON.parse(localStorage.getItem("arrayshopbag")) || [];
  arrayshopbag.splice(index, 1);
  let soluongspgiohang = arrayshopbag.length;

  if (soluongspgiohang > 0) {
    document.querySelector(".Shoping span").textContent = soluongspgiohang;
    document.querySelector(".Shoping").style.color = "red";
  } else {
    document.querySelector(".Shoping span").textContent = 0;
    document.querySelector(".Shoping").style.color = "black";
  }
  localStorage.setItem("arrayshopbag", JSON.stringify(arrayshopbag));
  localStorage.setItem("countarrayshopbag", JSON.stringify(soluongspgiohang));
  shopinginfo(); // Cập nhật lại giỏ hàng hiển thị
}

// Đóng giỏ hàng
function closeall() {
  document.querySelector(".cart").classList.remove("active");
  document.querySelector(".backgroud-menu-respon").style.display = "none";
}

// Mở giỏ hàng
const shoping = document.querySelectorAll(".Shoping");
shoping.forEach(function (e) {
  e.addEventListener("click", () => {
    const bag = document.querySelector(".cart");
    bag.classList.add("active");
    document.querySelector(".backgroud-menu-respon").style.display = "block";
    shopinginfo(); // Hiển thị thông tin giỏ hàng khi mở
  });
});

// Thêm sản phẩm vào giỏ hàng
function kiemtradangnhap() {
  let user = JSON.parse(localStorage.getItem("currentUser"));
  return user !== null;
}

function addShopingBag(item) {
  let toast = document.querySelector(".toast_info");
  if (kiemtradangnhap() === true) {
    arrayshopbag = JSON.parse(localStorage.getItem("arrayshopbag")) || [];
    soluongspgiohang = arrayshopbag.length;
    item.size = document.querySelector("#size").value;
    item.soluong = parseInt(document.querySelector("#counteInp").value);

    // Kiểm tra xem sản phẩm đã tồn tại trong giỏ hàng chưa
    let existingItem = arrayshopbag.find(
      (product) =>
        product.obj.id === item.obj.id &&
        product.size === item.size &&
        product.color === item.color
    );

    if (existingItem) {
      existingItem.soluong += item.soluong;
    } else {
      arrayshopbag.push(item);
      soluongspgiohang++;
    }

    localStorage.setItem("arrayshopbag", JSON.stringify(arrayshopbag)); // Lưu lại giỏ hàng
    localStorage.setItem("countarrayshopbag", JSON.stringify(soluongspgiohang));

    // Cập nhật hiển thị số lượng sản phẩm trong giỏ hàng
    updateshopingbag();
    chitiethoadon(); // Cập nhật lại thông tin giỏ hàng
  } else {
    toast.innerHTML = `<div class="toast toast--error">
      <div class="toast_icon">
        <i class="fa-solid fa-circle-check"></i>
      </div>
      <div class="toast_body">
        <h3 class="toast_tittle">Error</h3>
        <p class="toast_msg">Vui lòng đăng nhập</p>
      </div>
      <div class="toast_close"><i class="fa-solid fa-xmark"></i></div>
    </div>`;
  }
}

// Cập nhật số lượng sản phẩm trong giỏ hàng khi trang được tải
function updateshopingbag() {
  let soluongspgiohang =
    JSON.parse(localStorage.getItem("countarrayshopbag")) || 0;
  if (soluongspgiohang > 0) {
    document.querySelector(".Shoping span").textContent = soluongspgiohang;
    document.querySelector(".Shoping").style.color = "red";
  } else {
    document.querySelector(".Shoping span").textContent = "0";
    document.querySelector(".Shoping").style.color = "black";
  }
}

// Khởi tạo khi trang được tải
window.onload = function () {
  makeFilter();
  makeSP(getCurrentPage(), sosptrongtrang, ProductArrBoth);
  makeselectpage(getCurrentPage(), ProductArrBoth);
  updateshopingbag();
};
