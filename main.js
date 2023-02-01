
const user='JESM';
const contraseña='gameshack';

email=document.querySelector('#email');
password=document.querySelector('#password');
login=document.querySelector('#login');
conlogin=document.querySelector('.conlogin');
inputs=document.querySelectorAll('.inputs');
nav=document.querySelector('.nav');
aside=document.querySelector('.aside');

login.addEventListener('click',()=>{
    if(email.value=='JESM' && password.value=='gameshack'){
        conlogin.style.top='-1000vh';
       
        nav.style.position='fixed'
        nav.style.top='0';
        aside.style.top='60px';
        alert('Hola Gamer como estas.Recuerda que si quieres que meta un juego en especial debes pedirmelo por instagram y si algun link ya no funciona podrias avisarme igual')

        document.addEventListener("keyup", e=>{
          if (e.target.matches(".search")){
              if (e.key ==="Escape")e.target.value = ""
                document.querySelectorAll(".juego").forEach(juego=>{
                    juego.textContent.toLowerCase().includes(e.target.value.toLowerCase())
                      ?juego.classList.remove("filtro")
                      :juego.classList.add("filtro")
              })
          }
        })

    }else{
        alert('Usuario o contraseña incorrectos');
    }
});












  