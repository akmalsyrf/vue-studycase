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
  name: "4-loop-conditional",
  data() {
    return {
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
};
</script>
