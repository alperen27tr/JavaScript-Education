
let username0=prompt("Kullanıcı Adınız: ")

let greeting=document.querySelector("#greeting")
greeting.innerHTML=`${greeting.innerHTML} <small style="color:red">${username0}<small>`