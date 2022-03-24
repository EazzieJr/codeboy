<template>
  <div class="container mx-auto px-5 sm:px-10 lg:px-14 xl:px-5">
    <Navigation />

    <section class="listening-pass py-10 md:py-0 lg:py-10">
      <div
        class="second-drop lg:flex justify-between xl:justify-center items-center md:grid grid-cols-2"
      >
        <div class="texts">
          <div class="animation-container overflow-hidden">
            <h1
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-delay="500"
              class="capitalize font-monument text-[#2E2B26] text-[42px] sm:text-[2.75rem] xl:text-[3.5rem] 2xl:text-6xl leading-normal lg:leading-normal lg:whitespace-nowrap"
            >
              Listening <br class="hidden lg:block" />Pass (LP)
            </h1>
          </div>
        </div>

        <div
          data-aos="fade-in"
          data-aos-duration="1000"
          class="image flex justify-center overflow-hidden"
        >
          <video
            class="transform"
            src="https://res.cloudinary.com/eazzie/video/upload/q_auto,c_crop,w_450,h_550/v1643129201/Codeboy/Listening-Pass_pn1oy4.mp4"
            alt="The Listening Pass Asset"
            autoplay
            playsinline
            loop
            muted
          />
        </div>

        <div
          class="mint-collectibles lg:mt-0 col-span-2 lg:col-auto self-center xl:ml-10 overflow-hidden"
        >
          <div class="mint-collectibles-container">
            <ul
              class="font-monument text-[10px] xl:text-xs leading-[2.5] text-[#6B6761] text-center lg:text-left space-y-1 pb-5"
            >
              <li
                data-aos="fade-right"
                data-aos-duration=""
                data-aos-delay=""
                class="leading-[2.5]"
              >
                Total LPs Available:
                <span class="text-[#6B6761] font-bold">1,302</span>
                <span class="font-monument font-light"
                  >(more LPs <br class="hidden md:block lg:hidden xl:block" />
                  will be released as more music is released)</span
                >
              </li>
              <li
                data-aos="fade-right"
                data-aos-duration=""
                data-aos-delay="100"
                class="leading-[2.5]"
              >
                Chain: <span class="text-[#6B6761]">Ethereum (ERC-721)</span>
              </li>
              <li
                data-aos="fade-right"
                data-aos-duration=""
                data-aos-delay="200"
                class="leading-[2.5]"
              >
                Lifetime LP Mint Fee:
                <span class="text-[#6B6761]">Free!</span>
              </li>
              <li
                data-aos="fade-right"
                data-aos-duration=""
                data-aos-delay="300"
                class="leading-[2.5]"
              >
                Max Token per wallet: <span class="text-[#2E2B26]">1</span>
              </li>
            </ul>

            <div
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-delay="400"
              class="button flex lg:block justify-center mt-5"
            >
              <!--@click="mintClicked"-->
              <button
                @click="mintClicked"
                class="uppercase relative font-sf text-white text-xs px-28 xl:px-32 py-1.5 xl:py-2 bg-black"
                id="mintButton"
              >
                mint
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="benefits my-20">
      <div
        class="benefits-container lg:flex justify-between items-start lg:space-x-10 2xl:space-x-20"
      >
        <div
          data-aos="zoom-in"
          data-aos-duration="1000"
          data-aos-delay=""
          class="top-left-container xl:w-[40%]"
        >
          <h2
            class="font-monument font-light capitalize text-center lg:text-left text-[2rem] xl:text-[2.5rem] md:px-20 lg:px-0 2xl:pr-10 leading-normal lg:leading-tight xl:leading-normal xl:whitespace-nowrap"
          >
            Benefits of <br class="hidden xl:block" />
            each LP <br class="hidden xl:block" />
            token
          </h2>
        </div>

        <div
          class="bottom-right-container xl:w-[60%] mt-10 lg:mt-0 sm:grid grid-cols-2 space-y-7 sm:space-y-0 sm:gap-y-10 sm:gap-x-10 md:gap-x-5 xl:gap-x-20"
        >
          <div
            class="first-benefit flex items-start space-x-5 lg:place-self-start overflow-hidden"
          >
            <div data-aos="fade-up" data-aos-duration="1000" class="left">
              <nuxt-img
                class=""
                src="/images/iPod-new.png"
                alt=""
                format="webp"
                sizes="xs:70px"
              />
            </div>

            <div data-aos="fade-up" data-aos-duration="1000" class="right">
              <p
                class="font-monument font-light text-[10px] xl:text-xs leading-relaxed md:leading-normal xl:leading-relaxed"
              >
                Gain Unlimited Access to
                <span class="font-bold">Music Player</span> <br />
                One Mint = Access to CODEBOY Sai music forever
              </p>
            </div>
          </div>

          <div
            class="second-benefit flex items-center lg:items-start space-x-5 lg:place-self-start overflow-hidden"
          >
            <div data-aos="fade-up" data-aos-duration="1000" class="left">
              <nuxt-img
                class="min-w-[40px] xl:min-w-[50px]"
                src="/images/Codelife-Records-2.png"
                alt=""
                sizes=""
                format="webp"
              />
            </div>

            <div data-aos="fade-up" data-aos-duration="1000" class="right">
              <p
                class="font-monument font-light text-[10px] xl:text-xs leading-relaxed md:leading-normal xl:leading-relaxed ml-2"
              >
                <span class="font-bold">A&R Scout</span> position within the
                CODE LIFE Records DAO, a music label fully run by CB Sai Look
                holders.
              </p>
            </div>
          </div>

          <div
            class="third-benefit flex items-start space-x-5 lg:place-self-start content-start overflow-hidden"
          >
            <div data-aos="fade-up" data-aos-duration="1000" class="left">
              <nuxt-img
                class=""
                src="/images/Licensing.png"
                alt=""
                sizes="xs:70px"
                format="webp"
              />
            </div>

            <div data-aos="fade-up" data-aos-duration="1000" class="right">
              <p
                class="font-monument font-light text-[10px] xl:text-xs leading-relaxed md:leading-normal xl:leading-relaxed"
              >
                License to Stream Music on websites like Twitch
              </p>

              <p
                class="font-monument font-light text-[10px] xl:text-xs leading-relaxed md:leading-normal xl:leading-relaxed pt-1"
              >
                <span class="font-bold"> Tell the DMCA to fuck off! </span>
              </p>
            </div>
          </div>

          <div
            class="fourth-benefit flex items-start space-x-5 lg:place-self-start overflow-hidden"
          >
            <div data-aos="fade-up" data-aos-duration="1000" class="left">
              <img class="w-32" src="/svg/handshake.svg" alt="" />
            </div>

            <div data-aos="fade-up" data-aos-duration="1000" class="right">
              <p
                class="font-monument font-light text-[10px] xl:text-xs leading-relaxed md:leading-normal xl:leading-relaxed"
              >
                Listening Pass holders have <br />
                <span class="font-bold">Non-Exclusive Licensee Rights</span>
                <br />
                of each NFT. CODEBOY Sai retains ownership of the master records
                of the music.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="faq my-28 sm:my-32 md:my-36 lg:px-20">
      <div
        class="items-start justify-center faq-container md:flex md:space-x-10 xl:space-x-32"
      >
        <div class="top-left faqTopLeft md:w-1/3" ref="faqTopLeft">
          <h2
            class="text-xxl text-center capitalize md:text-left font-monument font-light sm:text-2xl md:text-xl lg:text-3xl"
          >
            Frequently asked <br class="hidden lg:block" />
            questions
          </h2>
        </div>

        <div
          class="flex flex-col items-center bottom-right mt-7 sm:mt-10 md:mt-0"
        >
          <div>
            <div
              class="faq-box-1 faq-box w-full md:w-[24.5rem] lg:w-[26rem] xl:w-[35rem] h-10 xl:h-12 border-t py-3 overflow-y-hidden"
            >
              <div class="flex items-center justify-between top">
                <h5
                  class="font-monument-regular text-[10px] xl:text-xs 2xl:text-sm max-w-[95%]"
                >
                  What is a Listening Pass (LP)?
                </h5>

                <div class="svg-container">
                  <svg
                    class="w-2 transition duration-500"
                    viewBox="0 0 14 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M6.9998 6.20479L1.39755 0.602539L0.602051 1.39803L6.9998 7.79578L13.3975 1.39803L12.602 0.602539L6.9998 6.20479Z"
                      fill="#2E2B26"
                    />
                  </svg>
                </div>
              </div>

              <div class="hidden mt-3 bottom overflow-hidden">
                <p
                  class="font-monument font-light text-[8px] xl:text-[10px] 2xl:text-[xs] leading-relaxed"
                >
                  The Listening Pass unlocks all the CODEBOY Sai content on the
                  Exclusive Music Player and a position within 'CODE LIFE
                  Records DAO', a Music Record Label fully ran/operated by
                  CODEBOY Sai NFT wallet holders.
                </p>
              </div>
            </div>

            <div
              class="faq-box-2 faq-box w-full md:w-[24.5rem] lg:w-[26rem] xl:w-[35rem] h-[52px] sm:h-10 md:h-14 xl:h-16 border-t py-3 overflow-hidden"
            >
              <div class="flex items-center justify-between top">
                <h5
                  class="font-monument-regular text-[10px] xl:text-xs 2xl:text-sm max-w-[95%]"
                >
                  How do I purchase a Listening Pass (LP)?
                </h5>

                <div class="svg-container">
                  <svg
                    class="w-2 transition duration-500"
                    viewBox="0 0 14 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M6.9998 6.20479L1.39755 0.602539L0.602051 1.39803L6.9998 7.79578L13.3975 1.39803L12.602 0.602539L6.9998 6.20479Z"
                      fill="#2E2B26"
                    />
                  </svg>
                </div>
              </div>

              <div class="hidden mt-3 bottom overflow-hidden">
                <p
                  class="font-monument font-light text-[8px] xl:text-[10px] 2xl:text-[xs] leading-relaxed"
                >
                  Listening Passes (LPs) will be available for purchase on this
                  website. The easiest way to purchase is to install a MetaMask
                  extension in your browser and link your crypto wallet to it.
                  Ensure you have enough ETH in your wallet to cover the cost of
                  a CB Sai M&M Look plus the associated gas fees. Approve the
                  desired transaction on MetaMask and you are all set.
                </p>
              </div>
            </div>

            <div
              class="faq-box-3 faq-box w-full md:w-[24.5rem] lg:w-[26rem] xl:w-[35rem] h-10 sm:h-10 xl:h-12 border-t py-3 overflow-hidden"
            >
              <div class="flex items-center justify-between top">
                <h5
                  class="font-monument-regular text-[10px] xl:text-xs 2xl:text-sm max-w-[95%]"
                >
                  How many Listening Passes (LPs) exist?
                </h5>

                <div class="svg-container">
                  <svg
                    class="w-2 transition duration-500"
                    viewBox="0 0 14 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M6.9998 6.20479L1.39755 0.602539L0.602051 1.39803L6.9998 7.79578L13.3975 1.39803L12.602 0.602539L6.9998 6.20479Z"
                      fill="#2E2B26"
                    />
                  </svg>
                </div>
              </div>

              <div class="hidden mt-3 bottom overflow-hidden">
                <p
                  class="font-monument font-light text-[8px] xl:text-[10px] 2xl:text-[xs] leading-relaxed"
                >
                  There are 1,302 total Listening Passes available. CODEBOY Sai
                  will release more Listening Passes as more music and content
                  is released.
                </p>
              </div>
            </div>

            <div
              class="faq-box-4 faq-box w-full md:w-[24.5rem] lg:w-[26rem] xl:w-[35rem] h-14 sm:h-10 md:h-14 xl:h-12 border-t border-b py-3 overflow-hidden"
            >
              <div class="flex items-center justify-between top">
                <h5
                  class="font-monument-regular text-[10px] xl:text-xs 2xl:text-sm max-w-[95%]"
                >
                  What will be the mint cost of each Listening Pass?
                </h5>

                <div class="svg-container">
                  <svg
                    class="w-2 transition duration-500"
                    viewBox="0 0 14 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M6.9998 6.20479L1.39755 0.602539L0.602051 1.39803L6.9998 7.79578L13.3975 1.39803L12.602 0.602539L6.9998 6.20479Z"
                      fill="#2E2B26"
                    />
                  </svg>
                </div>
              </div>

              <div class="hidden mt-3 bottom overflow-hidden">
                <p
                  class="font-monument font-light text-[8px] xl:text-[10px] 2xl:text-[xs] leading-relaxed"
                >
                  The minting of each Listening Pass is free (not including gas fees).
                  Listening passes allow early mint access to future projects.
                </p>
              </div>
            </div>

            <div
              class="faq-box-3 faq-box w-full md:w-[24.5rem] lg:w-[26rem] xl:w-[35rem] h-10 sm:h-10 xl:h-10 border-t py-3 overflow-hidden"
            >
              <div class="flex items-center justify-between top">
                <h5
                  class="font-monument-regular text-[10px] xl:text-xs 2xl:text-sm max-w-[95%]"
                >
                  What is CODE LIFE RECORDS DAO?
                </h5>

                <div class="svg-container">
                  <svg
                    class="w-2 transition duration-500"
                    viewBox="0 0 14 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M6.9998 6.20479L1.39755 0.602539L0.602051 1.39803L6.9998 7.79578L13.3975 1.39803L12.602 0.602539L6.9998 6.20479Z"
                      fill="#2E2B26"
                    />
                  </svg>
                </div>
              </div>

              <div class="hidden mt-3 bottom">
                <p
                  class="font-monument font-light text-[8px] xl:text-[10px] 2xl:text-[xs] leading-relaxed"
                >
                  CODE LIFE Records DAO is a music record label managed/funded
                  by CBSAI NFT Holders. CODE LIFE Records DAO is responsible for
                  all things CODEBOY SAI. The Positions within the record label
                  will be A&R, Merchandiser, Marketing Manager, Publicist, Music
                  Agent, Resource Admin & Executive. CB Sai NFT holders discuss
                  label matters privately in the HQ within Position Teams.
                  Positions in CODE LIFE RECORDS DAO is granted for as long as
                  you hold your NFT.
                </p>
              </div>
            </div>
          </div>

          <!-- <transition name="fade" appear mode="out-in">
              <component
                  :is="screens[position]"
                  @goto="handleGoTo"
              />
          </transition> -->
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import aosMixin from "~/mixins/aos";
import { ethers } from "ethers";
import lp from "~/abi/CBSaiListeningPass.json";
import confetti from 'canvas-confetti';

