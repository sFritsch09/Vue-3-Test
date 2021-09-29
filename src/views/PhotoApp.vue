<template>
	<layout>
		<template #header>Header</template>
		<template #sidebar>
			<album v-for="album in albums" :key="album.id" :album="album" />
		</template>
		<template #content>
			<router-view />
		</template>
	</layout>
</template>

<script>
import Layout from '../components/Layout.vue';
import Album from '../components/Album.vue';
export default {
	components: {
		Layout,
		Album,
	},
	async created() {
		this.$store.dispatch('albums/fetchAlbums');
	},
	methods: {
		fetchPhotosForAlbum(albumId) {
			this.$store.dispatch('photos/fetchPhotosForAlbum', { id: albumId });
		},
	},

	watch: {
		$route: {
			handler(val) {
				this.fetchPhotosForAlbum(val.params.id);
			},
			immediate: true,
		},
	},

	computed: {
		albums() {
			return this.$store.state.albums.all;
		},
	},
};
</script>

<style scoped lang="scss">
* {
	box-sizing: border-box;
}

body {
	margin: 0;
}
</style>
