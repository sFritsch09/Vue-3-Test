<template>
	<spinner class="spinner" v-if="this.$store.state.photos.loading" size="90px" />
	<img
		v-else
		v-for="photo in currentAlbumPhotos"
		:src="photo.thumbnailUrl"
		:key="photo.id"
		alt="Album Image"
	/>
</template>

<script>
import { Circle2 as Spinner } from 'vue-loading-spinner';
export default {
	components: {
		Spinner,
	},
	computed: {
		currentAlbumPhotos() {
			return this.$store.state.photos.currentAlbumPhotos;
		},
	},
};
</script>

<style scoped lang="scss"></style>
