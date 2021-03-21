export const mutations = {
  setSearchResults(state, searchResults) {
    state.searchResults = [...searchResults];
  },
  addProductToCart(state, product) {
    state.basketList.push(product);
  },
  removeProductFromCart(state, { product, basketList }) {
    const list = [...basketList];
    state.basketList = list.filter((_product) => {
      return _product.id !== product.id;
    });
  },
};
