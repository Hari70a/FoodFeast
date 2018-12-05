class CartModel {
  constructor(id, imageUrl, itemName, price, rating, quantity = 1) {
    console.log(quantity, "constructor");
    this.id = id;
    this.imageUrl = imageUrl;
    this.itemName = itemName;
    this.price = price;
    this.rating = rating;
    this.quantity = quantity;
  }
}

export default CartModel;
