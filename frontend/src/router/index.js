import { createRouter, createWebHistory } from "vue-router"

// ==========================
// PUBLIC PAGES
// ==========================
import HomePage from "../pages/HomePage.vue"
import PeoplePage from "../pages/PeoplePage.vue"
import PublicationPage from "../pages/PublicationPage.vue"
import ProductPage from "../pages/ProductPage.vue"

// ==========================
// ADMIN PAGES
// ==========================
import Login from "../admin/Login.vue"
import Dashboard from "../admin/Dashboard.vue"
import AdminPeople from "../admin/People.vue"

// ==========================
// ROUTES
// ==========================
const routes = [

  // 🏠 HOME
  {
    path: "/",
    name: "home",
    component: HomePage
  },

  // 👥 PUBLIC PEOPLE PAGE
  {
    path: "/people",
    name: "people",
    component: PeoplePage
  },

  // 📚 PUBLICATIONS
  {
    path: "/publications",
    name: "publications",
    component: PublicationPage
  },

  // 🛒 PRODUCTS
  {
    path: "/products",
    name: "products",
    component: ProductPage
  },

  // 🔐 LOGIN
  {
    path: "/login",
    name: "login",
    component: Login
  },

  // 🛠 ADMIN DASHBOARD
  {
    path: "/admin",
    name: "admin",
    component: Dashboard
  },

  // 👨‍💼 ADMIN PEOPLE (IMPORTANT)
  {
    path: "/admin/people",
    name: "admin-people",
    component: AdminPeople
  }

]

// ==========================
// ROUTER CONFIG
// ==========================
const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router