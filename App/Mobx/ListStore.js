import { observable } from "mobx";
import CartDataProvider from "../Store/CartDataProvider";

class ObservableListStore {
  @observable cartItemsCount = [...CartDataProvider.findAll()].length;

  getCount() {
    this.cartItemsCount = [...CartDataProvider.findAll()].length;
  }
}

const observableListStore = new ObservableListStore();

export default observableListStore;
