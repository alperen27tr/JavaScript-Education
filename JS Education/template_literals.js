
let username="alperen"
const DOMAIN= "gazlamadanonce.com"

let email= username+"@"+DOMAIN

console.log(
    "Hoşgeldiniz "+username+" Mail Adresiniz: "+username+"@"+DOMAIN
)
let info=`Girişiniz Başarılı ${username}
Mail Adresi Uzunluğu ${email.length}
Şuan Saat: ${new Date().getHours()}
`
console.log(info)