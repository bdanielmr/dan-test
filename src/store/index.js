import Vue from "vue";
import Vuex from "vuex";
import * as user from './modules/user.js';
import * as inUser from './modules/inUser.js';
import * as notification from './modules/notification.js';
import * as favorite from './modules/favorite.js';
Vue.use(Vuex);

export default new Vuex.Store({
  modules:{
    user,
    inUser,
    notification,
    favorite
  },
  state: {
    categories:['Frontend', 'Backend', 'Full-Stack'],
  },
});
