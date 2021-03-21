import { mapGetters } from "vuex";

export default {
  name: "search-results",
  components: {},
  props: [],
  data() {
    return {
      num: 0,
    };
  },
  computed: {
    ...mapGetters({
      searchedProducts: "products/getSearchResults",
    }),
  },
  mounted() {},
  methods: {
    handleChangeQuantity(product) {
      console.log(product);
    },
    addToCart(product) {
      console.log(product);
    },
  },
};
