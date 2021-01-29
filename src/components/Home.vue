<template>
  <div>
    <h1 class="text-center mt-3 mb-5">Home Products</h1>
    <div class="container">
      <div class="row">
        <div class="col-6" v-for="item in dataProducts" :key="item.id">
          <div class="card mb-3">
            <div class="card-header">
              {{ item.title }} | NGN {{ item.price }}
            </div>
            <div class="card-body">
              {{ item.description }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import fetchedProducts from "../products.json";
export default {
  beforeRouteEnter(to, from, next) {
    if (!localStorage.getItem("auth")) {
      next({ path: "/login" });
    }
    next();
  },
  mounted() {
    this.getProducts();
  },
  data() {
    return { dataProducts: [] };
  },
  methods: {
    getProducts() {
      this.dataProducts = fetchedProducts;
    },
  },
};
</script>