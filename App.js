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
    async changeUser() {
      const res = await fetch("https://randomuser.me/api/");
      const { results } = await res.json();
      this.name = results[0].name.first;
      this.email = results[0].email;
      this.picture = results[0].picture.large;
      this.gender = results[0].gender;
    },
    addAccount() {
      this.accounts.push({
        name: this.name,
        email: this.email,
      });
      this.name = ""
      this.email = ""
    },
  },
});
