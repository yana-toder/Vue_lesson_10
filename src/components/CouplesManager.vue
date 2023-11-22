<template>
  <div class="container">
    <button @click="createCouple">Create couple</button>
    <h1>{{ title }}</h1>
    <div>
      <div v-for="couple in selectedCouples" :key="couple.id">
        <h3>{{ couple.boy.name }} -- {{ couple.girl.name }}</h3>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

mapGetters
export default {
  name: 'CouplesManager',

  props: {
    title: {
      type: String,
      default: 'Обрані пари',
    },
  },
  computed: {
    ...mapGetters(['selectedCouples']),
  },
  methods: {
    ...mapActions(['createCouple']),
  },
}
</script>

<style lang="scss" scoped>
.container {
  padding: 20px;
}
</style>
