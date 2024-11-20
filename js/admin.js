let ArrProduct = JSON.parse(localStorage.getItem('products'))
// console.log(ArrProduct)

let typeproducts = [
    { typeid: "aothun#", typename: "Áo thun" },
    { typeid: "polo#", typename: "Polo" },
    { typeid: "somi#", typename: "Sơ mi" },
    { typeid: "hoodie#", typename: "Hoodie" },
    { typeid: "sweater#", typename: "Sweater" },
    { typeid: "aokhoac#", typename: "Áo khoác" },
  ];

// Hàm tạo id SP
function makeIDproduct() {
  for (let i = 0; i < ArrProduct.length; i++) {
    ArrProduct[i].idproduct = ArrProduct[i].nametag + (i + 1);
  }
}

//----------------sp-------------------------
// Hàm xác định trạng thái sản phẩm
function productSatus() {
  ArrProduct.forEach(i => {
    let status = 'C.XÁC ĐỊNH';
    let colorStatus = '#000';
    if (i.count > 10) {
      status = 'CÒN HÀNG';
      colorStatus = '#32CD32';
    } else if (i.count == 0) {
      status = 'HẾT HÀNG';
      colorStatus = '#EE4B2B';
    } else if (i.count <= 10) {
      status = 'SẮP HẾT';
      colorStatus = '#FDDA0D';
    }
    i.status = status;
    i.colorStatus = colorStatus;
  });
}

// Hàm tạo danh sách sản phẩm
function listSP(arr) {
  let s = '';
  makeIDproduct();
  productSatus();
  arr.forEach(product => {
    const Price = (product.price).toLocaleString("vi-VN", {style: "currency",currency: "VND",});
    s += `
            <div onclick="clickDelete(this)" oncontextmenu="clickchitiet(event,this)" class="list">
                <span style="width: 10%" class="idProduct">${product.idproduct}</span>
                <img style="width: 20%" src="${product.img}" class="imgProduct" alt="Ảnh">
                <span style="width: 30%" class="nameProduct">${product.nameSP}</span>
                <span style="width: 10%" class="colorProduct">${product.nameColor1}</span>
                <span style="width: 10%" class="countProduct">${product.count}</span>
                <span style="width: 10%" class="priceProduct">${Price}</span>
                <span style="width: 10%; color: ${product.colorStatus}" class="statusProduct" style="color:${product.colorStatus}">${product.status}</span>
            </div>
    `;
  });
  return s;
}
// Hàm đếm số lượng sản phẩm
function countProduct(arr) {
  return arr.length;
}
// Hàm tìm kiếm sản phẩm
function searchSP(){
  const comboType = document.getElementById('comboType').value;
  const comboStatus = document.getElementById('comboStatus').value;
  let filteredProducts = ArrProduct;
  if (comboType !== "0") {
    filteredProducts = filteredProducts.filter(product => product.nametag === comboType);
  }
  if (comboStatus !== "0") {
    filteredProducts = filteredProducts.filter(product => {
      if (comboStatus === "1") return product.status === "CÒN HÀNG";
      if (comboStatus === "2") return product.status === "SẮP HẾT";
      if (comboStatus === "3") return product.status === "HẾT HÀNG";
    });
  }
  document.querySelector('#storage-body').innerHTML= listSP(filteredProducts);
  document.querySelector('#amountOfProduct').innerText= countProduct(filteredProducts);
}
// Hàm render quản lý san pham
function renderqlsp(){
  document.querySelector('.page-right').innerHTML =  
            `<div class="qlsp">
                <div class="title"><h1>QUẢN LÝ SẢN PHẨM</h1></div>
                <div class="btnAdd"><div class="circle" onclick="btnAdd()"><i class="fa-solid fa-plus"></i></div></div>
                <div class="groupOption">
                        <select name="" class="box" id="comboType" onchange="searchSP()" >
                            <option value="0">Tất cả</option>
                            <option value="aothun#">Áo thun</option>
                            <option value="polo#">Polo</option>
                            <option value="somi#">Sơ mi</option>
                            <option value="hoodie#">Hoodie</option>
                            <option value="sweater#">Sweater</option>
                            <option value="aokhoac#">Áo khoác</option>
                        </select>
                        <select name="" class="box" id="comboStatus" onchange="searchSP()" >
                            <option value="0">Tất cả</option>
                            <option value="1">CÒN HÀNG</option>
                            <option value="2">SẮP HẾT</option>
                            <option value="3">HẾT HÀNG</option>
                        </select>
                        <div class="box">
                            <div class="contentBox">
                                <div class="leftBox">
                                    <h2 id="amountOfProduct">0</h2>
                                    <span>SẢN PHẨM</span>
                                </div>
                                <i class="fa-solid fa-star"></i>
                            </div>
                        </div>
                </div>
                <div class="titleCol">
                    <span style="width: 10%" class="idProduct">ID</span>
                    <span style="width: 20% ; padding-left: 7%" class="imgProduct">Hình ảnh</span>
                    <span style="width: 30% ; padding-left: 5%" class="nameProduct">Tên sản phẩm</span>
                    <span style="width: 10%" class="colorProduct">Màu sắc</span>
                    <span style="width: 10%" class="countProduct">Số lượng</span>
                    <span style="width: 10%" class="priceProduct">Đơn giá</span>
                    <span style="width: 10%" class="statusProduct">Trạng thái</span>
                </div>
                <div id="storage-body"></div>`;
                searchSP();   
}
function clickDelete(e){
  const idProduct = e.querySelector(".idProduct").textContent;
  for(let i = 0; i<countProduct(ArrProduct);i++){
    if(ArrProduct[i].idproduct === idProduct){
      ArrProduct.splice(i, 1);   // 1 la vi tri roi 
            i--;
            break;
    }
  }
  localStorage.setItem('products',JSON.stringify(ArrProduct));
  renderqlsp();
}

