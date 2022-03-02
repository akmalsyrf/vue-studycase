<template>
  <a v-bind:href="urlgo">Go to google</a><br />
  <a :href="urlfb">Go to fb</a>
</template>

<script>
export default {
  name: "2-Data-binding",
  data() {
    return {
      urlgo: "https://www.google.com/",
      urlfb: "https://www.facebook.com/",
    };
  },
};
</script>
