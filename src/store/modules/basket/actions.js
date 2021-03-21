import { UtilsService } from "@/services/utilsService.js";
import { BasketService } from "@/services/basketService.js";

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
      BasketService.addProductToCart(product).then((response) => {
        product.id = response.id;
        commit("addProductsToCart", [product]);
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
