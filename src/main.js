import Vue from 'vue'
import App from './App.vue'
// import VueGoogleLogin from "vue-google-oauth2/index";
// import VueAppleSignin from 'vue-apple-signin'

Vue.config.productionTip = false

window.Kakao.init("3636ef50851832fc371963565af0360d");

new Vue({
  render: h => h(App),
}).$mount('#app');

