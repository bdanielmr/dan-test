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
    createUser({commit}, user){
      commit('ADD_USER', user)
    },
    fetchUsers({commit}){
      DanService.getUsers()
      .then(res => {
            commit('SET_USERS', res.data)         
      })
      .catch( error => {
        console.log(error)
      })
    }

  }