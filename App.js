new Vue({
  el: "#app",
  data: {
    picture: "https://randomuser.me/api/portraits/women/87.jpg",
    name: "ByamB4",
    email: "hello@oyulearn.com",
    gender: "female",
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
  },
});
