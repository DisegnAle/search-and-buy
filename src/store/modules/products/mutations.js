export const mutations = {
  setSearchResults(state, searchResults) {
    state.searchResults = [...searchResults];
  },
  addProductToCart(state, product) {
    state.basketList.push(product);
  },
};
