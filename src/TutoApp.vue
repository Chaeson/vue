<template>
  <div id="app">
    {{ nextYear('안녕하세요 ') }}
    <!--
     - 데이터 바인딩: vue js 에서 선언한 데이터를 html에서 사용하기
     - v-bind 생략 가능
     -->
    <!-- 데이터 바인딩 하기 -->
    <input v-bind:type="type" v-bind:value="inputData">
    <input :type="type" :value="inputData">
    <!-- 메소드 바인딩 하기 -->
    <a :href="getLink('index.nhn')">링크</a>

    <!-- 이벤트 vuejs 이벤트 핸들링-->
    <br/>
    <button v-on:click.prevent="add">Click Me</button>

    <!-- 데이터 양방향 바인딩
      v-on -> @
    -->
    <br/>
    <br/>
    <input type="text" :value="text" @keyup="updateText">
    <br/>
    <br/>
    {{this.text}}
    <br/>
    <br/>
    <!-- 상위의 바인딩 단순화 -->
    <input type="text" v-model="text">
    <Login/>
    </div>
</template>

<script>
import Login from "@/components/login/Sample";
export default {
  name: 'App',
  data: function(){
    return {
      person: {
        name: '채종욱',
        age: 29
      },
      inputData:'Hello',
      type:'number',
      link: 'https://comic.naver.com/',
      text: 'Test'
    }
  },
  components: {
    Login
  },
  methods:{
    // nextYear('parameter'){} 와 같음.
    nextYear: function (greeting){
      return greeting+this.person.name+'은 내년에 '+(this.person.age+1)
    },
    getLink(uri){
      return this.link+uri
    },
    add(){
      this.person.age++
    },
    updateText(event){
      this.text = event.target.value
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
