<template>
	<div id="secondcomponent">
		<el-card class="box-card">
			<div class="bbb">获取游识帖子数据</div>
			<ul>
				<div v-html="loading">
					
				</div>
				<li v-for="item in items">{{item.title}}</li>
			</ul>
		</el-card>

	</div>
	
</template>

<script type="text/javascript">
	export default {
		data() {
			return {
				items: [],
				start: 1,
				loading: "<img src='static/img/loading.gif'>"
			}
		}, 
		mounted: function() {
			
            this.$axios.post('api_polymer/getBody',{
				start: this.start,
			},true)
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