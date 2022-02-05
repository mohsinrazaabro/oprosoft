<template>
  <div class="home-bg-2 column justify-start items-center">
    <div class="heading-text column justify-center items-center">
      <h3 class="q-pa-md row-12">Our Services.</h3>

      <div class="q-pa-md row justify-center">
        <div
          class="horizontal-line col-lg-7 col-md-8 col-sm-10 col-xs-12"
        ></div>
        <h6 class="col-lg-7 col-md-8 col-sm-10 gt-xs">
          As a software development service provider, Oprosoft strives to
          provide our customers quality application development services and web
          development services that help them to remain in step with their
          competitors. For this, we use modern software development platforms,
          application development tools as well as employ latest project
          management techniques and software engineering practices. Using
          structured methodologies and proven IT processes helps to reduce
          complexity, risks and costs associated with offshore software
          outsourcing services, We help our customers to develop custom software
          applications and assist them throughout the entire software
          development Life Cycle, including project management, systems analysis
          and design, development, implementation, training and application
          maintenance. In a nutshell our strong technical team can help ensure
          that the offshore software development services we provide fit your
          business needs and meet your expectations. Our software development
          services includes:
        </h6>

        <p class="col-xs-12 xs">
          As a software development service provider, Oprosoft strives to
          provide our customers quality application development services and web
          development services that help them to remain in step with their
          competitors. For this, we use modern software development platforms,
          application development tools as well as employ latest project
          management techniques and software engineering practices. Using
          structured methodologies and proven IT processes helps to reduce
          complexity, risks and costs associated with offshore software
          outsourcing services, We help our customers to develop custom software
          applications and assist them throughout the entire software
          development Life Cycle, including project management, systems analysis
          and design, development, implementation, training and application
          maintenance. In a nutshell our strong technical team can help ensure
          that the offshore software development services we provide fit your
          business needs and meet your expectations. Our software development
          services includes:
        </p>
      </div>
    </div>

    <!-- Cards area -->

    <div class="q-pa-md services-cards row">
      <div
        class="card col-md-3 col-sm-4 col-xs-11"
        v-for="(card, idx) in cards"
        :key="idx"
      >
        <!--  <img src="~assets/services/comp.svg" alt="" srcset="" /> -->
        <div class="card-title">{{ card.title }}</div>
        <div class="card-subtitle">
          {{ card.subtitle }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const cards = [
  {
    title: "Custom Application Development",
    subtitle:
      "Our custom application development services include customized application development as well as product development",
  },
  {
    title: "Web Development Services",
    subtitle:
      "We provide high quality and cost effective offshore web development services to our reputable clients.",
  },
  {
    title: "Software Migration",
    subtitle:
      "Our Software Application Migration services help retain the know-how in your legacy applications and at the same time leverage on the performance potential of latest technologies.",
  },
  {
    title: "Application Maintenance",
    subtitle:
      "As needs for business changes constantly, application deployed to manage business also needs to accommodate business changes as well as additional features are required to be developed.",
  },
  {
    title: "Offshore Development Center",
    subtitle:
      "When you are looking for a long term relationship with an offshore outsourcing service provider & control outsourcing process, offshore development center (ODC) is the most suitable approach to go with",
  },
];
export default {
  name: "serives-page",
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
  color: white;
}
.heading-text {
  background-color: rgba($color: #000000, $alpha: 0.85);
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
    background-color: rgba($color: #000000, $alpha: 0.85);
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
