class CartModel {
  constructor(id, imageUrl, itemName, price, rating, quantity = 1) {
    this.id = id;
    this.imageUrl = imageUrl;
    this.itemName = itemName;
    this.price = price;
    this.rating = rating;
    this.quantity = quantity;
  }
}

export default CartModel;
