function increasing (y,z,m) {
var itemAmount=document.getElementById(y);
var itemPrice=document.getElementById(z)
var a =document.getElementById(y).innerHTML;
a++;
itemAmount.innerHTML=a;
itemPrice.innerHTML= a*m+'$' ;
}

function decreasing(y,z,m){
    var itemAmount=document.getElementById(y);
    var itemPrice=document.getElementById(z);
    var a =document.getElementById(y).innerHTML;
    a--;
   if (a<0) {a=0}
    itemAmount.innerHTML=a;
    itemPrice.innerHTML= a*m +'$' ;
    }

function total () {
var tot1 =parseInt( document.getElementById('itemPrice-1').innerHTML);
console.log(tot1);
var tot2 =parseInt( document.getElementById('itemPrice-2').innerHTML);
var tot3 =parseInt( document.getElementById('itemPrice-3').innerHTML);
var total = document.getElementById('total')
var checkout=document.getElementById('checkout')
var k = tot1 + tot2 + tot3;
console.log(k);
total.innerHTML =  k + '$';
checkout.innerHTML=k

}