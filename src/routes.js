import VueRouter from "vue-router";

import HomePage from "./components/HomePage.vue";
import ContactPage from "./components/ContactPage.vue";

const routes = [
  { path: "/", name: "HomePage", component: HomePage },
  { path: "/contact", name: "ContactPage", component: ContactPage },
];
const router = new VueRouter({
  routes,
  mode: "history",
});
export default router;
