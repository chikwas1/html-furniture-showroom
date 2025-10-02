import { furnitures } from "./furniture-product.js";
import { order } from "./orders.js";


let furnituresHTML = '';

furnitures.forEach((furniture) => {
  furnituresHTML += `
    <div class="products-container js-products-container">
      <div class="product-image">
        <img src="${furniture.image}" alt="">    
      </div>
      
      <div class="product-name">
      ${furniture.name}
      </div>

      <div class="product-rating">
      ${furniture.rating}
      </div>

      <div class="product-price">
      ${furniture.price}
      </div>
    </div>
  `
  
});

document.querySelector('.js-product-container').innerHTML = furnituresHTML;

//console.log(furnituresHTML);

let orderDetails = ''; // Declare order using let

const productDetails = document.querySelectorAll('.js-products-container')
.forEach((details) => {
  details.addEventListener('click', () => {
   const productId = details.name;
   orderDetails += productId; // This is now allowed
   console.log(order);
   //console.log(orderDetails);

   let matchingItem;
   
       order.forEach((item) => {
         if (furnitures === item.furnitureId) {
           matchingItem = item;
         }
       });
   
       if (matchingItem) {
         matchingItem.quantity += 1;
       } else {
         order.push({
         furnitureId: furnitures,
         quantity: 1
       });
       }
   

   let orderQuantity = 0;
  
      order.forEach((item) => {
        orderQuantity += item.quantity;
      });
  
      document.querySelector('.js-count').innerHTML = orderQuantity;
      console.log(orderQuantity);

  })
  
  
 
});


/*document.querySelector('.js-product-container').innerHTML = furnituresHTML

//console.log(furnituresHTML);

const productDetails = document.querySelectorAll('.js-products-container')
.forEach((details) => {
  details.addEventListener('click', () => {
   const productId = details.id;
   order += productId
   console.log(order);
  })
});*/