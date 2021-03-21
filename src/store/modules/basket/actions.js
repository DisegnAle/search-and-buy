import { UtilsService } from "@/services/utilsService.js";
import { BasketService } from "@/services/basketService.js";

export const actions = {
  fetchDataFromCart: ({ commit, rootState }) => {
    const idUser = rootState.authentication.idUser;
    BasketService.fetchDataFromCart(idUser).then((snapshot) => {
      const existingBasketList = UtilsService.parseFirebaseFetchedData(
        snapshot
      );
      if (existingBasketList.length > 0) {
        commit("addProductsToCart", existingBasketList);
      }
    });
  },
  addProductToCart: ({ commit, getters, rootState }, product) => {
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
      const idUser = rootState.authentication.idUser;
      const basketProduct = {
        productId: product.id,
        userId: idUser,
        quantity: product.quantity,
        name: product.name,
      };

      BasketService.addProductToCart(basketProduct, idUser).then((response) => {
        basketProduct.id = response.id;
        commit("addProductsToCart", [basketProduct]);
      });
    }
  },
  removeProductFromCart: ({ commit, rootState }, product) => {
    const productId = product.id;
    const idUser = rootState.authentication.idUser;
    BasketService.removeProductFromCart(productId, idUser)
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
