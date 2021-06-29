import * as mutationTypes from "~/utils/mutation-types";

/**
 * initial state
 */
const state = () => ({
  config: {}
});

/**
 * initial getters
 */
const getters = {
  menu: state => state.config && state.config.menu || {}
};

/**
 * initial actions
 */
const actions = {
  async get({ commit }) {
    const { data = [] } = await this.$repositories.config.index();
    commit(mutationTypes.CONFIG.SET_CONFIG, data);
    return data;
  }
};

/**
 * initial mutations
 */
const mutations = {
  [mutationTypes.CONFIG.SET_CONFIG](state, config) {
    state.config = config;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
