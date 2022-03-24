<template>
  <div>
    <transition name="fade" appear>
      <Modal v-show="this.modalOpened" class="fixed top-0 z-50 transform" />
    </transition>

    <div class="container px-5 mx-auto sm:px-10 lg:px-14 xl:px-5">
      <Navigation />
      <main>
        <Nuxt />
      </main>
    </div>

    <footer class="mini-player w-full bg-[#FAFAFA] py-3 fixed bottom-0 shadow">
      <div class="container px-5 mx-auto sm:px-10 lg:px-14 xl:px-5">
        <div class="flex items-center justify-between mini-player-container lg:justify-start md:space-x-10 lg:space-x-20 xl:space-x-28 2xl:space-x-36">
          <div class="flex items-center space-x-2 left-container">
            <div
              class="bg-center bg-no-repeat bg-contain rounded-lg cover w-14 h-14"
              :style="{ backgroundImage: `url( ${currentCover} )` }"
            >
              <!-- <cover class="w-full" :src="track.cover" alt=""> -->
            </div>

            <p
              class="title font-inter font-medium text-[10px] lg:text-xs xl:text-sm 2xl:text-base whitespace-nowrap"
            >
              {{ currentSongTitle }}
            </p>
          </div>

          <div
            class="flex items-center justify-between space-x-4 mid-container"
          >
            <button class="previous" ref="previous" @click="prevSong()">
              <svg
                class="w-7"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M40 22.5971V25.4028C40 30.1012 40 32.4503 38.4781 33.312C36.9562 34.1737 34.9418 32.9651 30.913 30.5478L28.5749 29.1449C24.7456 26.8473 22.831 25.6985 22.831 24C22.831 22.3014 24.7456 21.1526 28.5749 18.855L30.913 17.4522C34.9418 15.0349 36.9562 13.8263 38.4781 14.6879C40 15.5496 40 17.8988 40 22.5971Z"
                  fill="#212129"
                />
                <path
                  d="M24 22.5971V25.4028C24 30.1012 24 32.4503 22.4781 33.312C20.9562 34.1737 18.9418 32.9651 14.913 30.5478L12.5749 29.1449C8.74561 26.8473 6.83095 25.6985 6.83095 24C6.83095 22.3014 8.74561 21.1526 12.5749 18.855L14.913 17.4522C18.9418 15.0349 20.9562 13.8263 22.4781 14.6879C24 15.5496 24 17.8988 24 22.5971Z"
                  fill="#212129"
                />
              </svg>
            </button>

            <button
              class="play w-10 h-10 rounded-full bg-[#6837FA]"
              ref="play"
              @click="initSong()"
            >
              <font-awesome-icon
                class="text-white big-play-icon"
                :icon="['fas', 'play']"
              />
              <font-awesome-icon
                class="text-white big-pause-icon hide"
                :icon="['fas', 'pause']"
              />
            </button>

            <button class="next" ref="next" @click="nextSong">
              <svg
                class="w-7"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 22.5971V25.4028C8 30.1012 8 32.4503 9.5219 33.312C11.0438 34.1737 13.0582 32.9651 17.087 30.5478L19.4251 29.1449C23.2544 26.8473 25.169 25.6985 25.169 24C25.169 22.3014 23.2544 21.1526 19.4251 18.855L17.087 17.4522C13.0582 15.0349 11.0438 13.8263 9.5219 14.6879C8 15.5496 8 17.8988 8 22.5971Z"
                  fill="#212129"
                />
                <path
                  d="M24 22.5971V25.4028C24 30.1012 24 32.4503 25.5219 33.312C27.0438 34.1737 29.0582 32.9651 33.087 30.5478L35.4251 29.1449C39.2544 26.8473 41.169 25.6985 41.169 24C41.169 22.3014 39.2544 21.1526 35.4251 18.855L33.087 17.4522C29.0582 15.0349 27.0438 13.8263 25.5219 14.6879C24 15.5496 24 17.8988 24 22.5971Z"
                  fill="#212129"
                />
              </svg>
            </button>
          </div>

          <div
            class="relative items-center hidden w-full space-x-5 right-container md:flex lg:space-x-10"
          >
            <input
              class="progress progress-2 w-full bg-[#E6EEFD] rounded-full h-1 relative"
              type="range"
              name="range"
              id="range"
              min="0"
              max="100"
              value="0"
              @change="seek"
              @input="seek"
            />

            <button
              class="speaker md:hidden lg:block"
              ref="speaker"
              @click="mute"
            >
              <svg
                class="w-7"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 18C4 16.8954 4.89543 16 6 16H13.2984C13.7526 16 14.1932 15.8454 14.5478 15.5617L22.3753 9.29976C23.0301 8.77595 24 9.24212 24 10.0806V37.9194C24 38.7579 23.0301 39.2241 22.3753 38.7002L14.5478 32.4383C14.1932 32.1546 13.7526 32 13.2984 32H6C4.89543 32 4 31.1046 4 30V18Z"
                  fill="#212129"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M28.7274 14.7272C29.4303 14.0242 30.57 14.0242 31.273 14.7272L30.0002 16C31.273 14.7272 31.2724 14.7266 31.273 14.7272L31.2752 14.7294L31.2777 14.7319L31.2835 14.7377L31.2984 14.7529L31.3406 14.7969C31.3741 14.8323 31.4182 14.8798 31.4713 14.9392C31.5774 15.0579 31.7199 15.2247 31.8865 15.4375C32.2189 15.8623 32.6511 16.4759 33.0804 17.263C33.9388 18.8367 34.8002 21.1319 34.8002 24C34.8002 26.868 33.9388 29.1632 33.0804 30.7369C32.6511 31.524 32.2189 32.1376 31.8865 32.5624C31.7199 32.7752 31.5774 32.942 31.4713 33.0607C31.4182 33.1201 31.3741 33.1676 31.3406 33.203L31.2984 33.247L31.2835 33.2622L31.2777 33.268L31.2752 33.2705C31.2747 33.2711 31.273 33.2727 30.0002 32L31.273 33.2727C30.57 33.9757 29.4303 33.9757 28.7274 33.2727C28.027 32.5723 28.0245 31.4383 28.7198 30.7348L28.7272 30.7271C28.7376 30.7161 28.758 30.6943 28.7869 30.6619C28.8449 30.597 28.9367 30.4903 29.0514 30.3437C29.2815 30.0498 29.5993 29.6009 29.92 29.013C30.5616 27.8367 31.2002 26.1319 31.2002 24C31.2002 21.868 30.5616 20.1632 29.92 18.9869C29.5993 18.399 29.2815 17.9501 29.0514 17.6562C28.9367 17.5096 28.8449 17.4029 28.7869 17.338C28.758 17.3056 28.7376 17.2838 28.7272 17.2728L28.7198 17.2651C28.0245 16.5616 28.027 15.4276 28.7274 14.7272Z"
                  fill="#212129"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M34.687 6.76886C35.3669 6.04362 36.5061 6.00688 37.2313 6.68679L36.0002 7.99996C37.2313 6.68679 37.2319 6.68731 37.2324 6.68786L37.2337 6.68907L37.2367 6.69191L37.2445 6.69928L37.2669 6.72073C37.2849 6.738 37.3088 6.76123 37.3382 6.79034C37.397 6.84856 37.4781 6.9304 37.5781 7.03537C37.7781 7.24522 38.0547 7.5481 38.382 7.94019C39.0359 8.72344 39.8971 9.8685 40.756 11.3447C42.4731 14.296 44.2002 18.6064 44.2002 24C44.2002 29.3935 42.4731 33.704 40.756 36.6552C39.8971 38.1314 39.0359 39.2765 38.382 40.0597C38.0547 40.4518 37.7781 40.7547 37.5781 40.9645C37.4781 41.0695 37.397 41.1514 37.3382 41.2096C37.3088 41.2387 37.2849 41.2619 37.2669 41.2792L37.2445 41.3006L37.2367 41.308L37.2337 41.3108L37.2324 41.3121C37.2319 41.3126 37.2313 41.3131 36.0002 40L37.2313 41.3131C36.5061 41.993 35.3669 41.9563 34.687 41.2311C34.0083 40.507 34.0437 39.3705 34.7655 38.6902C34.7664 38.6894 34.7672 38.6885 34.7681 38.6877L34.7673 38.6885L34.7702 38.6857L34.806 38.6507C34.8409 38.6161 34.8973 38.5593 34.9723 38.4807C35.1223 38.3233 35.3457 38.0793 35.6184 37.7527C36.1645 37.0984 36.9033 36.1185 37.6444 34.8447C39.1273 32.296 40.6002 28.6064 40.6002 24C40.6002 19.3935 39.1273 15.704 37.6444 13.1552C36.9033 11.8814 36.1645 10.9015 35.6184 10.2472C35.3457 9.92056 35.1223 9.67657 34.9723 9.51923C34.8973 9.44061 34.8409 9.38377 34.806 9.34922L34.7702 9.31422L34.7652 9.30941C34.7652 9.30948 34.7655 9.30975 34.766 9.3102L34.7673 9.31139L34.7681 9.31219C34.0438 8.63217 34.0074 7.49377 34.687 6.76886ZM34.7652 9.30941L34.7652 9.30941L34.7652 9.30941Z"
                  fill="#212129"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </footer>

    <audio
      class="audio"
      src=""
      ref="audio"
      @timeupdate="updateProgress"
      @ended="nextSong"
    ></audio>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  props: {
    lyrics: String,
  },

  data() {
    return {
      tracks: [
        {
          name: "Days Amazing",
          duration: "2:39",
          cover:
            "https://res.cloudinary.com/eazzie/image/upload/q_100/v1644840558/Codeboy/Mixtape_small_xbt54t.webp",
          id: 0,
          src: "https://res.cloudinary.com/dhww4ghgg/video/upload/v1646413751/Days_Amazing_c72dox.wav",
          locked: true
        },

        {
          name: "Never Change Up",
          duration: "3:30",
          cover:
            "https://res.cloudinary.com/eazzie/image/upload/q_100/v1644840558/Codeboy/Mixtape_small_xbt54t.webp",
          id: 1,
          src: "https://res.cloudinary.com/eazzie/video/upload/q_100/v1644335921/Codeboy/Never_Change_Up_eccwyu.wav",
          locked: true
        },

        {
          name: "Feelings Can't Fade away",
          duration: "3:34",
          cover:
            "https://res.cloudinary.com/eazzie/image/upload/q_100/v1644840558/Codeboy/Mixtape_small_xbt54t.webp",
          id: 2,
          src: "https://res.cloudinary.com/dhww4ghgg/video/upload/v1646413789/Feelings_Can_t_Fade_Away_wq1o68.wav",
          locked: true
        },

        {
          name: "Hopeless Romantic",
          duration: "3:26",
          cover:
            "https://res.cloudinary.com/eazzie/image/upload/q_100/v1644840558/Codeboy/Mixtape_small_xbt54t.webp",
          id: 3,
          src: "https://res.cloudinary.com/dhww4ghgg/video/upload/v1646413769/HOPELESS_ROMANTIC_wo6dhu.wav",
          locked: true
        },

        {
          name: "Meetings & Makeups",
          duration: "4:51",
          cover:
            "https://res.cloudinary.com/eazzie/image/upload/q_100/v1644840558/Codeboy/Mixtape_small_xbt54t.webp",
          id: 4,
          src: "https://res.cloudinary.com/dhww4ghgg/video/upload/v1646413807/Meetings_Makeups_tw8obt.wav",
          locked: true
        },

        {
          name: "Shotgun Ring",
          duration: "2:53",
          cover:
            "https://res.cloudinary.com/eazzie/image/upload/q_100/v1644840558/Codeboy/Mixtape_small_xbt54t.webp",
          id: 5,
          src: "https://res.cloudinary.com/dhww4ghgg/video/upload/v1646413785/Shotgun_Ring_gnltbl.wav",
          locked: true
        },

        {
          name: "Kelly Logan's House Trolley",
          duration: "4:26",
          cover:
            "https://res.cloudinary.com/eazzie/image/upload/q_100/v1644840558/Codeboy/Mixtape_small_xbt54t.webp",
          id: 6,
          src: "https://res.cloudinary.com/dhww4ghgg/video/upload/v1646413803/Kelly_Logans_House_Trolley_d6cykt.wav",
          locked: true
        },

        {
          name: "Rough Patches",
          duration: "3:04",
          cover:
            "https://res.cloudinary.com/eazzie/image/upload/q_100/v1644840558/Codeboy/Mixtape_small_xbt54t.webp",
          id: 7,
          src: "https://res.cloudinary.com/dhww4ghgg/video/upload/v1646413795/Rough_Patches_ozhahc.wav",
          locked: true
        },

        {
          name: "Caress Me",
          duration: "3:03",
          cover:
            "https://res.cloudinary.com/eazzie/image/upload/q_100/v1644840558/Codeboy/Mixtape_small_xbt54t.webp",
          id: 8,
          src: "https://res.cloudinary.com/dhww4ghgg/video/upload/v1646413813/Caress_Me_nelmln.wav",
          locked: true
        },

        {
          name: "Capable",
          duration: "2:36",
          cover:
            "https://res.cloudinary.com/eazzie/image/upload/q_100/v1644840558/Codeboy/Mixtape_small_xbt54t.webp",
          id: 9,
          src: "https://res.cloudinary.com/eazzie/video/upload/v1644335803/Codeboy/Capable_wmcn4x.wav",
          locked: true
        },

        {
          name: "Nun To Prove",
          duration: "3:14",
          cover:
            "https://res.cloudinary.com/eazzie/image/upload/q_100/v1644840558/Codeboy/Mixtape_small_xbt54t.webp",
          id: 10,
          src: "https://res.cloudinary.com/eazzie/video/upload/q_100/v1642773081/Codeboy/Nothing_2_Prove_SINGLE_ys2oof.mp3",
          locked: true
        },

        {
          name: "Kid Chocolate",
          duration: "4:12",
          cover:
            "https://res.cloudinary.com/eazzie/image/upload/q_100/v1644840558/Codeboy/Mixtape_small_xbt54t.webp",
          id: 11,
          src: "https://res.cloudinary.com/dhww4ghgg/video/upload/v1646413798/Kid_Chocolate_d2gb2q.wav",
          locked: true
        },

        {
          name: "Made For This",
          duration: "3:21",
          cover:
            "https://res.cloudinary.com/eazzie/image/upload/q_100/v1644840558/Codeboy/Mixtape_small_xbt54t.webp",
          id: 12,
          src: "https://res.cloudinary.com/dhww4ghgg/video/upload/v1646413704/Made_For_This_cfbzrz.wav",
          locked: true
        },

        {
          name: "Never Change Up",
          altName: "Never Change Up",
          cover:
            "https://res.cloudinary.com/eazzie/image/upload/v1644246687/Codeboy/Never_Change_Up_COVER_ART_jjib4q.webp",
          duration: "3:30",
          id: 13,
          src: "https://res.cloudinary.com/eazzie/video/upload/q_100/v1642773083/Codeboy/Never_Change_Up_SINGLE_up5mrz.mp3",
          type: "singles",
        },

        {
          name: "Rough Patches",
          altName: "Rough Patches",
          cover:
            "https://res.cloudinary.com/eazzie/image/upload/q_100/v1642773123/Codeboy/Rough_Patches_COVER_ART_bqlmqr.webp",
          duration: "3:04",
          id: 14,
          src: "https://res.cloudinary.com/eazzie/video/upload/q_100/v1642773087/Codeboy/Rough_Patches_SINGLE_vyvyl7.mp3",
          type: "singles",
        },

        {
          name: "Nun to Prove",
          altName: "Nun to prove",
          cover:
            "https://res.cloudinary.com/eazzie/image/upload/q_100/v1642773126/Codeboy/Nothing_2_Prove_COVER_ART_nluixb.webp",
          duration: "3:14",
          id: 15,
          src: "https://res.cloudinary.com/eazzie/video/upload/q_100/v1642773081/Codeboy/Nothing_2_Prove_SINGLE_ys2oof.mp3",
          type: "singles",
        },

        {
          name: "Capable",
          altName: "Capable",
          cover:
            "https://res.cloudinary.com/eazzie/image/upload/q_100/v1642773120/Codeboy/CAPABLE_COVER_ART_l62y4f.webp",
          duration: "2:36",
          id: 16,
          src: "https://res.cloudinary.com/eazzie/video/upload/q_100/v1642773117/Codeboy/Capable_SINGLE_s8sumh.wav",
          type: "singles",
        },

        {
          name: "MPR",
          altName: "MPR",
          cover:
            "https://res.cloudinary.com/eazzie/image/upload/q_100/v1642773121/Codeboy/MPR_COVER_ART_wrm1el.webp",
          duration: "3:13",
          id: 17,
          src: "https://res.cloudinary.com/eazzie/video/upload/q_100/v1642773069/Codeboy/MPR_SINGLE_ge5ssh.mp3",
          type: "singles",
        },

        {
          name: "Dimes",
          cover:
            "https://res.cloudinary.com/eazzie/image/upload/q_100/v1644840756/Codeboy/CODE_LIFE_ALBUM_COVER_ART_cjbn9d.webp",
          duration: "2:35",
          id: 18,
          src: "https://res.cloudinary.com/eazzie/video/upload/q_100/v1643321031/Codeboy/Dimes_uolkhw.mp3",
        },

        {
          name: "Feel This",
          cover:
            "https://res.cloudinary.com/eazzie/image/upload/q_100/v1644840756/Codeboy/CODE_LIFE_ALBUM_COVER_ART_cjbn9d.webp",
          duration: "3:17",
          id: 19,
          src: "https://res.cloudinary.com/eazzie/video/upload/q_100/v1643321067/Codeboy/Feel_This_qhfdee.mp3",
        },

        {
          name: "All Up",
          cover:
            "https://res.cloudinary.com/eazzie/image/upload/q_100/v1644840756/Codeboy/CODE_LIFE_ALBUM_COVER_ART_cjbn9d.webp",
          duration: "3:03",
          id: 20,
          src: "https://res.cloudinary.com/eazzie/video/upload/q_100/v1643321054/Codeboy/All_Up_Mix_2_mluspe.mp3",
        },

        {
          name: "Moment",
          cover:
            "https://res.cloudinary.com/eazzie/image/upload/q_100/v1644840756/Codeboy/CODE_LIFE_ALBUM_COVER_ART_cjbn9d.webp",
          duration: "3:15",
          id: 21,
          src: "https://res.cloudinary.com/eazzie/video/upload/q_100/v1643321084/Codeboy/Moment_wqtr77.mp3",
        },

        {
          name: "Soaring",
          cover:
            "https://res.cloudinary.com/eazzie/image/upload/q_100/v1644840756/Codeboy/CODE_LIFE_ALBUM_COVER_ART_cjbn9d.webp",
          duration: "2:31",
          id: 22,
          src: "https://res.cloudinary.com/eazzie/video/upload/v1643321029/Codeboy/Soarin_Mix_1_rbpgkg.mp3",
        },

        {
          name: "Diddy Skit",
          cover:
            "https://res.cloudinary.com/eazzie/image/upload/q_100/v1644840756/Codeboy/CODE_LIFE_ALBUM_COVER_ART_cjbn9d.webp",
          duration: "3:20",
          id: 23,
          src: "https://res.cloudinary.com/eazzie/video/upload/q_100/v1643320986/Codeboy/Diddy_Skit_ygzo3g.mp3",
        },

        {
          name: "Throwing Shade",
          cover:
            "https://res.cloudinary.com/eazzie/image/upload/q_100/v1644840756/Codeboy/CODE_LIFE_ALBUM_COVER_ART_cjbn9d.webp",
          duration: "3:12",
          id: 24,
          src: "https://res.cloudinary.com/eazzie/video/upload/q_100/v1643320985/Codeboy/Throwin_Shade_Quick_Mix_ih6wgs.mp3",
        },

        {
          name: "Banjee",
          cover:
            "https://res.cloudinary.com/eazzie/image/upload/q_100/v1644840756/Codeboy/CODE_LIFE_ALBUM_COVER_ART_cjbn9d.webp",
          duration: "3:44",
          id: 25,
          src: "https://res.cloudinary.com/eazzie/video/upload/q_100/v1642773073/Codeboy/Banjee_SINGLE_a8uvtn.mp3",
        },

        {
          name: "Toast Up",
          cover:
            "https://res.cloudinary.com/eazzie/image/upload/q_100/v1644840756/Codeboy/CODE_LIFE_ALBUM_COVER_ART_cjbn9d.webp",
          duration: "3:06",
          id: 26,
          src: "https://res.cloudinary.com/eazzie/video/upload/q_100/v1643321058/Codeboy/Toast_Up_Mix_1_dtbjc1.mp3",
        },

        {
          name: "Banjee",
          altName: "Banjee",
          cover:
            "https://res.cloudinary.com/eazzie/image/upload/q_100/v1642773122/Codeboy/BANJEE_COVER_ART_vqpnxx.webp",
          duration: "3:44",
          id: 27,
          src: "https://res.cloudinary.com/eazzie/video/upload/q_100/v1642773073/Codeboy/Banjee_SINGLE_a8uvtn.mp3",
        },

        {
          name: "Tony Parker",
          altName: "Tony Parker",
          cover:
            "https://res.cloudinary.com/eazzie/image/upload/q_100/v1642773120/Codeboy/TONY_PARKER_COVER_ART_eddorz.webp",
          duration: "2:39",
          id: 28,
          src: "https://res.cloudinary.com/eazzie/video/upload/v1642772986/Codeboy/Tony_Parker_SINGLE_feuend.mp3",
          type: "singles",
        },
      ],

      singles: [
        {
          name: "Never Change Up",
          cover:
            "https://res.cloudinary.com/eazzie/image/upload/v1644246687/Codeboy/Never_Change_Up_COVER_ART_jjib4q.webp",
          duration: "3:30",
          id: 0,
          src: "https://res.cloudinary.com/eazzie/video/upload/q_100/v1642773083/Codeboy/Never_Change_Up_SINGLE_up5mrz.mp3",
          type: "singles",
        },

        {
          name: "Rough Patches",
          cover:
            "https://res.cloudinary.com/eazzie/image/upload/q_100/v1642773123/Codeboy/Rough_Patches_COVER_ART_bqlmqr.webp",
          duration: "3:04",
          id: 1,
          src: "https://res.cloudinary.com/eazzie/video/upload/q_100/v1642773087/Codeboy/Rough_Patches_SINGLE_vyvyl7.mp3",
          type: "singles",
        },

        {
          name: "Nun to Prove",
          cover:
            "https://res.cloudinary.com/eazzie/image/upload/q_100/v1642773126/Codeboy/Nothing_2_Prove_COVER_ART_nluixb.webp",
          duration: "3:14",
          id: 2,
          src: "https://res.cloudinary.com/eazzie/video/upload/q_100/v1642773081/Codeboy/Nothing_2_Prove_SINGLE_ys2oof.mp3",
          type: "singles",
        },

        {
          name: "Capable",
          cover:
            "https://res.cloudinary.com/eazzie/image/upload/q_100/v1642773120/Codeboy/CAPABLE_COVER_ART_l62y4f.webp",
          duration: "2:36",
          id: 3,
          src: "https://res.cloudinary.com/eazzie/video/upload/q_100/v1642773117/Codeboy/Capable_SINGLE_s8sumh.wav",
          type: "singles",
        },

        {
          name: "MPR",
          cover:
            "https://res.cloudinary.com/eazzie/image/upload/q_100/v1642773121/Codeboy/MPR_COVER_ART_wrm1el.webp",
          duration: "3:13",
          id: 4,
          src: "https://res.cloudinary.com/eazzie/video/upload/q_100/v1642773069/Codeboy/MPR_SINGLE_ge5ssh.mp3",
          type: "singles",
        },

        {
          name: "Bangee",
          cover:
            "https://res.cloudinary.com/eazzie/image/upload/q_100/v1642773122/Codeboy/BANJEE_COVER_ART_vqpnxx.webp",
          duration: "3:44",
          id: 5,
          src: "https://res.cloudinary.com/eazzie/video/upload/q_100/v1642773073/Codeboy/Banjee_SINGLE_a8uvtn.mp3",

          link: "/lyrics/Bangee",
        },

        {
          name: "Tony Parker",
          cover:
            "https://res.cloudinary.com/eazzie/image/upload/q_100/v1642773120/Codeboy/TONY_PARKER_COVER_ART_eddorz.webp",
          duration: "2:39",
          id: 6,
          src: "https://res.cloudinary.com/eazzie/video/upload/v1642772986/Codeboy/Tony_Parker_SINGLE_feuend.mp3",
          type: "singles",
        },
      ],

      meetings: [
        {
          name: "Days Amazing",
          duration: "2:39",
          cover: "https://res.cloudinary.com/eazzie/image/upload/q_100/v1644355083/Codeboy/Mixtape_small_kl5p0z.webp",
          id: 0,
          src: "https://res.cloudinary.com/dhww4ghgg/video/upload/v1646413751/Days_Amazing_c72dox.wav",
          locked: true
        },

        {
          name: "Never Change Up",
          duration: "3:30",
          cover:
            "https://res.cloudinary.com/eazzie/image/upload/q_100/v1644355083/Codeboy/Mixtape_small_kl5p0z.webp",
          id: 1,
          src: "https://res.cloudinary.com/dhww4ghgg/video/upload/v1646413792/Never_Change_Up_n1r542.wav",
          locked: true
        },

        {
          name: "Feelings Can't Fade away",
          duration: "3:34",
          cover: "https://res.cloudinary.com/eazzie/image/upload/q_100/v1644355083/Codeboy/Mixtape_small_kl5p0z.webp",
          id: 2,
          src: "https://res.cloudinary.com/dhww4ghgg/video/upload/v1646413789/Feelings_Can_t_Fade_Away_wq1o68.wav",
          locked: true
        },

        {
          name: "Hopeless Romantic",
          duration: "3:26",
          cover:
            "https://res.cloudinary.com/eazzie/image/upload/q_100/v1644355083/Codeboy/Mixtape_small_kl5p0z.webp",
          id: 3,
          src: "https://res.cloudinary.com/dhww4ghgg/video/upload/v1646413769/HOPELESS_ROMANTIC_wo6dhu.wav",
          locked: true
        },

        {
          name: "Meetings & Makeups",
          duration: "4:51",
          cover:
            "https://res.cloudinary.com/eazzie/image/upload/q_100/v1644355083/Codeboy/Mixtape_small_kl5p0z.webp",
          id: 4,
          src: "https://res.cloudinary.com/dhww4ghgg/video/upload/v1646413807/Meetings_Makeups_tw8obt.wav",
          locked: true
        },

        {
          name: "Shotgun Ring",
          duration: "2:53",
          cover:
            "https://res.cloudinary.com/eazzie/image/upload/q_100/v1644355083/Codeboy/Mixtape_small_kl5p0z.webp",
          id: 5,
          src: "https://res.cloudinary.com/dhww4ghgg/video/upload/v1646413785/Shotgun_Ring_gnltbl.wav",
          locked: true
        },

        {
          name: "Kelly Logan's House Trolley",
          duration: "4:26",
          cover:
            "https://res.cloudinary.com/eazzie/image/upload/q_100/v1644355083/Codeboy/Mixtape_small_kl5p0z.webp",
          id: 6,
          src: "https://res.cloudinary.com/dhww4ghgg/video/upload/v1646413803/Kelly_Logans_House_Trolley_d6cykt.wav",
          locked: true
        },

        {
          name: "Rough Patches",
          duration: "3:04",
          cover:
            "https://res.cloudinary.com/eazzie/image/upload/q_100/v1644355083/Codeboy/Mixtape_small_kl5p0z.webp",
          id: 7,
          src: "https://res.cloudinary.com/dhww4ghgg/video/upload/v1646413795/Rough_Patches_ozhahc.wav",
          locked: true
        },

        {
          name: "Caress Me",
          duration: "3:03",
          cover:
            "https://res.cloudinary.com/eazzie/image/upload/q_100/v1644355083/Codeboy/Mixtape_small_kl5p0z.webp",
          id: 8,
          src: "https://res.cloudinary.com/dhww4ghgg/video/upload/v1646413813/Caress_Me_nelmln.wav",
          locked: true
        },

        {
          name: "Capable",
          duration: "2:36",
          cover:
            "https://res.cloudinary.com/eazzie/image/upload/q_100/v1644355083/Codeboy/Mixtape_small_kl5p0z.webp",
          id: 9,
          src: "https://res.cloudinary.com/dhww4ghgg/video/upload/v1646413802/Capable_zzjdqv.wav",
          locked: true
        },

        {
          name: "Nun To Prove",
          duration: "3:14",
          cover:
            "https://res.cloudinary.com/eazzie/image/upload/q_100/v1644355083/Codeboy/Mixtape_small_kl5p0z.webp",
          id: 10,
          src: "https://res.cloudinary.com/dhww4ghgg/video/upload/v1646413712/Nuntoprove_oud8cn.mp3",
          locked: true
        },

        {
          name: "Kid Chocolate",
          duration: "4:12",
          cover:
            "https://res.cloudinary.com/eazzie/image/upload/q_100/v1644355083/Codeboy/Mixtape_small_kl5p0z.webp",
          id: 11,
          src: "https://res.cloudinary.com/dhww4ghgg/video/upload/v1646413798/Kid_Chocolate_d2gb2q.wav",
          locked: true
        },

        {
          name: "Made For This",
          duration: "3:21",
          cover:
            "https://res.cloudinary.com/eazzie/image/upload/q_100/v1644355083/Codeboy/Mixtape_small_kl5p0z.webp",
          id: 12,
          src: "https://res.cloudinary.com/dhww4ghgg/video/upload/v1646413704/Made_For_This_cfbzrz.wav",
          locked: true
        },
      ],

      codeLife: [
        {
          name: "Dimes",
          cover:
            "https://res.cloudinary.com/eazzie/image/upload/q_100/v1644840756/Codeboy/CODE_LIFE_ALBUM_COVER_ART_cjbn9d.webp",
          duration: "2:35",
          id: 0,
          src: "https://res.cloudinary.com/eazzie/video/upload/q_100/v1643321031/Codeboy/Dimes_uolkhw.mp3",
        },

        {
          name: "Feel This",
          cover:
            "https://res.cloudinary.com/eazzie/image/upload/q_100/v1644840756/Codeboy/CODE_LIFE_ALBUM_COVER_ART_cjbn9d.webp",
          duration: "3:17",
          id: 1,
          src: "https://res.cloudinary.com/eazzie/video/upload/q_100/v1643321067/Codeboy/Feel_This_qhfdee.mp3",
        },

        {
          name: "All Up",
          cover:
            "https://res.cloudinary.com/eazzie/image/upload/q_100/v1644840756/Codeboy/CODE_LIFE_ALBUM_COVER_ART_cjbn9d.webp",
          duration: "3:03",
          id: 2,
          src: "https://res.cloudinary.com/eazzie/video/upload/q_100/v1643321054/Codeboy/All_Up_Mix_2_mluspe.mp3",
        },

        {
          name: "Moment",
          cover:
            "https://res.cloudinary.com/eazzie/image/upload/q_100/v1644840756/Codeboy/CODE_LIFE_ALBUM_COVER_ART_cjbn9d.webp",
          duration: "3:15",
          id: 3,
          src: "https://res.cloudinary.com/eazzie/video/upload/q_100/v1643321084/Codeboy/Moment_wqtr77.mp3",
        },

        {
          name: "Soaring",
          cover:
            "https://res.cloudinary.com/eazzie/image/upload/q_100/v1644840756/Codeboy/CODE_LIFE_ALBUM_COVER_ART_cjbn9d.webp",
          duration: "2:31",
          id: 4,
          src: "https://res.cloudinary.com/eazzie/video/upload/v1643321029/Codeboy/Soarin_Mix_1_rbpgkg.mp3",
        },

        {
          name: "Diddy Skit",
          cover:
            "https://res.cloudinary.com/eazzie/image/upload/q_100/v1644840756/Codeboy/CODE_LIFE_ALBUM_COVER_ART_cjbn9d.webp",
          duration: "3:20",
          id: 5,
          src: "https://res.cloudinary.com/eazzie/video/upload/q_100/v1643320986/Codeboy/Diddy_Skit_ygzo3g.mp3",
        },

        {
          name: "Throwing Shade",
          cover:
            "https://res.cloudinary.com/eazzie/image/upload/q_100/v1644840756/Codeboy/CODE_LIFE_ALBUM_COVER_ART_cjbn9d.webp",
          duration: "3:12",
          id: 6,
          src: "https://res.cloudinary.com/eazzie/video/upload/q_100/v1643320985/Codeboy/Throwin_Shade_Quick_Mix_ih6wgs.mp3",
        },

        {
          name: "Banjee",
          cover:
            "https://res.cloudinary.com/eazzie/image/upload/q_100/v1642773122/Codeboy/BANJEE_COVER_ART_vqpnxx.webp",
          duration: "3:44",
          id: 7,
          src: "https://res.cloudinary.com/eazzie/video/upload/q_100/v1642773073/Codeboy/Banjee_SINGLE_a8uvtn.mp3",
        },

        {
          name: "Toast Up",
          cover:
            "https://res.cloudinary.com/eazzie/image/upload/q_100/v1644840756/Codeboy/CODE_LIFE_ALBUM_COVER_ART_cjbn9d.webp",
          duration: "3:06",
          id: 8,
          src: "https://res.cloudinary.com/eazzie/video/upload/q_100/v1643321058/Codeboy/Toast_Up_Mix_1_dtbjc1.mp3",
        },
      ],

      muted: false,
    };
  },

  computed: {
    ...mapState([
      "songIndex",
      "currentSongTitle",
      "currentSrc",
      "currentCover",
      "category",
      "modalOpened"
    ]),
  },

  methods: {
    ...mapMutations([
      "next",
      "prev",
      "changeSongIndex",
      "changeCurrentSongTitle",
      "changeCurrentSrc",
      "changeCover",
      "changeCategory",
      "toggleModal"
    ]),

    initSong(id, name) {
      let audio = document.querySelector(".audio");
      const isPlaying = audio.classList.contains("playing");

      // this.changeCurrentSongTitle(name)

      if (isPlaying) {
        this.pauseSong();
      } else {
        // this.changeSongIndex(songIndex)
        this.playSong(id, name);
      }
      // this.changeCurrentSongTitle(name)
    },

    playSong(id, name) {
      let audio = document.querySelector(".audio");
      const currentTile = document.querySelectorAll(".currentTile");
      const isPlaying = audio.classList.contains("playing");
      let bigPlayIcon = document.querySelector(".big-play-icon");
      let bigPauseIcon = document.querySelector(".big-pause-icon");

      if (this.category === "all") {
        this.tracks.map((item) => {
          if (item.id === id) {
            if (item.locked === true) {
              this.toggleModal()
              return;
            }
            audio.src = item.src;
            this.changeCurrentSrc(item.src);
            this.changeCover(item.cover);
            this.changeSongIndex(id);
            this.changeCurrentSongTitle(item.name);
            this.changeLyrics(item.lyrics);
            // console.log(item.src);
            currentTile.forEach((itemTwo, index) => {
              itemTwo.classList.remove("current");

              if (index === id) {
                itemTwo.classList.add("current");
              }
            });
          }
        });
      }

      if (this.category === "singles") {
        this.singles.map((item) => {
          if (item.id === id) {
            audio.src = item.src;
            this.changeCurrentSrc(item.src);
            this.changeCover(item.cover);
            this.changeSongIndex(id);
            this.changeCurrentSongTitle(item.name);
            this.changeLyrics(item.lyrics);
            currentTile.forEach((itemTwo, index) => {
              itemTwo.classList.remove("current");

              if (index === id) {
                itemTwo.classList.add("current");
              }
            });
          }
        });
      }

      if (this.category === "meetings") {
        this.meetings.map((item) => {
          if (item.id === id) {
            if (item.locked === true) {
              this.toggleModal()
              return;
            }
            audio.src = item.src;
            this.changeCurrentSrc(item.src);
            this.changeCover(item.cover);
            this.changeSongIndex(id);
            this.changeCurrentSongTitle(item.name);
            this.changeLyrics(item.lyrics);
            // console.log(item.src);
            currentTile.forEach((itemTwo, index) => {
              itemTwo.classList.remove("current");

              if (index === id) {
                itemTwo.classList.add("current");
              }
            });
          }
        });
      }

      if (this.category === "codeLife") {
        this.codeLife.map((item) => {
          if (item.id === id) {
            audio.src = item.src;
            this.changeCurrentSrc(item.src);
            this.changeCover(item.cover);
            this.changeSongIndex(id);
            this.changeCurrentSongTitle(item.name);
            this.changeLyrics(item.lyrics);
            // console.log(item.src);
            currentTile.forEach((itemTwo, index) => {
              itemTwo.classList.remove("current");

              if (index === id) {
                itemTwo.classList.add("current");
              }
            });
          }
        });
      }

      // console.log(this.category);
      // console.log(this.currentSrc);
      bigPlayIcon.classList.add("hide");
      bigPauseIcon.classList.remove("hide");

      audio.classList.add("playing");

      // this.changeCurrentSongTitle(name)
      // console.log(this.changeCurrentSongTitle(name)
      // console.log(this.currentSongTitle);
      audio.play();
    },

    pauseSong() {
      let audio = document.querySelector(".audio");
      let bigPlayIcon = document.querySelector(".big-play-icon");
      let bigPauseIcon = document.querySelector(".big-pause-icon");

      audio.classList.remove("playing");
      bigPlayIcon.classList.remove("hide");
      bigPauseIcon.classList.add("hide");
      audio.currentTime = audio.currentTime;
      audio.pause();
      // console.log("paused");
    },

    nextSong() {
      let audio = document.querySelector(".audio");

      this.next();

      audio.classList.remove("playing");
      this.playSong(this.songIndex);
    },

    prevSong() {
      let audio = document.querySelector(".audio");

      this.prev();

      audio.classList.remove("playing");
      this.playSong(this.songIndex);
    },

    updateProgress(e) {
      const { currentTime, duration } = e.srcElement;
      const progressPercent = (currentTime / duration) * 100;
      const progress = document.querySelector(".progress");

      // const nodeList = document.querySelectorAll(".example");
      // for (let i = 0; i < progress.length; i++) {
      //     progress[i].value = progressPercent;
      // }
      // progress.value = progressPercent

      // console.log(progressPercent)

      // if(progressPercent === 100) {
      //     this.nextSong()
      // }
      progress.value = progressPercent;
    },

    seek(e) {
      const progress = document.querySelector(".progress");
      const audio = document.querySelector(".audio");
      const duration = audio.duration;
      let totalValue;

      // for (let i = 0; i < progress.length; i++) {
      //     audio.currentTime = ( progress[i].value / 100 ) * duration
      //     console.log(audio.currentTime)
      // }
      audio.currentTime = (progress.value / 100) * duration;
    },

    rewind() {
      const audio = document.querySelector(".audio");
      audio.currentTime = audio.currentTime - 15;
    },

    forward() {
      const audio = document.querySelector(".audio");
      audio.currentTime = audio.currentTime + 15;
    },

    mute() {
      let audio = document.querySelector(".audio");
      let speaker = document.querySelector(".speaker");

      if (!this.muted) {
        this.muted = !this.muted;

        speaker.classList.add("fade");
        audio.muted = this.muted;
      } else {
        this.muted = !this.muted;

        speaker.classList.remove("fade");
        audio.muted = this.muted;
      }
    },

    handleLyrics() {
      this.$emit("goto", 6);
    },
  },

  mounted() {
    // console.log(this.songIndex);
  },
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: all .5s;
}
.fade-enter,
.fade-leave-to {
  transition: all .5s;
  opacity: 0;
}

.hide {
  display: none;
}

.fade {
  opacity: 50%;
}
</style>