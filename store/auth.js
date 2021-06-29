import * as mutationTypes from "~/utils/mutation-types";
import { setToken, removeToken } from "~/utils/auth";

/**
 * initial state
 */
const state = () => ({
  token: null
});

/**
 * initial getters
 */
const getters = {
  isAuthenticated: (state) =>
    state.token && state.token.accessToken && state.token.accessToken.length > 0
};

/**
 * initial actions
 */
const actions = {
  async login({ commit }, payload) {
    try {
      const loginData = await this.$repositories.auth.login(payload);
      commit(mutationTypes.AUTH.SET_TOKEN, {
        ...loginData.data,
        user_email: payload.email,
        user_name: 'user'
      });
      this.$axios.setToken(loginData.data)
      
      return { success: true, ...loginData.data };
    } catch (error) {
      const { data = {} } = error.response;
      return loginData.data;
    }
  },

  update({state, commit}, payload) {
    commit(mutationTypes.AUTH.SET_TOKEN,{
      token_type: state.token.tokenType,
      access_token: state.token.accessToken,
      user_email: state.token.userEmail,
      user_name: payload.name
    });
    this.$axios.setToken(state.token.access_token);
  },

  async logout({ commit }) {
    try {
      const logoutData = await this.$repositories.auth.logout();
      commit(mutationTypes.AUTH.REMOVE_TOKEN);
      return { success: true, ...logoutData };
    }
    catch (error) {
      const { data = {} } = error.response;
      return data;
    }
  }
};

/**
 * initial mutations
 */
const mutations = {
  [mutationTypes.AUTH.SET_TOKEN](state, token) {
    state.token = {
      tokenType: token.token_type,
      accessToken: token.access_token,
      userName: token.user_name,
      userEmail: token.user_email
    };
    setToken(token);
  },

  [mutationTypes.AUTH.REMOVE_TOKEN](state) {
    state.token = null;
    removeToken();
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
