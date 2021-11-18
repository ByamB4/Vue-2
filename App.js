new Vue({
  el: "#app",
  data: {
    name: "",
    email: "",
    accounts: [
      {
        name: "Byambadalai Sumiya",
        email: "byamba4life@gmail.com",
      },
      {
        name: "Joseph Young",
        email: "youngjose@mail.com",
      },
      {
        name: "Jack Hanma",
        email: "hanmajack@gmail.com",
      },
    ],
  },
  methods: {
    addAccount() {
      this.accounts.push({
        name: this.name,
        email: this.email,
      });
      this.name = "";
      this.email = "";
    },
  },
});
