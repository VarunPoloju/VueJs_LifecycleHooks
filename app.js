const app = Vue.createApp({
  data() {
    return {
      currentUserInput: "",
      message: "Vue is great!",
    };
  },
  methods: {
    setText() {
      this.message = this.$refs.userText.value; //refs
    },
  },
  beforeCreate() {
    console.log("beforeCreate");
  },
  created() {
    console.log("Created");
  },
  beforeMount() {
    console.log("beforeMount");
  },
  mounted() {
    console.log("Mounted");
  },
  beforeUpdate() {
    console.log("beforeUpdate");
  },
  updated() {
    console.log("updated");
  },
  beforeUnmount() {
    console.log("beforeUnmount");
  },
  unmounted() {
    console.log("unmounted");
  },
});

const app2 = Vue.createApp({
  data() {
    return {
      message2: "Varun Poloju",
    };
  },
});

app.mount("#app");

setTimeout(() => {
  app.unmount();
}, 3000);
app2.mount("#app2");
