/* eslint-disable no-undef */
var dropdown= document.getElementById('items');

for (var i=0;i<Product.allProducts.length;i++){
  var option=document.createElement('option');
  option.textContent=Product.allProducts[i].name;
  dropdown.appendChild(option);

}

var content=document.getElementById('cartContents');

var addCart=document.getElementById('catalog');

addCart.addEventListener('click',function(event){
  event.preventDefault();

  if (event.target.id === 'submit'){
    var item = addCart.items.value;
    var quantity=addCart.quantity.value;
    console.log(quantity);
    var cartItem =new CartItem(item,quantity);
    new Cart(cartItem);
    console.log(cartArray);
    console.log(cartItemArray);
    saveToLocalStorage();

    //render items
    renderItems();
  }
});

function renderItems() {
  content.innerHTML='';
  for (var i=0; i<cartItemArray.length;i++){

    var p = document.createElement('p');
    p.textContent=`Product: ${cartItemArray[i].product}  quantity: ${cartItemArray[i].quantity}`;
    content.appendChild(p);
  }
}

renderItems();
