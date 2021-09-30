import { createStore } from 'vuex';
import { albums } from './albums';
import { photos } from './photos';
import { darkMode } from './darkMode';

const store = createStore({
	modules: {
		albums,
		photos,
		darkMode,
	},
});

export default store;
