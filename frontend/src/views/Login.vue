<script setup>
import { ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';

const email = ref('');
const password = ref('');
const router = useRouter();
console.log(email);

const login = async () => {
  try {
    const res = await axios.post('http://localhost:5000/api/auth/login', {
      email: email.value,
      password: password.value,
    });

    const token = res.data.token;
    const userId = res.data.userId; 
    localStorage.setItem('token', token); 
    localStorage.setItem('userId', userId); 

    console.log(userId);
    router.push('/dashboard');

  } catch (err) {
    alert('Credenciais inválidas');
  }
};
</script>


<template>
    <div class="fundo-login">
      <img src="../assets/img/raposa.png" alt="logo">
      <h2>Account Login</h2>
      <form @submit.prevent="login">
        <div>
          <input type="email" v-model="email" placeholder="Email" required  />
        </div>
        <div>
          <input type="password" v-model="password" placeholder="Password" required />
        </div>
        <button type="submit">Login</button>
      </form>

      <p>Don't have an account? <RouterLink to="/register">Sing Up</RouterLink></p>
    </div>
  </template>
  
<style>


.fundo-login {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 30vw;
  height: 726px;

  img {
    height: 100px;
  }

  form{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    input{
      width: 330px;
      padding: 0px 10px;
      height: 35px;
      margin-top: 10px;
      background-color: rgba(255, 255, 255, 0.719);
      box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.212);
      border: none;
      border-radius: 5px;
      color: #3f3f3f;
    }
    input:focus {
      outline: none;
    }
    button {
      width: 330px;
      height: 35px;
      margin: 15px 0px;
      border-radius: 5px;
      background-color: #ff7847;
      box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.212);
      color: #fff;
      border: none;
      font-size: 15px;
      font-weight: 200;
      cursor: pointer;
    }
  }

  p {
    a {
      text-decoration: none;
      color: #f0541b;
      font-weight: 400;
    }
      
    }
}

</style>