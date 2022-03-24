<template>
  <section class="cb-traits mt-28">
    <div class="cb-traits-container overflow-hidden">
      <div class="header-text text-center">
        <h2
          class="font-monument-light text-xl sm:text-2xl md:text-3xl xl:text-4xl"
        >
          CB Sai Look Traits
        </h2>
      </div>

      <div
        class="outfits-container flex space-x-10 sm:space-x-16 md:space-x-20 xl:space-x-40 mt-10 md:mt-14"
      >
        <div
          class="outfit-text md:min-w-[150px] lg:min-w-[170px] xl:max-w-[200px] ml-5 sm:ml-10 lg:ml-20 xl:ml-24"
        >
          <h2
            class="font-monument-regular text-xl sm:text-2xl md:text-3xl xl:text-4xl"
          >
            Outfits
          </h2>

          <p
            class="uppercase font-monument-light text-[10px] xl:text-xs 2xl:text-sm mt-3"
          >
            5 Outfits influenced by different songs off the Meetings & Makeups
            Mixtape
          </p>
        </div>

        <div class="grid-divs flex flex-nowrap space-x-10 items-baseline">
          <div
            v-for="outfit in outfits"
            :key="outfit.id"
            class="grid-container min-w-[50%] xl:w-[150px] 2xl:w-[220px]"
          >
            <div class="video">
              <video
                class="min-h-[281px] md:min-h-[305px] lg:min-h-[347px] xl:min-h-[455px] 2xl:min-h-[630px]"
                :src="outfit.vid"
                :alt="outfit.alt"
                autoplay
                playsinline
                loop
                muted
              />
            </div>

            <div class="texts font-inter mt-3 pr-5 xl:pr-10 2xl:pr-20">
              <h6 class="header-text font-bold text-sm md:text-base xl:text-lg">
                Outfit: {{ outfit.name }}
              </h6>

              <p
                class="details text-[10px] md:text-xs xl:text-sm font-inter mt-2"
              >
                {{ outfit.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const tl = gsap.timeline();

export default {
  data() {
    return {
      outfits: [
        {
          vid: "https://res.cloudinary.com/eazzie/video/upload/v1642772918/Codeboy/HOMEPAGE_-_CHARACTER_Title_-_Sallies_aolwfd.mp4",
          alt: "An Asset of the Salesianum Outfit",
          name: "Salesianum",
          description:
            "The outfit Salesianum features a letterman jacket, Hoodie, black trousers and sneakers. Inspired by the song ‘Kelly’s Logan House (Trolley)’",
        },

        {
          vid: "https://res.cloudinary.com/eazzie/video/upload/v1642772919/Codeboy/HOMEPAGE_-_CHARACTER_Title_-Butch_Lewis_axw8s9.mp4",
          alt: "An Asset of the Uncle Butch Outfit",
          name: "Uncle Butch",
          description:
            "This outfit pays respect to Butch Lewis, a popular boxing promoter and busniness man. It features a white suit with no button up. Inspired by the song ‘Kid Chocolate’",
        },

        {
          vid: "https://res.cloudinary.com/eazzie/video/upload/c_scale,h_1400,,w_1400/v1644826517/Codeboy/Character_Name_-_Carlton_nj4zru.mp4",
          alt: "An Asset of the Carlton Outfit",
          name: "Carlton",
          description:
            "The outfit Carlton features plaid shorts, button up shirt with a sweater vest and boat shoes. Inspired by the song ‘Feelings Can’t Fade Away’",
        },

        {
          vid: "https://res.cloudinary.com/eazzie/video/upload/v1642772684/Codeboy/CHARACTER_Title_-Kid_Chocolate_plpae9.mp4",
          alt: "An Asset of the William “Kid Chocolate” Guthrie Outfit",
          name: "William “Kid Chocolate” Guthrie",
          description:
            "This outfit pays respect to William Guthrie, former IBF Light Heavyweight Champion. It features a half robe, trunks and boxing shoes. Inspired by the song ‘Kid Chocolate’",
        },

        {
          vid: "https://res.cloudinary.com/eazzie/video/upload/v1642772678/Codeboy/CHARACTER_Title_-Zoom_Call_av6cnb.mp4",
          alt: "An Asset of the Zoom Call Outfit",
          name: "Zoom Call",
          description:
            "The outfit Zoom Call features a blazer, dress shirt, boxers, socks with slides. Inspired by the song ‘Meetings & Makeups’ ",
        },
      ],
    };
  },
  mounted() {
    ScrollTrigger.matchMedia({
      // "(min-width: 1560px)": function () {

      "(min-width: 320px) and (max-width: 639px)": function () {
        gsap.to(".outfits-container", {
          scrollTrigger: {
            trigger: ".outfits-container",
            start: "center center",
            end: "+=3000 center",
            pin: true,
            markers: false,
            scrub: 1,
          },
          // duration: 10,
          x: -1400,
        });
      },

      "(min-width: 640px) and (max-width: 1023px)": function () {
        gsap.to(".outfits-container", {
          scrollTrigger: {
            trigger: ".outfits-container",
            start: "center center",
            end: "+=3000 center",
            pin: true,
            markers: false,
            scrub: 1,
          },
          // duration: 10,
          x: -1200,
        });
      },

      "(min-width: 1024px) and (max-width: 1250px)": function () {
        gsap.to(".outfits-container", {
          scrollTrigger: {
            trigger: ".outfits-container",
            // endTrigger: ''
            start: "center center",
            end: "+=3000 center",
            pin: true,
            markers: false,
            scrub: 1,
            // horizontal: true
          },
          // duration: 10,
          x: -1450,
        });
      },

      "(min-width: 1251px) and (max-width: 1535px)": function () {
        gsap.to(".outfits-container", {
          scrollTrigger: {
            trigger: ".outfits-container",
            // endTrigger: ''
            start: "center center",
            end: "+=4000 center",
            pin: true,
            markers: false,
            scrub: 1,
            // horizontal: true
          },
          // duration: 10,
          x: -1750,
        });
      },

      "(min-width: 1536px)": function () {
        gsap.to(".outfits-container", {
          scrollTrigger: {
            trigger: ".outfits-container",
            // endTrigger: ''
            start: "center center",
            end: "+=4500 center",
            pin: true,
            markers: false,
            scrub: 1,
            // horizontal: true
          },
          // duration: 10,
          x: -1800,
        });
      },

      // "(min-width: 2001px) and (max-width: 2560px)": function () {
      //     gsap.to('.outfits-container', {
      //         scrollTrigger: {
      //             trigger: '.outfits-container',
      //             // endTrigger: ''
      //             start: 'center center',
      //             end: '+=4500 center',
      //             pin: true,
      //             markers: false,
      //             scrub: 1,
      //             // horizontal: true
      //         },
      //         // duration: 10,
      //         x: -3300
      //     });
      // },
    });
  },
};
</script>

<style></style>
