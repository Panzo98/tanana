<template>
  <div class="column">
    <div class="price-card col-md-3 ftco-animate fadeInUp ftco-animated">
      <h6 class="mb-4">MUSKO SISANJE</h6>
      <p><span class="price">10.00 KM - 16.00 KM</span></p>
      <ul>
        <li>Šišanje 10.00 KM</li>
        <li>Šišanje + pranje kose 12.00 KM</li>
        <li>Šišanje + pranje + masaža glave 16.00 KM</li>
      </ul>
      <p class="button text-center">
        <a class="btn btn-primary btn-outline-primary px-4 py-3">Naruči se</a>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Price",
};
</script>

<style scoped>
.price-card {
  width: 15em;
  border: solid brown 1px;
  text-align: center;
}
.column {
  float: left;
  width: 25%;
}
</style>
