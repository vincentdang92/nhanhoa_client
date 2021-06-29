import * as mutationTypes from '~/utils/mutation-types';

/**
 * initial state
 */
const state = () => ({
  collapsed: false
});

/**
 * initial getters
 */
const getters = {};

/**
 * initial actions
 */
const actions = {
  changeMenu({state, commit }, payload) {
    commit(mutationTypes.MENU.SET_MENU,(state, payload));
  },
};

/**
 * initial mutations
 */
const mutations = {
  [mutationTypes.MENU.SET_MENU](state, type) {
    state.collapsed = type;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
