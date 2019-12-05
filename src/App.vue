<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
			<el-button class="padding-10 font-36 line-36" type="">按钮</el-button>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
