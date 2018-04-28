<template>
	<div id="secondcomponent">
		<el-card class="box-card">
			<div>豆瓣电影排行榜</div>
			<ul>
				<div v-html="loading">
					
				</div>
				<li v-for="item in items">{{item.title}}</li>
			</ul>
		</el-card>

	</div>
	
</template>
<style type="text/css">

</style>
<script type="text/javascript">
	export default {
		data() {
			return {
				items: [],
				loading: "<img src='static/img/loading.gif'>"
			}
		},
		mounted: function() {
			
            this.$axios.get('https://api.douban.com/v2/movie/top250?count=10')
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
		},
		watch:{
			items:function(){
				console.log("发生变化")
				this.loading = ""
			}
		}
	}
</script>