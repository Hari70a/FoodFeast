class CartModel {
  constructor(id, imageUrl, itemName, price, rating) {
    console.log(id, imageUrl, itemName, price, rating, "constructor");
    this.id = id;
    this.imageUrl = imageUrl;
    this.itemName = itemName;
    this.price = price;
    this.rating = rating;
  }
}

export default CartModel;
