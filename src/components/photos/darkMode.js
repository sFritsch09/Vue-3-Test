export const darkMode = {
	namespaced: true,
	state() {
		return {
			userTheme: 'light-theme',
		};
	},
	mutations: {
		setTheme(state, theme) {
			localStorage.setItem('user-theme', theme);
			state.userTheme = theme;
			document.documentElement.className = theme;
		},
	},
	actions: {
		getMediaPreference() {
			const hasDarkPreference = window.matchMedia('(prefers-color-scheme: dark)').matches;
			if (hasDarkPreference) {
				return 'dark-theme';
			} else {
				return 'light-theme';
			}
		},

		toggleTheme(ctx) {
			const activeTheme = localStorage.getItem('user-theme');
			if (activeTheme === 'light-theme') {
				ctx.commit('setTheme', 'dark-theme');
			} else {
				ctx.commit('setTheme', 'light-theme');
			}
		},
		getTheme(ctx) {
			const activeTheme = localStorage.getItem('user-theme');
			ctx.commit('setTheme', activeTheme);
		},
	},
};
