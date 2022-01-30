<template>
  <div class="emp-container">
    <div class="justify-content-center">
      <div
        class="heading-section ftco-animate text-center fadeInUp ftco-animated mb-5"
      >
        <h5 class="mb-4 pb-3">ZAPOSLENI</h5>
      </div>
    </div>
    <div class="">
      <div class="text-center">
        <div class="staff">
          <div class="emp-card">
            <img
              class="mb-4 mt-4"
              src="https://tanana.org/images/tanana.jpg"
              alt="slika"
            />
            <h5 style="font-size: 15px; line-height: 1.4; font-weight: 400">
              <a
                href="https://www.instagram.com/tanana_____/"
                target="blank"
                style="text-decoration: none; color: black"
                >TAMARA ILJIC</a
              >
            </h5>
            <span class="job-description"> FRIZER</span>
          </div>
          <div class="emp-card">
            <img
              class="mb-4 mt-4"
              src="https://tanana.org/images/ceca.jpg"
              alt="slika"
            />
            <h5 style="font-size: 15px; line-height: 1.4; font-weight: 400">
              <a
                href="https://www.instagram.com/s.miljic_/"
                target="blank"
                style="text-decoration: none; color: black"
                >SVJETLANA MILJIC</a
              >
            </h5>
            <span class="job-description"> POMOCNI FRIZER</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "EmployersInfo",
};
</script>

<style>
.emp-container {
  padding: 7em 0;
  background: #fafafa !important;
  position: relative;
  display: flex;
  flex-direction: column;
}
.staff {
  display: flex;
  justify-content: space-around;
  background-color: #fff;
  border-radius: 4px;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  transition: all 0.3s ease;
  min-height: 17rem;
  padding: 15px;
}
.staff:hover {
  box-shadow: 0px 3px 66px -24px rgba(0, 0, 0, 0.2);
}
.staff:hover img {
  border: solid #fa5bdd 1px;
}
.job-description {
  font-size: 12px;
  font-weight: 400;
  color: #cccccc;
}
.emp-card {
  height: 4em;
}
img {
  transition: 0.5s;
  height: 108px;
  width: 108px;
  object-fit: cover;
  border-radius: 50%;
  border: solid #fff 1px;
}
</style>
