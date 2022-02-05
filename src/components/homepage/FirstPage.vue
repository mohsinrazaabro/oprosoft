<template>
  <div class="home-bg-1">
    <div class="container row justify-around items-center">
      <div class="header-box col-sm-6 col-md-4 col-xs-11">
        <h3>OPROSOFT</h3>
        <div class="line"></div>
        <h6>Providing best solutions since 2004</h6>
        <p>
          Oprosoft (Our Professional Software) is a Software Development Company
          that focuses on highly qualitative, timely delivered and
          cost-effective IT outsourcing services. Our rich and varied experience
          of 15 years and stringent quality standards ensure us to develop
          software solutions that give your business an edge over competitors.
          Our global software outsourcing model ensure we deliver maximum
          targeted result to YOU. We serve clientele across the globe and
          Development Center in Pakistan.
        </p>
      </div>
      <!--   <div class="icon icon-1 col-md-2 col-sm-2 gt-xs"></div>
      <div class="icon icon-2 col-md-2 col-sm-2 gt-xs"></div>
      <div class="icon icon-3 col-md-2 col-sm-2 gt-xs"></div> -->
      <div
        class="row col-sm-5 col-md-6 round-card col-xs-11 justify-around items-center"
      >
        <div
          class="col-md-4 col-sm-6 col-xs-4 column justify-center items-center"
        >
          <img src="~assets/development.svg" alt="" />
          <p class="" centered>
            SOFTWARE <br />
            DEVELOPMENT
          </p>
        </div>
        <div
          class="col-md-4 col-sm-6 col-xs-4 column justify-center items-center"
        >
          <img class="" src="~assets/maintenance.svg" alt="" srcset="" />
          <p class="" centered>
            SOFTWARE <br />
            MAINTENANCE
          </p>
        </div>
        <div class="col-md-4 col-sm-6 gt-xs column justify-center items-center">
          <img class="" src="~assets/migration.svg" width="" alt="" srcset="" />
          <p class="" centered>
            SOFTWARE <br />
            MIGRATION
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FirstHomePage",
};
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
}

.round-card {
  background-color: rgba($color: white, $alpha: 0.75);
  padding: 2rem 1rem 1rem;
  border-radius: 1rem;
  color: black;
}

.container {
  height: 80%;
  padding-top: 10%;
}
.home-bg-1 {
  background-image: url("~assets/home-bg-1.jpg");
  min-height: 100vh;
  width: 100%;
  background-size: cover;
  margin: 0;
  padding: 0;
}

.header-box {
  background-color: rgba($color: #fbfbfb, $alpha: 1);
  margin: 3rem 1rem;

  padding: 2rem 2rem 0.5rem;
}

.line {
  height: 0.5rem;

  background-color: $secondary;
  margin: 1rem auto 0.5rem;
}
h3 {
  color: $primary;
}

.round-card p {
  margin: 1rem;
  text-align: center;
}

.header-box p {
  margin-top: 2rem;
  color: rgba($color: rgb(0, 0, 0), $alpha: 0.8);
}
</style>
