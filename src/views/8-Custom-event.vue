<template>
  <Event @changeTitle="ubahTeks" :teks="teksAwal" />
</template>

<script>
import Event from "@/components/Event.vue";
export default {
  name: "8-Custom-event",
  components: {
    Event,
  },
  data() {
    return {
      teksAwal: "Teks ini akan diubah",
    };
  },
  methods: {
    ubahTeks(teks) {
      this.teksAwal = teks;
    },
  },
};
</script>

<style></style>
