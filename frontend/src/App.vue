<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
    <main>
      <RouterView /> 
    </main>
</template>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body{
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background: rgb(255,120,71);
background: -moz-linear-gradient(95deg, rgba(255,120,71,1) 31%, rgba(255,218,26,1) 100%);
background: -webkit-linear-gradient(95deg, rgba(255,120,71,1) 31%, rgba(255,218,26,1) 100%);
background: linear-gradient(95deg, rgba(255,120,71,1) 31%, rgba(255,218,26,1) 100%);
background-repeat: no-repeat;
background-size: cover;
background-position: center center;
filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#ff7847",endColorstr="#ffda1a",GradientType=1);
  font-family: Arial, Helvetica, sans-serif;
  color: #fff;
}
</style>
