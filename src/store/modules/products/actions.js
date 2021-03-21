import { ProductsService } from "@/services/productsService.js";
import { UtilsService } from "@/services/utilsService.js";

export const actions = {
  searchProducts: ({ commit }, searchFormData) => {
    ProductsService.searchProductsRequest(searchFormData).then((snapshot) => {
      const data = ProductsService.parseFetchedProducts(snapshot);
      commit("setSearchResults", data);
    });
  },
  addProductToCart: ({ commit, getters }, product) => {
    const isProductInCart = UtilsService.isItemInList({
      list: getters.getBasketList,
      item: product,
    });

    if (isProductInCart) {
      const notificationData = {
        title: "Warning",
        type: "warning",
        message: "Product already present in the cart",
      };
      UtilsService.showNotification(notificationData);
    } else {
      commit("addProductToCart", product);
    }
  },
  removeProductFromCart: ({ commit, getters }, product) => {
    const basketList = getters.getBasketList;
    commit("removeProductFromCart", { product, basketList });
  },
};
