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
    addToCart(product) {
      this.$store.dispatch("basket/addProductToCart", product);
    },
  },
};
