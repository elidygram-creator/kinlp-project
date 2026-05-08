<script setup>
import { ref, onMounted } from "vue"
import headerImg from '../assets/header.png'
import partnersImg from '../assets/partners-c.png'

// 🔥 DYNAMIC PARTNERS
const partners = ref([])

// 🔥 CONTACT FORM
const form = ref({
  name: '',
  email: '',
  message: ''
})

// ================= SEND MESSAGE =================
const sendMessage = async () => {
  try {
    const res = await fetch("http://localhost:9000/api/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(form.value)
    })

    const data = await res.json()

    if (!res.ok) {
      throw new Error("Failed to send message")
    }

    alert("Message sent successfully!")

    console.log("SERVER RESPONSE:", data)

    form.value = {
      name: '',
      email: '',
      message: ''
    }

  } catch (err) {
    console.log("FETCH ERROR:", err)
    alert("Failed to send message")
  }
}

// ================= GET PARTNERS =================
const getPartners = async () => {
  try {
    const res = await fetch("http://localhost:9000/api/partners")

    if (!res.ok) {
      throw new Error("Failed to load partners")
    }

    const data = await res.json()
    partners.value = Array.isArray(data) ? data : []

  } catch (err) {
    console.log("FETCH ERROR:", err)
    partners.value = []
  }
}

onMounted(() => {
  getPartners()
})
</script>

<template>
  <div class="site-wrapper">

    <!-- HEADER -->
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

    <!-- MISSION -->
    <section class="mission">
      <div class="container">
        <h2>Our Mission</h2>

        <p>With an estimated population of over 15 million native speakers, Kinyarwanda is one of the most spoken Bantu languages.</p>
        <p>Human language technology enables computers to understand and process human language in both written and spoken forms.</p>
        <p>Applications include search engines, translation, chatbots, speech recognition, and AI systems.</p>
        <p>However, most technologies focus on major global languages, leaving others behind.</p>
        <p>This project bridges that gap by building tools, datasets, and AI systems for Kinyarwanda.</p>
        <p>We aim to keep Kinyarwanda relevant in the AI era.</p>
      </div>
    </section>

    <!-- PARTNERS -->
    <section class="partners">
      
      <img :src="partnersImg" class="partners-img full-banner" />

      <div v-if="partners.length > 0" class="partners-grid">
        <img
          v-for="p in partners"
          :key="p.id"
          :src="p.image 
            ? `http://localhost:9000/uploads/${p.image}` 
            : 'https://via.placeholder.com/200'"
          class="partners-img"
        />
      </div>

    </section>

    <!-- QUESTIONS -->
    <section class="questions">
      <h3>Questions?</h3>
      <p>
        Contact us at 
        <a href="mailto:info@kinlp.com" class="link">
          info@kinlp.com
        </a>
      </p>
    </section>

    <!-- CONTACT -->
    <section class="contact-section">
      <div class="contact-container">

        <div class="contact-form">
          <h2>Send Us a Message</h2>

          <form @submit.prevent="sendMessage">

            <input type="text" v-model="form.name" placeholder="Your Name" required />
            <input type="email" v-model="form.email" placeholder="Your Email" required />
            <textarea v-model="form.message" placeholder="Your Message" rows="6" required></textarea>

            <button type="submit">
              Send Message
            </button>

          </form>
        </div>

        <div class="contact-map">
          <iframe
            src="https://maps.google.com/maps?width=100%25&height=600&hl=en&q=KG%20147%20St,%20Kimironko,%20Kigali,%20Rwanda+(KINLP)&t=&z=14&ie=UTF8&iwloc=B&output=embed"
            width="100%"
            height="100%"
            style="border:0;"
            loading="lazy">
          </iframe>
        </div>

      </div>
    </section>

    <!-- FOOTER -->
    <footer class="footer">
      <h4>
        <a href="/" class="link">KINLP R&D Ltd</a>
      </h4>

      <p>
        📍 
        <a 
          href="https://www.google.com/maps/search/?api=1&query=KG+147+St+Kimironko+Kigali+Rwanda" 
          target="_blank"
          class="link"
        >
          KG 147 St, Kimironko, Kigali, Rwanda
        </a>
      </p>

      <p>
        📧 
        <a href="mailto:info@kinlp.com" class="link">
          info@kinlp.com
        </a>
        |
        📞 
        <a href="tel:+250788676902" class="link">
          (+250) 788 676 902
        </a>
      </p>

    </footer>

  </div>
</template>

<style scoped>
/* unchanged styles kept exactly */
.site-wrapper {
  font-family: Arial, sans-serif;
  color: #222;
}

.header {
  position: relative;
  height: 70vh;
  overflow: hidden;
}

.header-bg {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.overlay {
  position: absolute;
  inset: 0;
  background: rgba(0,0,0,0.5);
}

.nav {
  position: absolute;
  top: 20px;
  right: 40px;
  z-index: 2;
}

.nav a {
  color: white;
  margin-left: 20px;
  text-decoration: none;
  font-weight: bold;
}

.mission {
  padding: 60px 20px;
  background: white;
}

.container {
  max-width: 900px;
  margin: auto;
  text-align: center;
}

.partners {
  padding: 60px 20px;
  text-align: center;
}

.partners-img {
  width: 140px;
  height: 100px;
  object-fit: contain;
}

.full-banner {
  width: 100%;
  height: 300px;
  object-fit: cover;
  margin-top: 20px;
  border-radius: 10px;
}

.partners-grid {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
}

.questions {
  background: white;
  color: black;
  padding: 40px;
  text-align: center;
}

.contact-section {
  padding: 70px 20px;
  background: #f5f5f5;
}

.contact-container {
  max-width: 1200px;
  margin: auto;
  display: flex;
  gap: 40px;
  flex-wrap: wrap;
}

.contact-form {
  flex: 1;
  min-width: 320px;
  background: white;
  padding: 30px;
  border-radius: 12px;
}

.contact-form input,
.contact-form textarea {
  width: 100%;
  margin-bottom: 15px;
  padding: 14px;
}

.contact-form button {
  padding: 14px;
  background: rgb(80, 152, 224);
  color: white;
  border: none;
  cursor: pointer;
}

.contact-map {
  flex: 1;
  min-width: 320px;
  height: 500px;
}

.footer {
  background: rgb(80, 152, 224);
  color: white;
  text-align: center;
  padding: 20px;
}

.link {
  color: #110913;
  text-decoration: none;
}
</style>