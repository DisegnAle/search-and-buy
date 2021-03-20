import loginForm from "@/components/login-form/index.vue";
import { db } from "@/firebase.js";

//temporary
export default {
  name: "login",
  components: {
    loginForm,
  },
  props: [],
  data() {
    return {};
  },
  computed: {},
  mounted() {
    //this.getBooks();
  },
  methods: {
    getBooks() {
      const products = db
        .collection("products")
        .where("name", "==", "Nevermind");

      products.get().then((snapshot) => {
        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        console.log("All data in 'books' collection", data);
        // [ { id: 'glMeZvPpTN1Ah31sKcnj', title: 'The Great Gatsby' } ]
      });
    },
  },
};
