<script setup>
import { ref, onMounted } from "vue"
import headerImg from "../assets/header.png"

const people = ref([])
const loading = ref(false)
const error = ref(null)

// ================= LOAD PEOPLE =================
const getPeople = async () => {
  try {
    loading.value = true
    error.value = null

    const res = await fetch("http://localhost:9000/api/people")

    if (!res.ok) {
      throw new Error("Failed to load people")
    }

    const data = await res.json()
    people.value = data

  } catch (err) {
    console.error("FETCH ERROR:", err)
    error.value = "Unable to load people"
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  getPeople()
})
</script>

<template>
  <div class="site-wrapper">

    <header class="header">
      <img :src="headerImg" class="header-bg" />
      <div class="overlay"></div>

      <nav class="nav">
        <router-link to="/">Home</router-link>
        <router-link to="/publications">Publications</router-link>
        <router-link to="/products">Products</router-link>
        <router-link to="/people">People</router-link>
      </nav>
    </header>

    <section class="people-body">
      <h1>Our Team</h1>

      <div v-if="loading">
        <p>Loading people...</p>
      </div>

      <div v-if="error">
        <p style="color:red">{{ error }}</p>
      </div>

      <div v-if="!loading && people.length === 0">
        <p>No people found</p>
      </div>

      <div v-for="p in people" :key="p.id" class="person">

        <img 
          class="person-img"
          :src="p.image 
            ? `http://localhost:9000/uploads/${p.image}` 
            : 'https://via.placeholder.com/200'"
        />

        <div class="person-text">
          <h2>{{ p.name }}</h2>

          <p v-if="p.email">
            <b>
              <a :href="`mailto:${p.email}`">
                {{ p.email }}
              </a>
            </b>
          </p>

          <p v-if="p.role">{{ p.role }}</p>

        </div>

      </div>
    </section>

    <footer class="footer">

      <h4>
        <a href="/" style="color:white; text-decoration:none;">
          KINLP R&D Ltd
        </a>
      </h4>

      <p>
        📍
        <a
          href="https://www.google.com/maps/search/?api=1&query=KG+147+St+Plot+7+Kimironko+Kigali+Rwanda"
          target="_blank"
          style="color:white; text-decoration:none;"
        >
          KG 147 St, Plot 7, Kimironko, Kigali, RWANDA
        </a>
      </p>

      <p>
        📧
        <a href="mailto:info@kinlp.com" style="color:white; text-decoration:none;">
          info@kinlp.com
        </a>

        |

        📞
        <a href="tel:+250788676902" style="color:white; text-decoration:none;">
          (+250)788-676-902
        </a>
      </p>

    </footer>

  </div>
</template>

<style scoped>
.site-wrapper { font-family: Arial; }

.header {
  position: relative;
  height: 220px;
  overflow: hidden;
}

.header-bg {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
}

.overlay {
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.3);
}

.nav {
  position: absolute;
  top: 20px;
  right: 40px;
  display: flex;
  gap: 25px;
  z-index: 2;
}

.nav a {
  color: white;
  text-decoration: none;
}

.people-body {
  padding: 50px;
}

.person {
  display: flex;
  gap: 30px;
  margin-bottom: 40px;
  align-items: center;
}

.person-img {
  width: 200px;
  border-radius: 10px;
}

.person-text h2 {
  color: #0b3d91;
}

.footer {
  background: rgb(80, 152, 224);
  color: white;
  text-align: center;
  padding: 25px;
  box-shadow: 0 -2px 10px rgba(0,0,0,0.1);
}

@media (max-width:768px) {
  .person {
    flex-direction: column;
    text-align: center;
  }
}
</style>