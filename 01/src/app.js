const app = {
  data() {
    return {
      name: "",
      age: 20,
      input_name: ""
    }
  },
  methods: {
    submitForm(e) {
      e.preventDefault();
      this.name = this.input_name;
    }
  }
}

Vue.createApp(app).mount("#app")