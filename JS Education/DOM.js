
//Console

//  console.log(document.location.pathname)
//  console.log(document.URL)
//  console.log(document.head)
//  console.log(document.baseURI)

document.body.style.backgroundColor="white"

 // id=title olan elementi değiştirme
 let title=document.getElementById("title")
 title.innerHTML="Değişen Bilgi"
 console.log(title.innerHTML)


 let link= document.querySelector("ul#list>li>a")
 console.log(link.innerHTML)

 link.style.color="red"
