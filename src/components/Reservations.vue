<template>
  <div class="reservation-container">
    <div class="reservation-card">
      <fields />
      <res-input />
    </div>
  </div>
</template>

<script>
import Fields from "./Fields.vue";
import ResInput from "./ResInput.vue";
export default {
  name: "Reservations",
  components: { Fields, ResInput },
};
</script>

<style scoped>
.reservation-container {
  overflow-x: hidden;
  display: flex;
  width: 100%;
  min-height: 632px;
  background: #fa5bdd;
  align-items: center;
  justify-content: center;
}
.reservation-card {
  width: 950px;
  min-height: 472px;
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.grid-container {
  margin: auto;
  display: grid;

  grid-column-gap: 50px;
  grid-row-gap: 50px;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  padding-bottom: 120px;
}
@media only screen and (max-width: 1200px) {
  .reservation-container {
    display: flex;
    padding: 100px 0px;
    flex-direction: column;
    width: 100%;
    min-height: 632px;
    background: #fa5bdd;
    align-items: center;
    justify-content: center;
  }
  .reservation-card {
    width: 100%;
    min-height: 472px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
}
</style>
