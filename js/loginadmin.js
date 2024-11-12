const emailLogin = document.querySelector('.input-box input[type="email"]')
const passwordLogin = document.querySelector('.input-box input[type ="password"]')
const submitLogin = document.querySelector('button[type=submit]')
const x = document.querySelector('button[type=submit]')
const submit = document.querySelector('button[type=submit]')
// const submit = document.querySelector('button[type=submit]')



submit.addEventListener('click',(e)=>{
    if(email.value==='admin' && password.value ==='123456'){
        window.location.href='./admin/admin.html'
    }else{
        alert('Wrong Password')
    } 
})