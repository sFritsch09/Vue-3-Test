import axios from 'axios';
export const photos = {
	namespaced: true,
	state() {
		return {
			currentAlbumPhotos: [],
			loading: false,
			photoCache: {},
		};
	},
	mutations: {
		setPhotos(state, { photos, albumId }) {
			state.currentAlbumPhotos = photos;
			state.photoCache[albumId] = photos;
		},

		setLoading(state, loading) {
			state.loading = loading;
		},
	},
	actions: {
		async fetchPhotosForAlbum(ctx, { id }) {
			if (ctx.state.photoCache[id]) {
				ctx.commit('setPhotos', { photos: ctx.state.photoCache[id], albumId: id });
				return;
			}
			ctx.commit('setLoading', true);
			const res = await axios.get(`https://jsonplaceholder.typicode.com/photos?albumId=${id}`);
			ctx.commit('setPhotos', { photos: res.data, albumdId: id });
			ctx.commit('setLoading', false);
		},
	},
};
