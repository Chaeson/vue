<template>
  <div id="Login">
    <!-- computed vs method
        계산시점의 차이
        computed속성은 페이지 이동시 계산이 끝난 시점에서 화면을 보여주고
        method속성은 페이지 이동 후 이벤트 발생시에 값을 변경시켜준다.
    -->
    <button @click="changeMsg">Click</button>
    {{reversedMessage}}
    {{reversedMessage}}
    {{reversedMessage}}
    <br/>
    <br/>
    <br/>
    <!-- watch 속성 -->
    {{message}}
    <button @click="changeMsg">Click</button>
    {{updated}}
  </div>
</template>
<script>
export default {
  name: "Login",
  data:function (){
    return {
      message:'안녕!',
      updated: 'No!'
    }
  },
  components: {
  },
  props: {
    name: String
  },
  methods:{
    changeMsg(){
      this.message='채종욱'
    }
  },
  computed:{
    reversedMessage(){
      return this.message.split('').reverse().join('')
    }
  },
  watch:{
    message(newVal, oldVal){
      console.log(newVal,oldVal)
      this.updated='Yes!'
    }
  }
}
</script>

<style scoped>

</style>