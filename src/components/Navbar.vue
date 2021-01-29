<template>
  <nav>
    <ul>
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li v-show="authUser">
        <router-link to="/addproduct">Add Product</router-link>
      </li>
      <li v-show="!authUser">
        <router-link to="/login">Login</router-link>
      </li>
      <li v-show="!authUser">
        <router-link to="/signup">Signup</router-link>
      </li>
      <li v-show="authUser">
        <a href="" @click="logout">Logout</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  mounted() {
    this.authUser();
    console.log(localStorage.getItem("auth"));
  },
  computed: {
    authUser() {
      return localStorage.getItem("auth") || null;
    },
  },
  methods: {
    logout() {
      localStorage.setItem("auth", "");
      localStorage.clear();
      this.authUser = null;
      this.$router.push("/login");
    },
  },
};
</script>

<style scoped>
nav {
  background-color: #4caf50;
  border-bottom: solid 5px #555555;
  padding: 10px 20px;
}
nav ul {
  margin: 0;
  padding: 0;
  display: block;
  text-align: center;
}
nav ul li {
  list-style-type: none;
  display: inline-block;
  margin: 0 10px;
}
nav ul li a {
  display: inline-block;
  margin: 0 10px;
  cursor: pointer;
  color: #070d17;
  text-decoration: none;
}
</style>