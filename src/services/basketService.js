import { db, auth } from "@/firebase.js";
export const BasketService = {
  fetchDataFromCart() {
    return db
      .collection("users")
      .doc(auth.currentUser.uid)
      .collection("basket")
      .get();
  },
  addProductToCart(basketProduct) {
    return db
      .collection("users")
      .doc(auth.currentUser.uid)
      .collection("basket")
      .add(basketProduct);
  },
  removeProductFromCart(productId) {
    return db
      .collection("users")
      .doc(auth.currentUser.uid)
      .collection("basket")
      .doc(productId)
      .delete();
  },
};
