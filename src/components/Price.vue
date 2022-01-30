<template>
  <div class="price-card">
    <h6 class="mb-4 my-4 pricing-entry">MUSKO SISANJE</h6>
    <p><span class="price">10.00 KM - 16.00 KM</span></p>
    <ul class="zebra">
      <li>Šišanje 10.00 KM</li>
      <li>Šišanje + pranje kose 12.00 KM</li>
      <li>Šišanje + pranje + masaža glave 16.00 KM</li>
      <li>Šišanje + pranje + masaža glave 16.00 KM</li>
    </ul>
    <div class="button-center">
      <button class="button px-4 py-3">Naruči se</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Price",
};
</script>

<style scoped>
.button {
  position: absolute;
  margin-top: -25px;
  background-color: #ffffff;
  color: #bebebe;
  border: 1px solid #f0f0f0;
  font-size: 14px;
  border-radius: 30px;
}

li {
  font-family: "Montserrat", Arial, sans-serif;
  display: flex;
  margin-top: auto;
  padding: 15px 0px;
  align-items: center;
  justify-content: center;
  margin-bottom: auto;
  min-height: 1.565rem;
  color: gray;
  font-weight: 300;
  line-height: 1.8;
  font-size: 14px;
}
ul {
  width: 100%;
  padding-left: 0px;
  list-style: none;
}
.pricing-entry ul li {
  font-size: 14px;
  padding: 10px 20px;
}

.price {
  font-weight: 400;
  font-size: 20px;
  color: #fa5bdd;
}
.price-card {
  margin: 1em 1.5em;
  min-width: 16em;
  max-width: 16em;
  border: 1px solid #f0f0f0;
  text-align: center;
}
.price-card:hover {
  transition: 0.5s;
  border: 1px solid #fa5bdd;
}
ul.zebra li:nth-child(odd) {
  background: #fafafa;
}
.column {
  grid-column-start: 1;
  grid-column-end: 3;
}
.button-center {
  display: flex;
  justify-content: center;
}
.price-card:hover button {
  transition: 0.5s;
  border: 1px solid #fa5bdd;
  background-color: #fa5bdd;
  color: #fafafa;
}
</style>
