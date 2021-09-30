<template>
	<div class="card">
		<div class="title">
			<slot name="title" />
		</div>
		<div class="content">
			<slot name="content" />
		</div>
		<div class="description">
			<slot name="description" />
		</div>
	</div>
</template>

<script>
export default {};
</script>

<style>
.card {
	background-color: var(--background-color-primary);
	border: 1px solid silver;
	border-radius: 8px;
	max-width: 200px;
	margin: 0 5px;
	cursor: pointer;
	box-shadow: 0px 1px 3px darkgrey;
	transition: 0.2s;
}
.opace {
	opacity: 0.5;
}
.card:hover {
	opacity: 1;
}
.pokemonImage {
	width: 100%;
}

.title,
.content,
.description {
	padding: 16px;
	text-transform: capitalize;
	text-align: center;
}
.title,
.content {
	font-size: 1.25em;
}
.title,
.content {
	border-bottom: 1px solid silver;
}
.card:hover {
	transition: 0.2s;
	box-shadow: 0px 1px 9px darkgrey;
}
.description {
	display: block;
}
</style>
