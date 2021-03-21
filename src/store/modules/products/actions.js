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
    if (
      UtilsService.isItemInList({ list: getters.getBasketList, item: product })
    ) {
      console.log("già presente");
    } else {
      commit("addProductToCart", product);
    }
  },
};
