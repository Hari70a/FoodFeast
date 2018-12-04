import CartSchema from "./CartSchema";

const CartDataProvider = {
  findAll: function() {
    var getListData = CartSchema.objects("CartItem");
    return getListData;
  },
  save: function(listData) {
    console.log(listData, "listData");
    CartSchema.write(() => {
      CartSchema.create("CartItem", listData);
    });
  },
  deleteAll: function() {
    var storedData = CartSchema.objects("CartItem");
    CartSchema.write(() => {
      CartSchema.delete(storedData);
    });
  },
  deleteById: function(id) {
    var storedData = CartSchema.objects("CartItem").filtered("id =" + id);
    CartSchema.write(() => {
      CartSchema.delete(storedData);
    });
  }
};
export default CartDataProvider;
