export let order = [{
  furnitureId: 'cfs1',
  quantity: 1
},{
  furnitureId: 'cfs2',
  quantity: 2
}];

function addToCart(furnitureId) {
  let matchingItem;

  order.forEach((cartItem) => {
    if (furnitureId === cartItem.furnitureId) {
      matchingItem = cartItem;
    }
  });

  if (matchingItem) {
    matchingItem.quantity +=1;
  } else {
    cart.push({
      furnitureId: furnitureId,
      quantity: 1
    });
  }

};