function clickchitiet(e,elemant){
  e.preventDefault();
  console.log(elemant);
}
// ---------------------------------------------------------------------------------
// thong ke
const listSweater = ArrProduct.filter(i => i.nametag === 'sweater#');
const listSomi = ArrProduct.filter(i => i.nametag === 'somi#');
const listHoodie = ArrProduct.filter(i => i.nametag === 'hoodie#');
const listAokhoac = ArrProduct.filter(i => i.nametag === 'aokhoac#');
const listAothun = ArrProduct.filter(i => i.nametag === 'aothun#');

const namee = ['Áo khoác', 'Sweater', 'Hoodie', 'Áo thun', 'Sơ mi'];
const sumList = [
  listAokhoac.reduce((i, x) => i + x.sell, 0),
  listSweater.reduce((i, x) => i + x.sell, 0),
  listHoodie.reduce((i, x) => i + x.sell, 0),
  listAothun.reduce((i, x) => i + x.sell, 0),
  listSomi.reduce((i, x) => i + x.sell, 0),
];
// Hàm tạo biểu đồ
function createChart() {
  const ctx = document.getElementById('grapbox').getContext('2d');
  const chartData = {
    labels: namee ,
    datasets: [{
      label: 'Đã Bán',
      data: sumList ,
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(75, 192, 192)',
        'rgb(255, 205, 86)',
        'rgb(201, 203, 207)',
        'rgb(54, 162, 235)'
      ]
    }]
  };
  new Chart(ctx, {
    type: 'polarArea',
    data: chartData,
    options: {}
  });
}

//mo menu them san pham
function btnAdd(){
  let backround = document.querySelector('.outbackround');
  let s= document.querySelector('.btnAddproduct');
  s.classList.add('actz');
  s.classList.remove('nonez');
  backround.classList.add('actoutbackground');
}
//dong menu them san pham
function closeTabb(){
let backround = document.querySelector('.outbackround');
let s= document.querySelector('.btnAddproduct');
s.classList.remove('actz');
s.classList.add('nonez');
backround.classList.remove('actoutbackground');
}
//chap nhan
function btnAccept(){  
let background = document.querySelector('.outbackround');  
let l = document.querySelector('.btnAddproduct');  
l.classList.remove('actz');  
l.classList.add('nonez');  
background.classList.remove('actoutbackground');  

const nameAddProduct = document.getElementById('nameAddProduct').value.trim();  
const colorAddProduct = document.getElementById('colorAddProduct').value.trim();  
const codecolorAddProduct = document.getElementById('codecolorAddProduct').value.trim();  
const countAddProduct = parseInt(document.getElementById('countAddProduct').value.trim());  
const priceAddProduct = parseFloat(document.getElementById('priceAddProduct').value.trim());  
const typeAddProduct = document.getElementById('typeAddProduct').value.trim();  

// Validation  
if (!nameAddProduct || !colorAddProduct || isNaN(countAddProduct) || isNaN(priceAddProduct)) {  
    console.error('Please complete all required fields with valid data.');  
    return; // Exit the function if validation fails  
}  

const id = `${typeAddProduct}#${countProduct(ArrProduct) + 1}`;  
const imgElement = document.querySelector('.imgPreview');  
const img = imgElement ? imgElement.src : ''; // Null check for imgPreview  
const nametag = `${typeAddProduct}#`;  

const newProduct = createProduct({  
    id: id,  
    nameSP: nameAddProduct,  
    img: img,  
    price: priceAddProduct,  
    count: countAddProduct,  
    nametag: nametag,  
    nameColor1: colorAddProduct,  
    namecolorr1Img: codecolorAddProduct,  
});  

ArrProduct.push(newProduct); 
localStorage.setItem('products',JSON.stringify(ArrProduct));
renderqlsp();
renderBtnadd();//tai lai
}  


