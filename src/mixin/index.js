import Vue from 'vue'
import { mapState } from 'vuex'
import config from '../config'
import { copyItem } from '../util'

Vue.mixin({
    data () {
        return {
            config
        }
    },
    computed: {
        ...mapState(['user'])
    },
    methods: {
        copyItem
    }
})
