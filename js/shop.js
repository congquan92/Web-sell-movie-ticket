import { ProductArrBoth } from "./Products.js";
const sale = 0.5;
const sosptrongtrang = 12;
let sp = "";
let max_page = 0;

// Hàm tạo sản phẩm trên trang
function makeSP(trang, sosptrongtrang, arr) {
  sp = "";
  for (let i = (trang - 1) * sosptrongtrang; i < trang * sosptrongtrang; i++) {
    if (i >= arr.length) break;

    const originalPrice = (arr[i].price + arr[i].price * sale).toLocaleString(
      "vi-VN",
      { style: "currency", currency: "VND" }
    );
    const salePrice = arr[i].price.toLocaleString("vi-VN", {
      style: "currency",
      currency: "VND",
    });
    sp += `
      <div class="item_1">
        <div class="img-item"><img class="srcimg" src="${
          arr[i].img
        }" alt=""></div>
        <div class="listColor" id="listColor_item1">
          <div onclick="clickC1(this)" class="itemColor1" data-src="${
            arr[i].img1
          }" style="background-color: ${arr[i].colorr1};"></div>
          <div onclick="clickC1(this)" class="itemColor2" data-src="${
            arr[i].img2
          }" style="background-color: ${arr[i].colorr2};"></div>
          <div onclick="clickC1(this)" class="itemColor3" data-src="${
            arr[i].img3
          }" style="background-color: ${arr[i].colorr3};"></div>
        </div>
        <div class="inf-item">
          <h4>${arr[i].nameSP}</h4>
          <p style="font-style: italic;">Giá gốc: <span style="text-decoration: line-through; font-style: italic;">${originalPrice}</span></p>
          <p style="font-style: italic;">Giá khuyến mãi: <span style="font-size: larger; font-style: italic;">${salePrice}</span></p>
        </div>
        <div class="buy"><i class="fa-solid fa-wallet"></i>Mua Ngay</div>
        <a href="#" style="text-decoration: none; color: black;" onclick='loadSingleProduct(${JSON.stringify(
          arr[i]
        )})' class="buy"><i class="fa-solid fa-circle-info"></i>Chi Tiết</a>
      </div>
    `;
  }
  document.getElementById("all-item").innerHTML = sp;
}

// Hàm phân trang
function makeselectpage(index, arr) {
  const max_length_arrayproduct = arr.length;
  max_page = Math.ceil(max_length_arrayproduct / sosptrongtrang);

  let s = `<a href="#" class="pagination_item" id="before"><span><i class='bx bx-left-arrow-alt'></i></span></a>`;

  if (index > 1) {
    s += `<a href="#" class="pagination_item" id="span1"><span>${
      index - 1
    }</span></a>`;
  }

  s += `<a href="#" class="pagination_item act" id="span2"><span>${index}</span></a>`;

  if (index < max_page) {
    s += `<a href="#" class="pagination_item" id="span3"><span>${
      index + 1
    }</span></a>`;
  }

  s += `<a href="#" class="pagination_item" id="next"><span><i class='bx bx-right-arrow-alt'></i></span></a>`;

  document.querySelector("#body-widePagination").innerHTML = s;

  const page1 = document.getElementById("span1");
  const page2 = document.getElementById("span2");
  const page3 = document.getElementById("span3");
  const next = document.getElementById("next");
  const before = document.getElementById("before");

  if (index > 1) {
    before.style.visibility = "visible";
  } else {
    before.style.visibility = "hidden";
  }

  if (index >= max_page) {
    next.style.visibility = "hidden";
  } else {
    next.style.visibility = "visiable";
  }

  if (page1) {
    page1.addEventListener("click", () => {
      const page1content = parseInt(page1.textContent);
      makeSP(page1content, sosptrongtrang, arr);
      makeselectpage(page1content, arr);
    });
  }

  if (page2) {
    page2.addEventListener("click", () => {
      const page2content = parseInt(page2.textContent);
      makeSP(page2content, sosptrongtrang, arr);
      makeselectpage(page2content, arr);
    });
  }

  if (page3) {
    page3.addEventListener("click", () => {
      const page3content = parseInt(page3.textContent);
      makeSP(page3content, sosptrongtrang, arr);
      makeselectpage(page3content, arr);
    });
  }

  if (next) {
    next.addEventListener("click", () => {
      const nextPage = index + 1;
      if (nextPage <= max_page) {
        makeSP(nextPage, sosptrongtrang, arr);
        makeselectpage(nextPage, arr);
      }
    });
  }

  if (before) {
    before.addEventListener("click", () => {
      const previousPage = index - 1;
      if (previousPage > 0) {
        makeSP(previousPage, sosptrongtrang, arr);
        makeselectpage(previousPage, arr);
      }
    });
  }
}

