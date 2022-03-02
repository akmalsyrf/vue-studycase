<template>
  <input type="text" v-model="nama" />
  {{ nama }}
</template>

<script>
export default {
  name: "3-2way-data-binding",
  data() {
    return {
      nama: "",
    };
  },
};
</script>