export default {
  layout: "default",
  mixins: [aosMixin],
  methods: {
    async mintClicked() {
      if (document.getElementById("mintButton").innerText.toLowerCase() == "minting...") {
        return;
      }

      try {
        if (window.web3obj) {
          // this shit works, but can work better
          console.log(window.web3obj)
          var address = window.web3obj.currentProvider.selectedAddress
          if (!address)
            address = window.web3obj.currentProvider.accounts[0]
          const CollectionContract = new window.web3obj.eth.Contract(lp.abi, "0x83BEB7F96a464805F170b881883b97eB8FD64e8D");
          document.getElementById("mintButton").innerText = "Minting..."
          CollectionContract.methods.mint().send({from: address, value: 0}).on("receipt", (receipt) => {
            console.log(receipt, "receipt");
            document.getElementById("mintButton").innerText = "Success!"

            // confetti
            var duration = 15 * 1000;
            var animationEnd = Date.now() + duration;
            var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

            function randomInRange(min, max) {
              return Math.random() * (max - min) + min;
            }

            var interval = setInterval(function() {
              var timeLeft = animationEnd - Date.now();

              if (timeLeft <= 0) {
                return clearInterval(interval);
              }

              var particleCount = 50 * (timeLeft / duration);
              // since particles fall down, start a bit higher than random
              confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } }));
              confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } }));
            }, 250);
          })

        }
      } catch(e) {
        console.log(e)
      }
    }
  }
};
</script>

