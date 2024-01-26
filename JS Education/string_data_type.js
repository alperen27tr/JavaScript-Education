
let firstName="Alperen"
let lastName="Erdoğan"
let email="alperenerdogan001@gmail.com"

firstName=firstName.toUpperCase()
console.log(firstName)

lastName=lastName.toLowerCase()
console.log(lastName)

console.log(email.search("@")) //istenilen karakterin hangi sırada olduğunu belirtir.

let DOMAIN= email.slice(email.search("@")+1)
console.log(DOMAIN)

email=email.replace("gmail.com","hotmail.com") //bilgi değiştirmek için kullanılır.
console.log(email)

isThereEmail=email.includes("@") //veri içinde "" varmı?
console.log(isThereEmail)