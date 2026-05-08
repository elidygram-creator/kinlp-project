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

      <div v-if="loading" class="empty">
        Loading messages...
      </div>

      <div v-else-if="messages.length === 0" class="empty">
        No messages yet.
      </div>

      <div class="messages-box">

        <div v-for="m in messages" :key="m.id" class="msg-card">

          <div class="msg-header">
            <strong>{{ m.name }}</strong>
            <span>{{ m.email }}</span>
          </div>

          <p class="msg-text">{{ m.message }}</p>

          <small class="date">{{ formatDate(m.created_at) }}</small>

        </div>

      </div>

    </div>

  </div>
</template>

<script setup>
import { ref, onMounted } from "vue"

// ================= STATE =================
const messages = ref([])
const loading = ref(false)

// ================= FETCH MESSAGES =================
const loadMessages = async () => {
  try {
    loading.value = true

    const res = await fetch(
      "http://localhost:9000/api/messages"
    )

    if (!res.ok) {
      throw new Error("Failed to load messages")
    }

    const data = await res.json()
    messages.value = data

  } catch (err) {
    console.error("FETCH ERROR:", err)
    messages.value = []
  } finally {
    loading.value = false
  }
}

// ================= FORMAT DATE =================
const formatDate = (date) => {
  if (!date) return ""
  return new Date(date).toLocaleString()
}

// ================= ON LOAD =================
onMounted(() => {
  loadMessages()
})
</script>

<style scoped>
.dashboard {
  padding: 20px;
  font-family: Arial;
  background: #b57eec;
  min-height: 100vh;
}

.title {
  margin-bottom: 20px;
}

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

.messages-section {
  margin-top: 40px;
}

.messages-section h2 {
  margin-bottom: 10px;
}

.messages-box {
  max-height: 350px;
  overflow-y: auto;
  background: #f8f9fa;
  padding: 10px;
  border-radius: 10px;
}

.msg-card {
  background: white;
  padding: 12px;
  margin-bottom: 10px;
  border-radius: 10px;
  border-left: 4px solid #0d6efd;
}

.msg-header {
  display: flex;
  justify-content: space-between;
  font-size: 13px;
  margin-bottom: 5px;
}

.msg-text {
  margin: 8px 0;
}

.date {
  font-size: 12px;
  color: gray;
}

.empty {
  color: gray;
}
</style>