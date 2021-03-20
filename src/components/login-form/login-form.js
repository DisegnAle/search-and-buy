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
