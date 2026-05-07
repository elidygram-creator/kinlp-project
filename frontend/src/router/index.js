import { createRouter, createWebHashHistory } from "vue-router"

// PUBLIC
import HomePage from "../pages/HomePage.vue"
import PeoplePage from "../pages/PeoplePage.vue"
import PublicationPage from "../pages/PublicationPage.vue"
import ProductPage from "../pages/ProductPage.vue"

// ADMIN
import Login from "../admin/Login.vue"
import Dashboard from "../admin/Dashboard.vue"
import People from "../admin/People.vue"

const routes = [

  // HOME
  {
    path: "/",
    component: HomePage
  },

  // PUBLIC PAGES
  {
    path: "/people",
    component: PeoplePage
  },
  {
    path: "/publications",
    component: PublicationPage
  },
  {
    path: "/products",
    component: ProductPage
  },

  // LOGIN
  {
    path: "/login",
    component: Login
  },

  // ADMIN DASHBOARD
  {
    path: "/admin",
    component: Dashboard
  },

  // ADMIN PEOPLE
  {
    path: "/admin/people",
    component: People
  }

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router