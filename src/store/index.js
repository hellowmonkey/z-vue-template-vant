import Vue from 'vue'
import Vuex from 'vuex'

import { sessionStorage } from '../util/storage'

import user from './module/user'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        user: null,
        title: ''
    },
    mutations: {
        setUser (state, data = {}) {
            if (state.user && data) {
                state.user = Object.assign(state.user, data)
            } else {
                state.user = data
            }
            if (state.user) {
                sessionStorage.set('user', state.user)
            } else {
                sessionStorage.remove('user')
            }
        },
        setTitle (state, data) {
            state.title = data
            document.title = data
        }
    },
    actions: {

    },
    modules: {
        user
    }
})

export default store
