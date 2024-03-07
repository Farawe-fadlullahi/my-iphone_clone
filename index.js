
let iphone = document.getElementById('iphone')
let lockscreen_sect = document.getElementById('lockscreen_sect')
let password_sect = document.getElementById('password_sect')
let home_sect = document.getElementById('home_sect')
let wrong_password = document.getElementById('wrong_password')
let Try_again = document.getElementById('Try_again')
let sleeps = document.getElementById('sleeps')
let pin = document.getElementById('pin')
let h2tm = document.getElementById('h2tm')
let pday = document.getElementById('pday')
let span_m_y = document.getElementById('span_m_y')
let con =false
let user_pass=''
let i=0
let date=new Date()
let day=['sunday','monday','tuesday','wednesday','thursday','friday','saturday']
let month=['jan','feb','march','april','may','june','july','agust','september','october','december']
function un_see() {
    con=true;
    sleeps.style.visibility='visible'
    lockscreen_sect.style.display = 'none'
    password_sect.style.display = 'none'
    home_sect.style.display = 'none'
}
 un_see()
function outline_6() {
for (let index = 0; index < [...Array(6)].length; index++) {
    pin.innerHTML+=`<span class="fill" id="fill${index}"></span>`
}
}
outline_6()
function sleep() {
    if (con==true) {
        sleeps.style.visibility='visible'
        lockscreen_sect.style.display = 'none'
        password_sect.style.display = 'none'
        home_sect.style.display = 'none'
        con=!con
    }else{
    sleeps.style.visibility='hidden'
    lockscreen_sect.style.display = 'block'
    lockscreen_sect.style.zIndex = '2'
    password_sect.style.display = 'block'
    home_sect.style.display = 'block'
    home_sect.style.zIndex = '1'
    password_sect.style.zIndex = '-1'

    con=!con
    }
}
function displock() {
    password_sect.style.display = 'none'
    home_sect.style.display = 'none'
}
displock()
function unlock() {
    lockscreen_sect.style.zIndex = '-1'
    password_sect.style.display = 'block'
    home_sect.style.display = 'block'
    home_sect.style.zIndex = '1'
    password_sect.style.zIndex = '2'
}
function enter() {
    lockscreen_sect.style.zIndex = '-1'
    home_sect.style.zIndex = '3'
    password_sect.style.zIndex = '2'
}
function btn(params) {
    let password='200950'
    document.getElementById(`fill${i}`).style.backgroundColor='white'//the span
    i++//movement of shade
    user_pass+=params//empty user_pass changed to params i.e displaying d argument of btn n also {wat ur inputing to d password fill} 
    if (user_pass==password) {
        enter()
        clear_each()
        // return
    }else{
        if (user_pass.length==6) {
            
    console.log(user_pass.length);
    Try_again.innerText=`Try Again`
    wrong_password.innerText=`Wrong Password`
    pin.style.animationName = 'incorrect'
    pin.style.animationDuration='0.2s'
    pin.style.animationDirection='alternate'
    pin.style.animationIterationCount='2'
    clear_each()
    console.log(user_pass.length);
     }
    }
}
function clear_each() {
    i=0
    console.log(i)
    console.log(document.getElementById(`fill${i}`))
    document.querySelectorAll(`.fill`).forEach((element )=> {
        element.style.backgroundColor='transparent'
    });
    user_pass=''
}
function produce_time() {
    h2tm.innerHTML=`${date.getHours()}:${date.getMinutes()}` 
    pday.innerHTML=`${day[date.getDay()]}`
    span_m_y.innerHTML=`${month[date.getMonth()]},${date.getFullYear()}`
}
produce_time()
localStorage.setItem('password to iphone ','200950')