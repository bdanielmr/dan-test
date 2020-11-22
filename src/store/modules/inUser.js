import DanService from '../../services/DanServices.js'

export const namespaced = true

export const state = {

    users: [],
    usersApi:[],
    usersTotal: []
}

export const getters ={
    getUserById: state => id => {
      return state.users.find(user => user.id === id)
    }
}

export const  mutations = {
    ADD_USER(state, user){
      state.users.push(user)
    },
    SET_USERS(state, users){
      state.usersApi = users
    }
}

export const  actions = {
    createUser({commit, dispatch}, user){
      commit('ADD_USER', user)
      const notification = {
        type: 'success',
        message: 'Your User has been created!'
      }
      dispatch('notification/add', notification, { root: true })
    },
    fetchUsers({commit, dispatch}){
      DanService.getUsers()
      .then(res => {
            commit('SET_USERS', res.data)         
      })
      .catch( error => {
        const notification = {
          type: 'error',
          message: 'There was a problem fetching users:' + error.message
        }
        dispatch('notification/add', notification, { root: true })
      })
    }

  }