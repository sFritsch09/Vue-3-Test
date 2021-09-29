import axios from 'axios';
export const albums = {
	namespaced: true,

	state() {
		return {
			all: [],
		};
	},

	mutations: {
		setAlbums(state, payload) {
			state.all = payload;
		},
	},
	actions: {
		async fetchAlbums(ctx) {
			const res = await axios.get('https://jsonplaceholder.typicode.com/albums');
			ctx.commit('setAlbums', res.data);
		},
	},
};