function createProduct({id,nameSP,img,price,count,nametag,nameColor1,namecolorr1Img,sell}){
return {
  id:id,
  nameSP:nameSP,
  img:img,
  price:price,
  count:count,
  nametag:nametag,
  nameColor1:nameColor1,
  namecolorr1Img:namecolorr1Img,
  sell:sell
}
}
// tai anh len
function onloandimg(input){
const imageContainer = document.getElementById("imageContainer");
const file = input.files[0]; // Lấy tệp đầu tiên

if (file) {
  const reader = new FileReader();
  // Khi đọc xong file, hiển thị ảnh
  reader.onload = function (e) {
    const img = document.createElement("img");
    img.src = e.target.result; // Gán URL ảnh vào thẻ <img>
    img.classList.add("imgPreview");
    imageContainer.innerHTML = ""; // Xóa nội dung cũ
    imageContainer.appendChild(img); // Thêm ảnh mới
  };
  reader.readAsDataURL(file); // Đọc file dưới dạng Data URL
}
}

//ham loc san tk 
function listSearch_tk(){
  let s='';
  let arr =[...ArrProduct];
  let typeProduct = document.getElementById('typeProduct').value;
  if(typeProduct !== '0'){
     arr= ArrProduct.filter(i => i.nametag ===typeProduct);
  }
  rankProfit(arr);
}

// Hàm render quản lý thống kê
function renderqltk(){
  document.querySelector('.page-right').innerHTML =`<div class = qltk>
  <h1>SỐ LIỆU THỐNG KÊ</h1>
  <div class="overview">
      <div class="chart ff"><canvas style="display: block; box-sizing: border-box;" id="grapbox" width="541px" height="541px"></canvas></div>
      <div class="ll">
         <div class="boder first">
          <h1>Thống kê</h1>    
         </div> 
         <div class="boder">
              <div class="left-boder">
                  <h2 style="color: blue;">${sumList.reduce((i,n) => i+n,0)}</h2>
                  <h2 style="font-weight: 200;">ĐÃ BÁN</h2> 
              </div>
              <div class="right-boder"><i style="font-size: 40px;font-weight: 200;" class='bx bx-cart-alt'></i></div>   
         </div> 
         <div class="boder">
              <div class="left-boder">
                  <h2 style="color: blue;">${(ArrProduct.reduce((i,n) => i+((n.sell)*(n.price)),0)).toLocaleString("vi-VN", {style: "currency",currency: "VND",})}</h2>
                  <h2 style="font-weight: 200;">DOANH THU</h2>
              </div>
              <div class="right-boder"><i style="font-size: 40px;font-weight: 200;" class='bx bx-money-withdraw'></i></div>   
         </div> 
      </div>
   </div>
</div>
<div class="part">
  <div style="width: 70%" class="rankProfit">
      <div style="margin-top: 0px; position:unset; " class="titleCol">
            <span style="width: 30%;" class="name">TÊN SẢN PHẨM</span>
            <span style="width: 30%;" class="sold">Đã bán</span>
            <span style="width: 10%; float: right" class="profits">DOANH THU</span>
      </div>
      <div id="rankProfit-body"></div>
  </div>
  <div style="width: 30%" onchange="listSearch_tk()" class="data-number">
              <select name="" id="typeProduct" class="box">
                    <option value="0">Tất cả</option>
                    <option value="aothun#">Áo thun</option>
                    <option value="polo#">Polo</option>
                    <option value="somi#">Sơ mi</option>
                    <option value="hoodie#">Hoodie</option>
                    <option value="sweater#">Sweater</option>
                    <option value="aokhoac#">Áo khoác</option>
              </select>
    </div>
</div>`
createChart(); // Tạo biểu đồ khi nhấp vào "QUẢN LÝ THỐNG KÊ"
rankProfit(ArrProduct);
}
//ham tao doanh thu
function rankProfit(arr){
  let s='';
  const sortArrsell=arr.sort((a,b) => (b.sell*b.price)-(a.sell*a.price));
  sortArrsell.forEach(i=>{
    s+=` <div class="rankProfit-Child">
            <span style="width: 30%;" class="name">${i.nameSP}</span>
            <span style="width: 30%;" class="sold">${i.sell}</span>
            <span style="width: 10%;  class="profits">${(i.price *i.sell).toLocaleString("vi-VN", {style: "currency",currency: "VND",})}</span>
           </div>`
  })
  document.getElementById('rankProfit-body').innerHTML=s;
}