<style>
.faq-box {
  transition: 0.5s ease;
  -webkit-transition: 0.5s ease;
  -moz-transition: 0.5s ease;
  -ms-transition: 0.5s ease;
  -o-transition: 0.5s ease;
}

.faq-box:hover {
  height: 12.5rem;
  @apply sm:h-[8rem];
  @apply md:h-[11rem];
  @apply lg:h-[10rem];
  @apply xl:h-[11rem];
  transition: 0.5s ease;
  -webkit-transition: 0.5s ease;
  -moz-transition: 0.5s ease;
  -ms-transition: 0.5s ease;
  -o-transition: 0.5s ease;
}

.faq-box:hover .bottom {
  display: block;
  transition: 0.5s ease;
  -webkit-transition: 0.5s ease;
  -moz-transition: 0.5s ease;
  -ms-transition: 0.5s ease;
  -o-transition: 0.5s ease;
}

.faq-box:hover .top svg {
  transform: rotate(180deg);
  transition: 0.5s ease;
  -webkit-transition: 0.5s ease;
  -moz-transition: 0.5s ease;
  -ms-transition: 0.5s ease;
  -o-transition: 0.5s ease;
  -webkit-transform: rotate(180deg);
  -moz-transform: rotate(180deg);
  -ms-transform: rotate(180deg);
  -o-transform: rotate(180deg);
}

