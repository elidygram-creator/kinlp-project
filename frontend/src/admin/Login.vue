<template>
  <div class="login">
    <h2>Admin Login</h2>

    <input v-model="username" placeholder="Username" />
    <input v-model="password" type="password" placeholder="Password" />

    <button @click="login">Login</button>

    <p class="error">{{ error }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
      error: ""
    };
  },

  methods: {
    login() {
      if (this.username === "admin" && this.password === "1234") {
        localStorage.setItem("auth", "true");
        this.$router.push("/admin");
      } else {
        this.error = "Wrong credentials";
      }
    }
  }
};
</script>

<style scoped>
.login {
  width: 360px;
  margin: 120px auto;
  padding: 35px;
  background: #ffffff;
  border-radius: 16px;
  box-shadow: 0 15px 35px rgba(0,0,0,0.12);
  text-align: center;
  font-family: Arial, sans-serif;
  transition: 0.3s;
}

/* TITLE */
h2 {
  margin-bottom: 25px;
  color: #0d6efd;
  font-size: 26px;
}

/* INPUTS */
input {
  width: 100%;
  display: block;
  margin: 12px 0;
  padding: 12px 14px;
  border: 1px solid #ddd;
  border-radius: 10px;
  outline: none;
  font-size: 14px;
  transition: 0.2s;
}

input:focus {
  border-color: #0d6efd;
  box-shadow: 0 0 8px rgba(13,110,253,0.25);
}

/* BUTTON */
button {
  width: 100%;
  padding: 12px;
  margin-top: 10px;
  background: #0d6efd;
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 15px;
  font-weight: bold;
  cursor: pointer;
  transition: 0.2s;
}

button:hover {
  background: #0b5ed7;
  transform: translateY(-2px);
}

/* ERROR */
.error {
  color: red;
  margin-top: 12px;
  font-size: 13px;
}
</style>