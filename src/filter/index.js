import Vue from 'vue'
import { getVariableItem } from '../util'

Vue.filter('dateFilter', (data, format = 'YYYY年MM月DD日 HH:mm:ss') => {
    if (!data) return '-'
    if (typeof data === 'number') data = data * 1000
    return Vue.prototype.$dayjs(data).format(format)
})

Vue.filter('classFilter', (data, type, prefix = 'font-') => {
    const { color } = (getVariableItem(type, data) || {})
    return color ? prefix + color : ''
})

Vue.filter('textFilter', (data, type) => {
    const { text } = (getVariableItem(type, data) || {})
    return text || ''
})
