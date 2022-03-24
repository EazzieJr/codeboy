<template>
  <div class="scroll-smooth">
      <nav>
          <div class="nav-container py-5 lg:py-0 xl:py-7 lg:pt-7 lg:pb-2 grid grid-cols-3 justify-between">
              <div class="left-nav-container justify-self-start mt-10">
                  <ul class="md:flex justify-center items-center md:space-x-5">
                      <a href="/record-label">
                          <p class="text-inter uppercase font-inter text-white text-[10px] xl:text-xs 2xl:text-sm">
                              drops
                          </p>
                      </a>

                      <nuxt-link to="/label-positions">
                          <p class="text-inter uppercase font-inter text-white text-[10px] xl:text-xs 2xl:text-sm">
                              label positions
                          </p>
                      </nuxt-link>
                  </ul>
              </div>

              <div class="mid-container">
                  <nuxt-link to="/record-label" class="flex flex-col justify-center items-center space-y-2">
                    <img src="/images/Small-logo.png" alt="">
                    
                    <p class="top font-inter text-white text-[10px] md:text-xs xl:text-sm 2xl:text-base text-center">
                        Music Label DAO for <br><span class="font-bold text-xs xl:text-sm 2xl:text-base">CODEBOY Sai</span>
                    </p>
                  </nuxt-link>
              </div>

              <div class="right-nav-container justify-self-end mt-10">
                <nuxt-link to="/#" class="">
                    <button class="uppercase bg-[#C3C2C1] text-[#2E2B26] font-inter font-medium text-[10px] xl:text-xs 2xl:text-xs p-3 sm:py-2 lg:py-3 sm:px-4 lg:px-5 transform hover:invert-[1]">
                        discord hq
                    </button>
                </nuxt-link>
            </div>
          </div>
      </nav>
  </div>
</template>

<script>
export default {

}
</script>

<style>
body {
    scroll-behavior: smooth;
}

button {
    transition: 800ms ease-in-out;
}

button:hover {
    transition: 800ms ease-in-out;
}
</style>