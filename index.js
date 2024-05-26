
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
let brand = document.getElementById('brand')
let price = document.getElementById('price')
let goods = document.getElementById('goods')
let qty = document.getElementById('qty')
let list_tbody = document.getElementById('list_tbody')
let note_keys = document.getElementById('note_keys')
let note_keys_capital = document.getElementById('note_keys_capital')
let note_keys_no = document.getElementById('note_keys_no')
let note_keys_sy = document.getElementById('note_keys_sy')
let note_disp = document.getElementById('note_disp')
let note_input = document.getElementById('note_input')
let note_dis = document.getElementById('note_dis')
let network = document.getElementById('network')
let n_price = document.getElementById('n_price')
let sub_disp = document.getElementById('sub_disp')
let tbodysub = document.getElementById('tbodysub')
let used_ = document.getElementById('used_')
let load = document.getElementById('load')
let dial = document.getElementById('dial')
let calling = document.getElementById('calling')
let contacts_ = document.getElementById('contacts_')
let recent_ = document.getElementById('recent_')
let favourite = document.getElementById('favourite')
let voicemail = document.getElementById('voicemail')
let recent_l = document.getElementById('recent_l')
let recent_details = document.getElementById('recent_details')
let rdetials_no = document.getElementById('rdetials_no')
let detials_no = document.getElementById('detials_no')
let detials_t = document.getElementById('detials_t')
let detials_day = document.getElementById('detials_day')
let re_disp_no = document.getElementById('re_disp_no')
let con =false
let kept_value=''
let second=''
let ans=''
let operator=''
let user_pass=''
let i=0
let sub_array=JSON.parse(localStorage.getItem('recharge'))||[]
let note_array=JSON.parse(localStorage.getItem('note'))||[]
let recent_array=JSON.parse(localStorage.getItem(`recent_call`))||[]
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
    pin.style.animationName = 'incorrect'
    pin.style.animationDuration='0.2s'
    pin.style.animationDirection='alternate'
    pin.style.animationIterationCount='3'
    Try_again.innerText=`Try Again`
    wrong_password.innerText=`Wrong Password`
    clear_each()
     }}
}
function clear_each() {
    i=0
    document.querySelectorAll(`.fill`).forEach((element )=> {
        element.style.backgroundColor=''
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
    // call_inner.style.display='none'
    // setTimeout(()=>{
         call_inner.style.display='block'
    //      call_inner.style.zIndex='5'
    // },3000);
        f.style.fill=`#3c3939`
        r.style.fill=`#3c3939`
        d.style.fill=`blue`
        v.style.fill=`#3c3939`
        c.style.fill=`#3c3939`
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
   operator=signs

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
let list_array=JSON.parse(localStorage.getItem('cart_list'))||[]

function add_to_list() {
localStorage.setItem('cart_list',JSON.stringify(list_array))
disp_list()
    let list_obj={
        Brand:brand.value,
        Price:price.value,
        quantity:qty.value,
        Goods:goods.value
    }
list_array.push(list_obj)
    list_tbody.innerHTML=''
    disp_list()

}
function del(ind) {
    list_array.splice(ind,1)
    list_tbody.innerHTML=''
    disp_list()
}
function disp_list() {
    
    list_array.forEach((element,i) => {
        list_tbody.innerHTML+=
        `<tr>
        <td style="border: 2px solid black; border-collapse: collapse; padding: 2px ">${element.Brand}</td>
        <td style="border: 2px solid black; border-collapse: collapse; padding: 2px ">${element.Goods}</td>
        <td style="border: 2px solid black; border-collapse: collapse; padding: 2px ">$${element.Price}</td>
        <td style="border: 2px solid black; border-collapse: collapse; padding: 2px ">${element.quantity}</td>
        <td style="border: 2px solid black; border-collapse: collapse; padding: 2px ">$${element.quantity*element.Price}</td>
        <td style=" border: 2px solid black; border-collapse: collapse; padding: 1px "><button onclick='del(${i})'  style="display:flex; align-items:center; width: 30px; background-color: black;color: white; outline:1px solid white; font-size: 7px; box-shadow: 0 0 10px 0 white; border-radius: 5px;">delete</button></td>
        </tr>
        `
    });
    }
    function change_to_cap() {
        note_keys.style.display='none'
        note_keys_capital.style.display='block'
    }
    function change_to_sml() {
        note_keys_capital.style.display='none'
        note_keys.style.display='block'
    }
    function change_to_no() {
        note_keys_capital.style.display='none'
        note_keys.style.display='none'
        note_keys_no.style.display='block'
    }
    function change_to_sy() {
        note_keys_capital.style.display='none'
        note_keys.style.display='none'
        note_keys_no.style.display='none'
    }
    function key(value) {
        if (value=='br') {
            note_input.value+='('
            note
            
        }
        else{
            note_input.value+=value
        }
    }
    
    function add_note() {
        
    if (note_input.value=='') {
        alert('write something')
    } else {
        note_disp.style.display='block'
        note_input.style.display='none'
        note_array.push(note_input.value)
        localStorage.setItem(`note`,JSON.stringify(note_array))
        show_note()
        note_input.value=''
        
    }
}
    function cancel() {
        let current_val=note_input.value
        note_input.value=current_val.slice(0,-1)
    }
    function show_note(){
        note_disp.innerHTML=''
        note_array.forEach((element,index) => {
            
        note_disp.innerHTML+=`<div id="note_dis" note_dis>(${index+1}) ${element} <button style='margin-bottom: 0; margin-right: 0; padding: 0; width:30px;font-size:10px; height:20px; border:1px solid black; border-radius: 5px;' onclick="delete_note(${index})">delete</button></div>`
        });
    }
    function back_textarea() {
        note_disp.style.display='none'
        note_input.style.display='block'
    }
    function delete_note(param){
        note_array.splice(param,1)
        localStorage.removeItem(`note`,JSON.stringify(note_array[`${param}`]))
        show_note()
    }
    function generate_airtime() {
        let pin=''
        for (let index = 0; index < 9; index++) {
        pin+=Math.floor(Math.random()*10)
            
        }
        airtime_obj={
            Network:network.value,
            Price:n_price.value,
            Pin:pin,
            used:false
        }
        sub_array.push(airtime_obj)
        localStorage.setItem(`recharge`,JSON.stringify(sub_array))
        function card_list(){
            
        tbodysub.innerHTML=''
        sub_array.forEach((element,ind) => {
            tbodysub.innerHTML+=
            `
            <tr style="border: 2px solid black ; padding: 2px; border-collapse: collapse;"> 
            <td style="border: 2px solid black ; padding: 2px; border-collapse: collapse;">${ind+1}</td>
            <td style="border: 2px solid black ; padding: 2px; border-collapse: collapse;">${element.Network}</td>
            <td style="border: 2px solid black ; padding: 2px; border-collapse: collapse;">${element.Price}</td>
            <td style="border: 2px solid black ; padding: 2px; border-collapse: collapse; font-weight:900; color:red;">${element.Pin}<button id='copy' onclick="copy(${element.Pin})" ><span class="material-symbols-outlined">content_copy</span></button></td>
            <td id='used_'>${element.used==false?`unused`:`used`}</td>
        </tr>`
        });
        }
        card_list()
    }
    function copy(PIN) {
        navigator.clipboard.writeText(PIN)
        alert('pin copied successfully')
    }
    function btn_dial(params) {
        load.value+=params
    }
    function clear_dial() {
        let current_val=load.value
        load.value=current_val.slice(0,-1)
    }
    function recharge() {
        loader=load.value
        let foundpin=sub_array.find((obj)=> load.value==obj.Pin )
        if (foundpin) {
        if (foundpin.used==false) {
            console.log(foundpin.used);
            alert(`you have sucessfully recharged ${foundpin.Network} of #${foundpin.Price}`)
            foundpin.used=true
            card_list()
        }else{
            alert(`card has been used`)
        }
        }else{
            if (load.value=='') {
                alert('jj')
            }else{
                dailing_no.innerHTML=load.value
                caller()

            }
        }
    }
    function tocontacts_() {
        f.style.fill=`#3c3939`
        r.style.fill=`#3c3939`
        d.style.fill=`#3c3939`
        v.style.fill=`#3c3939`
        c.style.fill=`blue`
        dial.style.visibility='hidden'
        recent_.style.visibility='hidden'
        favourite.style.visibility='hidden'
        voicemail.style.visibility='hidden'
        contacts_.style.visibility=`visible`
    }
    function tovoicemail() {
        f.style.fill=`#3c3939`
        r.style.fill=`#3c3939`
        d.style.fill=`#3c3939`
        v.style.fill=`blue`
        c.style.fill=`#3c3939`
        dial.style.visibility='hidden'
        recent_.style.visibility='hidden'
        favourite.style.visibility='hidden'
        voicemail.style.visibility='visible'
        contacts_.style.visibility=`hidden`
    }
    function torecent_() {
        f.style.fill=`#3c3939`
        r.style.fill=`blue`
        d.style.fill=`#3c3939`
        v.style.fill=`#3c3939`
        c.style.fill=`#3c3939`
        dial.style.visibility='hidden'
        recent_.style.visibility='visible'
        favourite.style.visibility='hidden'
        voicemail.style.visibility='hidden'
        contacts_.style.visibility=`hidden`
    }
    function tofavourite() {
        f.style.fill=`blue`
        r.style.fill=`#3c3939`
        d.style.fill=`#3c3939`
        v.style.fill=`#3c3939`
        c.style.fill=`#3c3939`
        dial.style.visibility='hidden'
        recent_.style.visibility='hidden'
        favourite.style.visibility='visible'
        voicemail.style.visibility='hidden'
        contacts_.style.visibility=`hidden`
    }
    function todail() {
        recent_details.style.visibility=`hidden`
        f.style.fill=`#3c3939`
        r.style.fill=`#3c3939`
        d.style.fill=`blue`
        v.style.fill=`#3c3939`
        c.style.fill=`#3c3939`
        dial.style.visibility='visible'
        recent_.style.visibility='hidden'
        favourite.style.visibility='hidden'
        voicemail.style.visibility='hidden'
        contacts_.style.visibility=`hidden`
    }
    function callerend() {
        calling.style.visibility=`hidden`
    }
    function detials(par) {
        console.log(par);
        let foundid=recent_array.find((obj)=> par==obj.id)
        if (foundid) {
            recent_details.style.visibility=`visible`
            console.log(foundid);
            detials_no.innerHTML=foundid.Nom
            detials_t.innerHTML=foundid.time
            detials_day.innerHTML=foundid.detials_time
        }
    }
    function see_more() {
        recent_details.style.visibility=`hidden`
    }
    function call_directly(params) {
                load.value=detials_no.innerHTML
                caller()
    }
    function caller() {
        let pin=''
        for (let index = 0; index < 9; index++) {
        pin+=Math.floor(Math.random()*10)
        }
                obj={
                    id:pin,
                    time:`${date.getHours()}:${date.getMinutes()} `,
                    detials_time:`${day[date.getDay()]}-${month[date.getMonth()]}-${date.getDate()}-${date.getFullYear()}`,
                    Nom:load.value,
                }
                recent_array.push(obj)
                localStorage.setItem('recent_call',JSON.stringify(recent_array))
                recent_l.innerHTML=''
                recent_array.forEach((element) => {
                    recent_l.innerHTML+=`<div id="recentlog"><div class="space"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 32 32"><path fill="#818488" d="m20.333 21.482l2.24-2.24a2.17 2.17 0 0 1 2.337-.48l2.728 1.092A2.17 2.17 0 0 1 29 21.866v4.961a2.167 2.167 0 0 1-2.284 2.169C7.594 27.806 3.732 11.61 3.015 5.408A2.162 2.162 0 0 1 5.169 3h4.873a2.17 2.17 0 0 1 2.012 1.362l1.091 2.728a2.17 2.17 0 0 1-.48 2.337l-2.24 2.24s1.242 8.732 9.908 9.815"/><path fill="#818488" d="M20 4v2h4.586L18 12.586L19.414 14L26 7.414V12h2V4z"/></svg></div><div class="space_fill"><p id="re_disp_no">${element.Nom }</p><p style='margin-top: -15px; color:gray; font-size:10px;'>mobile</p><p style="font-size: 10px;margin-top: -45px; margin-left:190px; color:gray; ">${element.time}</p><button dey onclick="detials(${element.id})">i</button></div></div>`
                    
                console.log(`${element.detials_time}`);
                
                });
                calling.style.visibility=`visible`
                setInterval(()=>{
                    calling.style.visibility=`hidden`
                },7000);
                load.value=''
    }