export const getters = {
  getTypes(state) {
    return state.types;
  },
  getSearchResults(state) {
    return state.searchResults.map((singleResult) => {
      return Object.assign({}, singleResult, { quantity: 0 });
    });
  },
  getBasketList(state) {
    return state.basketList;
  },
};
