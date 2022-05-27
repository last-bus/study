import { createStore } from 'vuex'
import index from './modules/index'
import createPersistedState from 'vuex-persistedstate'

export default createStore({
    state: {},
    getters: {},
    mutations: {},
    actions: {},
    modules: {
        index
    },
    plugins: [createPersistedState()]
})