<template>
  <div>
    <employers-info />
    <prices />
    <reservations />
  </div>
</template>

<script>
import EmployersInfo from "./EmployersInfo.vue";
import Prices from "./Prices.vue";
import Reservations from "./Reservations.vue";
export default {
  name: "HomePage",
  components: {
    EmployersInfo,
    Prices,
    Reservations,
  },
};
</script>
