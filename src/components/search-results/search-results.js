import { mapGetters } from "vuex";

export default {
  name: "search-results",
  components: {},
  props: [],
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      searchedProducts: "products/getSearchResults",
    }),
  },
  mounted() {},
  methods: {
    handleChangeQuantity(quantityValue) {
      console.log(quantityValue);
    },
    addToCart(product) {
      console.log(product);
    },
  },
};
