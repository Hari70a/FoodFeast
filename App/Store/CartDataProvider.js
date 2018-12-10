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
  update: function(listData) {
    var id = listData.id;
    console.log(listData, "listData");
    //if (!callback) return;
    CartSchema.write(() => {
      //callback();
      CartSchema.create("CartItem", listData, true);
    });
  },
  deleteAll: function() {
    var storedData = CartSchema.objects("CartItem");
    CartSchema.write(() => {
      CartSchema.delete(storedData);
    });
  },
  findById: function(id) {
    var specifiedData = CartSchema.objects("CartItem").filtered("id =" + id);
    return specifiedData;
  },
  deleteById: function(id) {
    var storedData = CartSchema.objects("CartItem").filtered("id =" + id);
    CartSchema.write(() => {
      CartSchema.delete(storedData);
    });
  }
};
export default CartDataProvider;
