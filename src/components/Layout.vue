<template>
	<div class="wrapper">
		<div class="header">
			<slot name="header" />
		</div>
		<div class="main">
			<div class="sidebar">
				<slot name="sidebar" />
			</div>
			<div class="content">
				<slot name="content" />
			</div>
		</div>
	</div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.wrapper {
	height: 100vh;
}

.header {
	height: 50px;
}

.main {
	height: calc(100vh - 50px);
	display: flex;
	border-top: 2px solid silver;
}
.content {
	display: flex;
	padding: 10px;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	width: 100%;
	:deep(img) {
		padding: 10px;
		width: auto;
	}
}
.sidebar {
	border-right: 2px solid silver;
	padding: 10px;
	flex: 0 0 300px;
}
</style>
