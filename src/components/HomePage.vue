<template>
  <div>
    <employers-info />
    <prices />
    <reservations />
    <Footer />
  </div>
</template>

<script>
import EmployersInfo from "./EmployersInfo.vue";
import Prices from "./Prices.vue";
import Reservations from "./Reservations.vue";
import Footer from "./Footer.vue";
export default {
  name: "HomePage",
  components: {
    EmployersInfo,
    Prices,
    Reservations,
    Footer,
  },
};
</script>