.faq-box::-webkit-scrollbar {
  visibility: hidden;
}

/* .font-monument {
  font-family: 'Monument Extended';
}

.font-monument-regular {
  font-family: 'Monument Extended Regular';
  font-weight: 400;
}

@font-face {
  font-family: 'Monument Extended';
  src: url('../static/font/Monument_Extended_Font/MonumentExtended-Thin.ttf');
  font-weight: 100;
  font-style: normal;
}

@font-face {
  font-family: 'Monument Extended';
  src: url('../static/font/Monument_Extended_Font/MonumentExtended-Light.ttf');
  font-weight: 300;
  font-style: normal;
}

@font-face {
  font-family: 'Monument Extended Regular';
  src: url('../static/font/Monument_Extended_Font/MonumentExtended-Regular.ttf');
  font-weight: 400;
  font-style: normal;
}

@font-face {
  font-family: 'Monument Extended';
  src: url('../static/font/Monument_Extended_Font/MonumentExtended-Bold.ttf');
  font-weight: 700;
  font-style: normal;
}

@font-face {
  font-family: 'Monument Extended';
  src: url('../static/font/Monument_Extended_Font/MonumentExtended-Ultrabold.otf');
  font-weight: 900;
  font-style: normal;
}

@font-face {
  font-family: 'Monument Extended';
  src: url('../static/font/Monument_Extended_Font/MonumentExtended-Black.ttf');
  font-weight: normal;
  font-style: normal;
} */
</style>
