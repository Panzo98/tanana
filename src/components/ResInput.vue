<template>
  <div class="container">
    <div class="title">Rezervacije</div>
    <div class="inp-fields">
      <input v-model="ime" placeholder="Ime" type="text" />
      <input v-model="prezime" placeholder="Prezime" type="text" />
    </div>
    <div class="inp-fields">
      <p class="placeholder">Datum</p>
      <input placeholder="Datum" type="date" @change="setDate" />
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
      datum: "",
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
    setDate(e) {
      this.datum = e.target.value;
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
.placeholder {
  display: none;
}

@media only screen and (max-width: 1200px) {
  .title {
    padding-left: 5px;
    padding-top: 30px;
    font-size: 28px;
  }
  .container {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
  }
  .inp-fields {
    display: flex;
    flex-direction: column;
    margin-bottom: 0px;
  }
  input {
    outline: 0;
    border: transparent;

    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    width: 100%;
    color: white;
    background-color: #fa5bdd;
    height: 60px;
    margin-right: 10px;
    font-size: 14px;
  }
  input::placeholder {
    color: white;
  }
  textarea::placeholder {
    color: white;
  }
  .placeholder {
    display: block;
    color: white;
    opacity: 1;
    background-color: #fa5bdd;
    font-size: 14px;
    margin-top: 20px;
    padding-left: 3px;
  }
}
</style>
