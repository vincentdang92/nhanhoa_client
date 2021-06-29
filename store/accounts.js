import * as mutationTypes from '~/utils/mutation-types';

/**
 * initial state
 */
const state = () => ({
  accounts: {}
});

/**
 * initial getters
 */
const getters = {};

/**
 * initial actions
 */
const actions = {
  async index({ commit }, payload) {
    const { data = [] } = await this.$repositories.accounts.index(payload);
    commit(mutationTypes.ACCOUNTS.SET_ACCOUNTS, data);
  },

  async create({ state, commit }, payload) {
    try {
      const { data: newData = {} } = await this.$repositories.accounts.create(
        {...payload, role: payload.role.key}
      );
      commit(mutationTypes.ACCOUNTS.SET_ACCOUNTS, {
        ...state.accounts,
        data: [newData, ...state.accounts.data]
      });
      return newData;
    } catch (error) {
      const { data = {} }  = error.response;
      return data;
    }
  },

  async update({ state, commit }, payload) {
    try {
      const { data = {} } = await this.$repositories.accounts.update(payload.id, payload)
      const newData = state.accounts.data.map(item => {
        if (item.id === data.id) {
          return {
            ...item,
            ...data
          };
        }
        return item;
      });
      //console.log(newData);
      commit(mutationTypes.ACCOUNTS.SET_ACCOUNTS, {
        ...state.accounts,
        data: newData
      });
      return data;
    } catch (error) {
      const { data = {} }  = error.response;
      return data;
    }
  },

  async delete({ state, commit }, payload) {
    try {
      const { data = {} } = await this.$repositories.accounts.delete(payload);
      const newData = state.accounts.data.filter(item => item.id !== payload);
      commit(mutationTypes.ACCOUNTS.SET_ACCOUNTS, {
        ...state.accounts,
        data: newData
      });
      return data;
    } catch (error) {
      const { data = {} }  = error.response;
      return data;
    }
  },
  
};

/**
 * initial mutations
 */
const mutations = {
  [mutationTypes.ACCOUNTS.SET_ACCOUNTS](state, accounts) {
    state.accounts = accounts;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};


var footballTeam = [
  {
    name: 'Team1',
    points: 99,
    GD: 45,
  },
  {
    name: 'Team2',
    points: 88,
    GD: 45,
  },
  {
    name: 'Team3',
    points: 90,
    GD: 45,
  },
  {
    name: 'Team4',
    points: 86,
    GD: 45,
  },
  {
    name: 'Team4',
    points: 86,
    GD: 44,
  }
]