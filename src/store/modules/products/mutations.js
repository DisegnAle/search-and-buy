export const mutations = {
  setProductList(state, searchResults) {
    state.searchResults = [...searchResults];
  },
};
