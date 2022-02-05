<template>
  <div class="home-bg-2 column justify-center items-center">
    <div class="q-pa-md heading-text column justify-center items-center">
      <h3>Contact Us</h3>
      <h6>
        If you’re considering Oprosoft or just want more information, call us at
        below contact numbers.
      </h6>
      <br />
      <h6>+923144772626 (Office)</h6>
      <br />
      <br />
      <h6>Or Email Us:</h6>
      <h6>info@oprosoft.com</h6>
    </div>

    <!-- Cards area -->
  </div>
</template>

<script>
export default {
  name: "contact",
};
</script>

<style lang="scss" scoped>
.home-bg-2 {
  background-image: url("~assets/home-bg-2.jpg");
  min-height: 100vh;
  width: 100%;
  background-size: cover;
  margin: 0;
  padding: 0;
}

h3 {
  color: white;
}
.heading-text {
  background-color: rgba($color: #000000, $alpha: 0.5);
}
p,
h6 {
  color: rgba($color: white, $alpha: 0.85);
}
.horizontal-line {
  height: 0.1rem;

  background-color: white;
}

.services-cards {
  .card {
    padding: 1rem;
    background-color: rgba($color: #000000, $alpha: 0.5);
    border-radius: 1rem;
    .card-title {
      font-size: 1.2rem;
      font-weight: 500;
    }
    .card-subtitle {
      font-size: 0.8rem;
      font-weight: 400;
    }
  }

  gap: 1rem;
  justify-content: center;
  text-align: center;
}
</style>
