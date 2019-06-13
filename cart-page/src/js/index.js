"use strict";
    
import $ from 'jquery';
import jQuery from 'jquery';
window.$ = jQuery;
import '../css/style.css';
import '../css/fonts.css';
import '../css/responsive.css';
// +++++++++++++++++++++ 
// REVONIC Shopping Cart 
// +++++++++++++++++++++

var revonicCart = ( function(){
    
  //******* private methods ************* //
  
 var cart = [
      {
          "name": "Cotton T-Shirt, Medium",
          "price": 1.99,
          "qty": 1
          
      },
      {
          "name": "Baseball Cap, One Size",
          "price": 2.99,
          "qty": 2
          
      },
      {
          "name": "Swim Shorts, Medium",
          "price": 3.99,
          "qty": 1
          
      }
  ] ; // empty array for cart

  //constructor class
  class Item {
      constructor(name, price, qty) {
          this.name = name;
          this.price = price;
          this.qty = qty;
      }
  }

  // function for save the item in the cart
  function saveCart(){
      sessionStorage.setItem('revonicCart', JSON.stringify(cart)); // saving data after converting it to JSON strings using JSON stingify. 
     
  }

  // function for Load the item from the cart
  function loadCart(){
      cart = JSON.parse(sessionStorage.getItem('revonicCart')); // fetching original object items using JSON parse. 
  }

  //initial loading for the cart
  if (sessionStorage.getItem("revonicCart") !== null) {
      loadCart();
  }

   //******* public methods ************* //
   var obj = {}; // empty object
    
   // add the items into cart 
  obj.addItem = function( name, price, qty) {
      for (var i in cart) {
          if (cart[i].qty > 9 && cart[i].name === name) {
              alert("Maximum quanities have been reached!!");
              return;
          }
          if(cart[i].name === name) {
              cart[i].qty++;
              saveCart(); 
              return;                
          }
      }
      var item = new Item(name, price, qty);
      cart.push(item);
      saveCart(); // saving the updated cart
  }

  // set quantity from item 
  obj.setQty  = function (name, qty) {
      for(var i in cart) {
          if(cart[i].name === name) {
              cart[i].qty = qty;
              break;
          }
      }
  }


  // remove item from cart 

  obj.removeItem = function (name) {
      for(var i in cart) {
          //decreasing item qty by one
          if ( cart[i].name === name) {
              cart[i].qty--;
           }
          // if item qty is no longer available then removing the item from the cart  
          if ( cart[i].qty === 0) {
              cart.splice(i, 1);
          }  
           break;
      } 
      saveCart(); // saving the updated cart
      
  }

   // Remove all items from cart
   obj.removeAllItem = function(name) {
      for(var item in cart) {
        if(cart[item].name === name) {
          cart.splice(item, 1);
          break;
        }
      }
      saveCart();
    }


  // count the total qty in a cart
   
    obj.totalCount = function() {
      var totalCount = 0;
      for(var item in cart) {
        totalCount += cart[item].qty;
      }
      return totalCount;
    }
  
  // Total cart
  obj.totalCart = function() {
      var totalCart = 0;
      
      for( var item in cart) {
        totalCart += cart[item].price * cart[item].qty;      
      }
      return Number(totalCart.toFixed(2));
    }


  // List cart
  obj.listCart = function(){
      var cartCopy = []; 
      
      for (var i in cart){
         var item = cart[i];
        var itemCopy = {};  

          for(var j in item ) {
              itemCopy [j] = item[j];
          }
          itemCopy.total = Number(item.price * item.qty).toFixed(2); 
          cartCopy.push(itemCopy);
         
      }
      return cartCopy;
  }

// returning the whole object
return obj;
 
}) ();



// ++++++++++++++++++
// display the cart  
// ++++++++++++++++++
function displayCart() {

  var cartArray =  revonicCart.listCart();
  var output = "";
  var isValid = true;

  for (var i in cartArray) {
      output+= "<tr>"
      + "<td scope='row' data-label='Product'>" + cartArray[i].name + "</td>"
      +  "<td data-label='Price'> Â£" + cartArray[i].price + "</td>"
      + "<td data-label='Qty'><div class='input-group'>"
      + "<input type='number' min='1' max='10' class='item-count form-control' data-name='" + cartArray[i].name  + "' value='" + cartArray[i].qty  +"'>"
      + "<div class='button-group'>"
      + "<button class='plus-item' data-name='" + cartArray[i].name  + "'>+</button><button class='minus-item' data-name='" + cartArray[i].name  + "'>-</button>"
      + "</div></td>"
      + "<td data-label='Cost' > Â£" + Number(cartArray[i].price * cartArray[i].qty).toFixed(2)   + "<i class='fa fa-trash-alt delete-item' data-name='" + cartArray[i].name  + "'></i> </td>"           
      + "</tr>";
     
  }


  $(".show-cart").html(output);
  $(".subtotal-cart").html(revonicCart.totalCart() );
  // calculating tax... let 20% is fixed
  revonicCart.totalTax = function () {      
      return Number(((revonicCart.totalCart()*20)/100).toFixed(2));
    }
  $(".vat-amt").html(revonicCart.totalTax() );
   // grand total 
   revonicCart.grandTotal = function () {      
      return Number((revonicCart.totalCart() + revonicCart.totalTax()).toFixed(2));
    }

  $(".total-cart").html(revonicCart.grandTotal() );
 
// Disabling the buy now button while cart is empty.
      if ( output === '' )
          isValid = false;
  
      if( isValid ) {
          $('.btn-buynow').prop('disabled', false);
      } else {
          $('.btn-buynow').prop('disabled', true);
      }
      

}

// delete button functionality

$('.show-cart').on("click", ".delete-item", function(event) {
  var name = $(this).data('name')
  revonicCart.removeAllItem(name);
  displayCart();
})

// +1
$('.show-cart').on("click", ".plus-item", function(event) {  
  var name = $(this).data('name');
  revonicCart.addItem(name);
  displayCart(); 
})


// -1
$('.show-cart').on("click", ".minus-item", function(event) {  
  var name = $(this).data('name');
  revonicCart.removeItem(name);
  displayCart();
})


// Item count input
$('.show-cart').on("change", ".item-count", function(event) {
   var name = $(this).data('name');
   var count = Number($(this).val());
  revonicCart.setQty(name, count);
  displayCart();
});

// display the cart on load. 
displayCart();

// checkout the cart 

function checkOutCart() {

var cartArray =  revonicCart.listCart();
var json = JSON.stringify(cartArray);

$.ajax({
  type: 'POST',  
  url:'',
  contentType: "application/json; charset=utf-8",  
  data:json,
 
  success:function(data, status, xhr){
    // successful request; do something with the data    
   alert('status: ' + status + ', data: ' + data);
  },
  error:function(jqXhr, textStatus, errorMessage){
    // failed request; give feedback to user
    $('.confirmation').html('<p class="error"><strong>Oops!</strong> Try that again in a few moments.</p>'+ errorMessage);
  }
});


}




