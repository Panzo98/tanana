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
          <span
            @click="changeRoute('/')"
            :class="[
              this.$route.path === '/' ? 'colorise-text fadeIn fadeOut' : '',
            ]"
            >POCETNA</span
          >
          <span
            @click="changeRoute('/contact')"
            :class="[
              this.$route.path === '/contact'
                ? 'colorise-text fadeIn fadeOut'
                : '',
            ]"
            >KONTAKT</span
          >
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
.fade-in {
  animation: fadeIn ease 1s;
  -webkit-animation: fadeIn ease 1s;
  -moz-animation: fadeIn ease 1s;
  -o-animation: fadeIn ease 1s;
  -ms-animation: fadeIn ease 1s;
}
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@-moz-keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@-webkit-keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@-o-keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@-ms-keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.fade-out {
  animation: fadeOut ease 0.5s;
  -webkit-animation: fadeOut ease 0.5s;
  -moz-animation: fadeOut ease 0.5s;
  -o-animation: fadeOut ease 0.5s;
  -ms-animation: fadeOut ease 0.5s;
}
@keyframes fadeOut {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

@-moz-keyframes fadeOut {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

@-webkit-keyframes fadeOut {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

@-o-keyframes fadeOut {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

@-ms-keyframes fadeOut {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

span {
  cursor: pointer;
  margin: auto 1rem;
  color: rgb(92, 92, 92);
}

span:hover {
  color: #fa5bdd;
  transition: 0.5s;
}

.colorise-text {
  color: #fa5bdd !important;
  transition: 0.5s;
}
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

@media only screen and (max-width: 1200px) {
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
  .navbar-edit {
    width: 1140px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
  }
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
