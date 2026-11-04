let CartQuantity=0;
function addtocart(){
CartQuantity++;
}
function add2(){
CartQuantity += 2;
}
function add3(){
CartQuantity += 3;
}
function ResetCart(){
    CartQuantity=0;
}
function ShowQuantity(){
    let button = document.getElementById("quantity-result");
    button.textContent =  CartQuantity;
    button.hidden = false;
}

document.getElementById("add-to-cart").addEventListener("click", addtocart);
document.getElementById("add-2").addEventListener("click", add2);
document.getElementById("add-3").addEventListener("click", add3);
document.getElementById("reset-cart").addEventListener("click", ResetCart);
document.getElementById("show-quantity").addEventListener("click", ShowQuantity);
