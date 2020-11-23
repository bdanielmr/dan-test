export const namespaced = true
//module notification
export const state = {
    notifications:[]
}
let nextId = 1
//mutation notification module
export const mutations = {
    PUSH(state, notification){
        state.notifications.push({
            ...notification, id: nextId++
        })
    },
    DELETE(state, notificationToRemove){
        state.notifications = state.notifications.filter(
            notification => notification.id !== notificationToRemove.id
        )
    }
}
//action notification module
export const actions = {
    add({commit}, notification){
        commit('PUSH', notification)
    },
    remove({commit}, notificationToRemove){
        commit('DELETE', notificationToRemove)
    }
}