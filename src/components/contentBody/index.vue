<template>
 <div class="layui-body">
    <!-- 内容主体区域 -->
    <div style="padding: 15px;">内容主体区域
			<router-view></router-view>
		</div>
  </div>
</template>

<script>
import User from './user'
export default {
	components: {
		User
	}
}
</script>
<style>

</style>
