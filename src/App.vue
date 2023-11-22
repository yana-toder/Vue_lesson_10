<template>
  <div>
    <boys-list />
    <girls-list />
    <couples-manager />
  </div>
</template>

<script>
import {mapActions} from 'vuex'
import BoysList from './components/BoysList.vue'
import GirlsList from './components/GirlsList.vue'
import CouplesManager from './components/CouplesManager.vue'

export default {
  name: 'App',
  methods: {
    ...mapActions(['loadData']),
  },
  created() {
    this.loadData()
  },
  components: {BoysList, GirlsList, CouplesManager},
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
