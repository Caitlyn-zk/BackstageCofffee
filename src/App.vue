<template>
  <div id="app">
		<router-view name="Index"></router-view>
		<router-view></router-view>
  </div>
</template>

<script>
import Index from 'components/Index'
export default {
	name: 'App',
	data () {
		return {
		}
	},
	components: {
		Index
	}
}
</script>

<style>
</style>
