import { db } from "@/firebase.js";
export const BasketService = {
  fetchDataFromCart(idUser) {
    return db.collection("users").doc(idUser).collection("basket").get();
  },
  addProductToCart(basketProduct, idUser) {
    return db
      .collection("users")
      .doc(idUser)
      .collection("basket")
      .add(basketProduct);
  },
  removeProductFromCart(productId, idUser) {
    return db
      .collection("users")
      .doc(idUser)
      .collection("basket")
      .doc(productId)
      .delete();
  },
};