// Gọi hàm renderqltk khi trang tải
window.onload = () => {
  renderqltk();
};

function renderBtnadd(){
  let s='';
  s+=`<div id="tabAddProduct">
                <div class="headTab">
                    <span class="title">THÊM SẢN PHẨM</span>
                    <span onclick ="closeTabb()" class="closeTab">ĐÓNG</span>
                </div>
                <form action="">
                  <div class="bodyTab">
                      <div class="leftTab">
                          <div class="contentTab">
                              <span>STT: </span>
                              <span>${countProduct(ArrProduct)+1}</span>
                          </div>
                          <div class="contentTab">
                              <div id="imageContainer"></div>
                              <input type="file" name="file" id="file" class="inputfile" accept="image/*" onchange="onloandimg(this)">
                              <label style="margin-left:-75px;" for="file">Chọn ảnh</label>
                          </div>
                              <div class="contentTab"> 
                                  <span>Tên sản phẩm: </span>
                                  <input type="text" placeholder="Tên sản phẩm" value="" id="nameAddProduct">
                              </div>
                              <div class="contentTab colorInput">
                                  <span>Màu sắc: </span>
                                  <input type="text" placeholder="[ĐEN, TRẮNG, ....]" value="" id="colorAddProduct">
                                  <input type="text" placeholder="Mã màu [#000,#fff]" value="" id="codecolorAddProduct">
                              </div>
                              <div class="contentTab">
                                  <span>Số lượng: </span>
                                  <input type="text" id="countAddProduct" placeholder="Số lượng" value="">
                              </div>
                      </div>
                      <div class="rightTab">
                                  <div class="contentTab">
                                      <span>Đơn giá: </span>
                                      <input type="text" id="priceAddProduct" placeholder="Đơn giá" value="">
                                  </div>
                                  <div class="contentTab">
                                      <span>Tên hình </span>
                                      <input type="text" placeholder="Tên hình" value="" id="nameimgAddProduct">
                                  </div>
                                  <div class="contentTab">
                                      <span>Loại </span>
                                      <input type="text" placeholder="Loại sản phẩm" value="" id="typeAddProduct">
                                  </div>
                      </div>
                  </div>
                  <div onclick="btnAccept()" class="btnAccept">
                      <div class="content-btn">
                          <buttom type="sumbit">HOÀN TẤT</buttom>
                      </div>
                  </div>
                </form>
            </div>`
            document.querySelector('.btnAddproduct').innerHTML=s;
}
// -------------------------------------------------------------------

    const QLTK = document.querySelector('.b1');
    const QLDH = document.querySelector('.b2');
    const QLSP = document.querySelector('.b3');
    const QLND = document.querySelector('.b4');
    
    QLTK.addEventListener('click', () => {
      QLTK.classList.add('act');
      QLDH.classList.remove('act');
      QLSP.classList.remove('act');
      QLND.classList.remove('act');
      location.reload();
  
    });
  
    QLDH.addEventListener('click', () => {
      QLTK.classList.remove('act');
      QLDH.classList.add('act');
      QLSP.classList.remove('act');
      QLND.classList.remove('act');
    });
    
    //sp
    QLSP.addEventListener('click', () => {
      QLTK.classList.remove('act');
      QLDH.classList.remove('act');
      QLSP.classList.add('act');
      QLND.classList.remove('act');
      renderqlsp();
      renderBtnadd();

    });

    QLND.addEventListener('click', () => {
        QLTK.classList.remove('act');
        QLDH.classList.remove('act');
        QLSP.classList.remove('act');
        QLND.classList.add('act');
        renderqlnd();
      });
  
// -----------------------------------------------

//thuy 
let acc_1 = (
  {
    idAccount: "1",
    nameAccount: "Tran ha thanh thuy",
    phoneAccount: "0987654321",
    emailAccount: "",
    usernameAccount: "thuyyyyy",
    passwordAccount: "123456789",
    statusAccount: "Binh thuong"
  });
let acc_2 = (
  {
    idAccount: "2",
    nameAccount: "Tran ha thanh thuy",
    phoneAccount: "0987654321",
    emailAccount: "",
    usernameAccount: "thuyyyyy",
    passwordAccount: "123456789",
    statusAccount: "Binh thuong"
  });
