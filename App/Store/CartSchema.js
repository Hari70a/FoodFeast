import Realm from "realm";

const cartSchema = {
  name: "CartItem",
  primaryKey: "id",
  properties: {
    id: "int",
    imageUrl: "string",
    itemName: "string",
    price: "float",
    rating: "float",
    quantity: "int"
  }
};

let CartSchema = new Realm({
  schema: [cartSchema],
  schemaVersion: 2
});

export default CartSchema;
