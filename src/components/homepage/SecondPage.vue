<template>
  <div class="home-bg-2 column justify-start items-center">
    <div class="heading-text column justify-center items-center">
      <h3 class="q-pa-md row-12">Services We Offer</h3>

      <div class="q-pa-md row justify-center">
        <div
          class="horizontal-line col-lg-7 col-md-8 col-sm-10 col-xs-12"
        ></div>
        <h6 class="col-lg-7 col-md-8 col-sm-10 gt-xs">
          Our end-to-end software development services offering is backed by our
          16 years of experience, standard processes, quality assurance and
          expertise in multiple technologies.
        </h6>

        <p class="col-xs-12 xs">
          Our end-to-end software development services offering is backed by our
          16 years of experience, standard processes, quality assurance and
          expertise in multiple technologies.
        </p>
      </div>
    </div>

    <!-- Cards area -->

    <div class="q-pa-md services-cards row justify-between">
      <div class="card row justify-between col-md-5 col-sm-8">
        <img
          src="~assets/services/computer.png"
          width="110"
          height="110"
          alt="~assets/services/comp.svg"
          srcset=""
        />
        <div class="q-pa-lg card-title col">
          Custom Application Development
          <div class="card-subtitle">
            Our custom application development services include customized
            application development & product development
          </div>
        </div>
      </div>
      <div class="card row justify-between col-md-5 col-sm-8">
        <img
          src="~assets/services/enterprice.png"
          width="110"
          height="110"
          alt="~assets/services/comp.svg"
          srcset=""
        />
        <div class="q-pa-lg card-title col">
          Enterprise Solution
          <div class="card-subtitle">
            Our Enterprise Application will elevate your business organizations
            to a new level
          </div>
        </div>
      </div>
      <div class="card row justify-between col-md-5 col-sm-8">
        <img
          src="~assets/services/maintenance.png"
          width="110"
          height="110"
          alt="~assets/services/comp.svg"
          srcset=""
        />
        <div class="q-pa-lg card-title col">
          Application Development & Maintenance
          <div class="card-subtitle">
            As your business requires changes constantly, we will accommodate
            your application & add additional features so your business can
            thrive.
          </div>
        </div>
      </div>
      <div class="card row justify-between col-md-5 col-sm-8">
        <img
          src="~assets/services/mobile.png"
          width="90"
          height="110"
          alt="~assets/services/comp.svg"
          srcset=""
        />
        <div class="q-pa-lg card-title col">
          Mobile Apps
          <div class="card-subtitle">
            "We also provide you with mobile apps that will advance your
            business with mobility as well as being connected to your customers
          </div>
        </div>
      </div>
      <div class="card row justify-between col-md-5 col-sm-8">
        <q-icon
          name="~assets/services/testing.png"
          width="110"
          height="110"
          alt="~assets/services/comp.svg"
          srcset=""
        />
        <div class="q-pa-lg card-title col">
          Testing & QA
          <div class="card-subtitle">
            we will use testing process to ensuring that your product is of the
            highest possible quality and ensure great user experience for your
            customers.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const cards = [
  {
    source: "comp",
    title: "Custom Application Development",
    subtitle:
      "Our custom application development services include customized application development as well as product development",
  },
  {
    source: "enterprise",
    title: "Enterprise Solution",
    subtitle:
      "Our Enterprise Application will elevate your business organizations to a new level",
  },
  {
    source: "maintenance",
    title: "Application Development & Maintenance",
    subtitle:
      "As your business requires changes constantly, we will accommodate application with your business changes as well as add additional features so your business can thrive.",
  },
  {
    source: "mobile",
    title: "Mobile Apps",
    subtitle:
      "We also provide you with mobile apps that will advance your business with mobility as well as being connected to your customers",
  },
  {
    source: "testing.png",
    title: "Testing & QA",
    subtitle:
      "we will use testing process to ensuring that your product is of the highest possible quality and ensure great user experience for your customers.",
  },
];
export default {
  name: "second-page",
  data() {
    return { cards: cards };
  },
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
  color: rgb(0, 0, 0);
}
.heading-text {
  background-color: rgba($color: #ffffff, $alpha: 0.85);
  border-radius: 0 0 1rem 1rem;
}
p,
h6 {
  color: rgba($color: rgb(0, 0, 0), $alpha: 0.85);
}
.horizontal-line {
  height: 0.1rem;

  background-color: rgb(0, 0, 0);
}

.services-cards {
  .card {
    cursor: pointer;
    padding: 1rem;
    background-color: rgba($color: #ffffff, $alpha: 0.8);
    color: black;
    border-radius: 1rem;
    .card-title {
      font-size: 1.2rem;
      font-weight: 500;
    }
    .card-subtitle {
      font-size: 1rem;
      font-weight: 400;
      @media (max-width: 600px) {
        font-size: 0.75rem;
      }
    }
  }

  gap: 1rem;
  justify-content: center;
  text-align: right;
}
</style>
