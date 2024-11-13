const QLTK = document.querySelector('.b1')
const QLDH = document.querySelector('.b2')
const QLSP = document.querySelector('.b3')
const QLND = document.querySelector('.b4')
// console.log(QLTK, QLDH, QLSP, QLND); 

QLTK.addEventListener('click',()=>{
    QLTK.classList.add('act');
    QLDH.classList.remove('act');
    QLSP.classList.remove('act');
    QLND.classList.remove('act');  
})
QLDH.addEventListener('click',()=>{
    QLTK.classList.remove('act');
    QLDH.classList.add('act');
    QLSP.classList.remove('act');
    QLND.classList.remove('act');
})

//sp
QLSP.addEventListener('click',()=>{
    QLTK.classList.remove('act');
    QLDH.classList.remove('act');
    QLSP.classList.add('act');
    QLND.classList.remove('act');

    


})
QLND.addEventListener('click',()=>{
    QLTK.classList.remove('act');
    QLDH.classList.remove('act');
    QLSP.classList.remove('act');
    QLND.classList.add('act');
})