<template>
	<div class="cards">
		<card
			v-for="pokemon in pokemons"
			:key="pokemon.name"
			@click="click(pokemon)"
			:class="{ opace: selectedId && pokemon.id !== selectedId }"
		>
			<template #title> {{ pokemon.name }} #{{ pokemon.id }} </template>
			<template #content>
				<img class="pokemonImage" :src="pokemon.sprite" alt="pokemon image" />
			</template>
			<template #description>
				<div v-for="type in pokemon.types" :key="type">
					{{ type }}
				</div>
			</template>
		</card>
	</div>
</template>

<script>
import Card from './Card';
export default {
	components: {
		Card,
	},
	props: {
		selectedId: {
			type: Number,
		},
		pokemons: {
			type: Array,
		},
	},
	methods: {
		click(pokemon) {
			this.$emit('pokemonClicked', pokemon);
		},
	},
};
</script>

<style scoped>
.cards {
	display: flex;
}
</style>
