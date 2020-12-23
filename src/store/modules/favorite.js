//module favorite 
export const namespaced = true

export const state = {
    favorites: [],
    favorite :{fav:0}
}
//mutation module favorite
export const mutations = {
    ADD_FAVORITES(state, favorite) {
        console.log('favorite action', favorite)
        //state.favorites = [{...favorite, count: count++}]
        let us = {
            id:favorite.id, name: favorite.name, email: favorite.email, fav:favorite.fav++
        }
        let nefa = [];
        state.favorites.push(us);
        nefa = state.favorites
        const result = Object.values(nefa.reduce((r, o) => {
            r[o.id] = r[o.id] && r[o.id].value > o.value ? r[o.id] : o
          
            return r
          }, {}))
        state.favorites = result
        state.favorite = us
        console.log('this result', state.favorites)
    },
    DELETE(state, favoriteToRemove){
        state.favorites = state.favorites.filter(
            favorite => favorite.id !== favoriteToRemove.id
        )
    }
}
//action module favorite
export const actions = {
    addFavorite({ commit }, favorite) {
        commit('ADD_FAVORITES', favorite)
    },
    remove({commit}, favoriteToRemove){
        commit('DELETE', favoriteToRemove)
    }
}