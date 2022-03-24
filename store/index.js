export const state = () => ({
  id: 0,
  songIndex: 0,
  currentCover: "",
  currentSongTitle: '',
  currentSrc: '',
  category: 'all',
  mixtape: '',
  modalOpened: false,
  currentLyrics: ``,
})

export const mutations = {
  next(state) {
    state.songIndex++

    if (state.songIndex > 28) {
      state.songIndex = 0
    }
  },

  prev(state) {
    state.songIndex--

    if (state.songIndex < 0) {
      state.songIndex = 28
    }
  },

  changeSongIndex(state, payload) {
    state.songIndex = payload
  },

  changeCurrentSongTitle(state, payload) {
    state.currentSongTitle = payload
  },

  changeCurrentSrc(state, payload) {
    state.currentSrc = payload
  },

  changeCover(state, payload) {
    state.currentCover = payload
  },

  changeCategory(state, payload) {
    state.category = payload
  },

  changeLoaderState(state, payload) {
    state.assetsLoaded = payload
  },

  changeMixtape(state, payload) {
    state.mixtape = payload
  },

  changeLyrics(state, payload) {
    state.currrentLyrics = payload
  },

  toggleModal(state) {
    state.modalOpened = !state.modalOpened
  },

  increement(state) {
    state.counter++
  }
}