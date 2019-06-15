import $ from 'jquery';
import { revonicCart } from './index';
// ++++++++++++++++++
// display the cart  
// ++++++++++++++++++
export function displayCart() {
  var cartArray = revonicCart.listCart();
  var output = "";
  var isValid = true;
  for (var i in cartArray) {
    output += "<tr>"
      + "<td scope='row' data-label='Product'>" + cartArray[i].name + "</td>"
      + "<td data-label='Price'>&#163;" + cartArray[i].price + "</td>"
      + "<td data-label='Qty'><div class='input-group'>"
      + "<input type='number' min='1' max='10' class='item-count form-control' data-name='" + cartArray[i].name + "' value='" + cartArray[i].qty + "'>"
      + "<div class='button-group'>"
      + "<button class='plus-item' data-name='" + cartArray[i].name + "'>+</button><button class='minus-item' data-name='" + cartArray[i].name + "'>-</button>"
      + "</div></td>"
      + "<td data-label='Cost' >&#163; " + Number(cartArray[i].price * cartArray[i].qty).toFixed(2) + "<i class='fa fa-trash-alt delete-item' data-name='" + cartArray[i].name + "'></i> </td>"
      + "</tr>";
  }
  $(".show-cart").html(output);
  $(".subtotal-cart").html(revonicCart.totalCart());
  // calculating tax... let 20% is fixed
  revonicCart.totalTax = function () {
    return Number(((revonicCart.totalCart() * 20) / 100).toFixed(2));
  };
  $(".vat-amt").html(revonicCart.totalTax());
  // grand total 
  revonicCart.grandTotal = function () {
    return Number((revonicCart.totalCart() + revonicCart.totalTax()).toFixed(2));
  };
  $(".total-cart").html(revonicCart.grandTotal());
  // Disabling the buy now button while cart is empty.
  if (output === '')
    isValid = false;
  if (isValid) {
    $('.btn-buynow').prop('disabled', false);
  }
  else {
    $('.btn-buynow').prop('disabled', true);
  }
}
