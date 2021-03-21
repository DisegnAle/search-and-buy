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
      basketList: "basket/getBasketList",
    }),
  },
  mounted() {},
  methods: {
    removeFromCart(product) {
      this.$store.dispatch("basket/removeProductFromCart", product);
    },
  },
};
