<template>
  <div id="LoginSNS">
    {{snsTitle}}
    <vue-kakao-login
        api-key="<api-key>"
        image="kakao_login_btn_small"
        :on-success=onSuccess
        :on-failure=onFailure
    />
    <VueGoogleLogin
        :params="params"
        :renderParams="renderParams"
        :onSuccess="onSuccess"
        :onFailure="onFailure"
    >
    </VueGoogleLogin>
<!--    <vue-apple-login/>-->
  </div>
</template>

<script>
//import VueAppleLogin from "vue-apple-signin"
//import VueGoogleLogin from "vue-google-oauth2"
import VueKakaoLogin from "vue-kakao-login"
import VueGoogleLogin from 'vue-google-login';

export default {
  name: "LoginSNS",
  data:()=>({
    snsTitle:'SNS 로그인',
    params:{
      clientId:'35792323608-v6udmfir0ke6d55udoqmhrei6brmu41t.apps.googleusercontent.com'
    },
    renderParams: {
      width: 250,
      height: 50,
      longtitle: true
    }
  }),
  components:{
    // VueAppleLogin,
    VueGoogleLogin,
    VueKakaoLogin
  },
  methods:{
    onSuccess(){
    },
    onFailure(){

    }
  }
}
</script>

<style scoped>

</style>