<template>
  <div >
    <div class="mt-10 lg:mt-20 xl:mt-32 tracklist">
        <p class="font-monument-regular text-lg lg:text-2xl font-bold text-center mb-5 lg:mb-10 xl:text-2xl 2xl:text-3xl">
            All Tracks
        </p>

        <div v-for="track in tracks" :key="track.id" class="track-container currentTile relative py-3 flex justify-between after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-[#E5E5E5] cursor-pointer" ref="currentTile">
            <div class="left-container flex justify-between items-center w-[57%] md:w-[49%]">
                <div class=".left-container flex items-center space-x-2">
                    <div class="cover min-w-[54px] h-14 rounded-lg bg-center bg-contain bg-no-repeat" :style="{ backgroundImage: `url( ${track.cover} )`}">
                        <!-- <p>
                            {{ track.cover }}
                        </p> -->
                    </div>

                    <p class="title font-inter font-medium text-[10px] lg:text-xs xl:text-sm 2xl:text-base break-words pr-2">
                        {{ track.name }}
                    </p>
                </div>

                <div class="right-container">
                    <button class="play w-7 h-7 rounded-full bg-[#6837FA] flex justify-center items-center" ref="play" @click="playSong(track.id, track.name)">
                        <font-awesome-icon class="play-icon text-white text-[10px] xl:text-xs" :icon="['fas', 'play']"/>
                        <font-awesome-icon class="pause-icon text-white hide text-[10px] xl:text-xs" :icon="['fas', 'pause']"/>
                    </button>
                </div>
            </div>

            <div class="right-container flex justify-between items-center w-[40%] md:w-[49%]">
                <p class="text-xs font-medium duration font-inter lg:text-sm xl:text-base 2xl:text-lg">
                    {{ track.duration }}
                </p>

                <img v-show="track.locked" class="w-4 xl:w-5" src="/svg/lock.svg" alt="">

                <button class="lyrics text-[10px] xl:text-xs 2xl:text-sm py-2 px-3 rounded-full border border-black hover:bg-[#6837fa] hover:text-white transition duration-500" @click="handleLyrics">
                    Lyrics
                </button>
            </div>
        </div>

        <div class="stop"></div>
    </div>
  </div>
</template>

<script>
// import { mapState, mapMutations, mapActions } from 'vuex'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default {
    layout: 'music',

    props: {
        lyrics: String, 
        tracks: Array,
        playSong: Function,
        init: Function,
    },
    
    // data() {
    //     return {
    //         screens: ["All", "CollectionFaq", "RepairFaq", "DeliveryFaq"],
    //         position: 0,

    //         // 
    //         // currentCover: '',
    //         // currentTitle: '',
    //         // currentSong: this.currenSongTitle
    //     }
    // },

    // computed: {
    //     ...mapState(["songIndex", "currentSongTitle", "currentSrc"])
    // },

    methods: {
        handleLyrics() {
            this.$emit('goto', 6)
        }
    }
}
</script>

<style>

</style>
