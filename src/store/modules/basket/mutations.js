export const mutations = {
  addProductsToCart(state, products) {
    const basketList = [...state.basketList];
    state.basketList = basketList.concat(products);
  },
  removeProductFromCart(state, { productId }) {
    const list = [...state.basketList];
    state.basketList = list.filter((_product) => {
      return _product.id !== productId;
    });
  },
};
