import config from '../config'
import store from '../store'
import variable from '../config/variable'

export const isEmpty = (data) => {
    return data === '' || data === null || data === undefined || (typeof data === 'number' && isNaN(data))
}

export const openWindow = (url, ...params) => {
    const arr = []
    const query = Object.assign({
        token: store.state.user.token
    }, ...params)
    delete query.page
    delete query.pageSize
    for (const key in query) {
        const data = query[key]
        if (!isEmpty(data)) arr.push(`${key}=${data}`)
    }
    const baseURL = config.baseURL.replace(/\/$/, '')
    url = url.replace(/^\//, '')
    return window.open(`${baseURL}/${url}?${arr.join('&')}`, '_blank')
}

export const getParams = (url = window.location.href) => {
    const arr = url.split('?')
    const query = arr[1]
    const paramsArr = query.split('&')
    const params = {}
    paramsArr.map(item => {
        const arrs = item.split('=')
        params[arrs[0]] = arrs[1]
    })
    return params
}

export const copyItem = (item) => {
    if (typeof item !== 'object') {
        return item
    }
    return JSON.parse(JSON.stringify(item))
}

export const getVariableItem = (key, value) => {
    return Object.values(variable[key.toLocaleUpperCase()]).filter(item => item.value === value)[0]
}
