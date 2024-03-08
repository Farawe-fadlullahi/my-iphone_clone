
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
let pa_caro = document.getElementById('pa_caro')
let calc_section = document.getElementById('calc_section')
let note_section = document.getElementById('note_section')
let clock_section = document.getElementById('clock_section')
let photo_section = document.getElementById('photo_section')
let music_section = document.getElementById('music_section')
let camera_section = document.getElementById('camera_section')
let call_section = document.getElementById('call_section')
let message_section = document.getElementById('message_section')
let weather_section = document.getElementById('weather_section')
let contact_section = document.getElementById('contact_section')
let game_section = document.getElementById('game_section')
let sub_section = document.getElementById('sub_section')
let cart_section = document.getElementById('cart_section')
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
    }else{
        if (user_pass.length==6) {
            
    console.log(user_pass.length);
    pin.style.animationName = 'incorrect'
    pin.style.animationDuration='0.2s'
    pin.style.animationDirection='alternate'
    pin.style.animationIterationCount='3'
    Try_again.innerText=`Try Again`
    wrong_password.innerText=`Wrong Password`
    clear_each()
    console.log(user_pass.length);
     }}
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

function app_home() {
    pa_caro.style.display='block'
    calc_section.style.display='none'
}
function app_calc() {
    pa_caro.style.display='none'
    calc_section.style.display='block'
}
function app_note() {
    pa_caro.style.display='none'
    note_section.style.display='block'
}
function app_clock() {
    pa_caro.style.display='none'
    clock_section.style.display='block'
}
function app_photo() {
    pa_caro.style.display='none'
    photo_section.style.display='block'
}
function app_music() {
    pa_caro.style.display='none'
    music_section.style.display='block'
}
function app_camera() {
    pa_caro.style.display='none'
    camera_section.style.display='block'
}
function app_call() {
    pa_caro.style.display='none'
    call_section.style.display='block'
}
function app_message() {
    pa_caro.style.display='none'
    message_section.style.display='block'
}
function app_weather() {
    pa_caro.style.display='none'
    weather_section.style.display='block'
}
function app_contact() {
    pa_caro.style.display='none'
    contact_section.style.display='block'
}
function app_game() {
    pa_caro.style.display='none'
    game_section.style.display='block'
}
function app_sub() {
    pa_caro.style.display='none'
    sub_section.style.display='block'
}
function app_cart() {
    pa_caro.style.display='none'
    cart_section.style.display='block'
}