<template>
    <div>
        <van-button>aaa</van-button>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    methods: {
        ...mapActions('user', ['getTest'])
    },
    mounted () {
        // this.getTest()
        const hide = this.$loading()
        setTimeout(() => {
            hide()
        }, 3000)
    }
}
</script>
