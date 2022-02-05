<template>
  <div class="q-pa-md home-bg-4 column justify-start">
    <div class="column col justify-start items-center">
      <h3>Technologies We Expertise</h3>
      <h6>
        We offer our IT expertise across the technology platforms, like
        Microsoft (.NET), SQL Server, MS Acess, Android. and Java.
      </h6>
    </div>
    <div class="q-ma-md icons row justify-center self-center">
      <div class="icon-1 icon col-md-2 col-sm-3 col-xs-4"></div>
      <div class="icon-2 icon col-md-2 col-sm-3 col-xs-4"></div>
      <div class="icon-3 icon col-md-2 col-sm-3 col-xs-4"></div>
      <div class="icon-4 icon col-md-2 col-sm-3 col-xs-4"></div>
      <div class="icon-5 icon col-md-2 col-sm-3 col-xs-4"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "fourth-page",
};
</script>

<style lang="scss" scoped>
.home-bg-4 {
  width: 100%;
  background-size: cover;
  margin: 0;
  padding: 0;
  text-align: center;
  background-color: rgba($color: #000000, $alpha: 0.1);
}
h3,
h6 {
  color: rgb(0, 0, 0);
  margin: 1rem;
  padding: 0.5rem;
  border-radius: 1rem;
}
.icon {
  padding: 100px;
  margin: 1rem;
}
.icon-1 {
  background-image: url("~assets/technologies/android.png");
  background-size: cover;
}

.icon-2 {
  background-image: url("~assets/technologies/access.png");
  background-size: cover;
}

.icon-3 {
  background-image: url("~assets/technologies/dotnet.png");
  background-size: cover;
}

.icon-4 {
  background-image: url("~assets/technologies/java.png");
  background-size: cover;
}
.icon-5 {
  background-image: url("~assets/technologies/sql.png");
  background-size: cover;
}

.icons {
  gap: 1;
}
</style>
