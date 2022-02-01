<template>
  <div class="footer-container">
    <div class="footer-infowidth">
      <div class="four-divs">
        O NAMA
        <div style="width: 70px; height: 1px; background-color: white"></div>
        <div class="div-text">
          U naselju Obilićevo, otvoren je novi frizerski salon Tanana. Dodjite i
          posjetite nas! :)
        </div>
        <div style="display: flex; flex-direction: row; margin-top: 40px">
          <div style="margin-right: 20px">
            <a href="https://www.facebook.com/tananahairsalon" target="_blank">
              <b-icon-facebook
                style="
                  height: 35px;
                  width: 35px;
                  cursor: pointer;
                  text-decoration: none;
                  color: white;
                "
              />
            </a>
          </div>
          <div>
            <a
              href="https://www.instagram.com/tanana_hairsalon/"
              target="_blank"
            >
              <b-icon-instagram
                style="
                  height: 35px;
                  width: 35px;
                  cursor: pointer;
                  text-decoration: none;
                  color: white;
                "
              />
            </a>
          </div>
        </div>
      </div>
      <div class="four-divs">
        IMATE PITANJA?
        <div class="footer-questions">
          <div class="icon"><b-icon-geo-alt-fill /></div>
          <div class="div-number">
            Braće Jugovića 25, Banja Luka,Republika Srpska, Bosna i Hercegovina
          </div>
        </div>
        <div class="footer-questions">
          <div class="icon">
            <b-icon-telephone-fill style="color: white" />
          </div>
          <div>
            <a
              href="tel:+387 66 742 030"
              style="text-decoration: none; color: white"
              >+387 66 742 030</a
            >
          </div>
        </div>
      </div>
      <div class="four-divs"></div>
      <div class="four-divs"></div>
    </div>
  </div>
</template>

<script>
import {
  BIconTelephoneFill,
  BIconGeoAltFill,
  BIconFacebook,
  BIconInstagram,
} from "bootstrap-vue";
export default {
  name: "Footer",
  components: {
    BIconTelephoneFill,
    BIconGeoAltFill,
    BIconFacebook,
    BIconInstagram,
  },
};
</script>

<style scoped>
.icon {
  margin-right: 20px;
  color: white;
}
.footer-questions {
  padding-top: 35px;
  display: flex;
  flex-direction: row;
}
.div-number {
  color: rgba(255, 255, 255, 0.7);
}
.div-text {
  padding-top: 35px;
  color: rgba(255, 255, 255, 0.7);
  font-size: 15px;
}
.footer-container {
  width: 100%;
  height: 504px;
  background-color: #252525;
}
.four-divs {
  display: flex;
  flex-direction: column;
  width: 25%;
  padding: 0px 20px;
  font-weight: 400;
  font-size: 16px;
  letter-spacing: 2px;
  height: 100%;
  color: white;
}
.footer-infowidth {
  display: flex;
  padding-top: 110px;
  flex-direction: row;
  width: 1140px;
  height: 300px;
  margin-right: auto;
  margin-left: auto;
}
@media only screen and (max-width: 1200px) {
  .footer-container {
    width: 100%;
    height: 100vh;
    display: flex;
    background-color: #252525;
  }
  .footer-infowidth {
    display: flex;
    padding-top: 110px;
    padding-bottom: 110px;
    flex-direction: column;
    width: 100%;
    margin-right: auto;
    margin-left: auto;
  }
  .four-divs {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 160px;
    font-weight: 400;
    font-size: 16px;
    letter-spacing: 2px;
    height: 100%;
    color: white;
  }
}
</style>