// Hàm chạy khi trang tải
window.onload = function () {
  makeSP(1, sosptrongtrang, ProductArrBoth);
  makeselectpage(1, ProductArrBoth);
};

// sort
function sapxeptang(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (parseInt(arr[i].price) > parseInt(arr[j].price)) {
        let tmp = arr[i];
        arr[i] = arr[j];
        arr[j] = tmp;
      }
    }
  }
}
function sapxepgiam(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (parseInt(arr[i].price) < parseInt(arr[j].price)) {
        let tmp = arr[i];
        arr[i] = arr[j];
        arr[j] = tmp;
      }
    }
  }
}

//radio-search
function mangproduct_radio(radio, arr) {
  let mang = [];
  for (let i = 0; i < arr.length; i++) {
    // Kiểm tra nếu nametag của đối tượng trong mảng trùng với radio đã chọn
    if (arr[i].nametag == radio) {
      mang.push(arr[i]);
    }
  }
  return mang;
}
let filteredProducts = ProductArrBoth; // Khởi tạo mảng ban đầu
let radiochecked = -1;

const radio_btn = document.querySelectorAll(".radio-btn");
radio_btn.forEach((item, i) => {
  item.addEventListener("click", (e) => {
    if (item.checked && radiochecked !== i) {
      radiochecked = i;
      let span = item.nextElementSibling.textContent.trim(); // Lấy giá trị span
      filteredProducts = mangproduct_radio(span, ProductArrBoth);
    } else if (radiochecked >= 0 && i === radiochecked) {
      item.checked = false;
      radiochecked = -1;
      filteredProducts = ProductArrBoth;
    }
    makeSP(1, sosptrongtrang, filteredProducts); // Hiển thị sản phẩm
    makeselectpage(1, filteredProducts); //Tạo phân trang
  });
});

const sort = document.querySelector("#sort");
sort.addEventListener("change", () => {
  let choice = parseInt(sort.value);

  // Sử dụng bản sao của mảng gốc để khôi phục khi cần
  let filteredProducts_copy = JSON.parse(JSON.stringify(filteredProducts));
  console.log(filteredProducts);
  switch (choice) {
    case 1:
      sapxeptang(filteredProducts_copy);
      break;
    case 2:
      sapxepgiam(filteredProducts_copy);
      break;
    case 3:
      filteredProducts_copy = filteredProducts;
      break;
  }
  // Hiển thị mảng sau khi sắp xếp hoặc khôi phục
  makeSP(1, sosptrongtrang, filteredProducts_copy);
  makeselectpage(1, filteredProducts_copy);
});

//doi mau sac quan ao
function clickC1(e) {
  const newSrc = e.getAttribute("data-src"); //data-src chứa URL của hình ảnh tương ứng với màu đó.
  const imgElement = e.closest(".item_1").querySelector(".srcimg"); // tìm phần tử cha gần nhất có lớp item_1 ếp tục tìm phần tử ảnh bên trong phần tử cha item_1
  imgElement.setAttribute("src", newSrc);
}

