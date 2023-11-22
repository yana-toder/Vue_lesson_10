import {createStore} from 'vuex'
import {girlsList, boysList} from '@/data/peopleList'
export default createStore({
  state: {
    boysList: [],
    girlsList: [],
    selectedGirlId: null,
    selectedBoyId: null,
    selectedCouples: [],
  },
  getters: {
    boysList: ({boysList}) => boysList,
    girlsList: ({girlsList}) => girlsList,
    isBoySelected: (state) => (boyId) => boyId === state.selectedBoyId,
    isGirlSelected: (state) => (girlId) => girlId === state.selectedGirlId,
    selectedCouples: ({selectedCouples}) => selectedCouples,
  },
  mutations: {
    setData(state, {boysList, girlsList}) {
      state.boysList = boysList
      state.girlsList = girlsList
    },
    selectBoy(state, boyId) {
      if (state.selectedBoyId === boyId) state.selectedBoyId = null
      else {
        state.selectedBoyId = boyId
      }
    },
    selectGirl(state, girlId) {
      if (state.selectedGirlId === girlId) state.selectedGirlId = null
      else {
        state.selectedGirlId = girlId
      }
    },
    createCouple(state) {
      state.selectedCouples.push({
        id: Date.now(),
        boy: state.boysList.find((boy) => boy.id === state.selectedBoyId),
        girl: state.girlsList.find((girl) => girl.id === state.selectedGirlId),
      })
      state.boysList = state.boysList.filter(
        (boy) => boy.id !== state.selectedBoyId
      )
      state.girlsList = state.girlsList.filter(
        (girl) => girl.id !== state.selectedGirlId
      )
    },
  },
  actions: {
    createCouple({commit}) {
      commit('createCouple')
    },
    selectGirl({commit}, girlId) {
      commit('selectGirl', girlId)
    },
    selectBoy({commit}, boyId) {
      commit('selectBoy', boyId)
    },
    loadData({commit}) {
      commit('setData', {girlsList, boysList})
    },
  },
  modules: {},
})

//boysList
//girlsList

//selectedGirlsId
//selectedBoysId

//selectBoy
//selectGirl
