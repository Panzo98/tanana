<template>
  <div class="container">
    <div class="contact-info-container">
      <div class="left-info-container">
        <div style="margin-bottom: 24px; padding-bottom: 0.5rem">
          Kontakt informacije
        </div>
        <div style="font-size: 14px; margin-bottom: 24px; padding-bottom: 1rem">
          <p>
            <span> Adresa: </span>
            <span style="color: gray">
              Braće Jugovića 25, Banja Luka, Republika Srpska, Bosna i
              Hercegovina
            </span>
          </p>
        </div>
        <div style="font-size: 14px; margin-bottom: 24px; padding-bottom: 1rem">
          <p>
            <span> Telefon: </span>
            <span style="cursor: pointer; color: #fa5bdd">
              <a
                href="tel:+387 66 742 030"
                style="text-decoration: none; color: #fa5bdd"
                >+387 66 742 030</a
              >
            </span>
          </p>
        </div>
        <div style="font-size: 14px; margin-bottom: 24px; padding-bottom: 1rem">
          <p>
            <span> Website: </span>

            <span @click="changeRoute" style="cursor: pointer; color: #fa5bdd">
              tanana.org
            </span>
          </p>
        </div>
      </div>
      <div style="width: 95px"></div>
      <div class="right-info-container">
        <div class="inp-fields">
          <input placeholder="Ime" type="text" />
          <input placeholder="Prezime" type="text" />
        </div>
        <div class="inp-fields">
          <p class="placeholder">Datum</p>
          <input placeholder="Datum" type="date" />
          <input placeholder="Telefon" type="text" />
        </div>
        <textarea class="multiline-text" placeholder="Poruka" type="text" />
        <button>Posalji</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactPage",
  methods: {
    changeRoute() {
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
button {
  width: 192px;
  height: 53px;
  border: none;
  border-radius: 30px;
  background: #fa5bdd;
  border: 1px solid #fa5bdd;
  color: #fff;
  font-size: 12px;
}

button:hover {
  background-color: white;
  color: #fa5bdd;
  border: 1px solid #fa5bdd;
  transition: 0.5s;
}

.placeholder {
  display: none;
}
.inp-fields {
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
}
textarea {
  resize: none;
  font-size: 14px;
  outline: 0;
  border: transparent;
  color: gray;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
}
.multiline-text {
  width: 100%;
  height: 100px;
  color: rgb(0, 0, 0);
  color: gray;
  height: 132px;
  margin-bottom: 1rem;
}
input {
  outline: 0;
  border: transparent;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  width: 50%;
  color: gray;
  height: 60px;
  margin-right: 10px;
  font-size: 14px;
}

.container {
  padding: 7em 0;
  width: 100%;
  position: relative;
  min-height: 464px;
}
.contact-info-container {
  display: flex;
  max-width: 1140px;
  font-size: 1.5rem;
  height: 416px;
  margin: auto;
  margin-top: 3rem;
}
@media only screen and (max-width: 527px) {
  .contact-info-container {
    display: flex;
    flex-direction: column;
    max-width: 100%;
    height: 416px;
    margin: auto;
  }
}
.left-info-container {
  height: 100%;
  width: 416px;
  padding: 0 15px;
}
.right-info-container {
  width: 50%;
}
</style>
