<template>
  <div class="w-full h-screen bg-[#C4C4C4] flex justify-center items-center bg-opacity-[0.2]" @click="toggleModal()">
    <div class="modal-container relative w-[300px] lg:w-[380px] xl:w-[410px] py-[30px] px-9 bg-white flex flex-col justify-center items-center text-center rounded-[20px]">
      <h4 class="header font-inter uppercase text-sm lg:text-base xl:text-lg 2xl:text-xl">
        token gated music <br> player
      </h4>

      <img src="images/code boy logo.png" alt="Codeboy sai's logo" class="logo w-12 lg:w-16 mt-4 lg:mt-6 xl:mt-7 mb-6 lg:mb-8 xl:mb-9">

      <p class="description font-monument-regular text-[10px] lg:text-xs xl:text-sm 2xl:text-[15px]">
        In order to listen to CODEBOY Sai’s music, you need either a ‘Listening Pass’ or a ‘CB Sai MM Look’ inside your wallet. 
      </p>

      <div class="redirectors font-monument-bold space-y-4 lg:space-y-6 flex flex-col justify-center items-center mt-5 lg:mt-7 xl:mt-8">
        <nuxt-link to="/listening-pass">
          <div class="lp">
            listening pass
          </div>
        </nuxt-link>

        <nuxt-link to="/meetings-and-makeups">
          <div class="mm">
            CB sai MM look
          </div>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  computed: {
    ...mapState(["modalOpened"]),
  },
  methods: {
    ...mapMutations(["toggleModal"]),
  },
};
</script>

<style lang="postcss">
.lp, .mm {
  @apply py-2 lg:py-3 px-3 lg:px-4 border border-black rounded-lg max-w-fit lg:text-xl 2xl:text-2xl whitespace-nowrap
}

.modal-container::before {
  content: '';
  position: absolute;
  left: 50%;
  top: 50%;
  width: calc(100% + 5px);
  height: calc(100% + 5px);
  background: radial-gradient(102.94% 100% at 72.83% 100%, #FF4141 0%, #000000 38.88%, #0047FF 39.94%, #85C0FF 67.4%, #FF1405 100%);
  transform: translate(-50%, -50%);
  z-index: -1;
  border-radius: 20px;
}
</style>