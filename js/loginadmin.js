const email = document.querySelector('.input-box input[type="email"]')
const password = document.querySelector('.input-box input[type ="password"]')
const submit = document.querySelector('button[type=submit]')

submit.addEventListener('click',(e)=>{
    if(email.value==='admin' && password.value ==='123456'){
        window.location.href='./admin/admin.html'
    }else{
        alert('Wrong Password')
    } 
})