let acc_3 = (
  {
    idAccount: "3",
    nameAccount: "Tran ha thanh thuy",
    phoneAccount: "0987654321",
    emailAccount: "",
    usernameAccount: "thuyyyyy",
    passwordAccount: "123456789",
    statusAccount: "Binh thuong"
  });
let arrAccounts = [acc_1, acc_2, acc_3];
localStorage.setItem('accounts', JSON.stringify(arrAccounts));
// tao danh sach nguoi dung
function listAccounts() {
  let accounts = JSON.parse(localStorage.getItem('accounts')) || [];
  let s = '';
  accounts.forEach(account => {
    s +=
      `<div class="listAcc" style="text-align: center; border-bottom: 1px solid rgba(112, 112, 112, 0.3);">
        <span class="idAccount" style="width: 5%;">${account.idAccount}</span>
        <span class="nameAccount" style="width: 26%;">${account.nameAccount}</span>
        <span class="phoneAccount" style="width: 10%;">${account.phoneAccount}</span>
        <span class="emailAccount" style="width: 10%;">${account.emailAccount}</span>
        <span class="usernameAccount" style="width: 17%;">${account.usernameAccount}</span>
        <span class="passwordAccount" style="width: 12%;">${account.passwordAccount}</span>
        <span class="statusAccount" style="width: 10%;">${account.statusAccount}</span>
        <button class="btnAccount" style="width: 10%;" onclick="toggleLockUser('${account.idAccount}')">${account.statusAccount === 'Da khoa' ? 'Mở khóa' : 'Khóa'}</button>
      </div>`;
  });
  return s;
}
// kiem tra tai khoan
function checkAccount() {
  let accounts = JSON.parse(localStorage.getItem('accounts')) || [];
  let locked = 0;
  for (let acc of accounts) {
    if (acc.statusAccount === "Da khoa") {
      locked++;
    }
  }
  document.getElementById('amountOfAccount').innerHTML = accounts.length;
  document.getElementById('amountLockedAccount').innerHTML = locked;
  document.getElementById('amountUnlockedAccount').innerHTML = accounts.length - locked;
  document.getElementById('manageCustomer-body').innerHTML = listAccounts();
}
function toggleLockUser(idAccount) {
  let accounts = JSON.parse(localStorage.getItem('accounts')) || [];
  let user = accounts.find(u => u.idAccount === idAccount);

  if (user) {
    user.statusAccount = user.statusAccount === 'Da khoa' ? 'Binh thuong' : 'Da khoa';
    localStorage.setItem('accounts', JSON.stringify(accounts));
    checkAccount();
  }
}
function renderqlnd() {
  document.querySelector('.page-right').innerHTML =
    `<div class="qlnd">
                <div class="title">
                    <h1>QUẢN LÝ NGƯỜI DÙNG</h1>
                </div>
                <div class="manageCustomer">
                    <div class="areNumberAboutAccounts">
                        <div class="box">
                            <div class="contentBox">
                                <div class="leftContent">
                                    <h2 id="amountOfAccount">0</h2>
                                    <span>TÀI KHOẢN</span>
                                </div>
                                <div class="rightContent">
                                    <i class='bx bxs-user-account'></i>
                                </div>
                            </div>
                        </div>
                        <div class="box">
                            <div class="contentBox">
                                <div class="leftContent">
                                    <h2 id="amountUnlockedAccount">0</h2>
                                    <span>TK HOẠT ĐỘNG</span>
                                </div>
                                <div class="rightContent">
                                    <i class='bx bxs-lock-open'></i>
                                </div>
                            </div>
                        </div>
                        <div class="box">
                            <div class="contentBox">
                                <div class="leftContent">
                                    <h2 id="amountLockedAccount">0</h2>
                                    <span>TK BỊ KHÓA</span>
                                </div>
                                <div class="rightContent">
                                    <i class='bx bx-key'></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="titleCol" style="text-align: center;">
                        <span class="idAccount" style="width: 5%;">ID</span>
                        <span class="nameAccount" style="width: 26%;">Họ và tên</span>
                        <span class="phoneAccount" style="width: 10%;">SĐT</span>
                        <span class="emailAccount" style="width: 10%;">Email</span>
                        <span class="usernameAccoutn" style="width: 17%;">Tên đăng nhập</span>
                        <span class="passwordAccount" style="width: 12%;">Mật khẩu</span>
                        <span class="statusAccount" style="width: 10%;">Trạng thái</span>
                        <span class="Chitiet" style="width: 10%;">Chi tiết</span>
                    </div>
                    <div id="manageCustomer-body">
                        
                    </div>
                </div>
            </div>`;
  checkAccount();
}