//Module inUser 
import DanService from '../../services/DanServices.js'

export const namespaced = true
//state inUser module
export const state = {

    users: [],
    usersApi:[],
    usersTotal: []
}
//getters inUser module
export const getters ={
    getUserById: state => id => {
      return state.users.find(user => user.id === id)
    }
}
//mutations inUser module
export const  mutations = {
    ADD_USER(state, user){
      state.users.push(user)
    },
    SET_USERS(state, users){
      state.usersApi = users
    }
}
//actions that use mutations module inUser
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
      return DanService.getUsers()
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