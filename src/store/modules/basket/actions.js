import { UtilsService } from "@/services/utilsService.js";
import { BasketService } from "@/services/basketService.js";
import { auth } from "@/firebase.js";

export const actions = {
  fetchDataFromCart: ({ commit }) => {
    BasketService.fetchDataFromCart().then((snapshot) => {
      const existingBasketList = UtilsService.parseFirebaseFetchedData(
        snapshot
      );
      if (existingBasketList.length > 0) {
        commit("addProductsToCart", existingBasketList);
      }
    });
  },
  addProductToCart: ({ commit, getters }, product) => {
    const isProductInCart = UtilsService.isItemInList({
      list: getters.getBasketList,
      item: product,
      currentItemProp: "id",
      targetItemProp: "productId",
    });

    if (isProductInCart) {
      const notificationData = {
        title: "Warning",
        type: "warning",
        message: "Product already present in the cart",
      };
      UtilsService.showNotification(notificationData);
    } else {
      const basketProduct = {
        productId: product.id,
        userId: auth.currentUser.uid,
        quantity: product.quantity,
        name: product.name,
      };

      BasketService.addProductToCart(basketProduct).then((response) => {
        basketProduct.id = response.id;
        commit("addProductsToCart", [basketProduct]);
      });
    }
  },
  removeProductFromCart: ({ commit }, product) => {
    const productId = product.id;
    BasketService.removeProductFromCart(productId)
      .then(function () {
        commit("removeProductFromCart", {
          productId,
        });
      })
      .catch(function (error) {
        console.error("Error removing document: ", error);
      });
  },
};
