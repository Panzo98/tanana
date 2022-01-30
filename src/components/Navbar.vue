<template>
  <b-navbar
    toggleable="lg"
    class="bg-light text-dark navbar-container shadow-sm p-3 bg-white"
    variant="info"
    sticky
  >
    <div class="navbar-edit">
      <b-navbar-brand class="navbar-brand">TANANA</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ms-auto txt-color">
          <b-nav-item @click="changeRoute('/')">POCETNA</b-nav-item>
          <b-nav-item @click="changeRoute('/contact')">KONTAKT</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </div>
  </b-navbar>
</template>

<script>
export default {
  name: "Navbar",
  methods: {
    changeRoute(route) {
      this.$router.push(route);
    },
  },
};
</script>

<style scoped>
.navbar-edit {
  width: 1140px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
}
.navbar-container {
  display: flex;
  flex-direction: row;
  width: 100%;
  min-height: 4em;
  background: #fcfcfc !important;
  z-index: 3;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.07);
  margin-left: auto;
  margin-right: auto;
  padding-right: auto;
  padding-left: auto;
  justify-content: space-between;
}

.navbar-brand {
  color: #000;
  font-weight: 700;
  font-size: 22px;
  margin-left: 1rem;
  letter-spacing: 1px;
  line-height: inherit;
  white-space: nowrap;
}
.navbar-collapse {
  width: 100%;
  text-align: right;
}
.navbar-ul {
  display: flex;
  flex-direction: row;
  float: right;
  text-decoration: none;
}
a {
  margin: 0px 13px;
}
.txt-color {
  color: #fa5bdd;
}
</style>
