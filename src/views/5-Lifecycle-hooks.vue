<template>
  <div v-if="products.length">
    <ul>
      <li v-for="item in products" :key="item.id">{{ item.name }} - {{ item.price }}</li>
    </ul>
  </div>
  <div v-else>
    <p>No products found</p>
  </div>
</template>

<script>
export default {
  name: "5-lifecycle-hooks",
  data() {
    return {
      products: [],
    };
  },

  beforeMount() {
    console.log("beforeMount");
  },
  mounted() {
    console.log("mounted");
  },
  beforeCreate() {
    console.log("beforeCreate");
  },
  created() {
    console.log("created");
    this.products = [
      {
        name: "Product 1",
        price: 1000,
      },
      {
        name: "Product 2",
        price: 2000,
      },
      {
        name: "Product 3",
        price: 3000,
      },
    ];
  },
};
</script>
