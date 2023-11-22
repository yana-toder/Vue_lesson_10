<template>
  <h1>{{ title }}</h1>
  <div class="girl-container">
    <div
      v-for="girl in girlsList"
      :key="girl.id"
      class="girl"
      :class="{
        'is-selected': isGirlSelected(girl.id),
      }"
      @click="selectGirl(girl.id)"
    >
      {{ girl.name }}
    </div>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

export default {
  name: 'GirlsList',

  props: {
    title: {
      type: String,
      default: 'Дівчата',
    },
  },

  computed: {
    ...mapGetters(['girlsList', 'isGirlSelected']),
  },

  methods: {
    ...mapActions(['selectGirl']),
  },
}
</script>

<style lang="scss" scoped>
.girl-container {
  padding: 10px;
  border: 2px solid rgb(241, 239, 102);
  width: 300px;
  .girl {
    cursor: pointer;
    margin: 5px;
  }
  .is-selected {
    background-color: rgb(241, 239, 102);
  }
}
</style>
