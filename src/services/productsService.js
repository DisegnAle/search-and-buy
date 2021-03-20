import { UtilsService } from "@/services/utilsService.js";
import { db } from "@/firebase.js";

export const ProductsService = {
  setQuery(searchFormData) {
    let { name, type } = searchFormData;
    let products = db.collection("products");

    if (UtilsService.isInputFilled(searchFormData.type)) {
      products = products.where("type", "==", type);
    }

    if (UtilsService.isInputFilled(searchFormData.name)) {
      products = products.where("name", "==", name);
    }
    return products;
  },

  searchProductsRequest(searchFormData) {
    const products = this.setQuery(searchFormData);
    return products.get();
  },

  parseFetchedProducts(snapshot) {
    return snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  },
};
