<template>
	<ul class="pagination"> 
		<li v-if="cur==1" class="disabled"><span><i class="fa fa-angle-double-left"></i></span></li>
		<li v-if="cur!=1"><a @click="btnClick(cur-1)"><i class="fa fa-angle-double-left"></i></a></li>
		<li v-for="index in indexs" v-bind:class="{ 'active': cur == index}">
			<span v-on:click="btnClick(index)">{{ index }}</span>
		</li>
		<li v-if="cur==all" class="disabled"><span><i class="fa fa-angle-double-right"></i></span></li>
		<li v-if="cur!=all"><a @click="btnClick(cur+1)"><i class="fa fa-angle-double-right"></i></a></li>
	</ul>
</template>
<script>
export default {
    props:{
			cur: {
				type: [String, Number],
				required: true
			},
			all: {
				type: [String, Number],
				required: true
			},
			callback: {
				default() {
					return function callback() {
					}
				}
			}
		},
        computed: {
			indexs() {
				var left = 1
				var right = this.all
				var ar = []
				if (this.all >= 11) {
					if (this.cur > 5 && this.cur < this.all - 4) {
						left = this.cur - 5
						right = this.cur + 4
					} else {
						if (this.cur <= 5) {
							left = 1
							right = 10
						} else {
							right = this.all
							left = this.all - 9
						}
					}
				}
				while (left <= right) {
					ar.push(left)
					left++
				}
				return ar
			}
		},
		methods: {
			btnClick(page) {
				if (page != this.cur) {
					this.callback(page)
				}
			}
		}
}
</script>
<style lang="less">
ul{
    margin: 0;
    padding:0;
}
.pagination{
  text-align: center;
  	&>li{
		display: inline-block;
		font-size: 16px;
		margin: 4px;
		a {
			border: 1px solid rgba(0,0,0,.2);
			border-radius: 4px;
			border-bottom-color: rgba(0,0,0,.3);
			display: inline-block;
			text-shadow: 0 1px 0 #fff;
			background: #f7f7f7;
			color: #666;
			text-align: center;
			width: 32px;
			line-height: 32px;
			cursor: default;
			&:hover{
				:hover{
					background: #fff;
					color: #666;
					cursor: pointer;
				}
			}
		}
	}
	span{
		border: 1px solid rgba(0,0,0,.2);
		border-radius: 4px;
		display: inline-block;
		text-shadow: 0 1px 0 #fff;
		color: #666;
		text-align: center;
		width: 32px;
		line-height: 32px;
		cursor: pointer;
		&:hover{
			background: #fff;
		}
	}
	.active{
		span{
			background: #fff;
			text-shadow: 0 -1px 0 rgba(0,0,0,.2);
			cursor: auto;
			border-color:#2d8cf0;
		}
	}
	.disabled{
		 span{
			text-shadow: 0 1px 0 #fff;
			color: #999;
			cursor: default;
		}
	}
}

</style>