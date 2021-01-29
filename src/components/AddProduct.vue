<template>
  <div class="mx-auto text-center">
    <h1 class="my-3">Add Product</h1>
    <input
      class="form-control mt-3"
      type="text"
      placeholder="Product Name"
      v-model="name"
    />
    <input
      class="form-control mt-3"
      type="text"
      placeholder="Product Price"
      v-model="price"
    />
    <input
      class="form-control mt-3"
      type="text"
      placeholder="Product Description"
      v-model="description"
    />
    <input
      class="form-control mt-3"
      type="number"
      placeholder="Product Quantity"
      v-model="quantity"
    />
    <button type="submit" class="btn btn-block mt-3" @click="addProduct">
      Add Product
    </button>
  </div>
</template>

<script>
import Axios from "axios";

export default {
  beforeRouteEnter(to, from, next) {
    if (!localStorage.getItem("auth")) {
      next({ path: "/login" });
    }
    next();
  },
  data() {
    return {
      name: "",
      price: "",
      description: "",
      quantity: "",
    };
  },
  methods: {
    addProduct() {
      let payload = {
        name: this.name,
        price: this.price,
        description: this.description,
        quantity: this.quantity,
        userid: JSON.parse(localStorage.getItem("auth")),
        key: "APS",
      };
      if (!this.name && !this.description && !this.quantity && !this.price) {
        this.$noty.error("Please fill all fields");
      } else {
        Axios.post("http://localhost/apis/E-comm/api.php", payload)
        .then((response) => {
          console.log(response);
            if (response.data.code === "01") {
              this.$noty.error(response.data.data);
            } else if (response.data.code === "00") {
              this.$noty.success(response.data.data);
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