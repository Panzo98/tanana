<template>
  <div class="price-card">
    <h6 class="mb-4 my-4 pricing-entry">
      {{ data.title.toUpperCase() }}
    </h6>
    <p>
      <span class="price"> {{ data.price }}</span>
    </p>
    <ul class="zebra">
      <li v-for="(item, index) in data.detail" :key="index">{{ item }}</li>
    </ul>
    <div class="button-center">
      <button class="button px-4 py-3" @click="$emit('scroll')">
        Naruči se
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Price",
  props: ["data", "scrollToTop"],
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
  margin-bottom: 30px;
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
  width: 285px;
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
@media only screen and (max-width: 1200px) {
  .price-card {
    width: 100%;
    border: 1px solid #f0f0f0;
    text-align: center;
    margin: auto;
    margin-bottom: 35px;
  }
}
</style>
