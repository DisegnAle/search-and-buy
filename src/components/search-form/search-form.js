import { mapGetters } from "vuex";
import { ValidationsService } from "@/services/validationsService.js";

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
      rules: {
        name: [
          { validator: ValidationsService.onlyLettersAllowed, trigger: "blur" },
          {
            min: 0,
            max: 30,
            message: "Length should be 0 to 30",
            trigger: "blur",
          },
        ],
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
    onSubmit(formData, formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$store.dispatch("products/searchProducts", formData);
        } else {
          return false;
        }
      });
    },
  },
};
