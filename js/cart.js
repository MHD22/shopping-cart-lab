'use strict';

var tbody = document.getElementById('tbody');
console.log(cartItemArray);

function renderItems() {
  tbody.innerHTML='';
  for (var i=0; i<cartItemArray.length;i++){

    var tr = document.createElement('tr');

    var td = document.createElement('td');
    var remove = document.createElement('button');
    td.appendChild(remove);
    remove.textContent= 'X' ;
    remove.setAttribute('id',cartItemArray[i].product);

    var td2 = document.createElement('td');
    td2.textContent=cartItemArray[i].quantity;

    var td3= document.createElement('td');
    td3.textContent=cartItemArray[i].product;

    tr.appendChild(td);
    tr.appendChild(td2);
    tr.appendChild(td3);

    tbody.appendChild(tr);
  }

}

renderItems();


tbody.addEventListener('click',function(event){
  if (event.target.id !== 'tbody'){
    var index = 1000;
    for (var i=0; i<cartItemArray.length;i++){
      if (event.target.id === cartItemArray[i].product){
        index =i;
        break;
      }
    }
    cartItemArray.splice(index,1);
    saveToLocalStorage();
    renderItems();
  }

});
