<template>
    <div class="fundo-login">
      <img src="../assets/img/raposa.png" alt="logo">
      <h2>Register</h2>
      <form @submit.prevent="register">
        <div>
          <input type="text" v-model="username" placeholder="Username" required />
        </div>
        <div>
          <input type="email" v-model="email" placeholder="Email" required />
        </div>
        <div>
          <input type="password" v-model="password" placeholder="Password" required />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import axios from 'axios';
  import { useRouter } from 'vue-router';
  
  const username = ref('');
  const email = ref('');
  const password = ref('');
  const router = useRouter();
  
  const register = async () => {
    try {
      const res = await axios.post('http://localhost:5000/api/auth/register', {
        username: username.value,
        email: email.value,
        password: password.value,
      });
      localStorage.setItem('token', res.data.token);
      router.push('/');
    } catch (err) {
      alert('Erro ao registrar');
    }
  };
  </script>
  