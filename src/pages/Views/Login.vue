<template>
<div class="text-field">
  <input type="text" id="username" placeholder="USERNAME">
  <input type="text" id="password" placeholder="PASSWORD">
  <div class="text">Forgot password?</div>
  <div class="login-btn">LOGIN</div>
  <input type="checkbox" id="square">
  <div class="text">Keep me logged in</div>
</div>
  <router-view></router-view>

</template>

<script>
import { ref } from 'vue'
import {useRouter} from 'vue-router'
const router = useRouter()

export default {
  name: "Login"
}
</script>

<style scoped>
html{
  background-color:#0F51B4;
}
input[type="checkbox"]:checked {
  box-shadow: 0 0 0 3px black;
}
</style>