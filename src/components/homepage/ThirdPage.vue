<template>
  <div class="q-pa-lg home-bg-3 column justify-start items-center">
    <h3>Industries we serve:</h3>
    <h6>
      We serve multiple industries globally. Our domain expertise is backed by
      our phenomenal experience of successfully conceptualizing and delivering
      projects
    </h6>
    <q-list class="q-pa-lg q-ma-xl row justify-around items-center industries">
      <q-item
        expand-separator
        clickable
        v-ripple
        style="border-radius: 1rem"
        class="q-pa-sm row col-md-5 col-sm-9 col-xs-11 text-black bg-white gt-xs"
        v-for="(item, idx) in items"
        :key="idx"
        :icon="item.icon"
      >
        <q-item-section
          avatar
          class="q-pa-md"
          style="
            border-radius: 100%;
            background-color: white;
            box-shadow: 1px 2px 3px 1px rgba(0, 0, 0, 0.23);
          "
        >
          <q-icon color="primary" :name="`${item.icon}`" size="100px" />
        </q-item-section>

        <q-item-section
          style="font-weight: 500; font-size: 1.5rem; margin-left: 1rem"
        >
          {{ item.title }}
          <q-item-section caption style="font-weight: 400; font-size: 1rem">
            {{ item.caption }} Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Dolore ea ad maiores culpa at, minima maxime fuga
            delectus dolores reiciendis molestiae repellendus quis? Sed quod
            autem eius maiores, aperiam distinctio.
          </q-item-section>
        </q-item-section>
      </q-item>
      <q-item
        expand-separator
        clickable
        v-ripple
        style="border-radius: 1rem"
        class="q-pa-sm column justify-center items-center col-xs-11 text-black bg-white lt-sm"
        v-for="(item, idx) in items"
        :key="idx"
        :icon="item.icon"
      >
        <q-item-section
          avatar
          class="q-pa-md"
          style="
            border-radius: 100%;
            background-color: white;
            box-shadow: 1px 2px 3px 1px rgba(0, 0, 0, 0.23);
          "
        >
          <q-icon color="primary" :name="`${item.icon}`" size="100px" />
        </q-item-section>

        <q-item-section
          style="font-weight: 500; font-size: 1.5rem; margin-left: 1rem"
        >
          {{ item.title }}
          <q-item-section caption style="font-weight: 400; font-size: 1rem">
            {{ item.caption }} Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Dolore ea ad maiores culpa at, minima maxime fuga
            delectus dolores reiciendis molestiae repellendus quis? Sed quod
            autem eius maiores, aperiam distinctio.
          </q-item-section>
        </q-item-section>
      </q-item>
    </q-list>
    <q-btn @click="this.$router.push('products')">See more</q-btn>
  </div>
</template>

<script>
const items = [
  {
    icon: "desktop_windows",
    title: "Complete Accounting Solution",
    caption: "",
  },
  { icon: "fingerprint", title: "Biometric Attendance", caption: "" },
  { icon: "receipt_long", title: "Configurable Invoicing", caption: "" },

  {
    icon: "translate",
    title: "Unicode Application Development",
    caption: "",
  },
  { icon: "developer_mode", title: "Web & Mobile Applications", caption: "ss" },
  { icon: "rss_feed", title: "RFID", caption: "" },
];
export default {
  name: "third-page",
  data() {
    return {
      items: items,
    };
  },
};
</script>

<style lang="scss" scoped>
* {
  text-align: start;
}
.home-bg-3 {
  //background-image: url("~assets/home-bg-3.jpg");
  background-color: white;
  min-height: 100vh;
  width: 100%;
  background-size: cover;
  margin: 0;
  padding: 0;
  text-align: center;
}
h3,
h6 {
  color: white;
  margin: 1rem;
}

.services {
  background-color: rgba($color: white, $alpha: 0.5);
}

.industries {
  gap: 1rem;
  font-size: 1.5rem;
}
.expansion-item-class {
  font-size: 35px;
  color: red;
}
</style>
