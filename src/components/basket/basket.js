import { mapGetters } from "vuex";
export default {
  name: "basket",
  components: {},
  props: [],
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      basketList: "products/getBasketList",
    }),
  },
  mounted() {},
  methods: {
    removeFromCart(product) {
      this.$store.dispatch("products/removeProductFromCart", product);
    },
  },
};
