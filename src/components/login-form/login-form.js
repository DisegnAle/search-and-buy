export default {
  name: "login-form",
  components: {},
  props: [],
  data() {
    return {
      loginForm: {
        username: "",
        password: "",
      },
      rules: {
        name: [
          {
            min: 0,
            max: 20,
            message: "Length should be 0 to 20",
            trigger: "blur",
          },
        ],
        password: [
          {
            min: 0,
            max: 20,
            message: "Length should be 0 to 20",
            trigger: "blur",
          },
        ],
      },
    };
  },
  computed: {},
  mounted() {},
  methods: {
    onSubmit(formData) {
      this.$store.dispatch("login", formData);
    },
  },
};
