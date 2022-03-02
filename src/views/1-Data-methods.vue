<template>
  <h2>{{ count }}</h2>
  <button v-on:click="decrement">-</button>
  <button @click="increment">+</button>
</template>

<script>
export default {
  name: "1-Data-methods",
  data() {
    return {
      count: "0",
    };
  },
  methods: {
    increment() {
      this.count++;
    },
    decrement() {
      this.count--;
    },
  },
};
</script>
