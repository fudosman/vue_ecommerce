<template>
  <div class="mx-auto text-center">
    <h1 class="my-3">Login</h1>
    <input
      class="form-control mt-3"
      type="email"
      placeholder="Email"
      v-model="email"
    />
    <input
      class="form-control mt-3"
      type="password"
      placeholder="Password"
      v-model="password"
    />
    <button type="submit" class="btn btn-block mt-3" @click="login">
      Login
    </button>
  </div>
</template>

<script>
// import Axios from "axios";
export default {
  beforeRouteEnter(to, from, next) {
    if (localStorage.getItem("auth")) {
      next({ path: "/" });
    }
    next();
  },
  data() {
    return { email: "", password: "" };
  },
  methods: {
    login() {
      let payload = { email: this.email, password: this.password };
      if (!this.email || !this.password) {
        this.$noty.error("Please fill all fields");
        console.log(payload);
      } else {
        const responseData = JSON.stringify(payload.email);
        localStorage.setItem("auth", responseData);
        this.$router.push("/");
        this.$noty.success("Login successful");
      }
    },
    // nodeLogin() {
    //   let payload = { email: this.email, password: this.password };
    //   if (!this.email || !this.password) {
    //     this.$noty.error("Please fill all fields");
    //     console.log(payload);
    //   } else {
    //     Axios.post("http://localhost:5000/users/login", payload)
    //       .then((response) => {
    //         if (response.data.error) {
    //           this.$noty.error(response.data.error);
    //         } else {
    //           const responseData = JSON.stringify(response.data);
    //           localStorage.setItem("auth", responseData);
    //           this.$router.push("/");
    //         }
    //       })
    //       .catch((error) => console.log(error));
    //   }
    // }
  },
};
</script>

<style scoped>
div {
  background: #f0f0f0;
  border: 1px solid #ccc;
  max-width: 500px;
  padding: 20px 40px 40px;
  margin-top: 50px;
}
.form-control,
.btn {
  box-shadow: none;
}
.btn {
  background: #0f1724;
  border: none;
  color: #fff;
  margin: 5px auto;
}
</style>