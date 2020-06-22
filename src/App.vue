<template>
  <div id="app">
    <aside>
      <navigation></navigation>
    </aside>
    <main>
      <transition name="fade" mode="out-in">
      <router-view></router-view>
      </transition>
    </main>
    <myfooter></myfooter>
  </div>
</template>

<script>
import navigation from './components/Navigation.vue'
import myfooter from './components/MyFooter.vue'
export default {
  name: 'app',
  components: {
    navigation,
    myfooter
  }
}
</script>

<style lang="scss">
  @import "./assets/style.scss";
</style>
