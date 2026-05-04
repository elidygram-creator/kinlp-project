<template>
  <div class="dashboard">

    <!-- TITLE -->
    <h1 class="title">Admin Dashboard 👋</h1>

    <!-- ================= PEOPLE CARD ================= -->
    <div class="cards">

      <router-link to="/admin/people" class="card-link">
        <div class="card">
          <h3>👥 People</h3>
          <p>Add / Delete / Manage people</p>
        </div>
      </router-link>

    </div>

    <!-- ================= MESSAGES ================= -->
    <div class="messages-section">

      <h2>📩 User Messages</h2>

      <div v-if="messages.length === 0" class="empty">
        No messages yet.
      </div>

      <div class="messages-box">

        <div v-for="m in messages" :key="m.id" class="msg-card">

          <div class="msg-header">
            <strong>{{ m.name }}</strong>
            <span>{{ m.email }}</span>
          </div>

          <p class="msg-text">{{ m.message }}</p>

          <small class="date">{{ m.created_at }}</small>

        </div>

      </div>

    </div>

  </div>
</template>

<script setup>
import { ref, onMounted } from "vue"

// ================= MESSAGES DATA =================
const messages = ref([])

// FETCH MESSAGES FROM BACKEND
const loadMessages = async () => {
  try {
    const res = await fetch("http://localhost:8000/api/messages")
    const data = await res.json()
    messages.value = data
  } catch (err) {
    console.log("ERROR:", err)
  }
}

onMounted(() => {
  loadMessages()
})
</script>

<style scoped>
.dashboard {
  padding: 20px;
  font-family: Arial;
  background: #f5f6f8;
  min-height: 100vh;
}

/* TITLE */
.title {
  margin-bottom: 20px;
}

/* ================= PEOPLE CARD ================= */
.cards {
  display: flex;
  gap: 20px;
}

.card-link {
  text-decoration: none;
  color: inherit;
}

.card {
  background: white;
  padding: 20px;
  width: 220px;
  border-radius: 12px;
  box-shadow: 0 3px 10px rgba(0,0,0,0.1);
  border-left: 5px solid #0d6efd;
  transition: 0.2s;
}

.card:hover {
  transform: translateY(-3px);
}

/* ================= MESSAGES ================= */
.messages-section {
  margin-top: 40px;
}

.messages-section h2 {
  margin-bottom: 10px;
}

/* SCROLL BOX */
.messages-box {
  max-height: 350px;
  overflow-y: auto;
  background: #f8f9fa;
  padding: 10px;
  border-radius: 10px;
}

/* MESSAGE CARD */
.msg-card {
  background: white;
  padding: 12px;
  margin-bottom: 10px;
  border-radius: 10px;
  border-left: 4px solid #0d6efd;
}

/* HEADER */
.msg-header {
  display: flex;
  justify-content: space-between;
  font-size: 13px;
  margin-bottom: 5px;
}

/* TEXT */
.msg-text {
  margin: 8px 0;
}

/* DATE */
.date {
  font-size: 12px;
  color: gray;
}

/* EMPTY */
.empty {
  color: gray;
}
</style>