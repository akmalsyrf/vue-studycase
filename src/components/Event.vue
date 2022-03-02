<template>
  <h2>{{ teks }}</h2>
  <button @click="changeText">Ubah text</button>
</template>

<script>
export default {
  name: "Event",
  props: ["teks"],
  data() {
    return {
      newTeks: "Hello World",
    };
  },
  methods: {
    changeText() {
      this.$emit("changeTitle", this.newTeks);
    },
  },
  emits: ["changeTitle"], //mengilangkan warning di console
};
</script>

<style></style>
