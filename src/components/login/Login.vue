<template>
  <div id="Login">
    <h2>{{this.loginMain}}</h2>
    <h1>아 이 디</h1>
    <input type="text">
    <h1>비밀번호</h1>
    <input type="text">
  </div>
</template>

<script>
export default {
  name: "Login",
  data:()=>({
    loginMain:'로그인 페이지'
  }),
  components:{
  },
  props:{
  }
}
</script>

<style scoped>

</style>