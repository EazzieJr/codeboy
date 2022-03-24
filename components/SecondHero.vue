<template>
  <section class="hero" @mousemove="refresh" @mousewheel="refresh">
    <div class="py-10 hero-container xl:px-10 2xl:px-20 lg:py-16 xl:py-20">
      <div class="top-container flex justify-center">
        <img
          src="https://res.cloudinary.com/eazzie/image/upload/q_100/v1643151263/Codeboy/Group_13_2_1_oqzp4i.webp"
        />
      </div>

      <div
        class="bottom mt-16 mint-collectibles sm:grid md:place-items-center grid-cols-2 sm:gap-x-5 md:gap-x-0 sm:mt-20 lg:mt-20 xl:ml-10 space-y-10 sm:space-y-0"
      >
        <div class="asset">
          <video
            class="xl:w-[90%]"
            src="https://res.cloudinary.com/eazzie/video/upload/q_80/v1643157092/Codeboy/VID-20220125-WA0086_q1ujzx.mp4"
            autoplay
            playsinline
            loop
            muted
          />
        </div>

        <div class="mint-collectibles-container overflow-hidden xl:-ml-28">
          <ul
            class="font-inter text-sm sm:text-xs md:text-sm lg:text-base leading-loose text-[#6B6761] text-center sm:text-left space-y-1 pb-5 lg:pb-7"
          >
            <li
              data-aos="fade-right"
              data-aos-duration="300"
              data-aos-delay=""
              class="leading-loose xl:leading-[2.5]"
            >
              Total Collectibles: <span class="text-[#2E2B26]">7302</span>
            </li>
            <li
              data-aos="fade-right"
              data-aos-duration="300"
              data-aos-delay="100"
              class="leading-loose xl:leading-[2.5]"
            >
              Chain: <span class="text-[#2E2B26]">Ethereum (ERC-721)</span>
            </li>
            <li
              data-aos="fade-right"
              data-aos-duration="300"
              data-aos-delay="400"
              class="leading-loose xl:leading-[2.5]"
            >
              Presale Mint Date:
              <span class="text-[#2E2B26]">March 25th, 2022 -- 5pm EST</span>
            </li>
            <li
              data-aos="fade-right"
              data-aos-duration="300"
              data-aos-delay="600"
              class="leading-loose xl:leading-[2.5]"
            >
              Max mint per wallet: <span class="text-[#2E2B26]">Must have a <nuxt-link to="/listening-pass" class="underline capitalize text-black">listening pass</nuxt-link></span>
            </li>
            <li
              data-aos="fade-right"
              data-aos-duration="300"
              data-aos-delay="500"
              class="leading-loose xl:leading-[2.5]"
            >
              Mint Price: <span class="text-[#2E2B26]">0.08 ETH</span>
            </li>
          </ul>

          <div
            data-aos="fade-up"
            data-aos-duration="300"
            data-aos-delay="700"
            data-aos-offset="0"
            class="flex justify-center sm:justify-start mt-5 button lg:block"
          >
            <button
              class="uppercase relative font-sf text-white text-xs px-28 lg:px-32 py-1.5 lg:py-2 bg-black before:absolute before:left-0 before:-top-5 before:h-px before:w-full before:bg-[#E5E5E5]"
            >
              mint
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import aosMixin from "~/mixins/aos";
gsap.registerPlugin(ScrollTrigger);
const tl = gsap.timeline();

export default {
  mixins: [aosMixin],
  scrollToTop: true,

  methods: {
    refresh() {
      setInterval(ScrollTrigger.refresh(), 3000);
      console.log("refreshed");
    },
  },

  mounted() {
    gsap.to(this.$refs.video, {
      scrollTrigger: {
        // start: 'center center',
        onComplete: ScrollTrigger.refresh(),
        markers: false,
      },
    });
  },
};
</script>

<style></style>
