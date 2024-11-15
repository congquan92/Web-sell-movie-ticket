<<<<<<< HEAD
const QLTK = document.querySelector(".b1");
const QLDH = document.querySelector(".b2");
const QLSP = document.querySelector(".b3");
const QLND = document.querySelector(".b4");
// console.log(QLTK, QLDH, QLSP, QLND);

QLTK.addEventListener("click", () => {
  QLTK.classList.add("act");
  QLDH.classList.remove("act");
  QLSP.classList.remove("act");
  QLND.classList.remove("act");
  leftpage.classList.remove("active");
  backgroudpage.style.display = "none";
});
QLDH.addEventListener("click", () => {
  QLTK.classList.remove("act");
  QLDH.classList.add("act");
  QLSP.classList.remove("act");
  QLND.classList.remove("act");
  leftpage.classList.remove("active");
  backgroudpage.style.display = "none";
});

//sp
QLSP.addEventListener("click", () => {
  QLTK.classList.remove("act");
  QLDH.classList.remove("act");
  QLSP.classList.add("act");
  QLND.classList.remove("act");
  leftpage.classList.remove("active");
  backgroudpage.style.display = "none";
});
QLND.addEventListener("click", () => {
  QLTK.classList.remove("act");
  QLDH.classList.remove("act");
  QLSP.classList.remove("act");
  QLND.classList.add("act");
  leftpage.classList.remove("active");
  backgroudpage.style.display = "none";
});
//huy
const leftpage = document.querySelector(".page-left");
const backgroudpage = document.querySelector(".backgroud-menu-respon");
const menu = document.querySelector(".menu1");
menu.addEventListener("click", () => {
  leftpage.classList.add("active");
  backgroudpage.style.display = "block";
});
backgroudpage.addEventListener("click", () => {
  leftpage.classList.remove("active");
  backgroudpage.style.display = "none";
});
=======
let ProductArrBoth = [
    {
      nameSP: "LEVENTS® | DORAEMON FAMOUS CAT TEE",
      img: "../img/products/p1-1.png",
      price: 370000,
      nametag: "aothun#",      colorr1: "gray",
      colorr2: "red",
      colorr3: "unset",
      img1: "./img/products/p1-1.png",
      img2: "./img/products/p1-2.jpg",
      img3: "./img/products/p1-2.jpg",
    },
    {
      nameSP: "LEVENTS® | DORAEMON COLLAB TEE",
      img: "../img/products/p2-1.png",
      price: 450000,
      nametag: "aothun#",      colorr1: " rgb(235, 232, 226)",
      colorr2: "black",
      colorr3: "unset",
      img1: "./img/products/p2-1.png",
      img2: "./img/products/p2-2.png",
      img3: "./img/products/p2-2.png",
    },
    {
      nameSP: "LEVENTS® DINOSAUR TEE",
      img: "../img/products/p3-1.jpg",
      price: 420000,
      nametag: "aothun#",      colorr1: " rgb(235, 232, 226)",
      colorr2: "black",
      colorr3: "blue",
      img1: "./img/products/p3-1.jpg",
      img2: "./img/products/p3-2.jpg",
      img3: "./img/products/p3-3.jpg",
    },
    {
      nameSP: "LEVENTS® INSIDE OUT TEE",
      img: "../img/products/p4-1.jpg",
      price: 390000,
      nametag: "aothun#",      colorr1: " rgb(235, 232, 226)",
      colorr2: "black",
      colorr3: "unset",
      img1: "./img/products/p4-1.jpg",
      img2: "./img/products/p4-2.jpg",
      img3: "./img/products/p4-2.jpg",
    },
    {
      nameSP: "LEVENTS® LOVEYOU300K SPECIAL TEE",
      img: "../img/products/p5-1.jpg",
      price: 300000,
      nametag: "aothun#",      colorr1: " rgb(235, 232, 226)",
      colorr2: "unset",
      colorr3: "unset",
      img1: "./img/products/p5-1.jpg",
      img2: "./img/products/p5-1.jpg",
      img3: "./img/products/p5-1.jpg",
    },
    {
      nameSP: "LEVENTS® FUNNY CROCODILE TEE",
      img: "../img/products/p6-1.jpg",
      price: 390000,
      nametag: "aothun#",      colorr1: "blue",
      colorr2: "black",
      colorr3: "unset",
      img1: "./img/products/p6-1.jpg",
      img2: "./img/products/p6.jpg",
      img3: "./img/products/p6-2.jpg",
    },
    {
      nameSP: "LEVENTS® PUNCH VARSITY",
      img: "../img/products/p7-1.jpg",
      price: 890000,
      nametag: "aokhoac#",      colorr1: "brown",
      colorr2: "black",
      colorr3: "unset",
      img1: "./img/products/p7-1.jpg",
      img2: "./img/products/p7-2.jpg",
      img3: "./img/products/p7-2.jpg",
    },
    {
      nameSP: "LEVENTS® SELFLOVE BOXY TEE",
      img: "../img/products/p8-1.jpg",
      price: 380000,
      nametag: "aothun#",      colorr1: " rgb(235, 232, 226)",
      colorr2: "black",
      colorr3: "unset",
      img1: "./img/products/p8-1.jpg",
      img2: "./img/products/p8-2.jpg",
      img3: "./img/products/p8-1.jpg",
    },
    {
      nameSP: "LEVENTS® | DORAEMON MINI CAT Polo",
      img: "../img/products/p9-1.jpg",
      price: 405000,
      nametag: "polo#",
      colorr1: " rgb(235, 232, 226)",
      colorr2: "black",
      colorr3: "unset",
      img1: "./img/products/p9-1.jpg",
      img2: "./img/products/p9-2.jpg",
      img3: "./img/products/p9-2.jpg",
    },
    {
      nameSP: "LEVENTS® MINI POPULAR Polo",
      img: "../img/products/p10-1.jpg",
      price: 370000,
      nametag: "polo#", 
      colorr1: " rgb(235, 232, 226)",
      colorr2: "black",
      colorr3: "unset",
      img1: "./img/products/p10-1.jpg",
      img2: "./img/products/p10-2.jpg",
      img3: "./img/products/p10-2.jpg",
    },
    {
      nameSP: "LEVENTS® STRIPE Polo",
      img: "../img/products/p11-1.jpg",
      price: 420000,
      nametag: "polo#", 
      colorr1: " rgb(235, 232, 226)",
      colorr2: "black",
      colorr3: "unset",
      img1: "./img/products/p11-1.jpg",
      img2: "./img/products/p11-2.jpg",
      img3: "./img/products/p11-2.jpg",
    },
    {
      nameSP: "LEVENTS® CINEMA SHIRT",
      img: "../img/products/p12-1.jpg",
      price: 420000,
      nametag: "somi#", 
      colorr1: "brown",
      colorr2: "black",
      colorr3: "unset",
      img1: "./img/products/p12-1.jpg",
      img2: "./img/products/p12-2.jpg",
      img3: "./img/products/p12-2.jpg",
    },
    {
      nameSP: "LEVENTS® CITIES SHIRT",
      img: "../img/products/p13-1.jpg",
      price: 420000,
      nametag: "somi#", 
      colorr1: " rgb(235, 232, 226)",
      colorr2: "black",
      colorr3: "unset",
      img1: "./img/products/p13-1.jpg",
      img2: "./img/products/p13-2.jpg",
      img3: "./img/products/p13-2.jpg",
    },
    {
      nameSP: "LEVENTS® | DORAEMON COLLAB ZIPPER Hoodie",
      img: "../img/products/p14-1.jpg",
      price: 645000,
      nametag: "hoodie#",
      colorr1: " rgb(235, 232, 226)",
      colorr2: "gray",
      colorr3: "unset",
      img1: "./img/products/p14-1.jpg",
      img2: "./img/products/p14-2.jpg",
      img3: "./img/products/p14-2.jpg",
    },
    {
      nameSP: "LEVENTS® POPULAR LOGO 2.0 Hoodie",
      img: "../img/products/p15-1.jpg",
      price: 590000,
      nametag: "hoodie#",
      colorr1: "yellow",
      colorr2: "gray",
      colorr3: "black",
      img1: "./img/products/p15-1.jpg",
      img2: "./img/products/p15-2.jpg",
      img3: "./img/products/p15-3.jpg",
    },
    {
      nameSP: "LEVENTS® MINI LOGO ZIPPER Hoodie",
      img: "../img/products/p16-1.jpg",
      price: 620000,
      nametag: "hoodie#",
      colorr1: " rgb(235, 232, 226)",
      colorr2: "gray",
      colorr3: "unset",
      img1: "./img/products/p16-1.jpg",
      img2: "./img/products/p16-2.jpg",
      img3: "./img/products/p16-2.jpg",
    },
    {
      nameSP: "LEVENTS® | DORAEMON COLLAB Hoodie",
      img: "../img/products/p17-1.jpg",
      price: 620000,
      nametag: "hoodie#",
      colorr1: " rgb(235, 232, 226)",
      colorr2: "black",
      colorr3: "unset",
      img1: "./img/products/p17-1.jpg",
      img2: "./img/products/p17-2.jpg",
      img3: "./img/products/p17-2.jpg",
    },
    {
      nameSP: "LEVENTS® BASIC Sweater",
      img: "../img/products/p18-1.jpg",
      price: 490000,
      nametag: "sweater#",
      colorr1: "gray",
      colorr2: "red",
      colorr3: "unset",
      img1: "./img/products/p18-1.jpg",
      img2: "./img/products/p18-2.jpg",
      img3: "./img/products/p18-2.jpg",
    },
    {
      nameSP: "LEVENTS® FUNNY CROCODILE Sweater",
      img: "../img/products/p19-1.jpg",
      price: 490000,
      nametag: "sweater#",
      colorr1: "brown",
      colorr2: "black",
      colorr3: "unset",
      img1: "./img/products/p19-1.jpg",
      img2: "./img/products/p19-2.jpg",
      img3: "./img/products/p19-2.jpg",
    },
  ];
  let typeproducts = [
    { typeid: "aothun#", typename: "Áo thun" },
    { typeid: "polo#", typename: "Polo" },
    { typeid: "somi#", typename: "Sơ mi" },
    { typeid: "hoodie#", typename: "Hoodie" },
    { typeid: "sweater#", typename: "Sweater" },
    { typeid: "aokhoac#", typename: "Áo khoác" },
  ];


  //Hàm tạo id SP
  function makeIDproduct() {
    for (let i = 0; i < ProductArrBoth.length; i++) {
      ProductArrBoth[i].idproduct = ProductArrBoth[i].nametag + (i+1);
    }
  }

