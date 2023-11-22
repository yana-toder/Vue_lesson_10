<template>
  <h1>{{ title }}</h1>
  <div class="boy-container">
    <div
      v-for="boy in boysList"
      :key="boy.id"
      class="boys"
      :class="{
        'is-selected': isBoySelected(boy.id),
      }"
      @click="selectBoy(boy.id)"
    >
      {{ boy.name }}
    </div>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

export default {
  name: 'BoysList',

  props: {
    title: {
      type: String,
      default: 'Хлопці',
    },
  },

  computed: {
    ...mapGetters(['boysList', 'isBoySelected']),
  },

  methods: {
    ...mapActions(['selectBoy']),
  },
}
</script>

<style lang="scss" scoped>
.boy-container {
  padding: 10px;
  border: 2px solid rgb(81, 173, 81);
  width: 300px;
  .boys {
    cursor: pointer;
    margin: 5px;
  }
  .is-selected {
    background-color: rgb(113, 196, 113);
  }
}
</style>
