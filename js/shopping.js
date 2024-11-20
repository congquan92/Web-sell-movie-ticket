let Product = JSON.parse(localStorage.getItem("arrayproducts"));
let arrayshopbag = JSON.parse(localStorage.getItem("arrayshopbag")) || [];
let soluong = 0; // Số lượng sản phẩm trong giỏ hàng
let tongtien = 0; // Tổng tiền của giỏ hàng

// Hiển thị thông tin giỏ hàng
function shopinginfo() {
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
  for (let i = 0; i < arrayshopbag.length; i++) {
    soluong += parseInt(arrayshopbag[i].soluong);
    tongtien +=
      parseInt(arrayshopbag[i].obj.price) * parseInt(arrayshopbag[i].soluong);
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
}

// Tính toán số lượng và tổng tiền của giỏ hàng
function chitiethoadon() {
  soluong = 0;
  tongtien = 0;
  for (let i = 0; i < arrayshopbag.length; i++) {
    soluong += parseInt(arrayshopbag[i].soluong);
    tongtien +=
      parseInt(arrayshopbag[i].obj.price) * parseInt(arrayshopbag[i].soluong);
  }
  document.getElementById("totalCount").textContent = soluong;
  document.getElementById("totalBill").textContent = tongtien + "₫";
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
  arrayshopbag.splice(index, 1); // Xóa sản phẩm khỏi giỏ hàng
  localStorage.setItem("arrayshopbag", JSON.stringify(arrayshopbag)); // Lưu lại giỏ hàng
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
  });
});

// Thêm sản phẩm vào giỏ hàng
let soluongspgiohang = JSON.parse(localStorage.getItem("countarrayshopbag"));
function kiemtradangnhap() {
  let user = JSON.parse(localStorage.getItem("currentUser"));
  if (user != null) {
    return true;
  }
  return false;
}
function addShopingBag(item) {
  let toast = document.querySelector(".toast_info");
  if (kiemtradangnhap() == true) {
    item.size = document.querySelector("#size").value;
    item.soluong = document.querySelector("#counteInp").value;
    // Thêm sản phẩm vào giỏ hàng
    arrayshopbag.push(item);
    localStorage.setItem("arrayshopbag", JSON.stringify(arrayshopbag)); // Lưu lại giỏ hàng
    soluongspgiohang++;
    if (soluongspgiohang > 0) {
      document.querySelector(".Shoping span").textContent = soluongspgiohang;
      document.querySelector(".Shoping").style.color = "red";
    }
    localStorage.setItem("countarrayshopbag", JSON.stringify(soluongspgiohang));
    // toast.innerHTML = `<div id="toast">
    //     <div class="toast toast--success ">
    //       <div class="toast_icon">
    //         <i class="fa-solid fa-circle-check"></i>
    //       </div>
    //       <div class="toast_body">
    //         <h3 class="toast_tittle">Success</h3>
    //         <p class="toast_msg">Đã Thêm vào giỏ hàng</p>
    //       </div>
    //       <div class="toast_close"><i class="fa-solid fa-xmark"></i></div>
    //     </div>
    //   </div>`;
  } else {
    //   toast.innerHTML = `<div class="toast toast--error">
    //   <div class="toast_icon">
    //     <i class="fa-solid fa-circle-check"></i>
    //   </div>
    //   <div class="toast_body">
    //     <h3 class="toast_tittle">Error</h3>
    //     <p class="toast_msg">Vui lòng đăng nhập</p>
    //   </div>
    //   <div class="toast_close"><i class="fa-solid fa-xmark"></i></div>
    // </div>`;
  }
}
