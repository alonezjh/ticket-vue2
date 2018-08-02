<template>
	<div class="header">
		<span>{{title}}</span>
	</div>
</template>
<script>
    export default {
		name: 'header',
		props: {
            title: {
                type: String,
                default: ''
            }
        }
    }
</script>
<style lang="scss" scoped>
	.header {
     width: 100%;
     height: 12vmin;
     position: fixed;
     top:0;
     background: #ffffff;
     z-index: 100;
     display: flex;
     justify-content: center;
     align-items: center;
     border-bottom: 1px solid #f2f2f2;
		span {
			line-height: 45px;
		}
	}
</style>