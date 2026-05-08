<template>
  <div class="people">

    <!-- TOP BUTTONS -->
    <div class="top-buttons">
      <router-link to="/admin">
        <button class="nav-btn">← Back To Dashboard</button>
      </router-link>

      <router-link to="/partners">
        <button class="nav-btn">Next →</button>
      </router-link>
    </div>

    <h1>People Management</h1>

    <!-- ADD FORM -->
    <div class="form">

      <input v-model="name" placeholder="Name" />
      <input v-model="email" placeholder="Email" />
      <input v-model="role" placeholder="Role" />

      <input type="file" @change="handleImage" />

      <button @click="addPerson">Add Person</button>

    </div>

    <!-- LIST -->
    <div class="list">

      <div v-for="p in people" :key="p.id" class="card">

        <!-- IMAGE -->
        <img
          :src="p.image 
            ? `http://localhost:9000/uploads/${p.image}` 
            : 'https://via.placeholder.com/100'"
          class="avatar"
        />

        <!-- INFO -->
        <h2>{{ p.name }}</h2>
        <p>{{ p.email }}</p>

        <!-- ROLE -->
        <p class="role">{{ p.role }}</p>

        <button @click="deletePerson(p.id)">Delete</button>

      </div>

    </div>

  </div>
</template>

<script setup>
import { ref, onMounted } from "vue"

const people = ref([])

const name = ref("")
const email = ref("")
const role = ref("")
const image = ref(null)

// ================= IMAGE =================
const handleImage = (e) => {
  image.value = e.target.files[0]
}

// ================= LOAD PEOPLE =================
const loadPeople = async () => {
  try {
    const res = await fetch("http://localhost:9000/api/people")

    if (!res.ok) throw new Error("Failed to load people")

    people.value = await res.json()

  } catch (err) {
    console.error("LOAD ERROR:", err)
    people.value = []
  }
}

// ================= ADD PERSON =================
const addPerson = async () => {
  try {
    const formData = new FormData()
    formData.append("name", name.value)
    formData.append("email", email.value)
    formData.append("role", role.value)

    if (image.value) {
      formData.append("image", image.value)
    }

    const res = await fetch("http://localhost:9000/api/people", {
      method: "POST",
      body: formData
    })

    if (!res.ok) throw new Error("Failed to add person")

    name.value = ""
    email.value = ""
    role.value = ""
    image.value = null

    loadPeople()

  } catch (err) {
    console.error("ADD ERROR:", err)
  }
}

// ================= DELETE PERSON =================
const deletePerson = async (id) => {
  try {
    const res = await fetch(`http://localhost:9000/api/people/${id}`, {
      method: "DELETE"
    })

    if (!res.ok) throw new Error("Delete failed")

    loadPeople()

  } catch (err) {
    console.error("DELETE ERROR:", err)
  }
}

onMounted(loadPeople)
</script>

<style scoped>
.people {
  padding: 20px;
  font-family: Arial;
}

/* TOP BUTTONS */
.top-buttons {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

.nav-btn {
  background: #0d6efd;
  color: white;
  border: none;
  padding: 10px 18px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 14px;
}

.nav-btn:hover {
  opacity: 0.9;
}

/* FORM */
.form input {
  margin: 5px;
  padding: 8px;
}

/* LIST */
.list {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 20px;
}

/* CARD */
.card {
  background: white;
  padding: 15px;
  width: 220px;
  border-radius: 12px;
  box-shadow: 0 3px 10px rgba(0,0,0,0.1);
  text-align: center;
}

/* IMAGE */
.avatar {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 10px;
}

/* ROLE */
.role {
  font-size: 18px;
  font-weight: bold;
  color: #0d6efd;
  margin: 8px 0;
}
</style>