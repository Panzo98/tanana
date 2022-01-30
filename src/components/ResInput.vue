<template>
  <div class="container">
    <div class="title">Rezervacije</div>
    <div class="inp-fields">
      <input v-model="ime" placeholder="Ime" type="text" />
      <input v-model="prezime" placeholder="Prezime" type="text" />
    </div>
    <div class="inp-fields">
      <input v-model="date" placeholder="" type="date" />
      <input v-model="telefon" placeholder="Telefon" type="text" />
    </div>
    <textarea
      class="multiline-text"
      v-model="poruka"
      placeholder="Poruka"
      type="text"
    />
    <button @click="handleClick">Rezervisi</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "ResInput",
  data() {
    return {
      ime: "",
      prezime: "",
      datum: "YYYY-MM-DD",
      telefon: "",
      poruka: "",
      message: "",
    };
  },
  methods: {
    async handleClick() {
      try {
        this.message =
          "Ime i prezime: " +
          this.ime +
          " " +
          this.prezime +
          ". Datum: " +
          this.datum +
          ". Telefon: " +
          this.telefon +
          ". Poruka: " +
          this.poruka;
        await axios.get(`https://tanana.org/api?message=${this.message}`);
        return alert("Uspjesno ste poslali rezervaciju! :)");
      } catch (err) {
        return alert("Nazalost doslo je do greske! :(");
      }
    },
  },
};
</script>

<style scoped>
button {
  margin-top: 16px;
  width: 107px;
  height: 53px;
  border-radius: 30px;
  border: 1px solid white;
  background-color: #fa5bdd;
  color: white;
  line-height: 1.5;
  font-size: 13px;
}
button:hover {
  background-color: white;
  color: #fa5bdd;
  transition: 0.3s;
}
textarea {
  resize: none;
  outline: 0;
  border: transparent;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}
.multiline-text {
  width: 100%;
  height: 100px;
  color: white;
  background-color: #fa5bdd;
}
input {
  outline: 0;
  border: transparent;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  width: 50%;
  color: white;
  background-color: #fa5bdd;
  height: 60px;
  margin-right: 10px;
  font-size: 14px;
}
.container {
  display: flex;
  flex-direction: column;
  width: 100%;
}
.title {
  width: 100%;
  color: white;
  font-size: 23px;
  padding-top: 20px;
}
.inp-fields {
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
}
</style>
