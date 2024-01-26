//js'de değişken tanımlarken camelCase ve UPPER_CASE kurallarına göre tanımlıyoruz

// var ile tanımlama
var serverName="google.com"
console.log(serverName)

// let ile tanımlama
let serverName0;
serverName0="alperen.com"
console.log(serverName0)

let password="1234";
console.log(password)

let isActive=true
let hasPassword=false

    //number veri türü için
    let price = 2500
    let tax = 0.18
    let priceTax = price * tax 
    let total = price + priceTax
    console.log(
        "Fiyat:",price,
        " KDV:",tax,
        " KDV Tutarı:",priceTax,
        " Toplam Tutar:",total
        )

    // boolean veri türü için
    let username="user01"
    console.log("User Name", Boolean(username)) // true

//const ile tanımlama (sonradan değiştirilemez)
const SERVER_PASSWORD="aeoKLj34w120PJ9q"
console.log(SERVER_PASSWORD)


