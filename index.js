
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
let loading = document.getElementById('loading')
let calc_inner = document.getElementById('calc_inner')
let note_inner = document.getElementById('note_inner')
let clock_inner = document.getElementById('clock_inner')
let photo_inner = document.getElementById('photo_inner')
let music_inner = document.getElementById('music_inner')
let camera_inner = document.getElementById('camera_inner')
let call_inner = document.getElementById('call_inner')
let message_inner = document.getElementById('message_inner')
let weather_inner = document.getElementById('weather_inner')
let contact_inner = document.getElementById('contact_inner')
let game_inner = document.getElementById('game_inner')
let sub_inner = document.getElementById('sub_inner')
let cart_inner = document.getElementById('cart_inner')
let under_construction_section = document.getElementById('under_construction_section')
let calc_screen = document.getElementById('calc_screen')
let btng = document.getElementById('btng')
let btngr = document.getElementById('btngr')
let btngra = document.getElementById('btngra')
let btngray = document.getElementById('btngray')
let lockscreen_date = document.getElementById('lockscreen_date')
let lockscreen_time = document.getElementById('lockscreen_time')
let con =false
let kept_value=''
let second=''
let ans=''
let operator=''
let user_pass=''
let i=0
let date=new Date()
let day=['sunday','monday','tuesday','wednesday','thursday','friday','saturday']
let month=['January','February','March','April','May','June','July','Agust','September','October','November','December']
function un_see() {
    con=true;
    sleeps.style.visibility='visible'
    lockscreen_sect.style.display = 'none'
    password_sect.style.display = 'none'
    home_sect.style.display = 'none'
}
//  un_see()
lockscreen_date.innerHTML=`${day[date.getDay()]}, ${date.getDate()} ${month[date.getMonth()]}`
lockscreen_time.innerHTML=`${date.getHours()}:${date.getMinutes()}`
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
function btn_password(params) {
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

function calc_home() {
    pa_caro.style.display='block'
    calc_section.style.display='none'
}
function note_home() {
    pa_caro.style.display='block'
    note_section.style.display='none'
}
function clock_home() {
    pa_caro.style.display='block'
    clock_section.style.display='none'
}
function photo_home() {
    pa_caro.style.display='block'
    photo_section.style.display='none'
}
function music_home() {
    pa_caro.style.display='block'
    music_section.style.display='none'
}
function camera_home() {
    pa_caro.style.display='block'
    camera_section.style.display='none'
}
function call_home() {
    pa_caro.style.display='block'
    call_section.style.display='none'
}
function message_home() {
    pa_caro.style.display='block'
    message_section.style.display='none'
}
function weather_home() {
    pa_caro.style.display='block'
    weather_section.style.display='none'
}
function contact_home() {
    pa_caro.style.display='block'
    contact_section.style.display='none'
}
function game_home() {
    pa_caro.style.display='block'
    game_section.style.display='none'
}
function sub_home() {
    pa_caro.style.display='block'
    sub_section.style.display='none'
}
function cart_home() {
    pa_caro.style.display='block'
    cart_section.style.display='none'
}
function app_calc() {
    pa_caro.style.display='none'
    calc_section.style.display='block'
    calc_inner.style.display='none'
    setTimeout(()=>{
         calc_inner.style.display='block'
         loading.style.display='none'
    },3000);
    loading.style.display='block'
}
function app_note() {
    pa_caro.style.display='none'
    note_section.style.display='block'
    note_inner.style.display='none'
    setTimeout(()=>{
        note_inner.style.display='block'
        note_inner.style.zIndex='5'

    },3000);
}
function app_clock() {
    pa_caro.style.display='none'
    clock_section.style.display='block'
    clock_inner.style.display='none'
    setTimeout(()=>{
         clock_inner.style.display='block'
         clock_inner.style.zIndex='5'
    },3000);
}
function app_photo() {
    pa_caro.style.display='none'
    photo_section.style.display='block'
    photo_inner.style.display='none'
    setTimeout(()=>{
         photo_inner.style.display='block'
         photo_inner.style.zIndex='5'
    },3000);
}
function app_music() {
    pa_caro.style.display='none'
    music_section.style.display='block'
    music_inner.style.display='none'
    setTimeout(()=>{
         music_inner.style.display='block'
         music_inner.style.zIndex='5'
    },3000);
}
function app_camera() {
    pa_caro.style.display='none'
    camera_section.style.display='block'
    camera_inner.style.display='none'
    setTimeout(()=>{
         camera_inner.style.display='block'
         camera_inner.style.zIndex='5'
    },3000);
}
function app_call() {
    pa_caro.style.display='none'
    call_section.style.display='block'
    call_inner.style.display='none'
    setTimeout(()=>{
         call_inner.style.display='block'
         call_inner.style.zIndex='5'
    },3000);
}
function app_message() {
    pa_caro.style.display='none'
    message_section.style.display='block'
    message_inner.style.display='none'
    setTimeout(()=>{
         message_inner.style.display='block'
         message_inner.style.zIndex='5'
    },3000);
}
function app_weather() {
    pa_caro.style.display='none'
   weather_section.style.display='block'
   weather_inner.style.display='none'
    setTimeout(()=>{
        weather_inner.style.display='block'
        weather_inner.style.zIndex='5'
    },3000);
}
function app_contact() {
    pa_caro.style.display='none'
    contact_section.style.display='block'
    contact_inner.style.display='none'
    setTimeout(()=>{
         contact_inner.style.display='block'
         contact_inner.style.zIndex='5'
    },3000);
}
function app_game() {
    pa_caro.style.display='none'
    game_section.style.display='block'
    game_inner.style.display='none'
    setTimeout(()=>{
         game_inner.style.display='block'
         game_inner.style.zIndex='5'
    },3000);
}
function app_sub() {
    pa_caro.style.display='none'
    sub_section.style.display='block'
    sub_inner.style.display='none'
    setTimeout(()=>{
         sub_inner.style.display='block'
         sub_inner.style.zIndex='5'
    },3000);
}
function app_cart() {
    pa_caro.style.display='none'
    cart_section.style.display='block'
    cart_inner.style.display='none'
    setTimeout(()=>{
         cart_inner.style.display='block'
         cart_inner.style.zIndex='5'
    },3000);
}
function under_construction() {
    pa_caro.style.display='none'
    under_construction_section.style.display='block'
}

function under_construction_home() {
    pa_caro.style.display='block'
    photo_section.style.display='none'
}
function btn(params) {
    calc_screen.value+=params
}function but(signs) {
   console.log(signs);
   operator=signs
   console.log(operator);

if (operator=='+') {
    btngray.style.backgroundColor='gray'
    kept_value=calc_screen.value
    calc_screen.value=''
} 
if (operator=='-') {
 btngra.style.backgroundColor='gray'
 kept_value=calc_screen.value
 calc_screen.value=''
} 
if (operator=='*') {
 btngr.style.backgroundColor='gray'
 kept_value=calc_screen.value
 calc_screen.value=''
} 
if (operator=='/') {
 btng.style.backgroundColor='gray'
 kept_value=calc_screen.value
 calc_screen.value=''
} 
}
function equals() {
 second=calc_screen.value
if (operator=='+') {
        btngray.style.backgroundColor='#fa9712'
     calc_screen.value=Number(kept_value)+Number(second)
 } 
 if (operator=='-') {
     btngra.style.backgroundColor='#fa9712'
  calc_screen.value=Number(kept_value)-Number(second)
} 
if (operator=='*') {
    btngr.style.backgroundColor='#fa9712'
 calc_screen.value=Number(kept_value)*Number(second)
} 
if (operator=='/') {
    btng.style.backgroundColor='#fa9712'
 calc_screen.value=Number(kept_value) / Number(second)
} 
}
function clear_() {
    calc_screen.value=''
    kept_value=''
    second=''
}
function bu(interger) {
    calc_screen.value=interger+calc_screen.value
}
function b(percent) {
    calc_screen.value=calc_screen.value*1/100
}

