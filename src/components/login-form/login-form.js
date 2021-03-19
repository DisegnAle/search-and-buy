import { mapGetters } from "vuex";
export default {
  name: "login-form",
  components: {},
  props: [],
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      loginForm: "authentication/getLoginData",
    }),
  },
  mounted() {},
  methods: {
    onSubmit() {
      console.log("loggin");
    },
  },
};
