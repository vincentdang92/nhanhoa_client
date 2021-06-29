// Provide nuxt-axios instance to use same configuration across the whole project
// I've used typical CRUD method names and actions here
export default $axios => resource => ({
    index(payload) {
      return $axios.$get(`${resource}`, payload)
    },

    all() {
      return $axios.$get(`${resource}`);
    },

    logout(payload) {
      return $axios.$get(`${resource}/logout`, payload)
    },

    login(payload) {
      return $axios.$post(`${resource}/login`, payload)
    },

    show(id) {
      return $axios.$get(`${resource}/${id}`)
    },
  
    create(payload) {
      return $axios.$post(`${resource}`, payload)
    },

    store(payload) {
      return $axios.$post(`${resource}`, payload)
    },

    report(payload) {
      return $axios.$post(`${resource}/report`, payload)
    },
    
    update(id, payload) {
      if(id === 0) { 
        return $axios.$put(`${resource}`, payload)
      }
      return $axios.$put(`${resource}/${id}`, payload)
    },
  
    delete(id) {
      return $axios.$delete(`${resource}/${id}`)
    },

    deleteAccount(groupId, accountId) {
      return $axios.$delete(`${resource}/${groupId}/account/${accountId}`)
    },
    changeRole(groupId, accountId, payload) {
      return $axios.$put(`${resource}/${groupId}/${accountId}`, payload)
    },
    addAccountMember(groupId, payload) {
      return $axios.$post(`${resource}/${groupId}/accounts/member`, payload)
    },
    addAccountLeader(groupId, payload) {
      return $axios.$post(`${resource}/${groupId}/accounts/leader`, payload)
    },
  })
  