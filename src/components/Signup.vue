<template>
  <div class="mx-auto text-center">
    <h1 class="my-3">Signup</h1>
    <input
      class="form-control mt-3"
      type="tel"
      placeholder="Phone Number"
      v-model="phone"
    />
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
    <button type="submit" class="btn btn-block mt-3" @click="register">
      Register
    </button>
  </div>
</template>

<script>
import Axios from "axios";

export default {
  beforeRouteEnter(to, from, next) {
    if (localStorage.getItem("auth")) {
      next({ path: "/" });
    }
    next();
  },
  data() {
    return {
      phone: "",
      email: "",
      password: "",
    };
  },
  methods: {
    register() {
      let payload = {
        phone: this.phone,
        email: this.email,
        password: this.password,
        key: "5buy9n4867ybn59"
      };
      if (!this.phone && !this.email && !this.password) {
        this.$noty.error("Please fill all fields");
      } else {
        Axios.post("http://localhost/apis/E-comm/api.php", payload)
          .then((response) => {
            if (response.data.code === "01") {
              this.$noty.error(response.data.data);
            } else if (response.data.code === "00") {
              this.$noty.success(response.data.data);
              this.$router.push('/login');
            }
          })
          .catch((error) => console.log(error));
      }
    },
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