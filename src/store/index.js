import Vuex from "vuex";

const store = new Vuex.Store({
  state: {
    currentNavIndex: "1",
    navItems: [
      {
        index: "1",
        route: "/",
      },
      {
        index: "2",
        route: "/new",
      },
    ],
  },
  mutations: {
    updateNavCurrentIndex: (state, index) => {
      state.currentNavIndex = index;
    },
  },
  getters: {
    getNavItems: (state) => state.navItems,
    getCurrentNavIndex: (state) => state.currentNavIndex,
  },
  actions: {
    updateNavCurrentIndex({ commit, getters }, route) {
      const newNav = getters.getNavItems.filter((item) => item.route === route);
      if (newNav.length !== 0) {
        commit("updateNavCurrentIndex", newNav[0].index);
      }
    },
  },
});

export default store;
