<template>
  <q-page-sticky position="bottom-left" :offset="[18, 18]">
    <q-fab
      v-model="fab1"
      label="Get in touch"
      label-position="right"
      label-class="bg-grey-1 text-purple"
      external-label
      color="blue-8"
      icon="phone"
      direction="up"
    >
      <a href="https://wa.me/923144772626"
        ><q-fab-action
          label-class="bg-grey-3 text-grey-8"
          external-label
          label-position="right"
          color="green"
          icon="whatsapp"
          label="Whatsapp"
      /></a>
    </q-fab>
  </q-page-sticky>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "CallToAction",
  data() {
    return {
      fab1: ref(false),
    };
  },
});
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
}
q-fab {
  color: $primary;
}
</style>
