import { ProductsService } from "@/services/productsService.js";
import { UtilsService } from "@/services/utilsService.js";

export const actions = {
  searchProducts: ({ commit }, searchFormData) => {
    ProductsService.searchProductsRequest(searchFormData).then((snapshot) => {
      const data = UtilsService.parseFirebaseFetchedData(snapshot);
      commit("setSearchResults", data);
    });
  },
};
