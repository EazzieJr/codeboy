<template>
  <section class="mt-20 mixtape sm:mt-24 md:mt-28 lg:px-20 xl:px-40" id="mixtape">
    <div class="justify-between mixtape-container md:flex md:space-x-5">
      <div class="flex justify-between mixtape-left-container md:flex-col space-x-2 sm:space-x-5 md:space-x-0">
        <div class="w-2/4 mixtape-texts md:w-full">
          <h3
            class="font-monument font-light text-[1rem] sm:text-[1.5rem] md:text-3xl xl:text-4xl leading-5"
            ref="placeHolder"
          >
            Mixtape Cover & <br class="hidden 2xl:block"> Tracklist
          </h3>

          <!-- <p
            class="details uppercase font-monument font-thin text-[8px] lg:text-[10px] xl:text-xs 2xl:text-sm mt-3 md:mt-5 pr-4 xl:pr-16"
          >
            A few words about what is depicted on the images or photos. Be
            concise and creative
          </p> -->
        </div>

        <div class="w-2/4 md:w-full">
          <img src="https://res.cloudinary.com/eazzie/image/upload/q_100/v1644840558/Codeboy/Mixtape_small_xbt54t.webp" alt="Cover Image" />
        </div>
      </div>

      <div class="mt-5 mixtape-right-container md:mt-0">
        <img src="https://res.cloudinary.com/eazzie/image/upload/q_100/v1644857855/Codeboy/Tracklist_1_1_jchh7v.webp" alt="Cover Image" />
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
  mounted() {
    gsap.to(this.$refs.placeHolder, {
      scrollTrigger: {
        trigger: this.$refs.placeHolder,
        start: "bottom 80%",
        onEnter: ScrollTrigger.refresh(),
        markers: false,
      },
    });

    ScrollTrigger.refresh();
  },
};
</script>

<style>
</style>
