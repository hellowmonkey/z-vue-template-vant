import Vue from 'vue'
import Router from 'vue-router'
import 'nprogress/nprogress.css'
import NProgress from 'nprogress'
import store from '../store'

Vue.use(Router)

NProgress.inc(0.2)
NProgress.configure({ easing: 'ease', speed: 500, showSpinner: false })

export const routes = [{
    path: '/',
    component: () => import('../page/index.vue'),
    name: 'index'
}]

const router = new Router({
    mode: 'history',
    routes,
    fallback: true,
    scrollBehavior (to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        }
        return {
            x: 0,
            y: 0
        }
    }
})

const filterParams = (query = {}) => {
    for (let item in query) {
        const data = query[item]
        if (/^[\d]+$/.test(data)) {
            query[item] = Number(data)
        }
        if (typeof data === 'string') query[item] = data.trim()
    }
    return query
}

router.beforeEach(async (to, from, next) => {
    NProgress.done().start()
    const { title } = to.meta
    if (title) {
        store.commit('setTitle', title)
    }
    filterParams(to.query)
    filterParams(to.params)
    next()
})

router.afterEach((to, from) => {
    NProgress.done()
})

export default router
