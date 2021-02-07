function takeOrder(order, delivery) {
  if (delivery.length < 3)  {
  delivery.push(order);
  return delivery;
    } else {
  return delivery;
  }
}

function refundOrder(order, allOrders) {
  for (var i = 0; i < allOrders.length; i++) {
    if (allOrders[i].orderNumber === order) {
    allOrders.splice(i, 1);
      return allOrders;
  }
}
      return allOrders;
}

function listItems(orders) {
  var string = ""
  for (var i = 0; i < orders.length; i++) {
    if (i != orders.length - 1) {
   string = string + orders[i].item + ", ";
     } else {
   string = string + orders[i].item
     }
  }
    return string;
}

function searchOrder(orders, foodItem) {
  for (var i = 0; i < orders.length; i++) {
    if (orders[i].item === foodItem) {
      return true;
    }
  }
      return false;
}

module.exports = {
   takeOrder,
   refundOrder,
   listItems,
  searchOrder
}
