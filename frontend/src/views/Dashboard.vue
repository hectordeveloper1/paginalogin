<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const logout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('userId');
  router.push('/');
};

import { ref, onMounted } from 'vue';
import axios from 'axios';

const username = ref('');
const email = ref('');

onMounted(async () => {
  try {
    const userId = localStorage.getItem('userId');
    const response = await axios.get(`http://localhost:5000/api/auth/get-username?id=${userId}`);
    
    username.value = response.data.username; 
    email.value = response.data.email; 
  } catch (error) {
    console.error('Erro ao obter o nome de usuário:', error);
  }
});
</script>

<template>
    <div class="fundo-dashboard">
      <div class="infouser">
        <img src="../assets/img/raposa.png" alt="logo">
        <h1>Info user</h1>
        <h1 v-if="username">Welcome, {{ username }}!</h1>
        <h1 v-if="email">Your email: {{ email }}!</h1>
      </div>
      <button @click="logout"><img src="../assets/img/logout.png" alt="logout"></button>
      
    </div>
  </template>
  

<style scoped>
.fundo-dashboard {
  border-radius: 20px;
  width: 80vw;
  height: 800px;
  display: flex;
  align-items: center;
  justify-content: center;

  .infouser{
    min-width: 45%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    img {
      height: 100px;
    }
  }

  button {
    position: fixed;
    right: 1vw;
    top: 1vh;
    background: transparent;
    border: none;
    cursor: pointer;
    img{
      width: 40px;
    }
  }
}

</style>