//chi tiet sp
function loadSingleProduct(e) {
  const originalPrice = (e.price + e.price * sale).toLocaleString("vi-VN", {
    style: "currency",
    currency: "VND",
  });
  const salePrice = e.price.toLocaleString("vi-VN", {
    style: "currency",
    currency: "VND",
  });
  const s = `<div class="both_">
               <div class="left_">
                    <div class="img_" id="imgMain">
                        <img class="srcimg" src="${e.img}" alt="">
                    </div>
               </div>

                <div class="right_">
                    <div class="content_">
                        <h2 id="name">${e.nameSP}</h2>
                        <div class="groupPrice">
                            <h3>GIÁ GỐC : <span style="text-decoration: line-through; font-style: italic;">${originalPrice}</span></h3>
                            <h3>GIÁ KHUYẾN MÃI : <span style="font-weight: bolder; font-style: italic;">${salePrice}</span></h3>
                        </div>

                        <h4 id="color">Màu sắc: XANH LÁ</h4>
                        <div id="listColor_pdt" class="listColor">
                            <div onclick="clickC_1(this)" class="itemColor1" data-src="${e.img1}" style="background-color: ${e.colorr1};"></div>
                            <div onclick="clickC_1(this)" class="itemColor2" data-src="${e.img2}" style="background-color: ${e.colorr2};"></div>
                            <div onclick="clickC_1(this)" class="itemColor3" data-src="${e.img3}" style="background-color: ${e.colorr3};"></div>
                        </div>
                        <div class="countProduct">
                            <h4>Số lượng: </h4>
                            <li><i class="fa-solid fa-minus"></i></li>
                            <input type="text" min="min" max="max" readonly="readonly" id="counteInp">
                            <li><i class="fa-solid fa-plus"></i></li>
                        </div>
                        <div class="choiceSize">
                            <h3>Size: </h3>
                            <select name="" id="size">
                                <option value="">Chọn size</option>
                                <option value="A">A</option>
                                <option value="B">B</option>
                                <option value="C">C</option>
                                <option value="D">D</option>
                            </select>
                        </div>
                        <div class="addToCart">
                            <p>Thêm vào giỏ</p>
                        </div>
                        <div class="content_infoProduct">
                            <h3>THÔNG TIN SẢN PHẨM</h3>
                            <span id="contentInfo">${e.nameSP}
                                <br>
                                MATERIAL: LÌ VEN ORIGINAL - Phiên bản bề mặt vải không đổ lông mang cảm giác thoáng mát
                                <br>
                                SIZE: A/B/C/D
                                <br>
                                Sản phẩm thuộc Special Collection “Make everything popular” DORAEMON | LEVENTS®
                            </span>
                        </div>
                        <div class="content_guideSize">
                            <h3>QUY ƯỚC KÍCH THƯỚC</h3>
                            <span id="contentGuide">Form áo được Fit size theo form và tiêu chuẩn tương đối của người Việt Nam, nếu bạn đang cân nhắc giữa hai size, nên chọn size lớn hơn.
                                <ul>
                                    <li>Size A: Chiều cao từ 1m50 - 1m65, cân nặng trên 55kg</li>
                                    <li>Size B: Chiều cao từ 1m65 - 1m72, cân nặng dưới 65kg</li>
                                    <li>Size C: Chiều cao từ 1m70 - 1m77, cân nặng dưới 80kg </li>
                                    <li>Size D: Chiều cao trên 1m72, cân nặng dưới 95kg.</li>
                                </ul>
                                <img src="./img/SizeChart.jpg" alt="">
                                <div class="back" onclick="goBack()"><i class="fa-solid fa-arrow-left"></i>Trở Lại</div>
                            </span>
                        </div>
                    </div>
                </div>
            </div>`;
  document.getElementsByClassName("both")[0].innerHTML = s;
}

//nut tro lai
function goBack() {
  window.location.href = "shop.html";
}

//doi mau sac quan ao trong chi textIndent
function clickC_1(e) {
  const dataimg = e.getAttribute("data-src");
  const srcold = e.closest(".both_").querySelector(".srcimg"); //tim phan tu cha -> con co class srcimg
  srcold.setAttribute("src", dataimg);
}
