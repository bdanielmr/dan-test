export const namespaced = true

export const state = {
    favorites:[],
    count: 1
}

export const mutations = {
    ADD_FAVORITES(state, favorite){
        //state.favorites = [{...favorite, count: count++}]
        state.favorites.push({
            id:favorite.id, fav: state.count++
        })
        const result = Object.values(state.favorites.reduce((r, o) => {
            r[o.id] = r[o.id] && r[o.id].value > o.value ? r[o.id] : o
          
            return r
          }, {}))
        state.favorites = result
        console.log('this mutation', state.favorites)
        console.log('this mutation result', result)
    },
    DELETE(state, favoriteToRemove){
        state.favorites = state.favorites.filter(
            favorite => favorite.id !== favoriteToRemove.id
        )
    }
}

export const actions = {
    addFavorite({commit}, favorite){
        commit('ADD_FAVORITES', favorite)
    },
    remove({commit}, favoriteToRemove){
        commit('DELETE', favoriteToRemove)
    }
}