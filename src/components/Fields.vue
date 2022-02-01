<template>
  <div class="reservation-items">
    <div class="info-fields">
      <div class="address-field">Adresa</div>
      <div class="address-info">
        Braće Jugovića 25, Banja Luka, Republika Srpska, Bosna i Hercegovina
      </div>
      <div class="address-field">Telefon</div>
      <div class="address-info">+387 66 742 030</div>
      <div class="address-field" style="padding-bottom: 0px; height: 3.4em">
        Radno vrijeme
      </div>
      <div class="address-info">Ponedeljak - Subota</div>
      <div class="address-info">10:00 - 18:00</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Fields",
};
</script>

<style scoped>
.address-info {
  width: 80%;
  font-weight: 300;
  margin-left: 10%;
  font-size: 14px;
  letter-spacing: 1px;
  display: flex;
  color: white;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.address-field {
  width: 100%;
  height: 4em;
  display: flex;
  font-size: 22px;
  padding-top: 30px;
  padding-bottom: 10px;
  justify-content: center;
  color: white;
}
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
  /* min-width: 438px; */
  width: 1140px;
  min-height: 472px;
  /* max-height: 931px; */
  display: flex;
  flex-direction: row;
}
.reservation-items {
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 100%;
}
.info-fields {
  display: flex;
  flex-direction: column;
  width: 350px;
  height: 427px;
  background-color: #fb6ce0;
  box-shadow: 0px 20px 66px -20px rgba(0, 0, 0, 0.2);
}
@media only screen and (max-width: 1200px) {
  .info-fields {
    display: flex;
    flex-direction: column;
    width: 90vw;
    height: 427px;
    background-color: #fb6ce0;
    box-shadow: 0px 20px 66px -20px rgba(0, 0, 0, 0.2);
  }
}
</style>
