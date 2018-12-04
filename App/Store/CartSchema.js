import Realm from "realm";

const cartSchema = {
  name: "CartItem",
  primaryKey: "id",
  properties: {
    id: "int",
    imageUrl: "string",
    itemName: "string",
    price: "float",
    rating: "float"
  }
};

let CartSchema = new Realm({
  schema: [cartSchema],
  schemaVersion: 1
});

export default CartSchema;