//-------------------sp--------------
  //ham tao list san pham
  function listSP(){
    let s =''
    ProductArrBoth.forEach(index =>{
      makeIDproduct();
      const Price_pare = index.price.toLocaleString("vi-VN", {style: "currency", currency: "VND", });
      s+=`<div id="storage-body">
                 <div class="list">
                            <span class="idProduct">${index.idproduct}</span>
                            <img src="${index.img}" class="imgProduct" alt="Ảnh">
                            <span class="nameProduct">${index.nameSP}</span>
                            <span class="colorProduct">XANH LÁ</span>
                            <span class="countProduct">12</span>
                            <span class="priceProduct">${Price_pare}</span>
                            <span class="statusProduct" style="color:#32CD32">CÒN HÀNG</span>
                  </div>
            </div>`
    })
    return s;
  }
  // ----------------------------------
  
document.addEventListener("DOMContentLoaded", () => {
    const QLTK = document.querySelector('.b1');
    const QLDH = document.querySelector('.b2');
    const QLSP = document.querySelector('.b3');
    const QLND = document.querySelector('.b4');
  
    QLTK.addEventListener('click', () => {
      QLTK.classList.add('act');
      QLDH.classList.remove('act');
      QLSP.classList.remove('act');
      QLND.classList.remove('act');
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
      let s = '';
      s += `<div class="qlsp">
                <div class="title"><h1>QUẢN LÝ SẢN PHẨM</h1></div>
                <div class="btnAdd"><div class="circle"><i class="fa-solid fa-plus"></i></div></div>
                <div class="groupOption">
                        <select name="" class="box" id="comboType">
                            <option value="0">Tất cả</option><option value="1">Áo thun</option><option value="2">Polo</option><option value="3">Sơ mi</option><option value="4">Hoodie</option><option value="5">Sweater</option><option value="6">Áo khoác</option></select>
                        <select name="" class="box" id="comboStatus">
                            <option value="0">Tất cả</option>
                            <option value="1">CÒN HÀNG</option>
                            <option value="2">SẮP HẾT</option>
                            <option value="3">HẾT HÀNG</option>
                        </select>
                        <div class="box">
                            <div class="contentBox">
                                <div class="leftBox">
                                    <h2 id="amountOfProduct">19</h2>
                                    <span>SẢN PHẨM</span>
                                </div>
                                <i class="fa-solid fa-star"></i>
                            </div>
                        </div>
                </div>
                <div class="titleCol">
                    <span style="margin-right: 50px;" class="idProduct">ID</span>
                    <span style="margin-right: 60px;" class="imgProduct">Hình ảnh</span>
                    <span style="margin-right: 170px;" class="nameProduct">Tên sản phẩm</span>
                    <span class="colorProduct">Màu sắc</span>
                    <span class="countProduct">Số lượng</span>
                    <span class="priceProduct">Đơn giá</span>
                    <span class="statusProduct">Trạng thái</span>
                </div>`;
      document.querySelector('.page-right').innerHTML = s +listSP(); 

    });

    QLND.addEventListener('click', () => {
        QLTK.classList.remove('act');
        QLDH.classList.remove('act');
        QLSP.classList.remove('act');
        QLND.classList.add('act');
      });
    
  });

>>>>>>> bdff6e39245cfeda5711932f9efce250b3b8c7d8
