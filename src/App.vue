<template>
  <router-view />
  <Footer />
</template>
<script>
import { defineComponent } from "vue";
import Footer from "components/Footer.vue";
export default defineComponent({
  name: "App",
  components: {
    Footer,
  },
});
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap");
* {
  font-family: "Poppins", sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
h3 {
  font-size: 2.75rem;
  font-weight: 700;
  margin-bottom: 1rem;
}
h4 {
  font-size: 2rem;
  font-weight: 500;
}
h6 {
  font-size: 1.15rem;
  font-weight: 400;
}
</style>
