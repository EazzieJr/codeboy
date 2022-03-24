<template>
  <div>
    <section class="mt-10 mb-20 player">
      <div
        class="space-y-10 player-container md:flex md:space-y-0 md:space-x-5"
      >
        <div class="top-left lg:w-[30%]">
          <div class="top-left-container">
            <h2
              class="text-2xl text-center capitalize md:text-left font-monument-regular sm:text-3xl md:text-2xl lg:text-4xl xl:text-5xl 2xl:text-6xl lg:leading-normal xl:leading-normal 2xl:leading-normal"
            >
              Exclusive listening <br class="hidden lg:block" />
              player
            </h2>

            <p
              class="font-monument-light font-light text-[10px] uppercase text-center lg:mt-2 xl:mt-3 md:text-left xl:text-xs 2xl:text-sm md:px-0 px-10 py-2 lg:leading-normal xl:leading-normal"
            >
              In order to gain access to the <br class="hidden md:block" />
              Listening Player, you need either a ‘Listening Pass
              ’ or <br class="hidden md:block lg:hidden" /> a ‘CB Sai Look’ <br class="hidden xl:block" /> inside your
              wallet.
            </p>

            <ul
              class="tray w-full font-monument-light font-light text-[#2E2B26] text-[8px] lg:text-[10px] xl:text-xs 2xl:text-sm flex md:flex-col justify-around items-center md:items-start mt-4 sm:mt-6 md:space-y-1"
            >
              <li>
                <button
                  class="uppercase all-button active leading-loose"
                  ref="all"
                  @click="handleAll"
                >
                  - all
                </button>
              </li>
              <li>
                <button
                  class="uppercase mixtapes-button leading-loose"
                  ref="mixtapes"
                  @click="handleMixtapes"
                >
                  - mixtapes
                </button>
              </li>
              <li>
                <button
                  class="uppercase singles-button leading-loose"
                  ref="singles"
                  @click="handleSingles"
                >
                  - singles
                </button>
              </li>
              <li>
                <button
                  class="uppercase musicVideo-button leading-loose"
                  ref="musicVideo"
                  @click="handleMusicVideos"
                >
                  - music videos
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div class="bottom-right w-full lg:w-[70%]">
          <component
            :is="screens[position]"
            @goto="handleGoTo"
            :tracks="tracks"
            :singles="singles"
            :meetings="meetings"
            :codeLife="codeLife"
            :playSong="playSong"
            :init="initSong"
            @meetings="handleMeetings"
            @code="handleCodeLife"
          />

          <div class="stop"></div>
        </div>
      </div>
    </section>

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
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default {
  layout: "music",

  data() {
    return {
      screens: [
        "All",
        "Mixtapes",
        "Singles",
        "MusicVideo",
        "Meetings",
        "CodeLife",
        "Lyrics",
      ],
      position: 0,

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
    };
  },

  computed: {
    ...mapState([
      "songIndex",
      "currentSongTitle",
      "currentSrc",
      "currentCover",
      "category",
      "currentLyrics",
      "modalOpened",
    ]),

    filtered() {
      return this.tracks.filter((track) => track.type === "singles");
    },
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
      "changeLyrics",
      "toggleModal"
    ]),

    initSong(id, name) {
      let audio = document.querySelector(".audio");
      const isPlaying = audio.classList.contains("playing");

      if (isPlaying) {
        this.pauseSong();
      } else {
        this.playSong(id, name);
      }
    },

    playSong(id, name) {
      let audio = document.querySelector(".audio");
      const currentTile = document.querySelectorAll(".currentTile");
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

    nextSong() {
      let audio = document.querySelector(".audio");

      this.next();

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

    /* Handles */
    handleGoTo(position) {
      this.position = position;
    },

    handleAll() {
      this.position = 0;

      this.changeCategory("all");
      this.$refs.all.classList.add("active");
      this.$refs.mixtapes.classList.remove("active");
      this.$refs.singles.classList.remove("active");
      this.$refs.musicVideo.classList.remove("active");
    },

    handleMixtapes() {
      this.position = 1;

      this.$refs.mixtapes.classList.add("active");
      this.$refs.all.classList.remove("active");
      this.$refs.singles.classList.remove("active");
      this.$refs.musicVideo.classList.remove("active");
      return this.tracks.filter((track) => track.type === "singles");
    },

    handleSingles() {
      this.position = 2;

      this.changeCategory("singles");
      this.$refs.singles.classList.add("active");
      this.$refs.all.classList.remove("active");
      this.$refs.mixtapes.classList.remove("active");
      this.$refs.musicVideo.classList.remove("active");
      // console.log(this.category);

      return this.tracks.filter((track) => track.type === "singles");
    },

    handleMusicVideos() {
      this.position = 3;

      this.$refs.musicVideo.classList.add("active");
      this.$refs.all.classList.remove("active");
      this.$refs.mixtapes.classList.remove("active");
      this.$refs.singles.classList.remove("active");
    },

    handleMeetings() {
      this.position = 4;

      this.changeCategory("meetings");
    },

    handleCodeLife() {
      this.position = 5;

      this.changeCategory("codeLife");
    },
  },

  mounted() {
    ScrollTrigger.matchMedia({
      "(min-width: 768px)": function () {
        gsap.to(".top-left-container", {
          scrollTrigger: {
            trigger: ".top-left-container",
            endTrigger: ".stop",
            start: "top 20%",
            end: "center 80%",
            pin: true,
          },
        });
      },
    });
  },
};
</script>

<style scoped>
.active {
  font-family: "Monument Extended Regular";
  font-weight: 400;
  transition: 800ms;
}

.hide {
  display: none;
}

#range {
  /* -webkit-appearance: none; */
}

#range:focus {
  outline: none;
}
/*
#range::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #6837FA;
} */

.font-monument {
  font-family: "Monument Extended";
}

.font-monument-light {
  font-family: "Monument Extended light";
  font-weight: 300;
}
.font-monument-regular {
  font-family: "Monument Extended Regular";
  font-weight: 400;
}

@font-face {
  font-family: "Monument Extended";
  src: url("../static/font/Monument_Extended_Font/MonumentExtended-Thin.ttf");
  font-weight: 100;
  font-style: normal;
}

@font-face {
  font-family: "Monument Extended Light";
  src: url("../static/font/Monument_Extended_Font/MonumentExtended-Light.ttf");
  font-weight: 300;
  font-style: normal;
}

@font-face {
  font-family: "Monument Extended Regular";
  src: url("../static/font/Monument_Extended_Font/MonumentExtended-Regular.ttf");
  font-weight: 400;
  font-style: normal;
}

@font-face {
  font-family: "Monument Extended";
  src: url("../static/font/Monument_Extended_Font/MonumentExtended-Bold.ttf");
  font-weight: 700;
  font-style: normal;
}

@font-face {
  font-family: "Monument Extended";
  src: url("../static/font/Monument_Extended_Font/MonumentExtended-Ultrabold.otf");
  font-weight: 900;
  font-style: normal;
}

@font-face {
  font-family: "Monument Extended";
  src: url("../static/font/Monument_Extended_Font/MonumentExtended-Black.ttf");
  font-weight: normal;
  font-style: normal;
}
</style>

