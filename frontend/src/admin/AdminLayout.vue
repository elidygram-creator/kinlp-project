<template>
  <div class="admin-layout">

    <!-- SIDEBAR -->
    <aside class="sidebar">
      <h2>ADMIN PANEL</h2>

      <router-link to="/admin">Dashboard</router-link>
      <router-link to="/admin/people">People</router-link>
    </aside>

    <!-- MAIN CONTENT -->
    <main class="content">
      <router-view />
    </main>

  </div>
</template>

<style scoped>
.admin-layout {
  display: flex;
  min-height: 100vh;
}

.sidebar {
  width: 220px;
  background: #0b3d91;
  color: white;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.sidebar a {
  color: white;
  text-decoration: none;
}

.content {
  flex: 1;
  padding: 20px;
}
</style>