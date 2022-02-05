<template>
  <q-page>
    <first-page />
    <!--   <second-page /> -->
    <third-page />
    <fourth-page />
    <call-to-action />
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import { ref } from "vue";

import CallToAction from "components/CallToAction.vue";
import FirstPage from "src/components/homepage/FirstPage.vue";
//import SecondPage from "src/components/homepage/SecondPage.vue";
import ThirdPage from "src/components/homepage/ThirdPage.vue";
import FourthPage from "src/components/homepage/FourthPage.vue";

export default defineComponent({
  name: "PageIndex",
  components: {
    CallToAction,
    FirstPage,
    /*  SecondPage, */
    ThirdPage,
    FourthPage,
  },
  data() {
    return {
      fab1: ref(false),
    };
  },
});
</script>
