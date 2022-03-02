<template>
  <input type="text" v-model="cari" placeholder="cari" />
  <ul>
    <li v-for="item in filteredProducts" :key="item.id">{{ item.name }} - {{ item.price }}</li>
  </ul>
</template>

<script>
export default {
  name: "6-Computed-properties",
  data() {
    return {
      cari: "",
      products: [
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
      ],
    };
  },
  computed: {
    filteredProducts() {
      return this.products.filter((product) => {
        return product.name.toLowerCase().includes(this.cari.toLowerCase());
      });
    },
  },
};
</script>
