<template>
  <transition name="router-fade" mode="out-in">
    <router-view></router-view>
  </transition>
</template>

<script>
  export default {
    data () {
      return {
      };
    },

    components: {},

    computed: {},



    methods: {}
  }

</script>
<style lang='less' scoped>
.router-fade-enter-active, .router-fade-leave-active {
  transition: opacity .3s;
}
.router-fade-enter, .router-fade-leave-active {
  opacity: 0;
}

</style>
