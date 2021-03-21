import { db, auth } from "@/firebase.js";
export const BasketService = {
  fetchDataFromCart() {
    return db
      .collection("users")
      .doc(auth.currentUser.uid)
      .collection("basket")
      .get();
  },
  addProductToCart(product) {
    return db
      .collection("users")
      .doc(auth.currentUser.uid)
      .collection("basket")
      .add({
        productId: product.id,
        userId: auth.currentUser.uid,
        quantity: product.quantity,
        name: product.name,
        description: product.description,
      });
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
