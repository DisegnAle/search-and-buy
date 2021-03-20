import { ProductsService } from "@/services/productsService.js";

export const actions = {
  searchProducts: ({ commit }, searchFormData) => {
    ProductsService.searchProductsRequest(searchFormData).then((snapshot) => {
      const data = ProductsService.parseFetchedProducts(snapshot);
      commit("setProductList", data);
    });
  },
};
