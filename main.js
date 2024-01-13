// // 1. Bir ədədi əks etdirən JavaScript funksiyasını yazın.
// // Nümunə x = 32243;
// // Gözlənilən Çıxış : 34223

// function funksiya(n)
// {
//     n = n + "";

//     return n.split("").reverse().join("");
// }

// console.log(funksiya(123456))


// // 1. Burada göndər düyməsinə malik nümunə html faylı. İndi isə abzas mətninin stilini javascript kodu vasitəsilə dəyişdirin.
// function funksiya() {
// //font styles added by JS:
//  text.style.fontSize = "14pt";
//  text.style.fontFamily = "Comic Sans MS";
//  text.style.color = "green";
// }




// 3.first ve last deyerleri ekrana desin nem neynesinnn
function funksiya(){
  var x=document.getElementById("form1");
  for (var i=0;i<x.length;i++)
  {
   if (x.elements[i].value!='Submit')
    {  
      console.log(x.elements[i].value);
     }  
   }
}