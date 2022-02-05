<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar style="background-color: white">
        <img
          alt="Quasar logo"
          src="~assets/oprologo2.png"
          style="width: 48px; height: 48px"
        />
        <q-toolbar-title style="font-weight: 600; color: #437bcd">
          OPROSOFT
        </q-toolbar-title>
        <q-btn
          class="lt-sm"
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
          color="black"
        />
        <div class="gt-xs">
          <ul class="links">
            <li @click="this.$router.push('/')">Home</li>
            <li @click="this.$router.push('products')">Products</li>
            <!-- 
            <li @click="this.$router.push('services')">Services</li>
            <li @click="this.$router.push('about')">About</li> -->
            <li @click="this.$router.push('contact')">Contact</li>
          </ul>
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" bordered>
      <q-list>
        <q-item-label header> Oprosoft </q-item-label>

        <q-item clickable v-ripple @click="this.$router.push('/')">
          <q-item-label class="text-black"> Home </q-item-label>
        </q-item>

        <q-item clickable v-ripple @click="this.$router.push('/products')">
          <q-item-label class="text-black"> Products </q-item-label> </q-item
        ><!-- 
        <q-item clickable v-ripple @click="this.$router.push('/services')">
          <q-item-label class="text-black"> Services </q-item-label>
        </q-item>
        <q-item clickable v-ripple @click="this.$router.push('/about')">
          <q-item-label class="text-black"> About </q-item-label>
        </q-item> -->

        <q-item clickable v-ripple @click="this.$router.push('/contact')">
          <q-item-label class="text-black"> Contact </q-item-label>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "MainLayout",

  components: {},

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>

<style lang="scss" scoped>
.links {
  display: flex;
  list-style-type: none;
}

.links li {
  margin-left: 1rem;
  color: black;
  cursor: pointer;
}
.links li:hover {
  color: $primary;
}
q-item-label {
  color: black;
}
</style>
