import { mapGetters } from "vuex";

export default {
  name: "search-form",
  components: {},
  props: [],
  data() {
    return {
      searchForm: {
        name: "",
        type: "",
      },
    };
  },
  computed: {
    ...mapGetters({
      types: "products/getTypes",
    }),
  },
  mounted() {},
  methods: {
    onSubmit() {
      console.log("search");
    },
  },
};
