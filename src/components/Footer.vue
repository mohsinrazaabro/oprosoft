<template>
  <div class="q-pa-md footer row bg-blue-grey-9 justify-around items-center">
    <div class="logo-area column col-md-2 col-sm-3 col-xs-12 gt-xs">
      <div class="logo col-6 column justify-center items-center">
        <h6>About Us</h6>
        <hr width="100%" />
        <ul class="links">
          <li @click="this.$router.push('/')">Home</li>
          <li @click="this.$router.push('services')">Services</li>
          <li @click="this.$router.push('about')">About</li>
          <li @click="this.$router.push('contact')">Contact</li>
        </ul>
      </div>
    </div>
    <div
      class="logo-area column col-md-3 col-sm-4 col-xs-12 justify-center items-center"
    >
      <div class="logo col-1">
        <img src="~assets/logogrey.png" width="100px" alt="" srcset="" />
      </div>
      <h6>OPROSOFT</h6>

      <p class="col">
        Oprosoft features a user experience designed for maximum productivity
        and ease of use by User-friendly design, Automated workflows, Intuitive
        navigation, Groupware integration , Raising Technology platforms since
        2004.
      </p>
      <hr width="100%" />
      <p>Copyright Oprosoft InfoTech - All Rights Reserved</p>
    </div>
    <div
      class="logo-area column justify-center items-center col-md-2 col-sm-3 col-xs-12"
    >
      <div class="logo col-6">
        <h6>Contact Us</h6>
        <div class="q-pa-md contactus">
          <div class="text-white q-gutter-md">
            <q-icon name="facebook" size="xl" />
            <q-icon name="whatsapp" size="xl" />
            <q-icon name="email" size="xl" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style lang="scss" scoped>
* {
  color: white;
}
footer {
  text-align: center;
}
.logo {
  height: 100%;
}

.links {
  list-style-type: none;
}

.links li {
  margin-left: 1rem;
  cursor: pointer;
}
.links li:hover {
  color: $primary;
}
</style>
