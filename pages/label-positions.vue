<template>
  <div>
    <RecordNavigationTwo />

    <section class="music-label my-10 lg:my-16 xl:my-20 overflow-hidden">
      <div class="music-label-container space-y-7 lg:space-y-20 xl:px-20">
        <div
          class="top sm:grid grid-cols-2 lg:grid-cols-4 space-y-7 sm:space-y-0 sm:gap-y-7 overflow-hidden"
        >
          <div class="header-and-image col-span-2 sm:text-center lg:text-left">
            <h1
              data-aos="fade-right"
              data-aos-duration="1000"
              class="font-monument-light text-white text-[34px] sm:text-[40px] lg:text-5xl xl:text-[52px] 2xl:text-6xl"
            >
              Music Label <br />
              Positions:
            </h1>

            <div
              data-aos="fade-in"
              data-aos-duration="1000"
              class="flex justify-center xl:justify-start"
            >
              <video
                class="md:-ml-10"
                src="https://res.cloudinary.com/eazzie/video/upload//v1643320828/Codeboy/SILVERDESK-215X716_jk4vhv.mp4"
                alt="A video of the label positions"
                autoplay
                playsinline
                loop
                muted
              />
            </div>
          </div>

          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
            class="position-ar-scout justify-self-center"
          >
            <p
              class="post font-monument-regular text-white text-xl xl:text-xl 2xl:t2xt-4xl"
            >
              A&R Scout
            </p>

            <p
              class="requirement font-monument-light text-white text-[10px] xl:text-xs 2xl:text-sm mt-2 xl:mt-3 mb-2 xl:mb-3 leading-normal"
            >
              Required: 1 Listening Pass
            </p>

            <p
              class="details font-monument-light text-white text-[10px] xl:text-xs 2xl:text-sm pr-10 xl:pr-14 2xl:pr-28 xl:leading-relaxed"
            >
              An A&R Scouts listens to CODEBOY Sai leaks, studio live streams,
              goes to shows, and hopefully in the future: find new artists for
              the CODE LIFE Records DAO.
              <span class="ar-scout-span hidden">
                If the scout finds an artist that fits, he'll pass them to
                an A&R Rep. It's the Rep’s job to get the rest of the department
                at the label interested in the prospective artist. The
                Executives will have the final decision on whether to sign an
                artist. The A&R Scout & Rep will retain the finders fee in the
                negotiated deal with the prospective artist.
              </span>
            </p>

            <button
              class="ar-read-more font-monument-regular text-white text-[10px] xl:text-xs 2xl:text-sm flex justify-between items-center mt-1 xl:mt-2"
              @click="handleArScout"
            >
              {{ arScoutButtonState }}

              <svg
                class="w-2 xl:w-3 ml-2 xl:ml-3"
                viewBox="0 0 14 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M13.3848 6.78536L7.00005 12.771L0.615329 6.78536L1.38476 5.96464L6.43755 10.7016L6.43755 0L7.56255 0L7.56255 10.7016L12.6153 5.96464L13.3848 6.78536Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>

          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
            class="position-ar-rep justify-self-center"
          >
            <p
              class="post font-monument-regular text-white text-xl xl:text-xl 2xl:t2xt-4xl"
            >
              A&R Rep
            </p>

            <p
              class="requirement font-monument-light text-white text-[10px] xl:text-xs 2xl:text-sm mt-2 xl:mt-3 mb-2 xl:mb-3 leading-normal"
            >
              Required CB Sai Looks: 2
            </p>

            <p
              class="details font-monument-light text-white text-[10px] xl:text-xs 2xl:text-sm pr-10 xl:pr-14 2xl:pr-28 xl:leading-relaxed"
            >
              An A&R Rep plays an important role in the development of CODEBOY
              Sai and other artists on CODE LIFE Records once we begin taking
              artist submissions.
              <span class="ar-span hidden">
                A&R Reps have a voice in how CODEBOY Sai will distribute &
                market his musical art. A&R Reps will also can suggest
                songwriters orchestrate collaborations by pairing CODEBOY Sai
                with other artists and even producers.
              </span>
            </p>

            <button
              class="ar-read-more font-monument-regular text-white text-[10px] xl:text-xs 2xl:text-sm flex justify-between items-center mt-1 xl:mt-2"
              @click="handleAr"
            >
              {{ arButtonState }}

              <svg
                class="w-2 xl:w-3 ml-2 xl:ml-3"
                viewBox="0 0 14 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M13.3848 6.78536L7.00005 12.771L0.615329 6.78536L1.38476 5.96464L6.43755 10.7016L6.43755 0L7.56255 0L7.56255 10.7016L12.6153 5.96464L13.3848 6.78536Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>
        </div>

        <div
          class="bottom sm:grid grid-cols-2 lg:grid-cols-4 space-y-7 sm:space-y-0 sm:gap-y-7 overflow-hidden"
        >
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="400"
            class="position-merchandiser justify-self-center"
          >
            <p
              class="post font-monument-regular text-white text-xl xl:text-xl 2xl:t2xt-4xl"
            >
              Merchandiser
            </p>

            <p
              class="requirement font-monument-light text-white text-[10px] xl:text-xs 2xl:text-sm mt-2 xl:mt-3 mb-2 xl:mb-3 leading-normal"
            >
              Required:
              <span class="font-monument-regular">2 CB Sai Looks</span> <br />
              or <span class="font-monument-regular">1 CB Sai F&F Look</span>
            </p>

            <p
              class="details font-monument-light text-white text-[10px] xl:text-xs 2xl:text-sm pr-10 xl:pr-14 2xl:pr-28 xl:leading-relaxed"
            >
              The Merchandiser role is responsible for shipping VINYL records,
              merch, and other products from CODEBOY SAI for the purpose of
              sales.
              <span class="merchandiser-span hidden">
                Merchandisers assist with developing promotions strategies by
                communicating with brands/influencers about music placements.
                Merchandisers will get compensated for any graphic design work
                on cover art, merch, memes, and other products for the CODEBoy
                Sai Merch store.
              </span>
            </p>

            <button
              class="ar-read-more font-monument-regular text-white text-[10px] xl:text-xs 2xl:text-sm flex justify-between items-center mt-1 xl:mt-2"
              @click="handleMerchandiser"
            >
              {{ merchandiserButtonState }}

              <svg
                class="w-2 xl:w-3 ml-2 xl:ml-3"
                viewBox="0 0 14 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M13.3848 6.78536L7.00005 12.771L0.615329 6.78536L1.38476 5.96464L6.43755 10.7016L6.43755 0L7.56255 0L7.56255 10.7016L12.6153 5.96464L13.3848 6.78536Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>

          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
            class="position-marketing lg:-mt-10"
          >
            <p
              class="post font-monument-regular text-white text-xl xl:text-xl 2xl:t2xt-4xl"
            >
              Marketing <br class="hidden sm:block" />
              Manager
            </p>

            <p
              class="requirement font-monument-light text-white text-[10px] xl:text-xs 2xl:text-sm mt-2 xl:mt-3 mb-2 xl:mb-3 leading-normal"
            >
              Required:
              <span class="font-monument-regular">3 CB Sai Looks</span> <br />
              or <span class="font-monument-regular">1 CB Sai F&F Look</span>
            </p>

            <p
              class="details font-monument-light text-white text-[10px] xl:text-xs 2xl:text-sm pr-10 xl:pr-14 2xl:pr-28 xl:leading-relaxed"
            >
              The Marketing Manager role develops the communication between
              CODEBoy Sai and the general public.
              <span class="marketing-span hidden">
                They will create strategies to promote CODEBoy Sai by developing
                advertisements, designing and planning campaigns, etc. Marketing
                managers will also manage a budget for the Marketing department,
                overseeing professionals and expenses like graphic art, content,
                ads, videographers, and more.
              </span>
            </p>

            <button
              class="ar-read-more font-monument-regular text-white text-[10px] xl:text-xs 2xl:text-sm flex justify-between items-center mt-1 xl:mt-2"
              @click="handleMarketing"
            >
              {{ marketingButtonState }}

              <svg
                class="w-2 xl:w-3 ml-2 xl:ml-3"
                viewBox="0 0 14 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M13.3848 6.78536L7.00005 12.771L0.615329 6.78536L1.38476 5.96464L6.43755 10.7016L6.43755 0L7.56255 0L7.56255 10.7016L12.6153 5.96464L13.3848 6.78536Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>

          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="400"
            class="position-publicist"
          >
            <p
              class="post font-monument-regular text-white text-xl xl:text-xl 2xl:t2xt-4xl"
            >
              Publicist
            </p>

            <p
              class="requirement font-monument-light text-white text-[10px] xl:text-xs 2xl:text-sm mt-2 xl:mt-3 mb-2 xl:mb-3 leading-normal"
            >
              Required:
              <span class="font-monument-regular">4 CB Sai Looks</span> <br />
              or <span class="font-monument-regular">1 CB Sai F&F Look</span>
            </p>

            <p
              class="details font-monument-light text-white text-[10px] xl:text-xs 2xl:text-sm pr-10 xl:pr-14 2xl:pr-28 xl:leading-relaxed"
            >
              The Publicist role is responsible for sharing information and news
              about CODEBOY Sai with the press.
              <span class="publicist-span hidden">
                They pitch news stories about CODEBOY Sai to media outlets,
                write press releases, create media kits, and schedule interviews
                and appearances.
              </span>
            </p>

            <button
              class="ar-read-more font-monument-regular text-white text-[10px] xl:text-xs 2xl:text-sm flex justify-between items-center mt-1 xl:mt-2"
              @click="handlePublicist"
            >
              {{ publicistButtonState }}

              <svg
                class="w-2 xl:w-3 ml-2 xl:ml-3"
                viewBox="0 0 14 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M13.3848 6.78536L7.00005 12.771L0.615329 6.78536L1.38476 5.96464L6.43755 10.7016L6.43755 0L7.56255 0L7.56255 10.7016L12.6153 5.96464L13.3848 6.78536Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>

          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="600"
            class="position-agent"
          >
            <p
              class="post font-monument-regular text-white text-xl xl:text-xl 2xl:t2xt-4xl"
            >
              Agent
            </p>

            <p
              class="requirement font-monument-light text-white text-[10px] xl:text-xs 2xl:text-sm mt-2 xl:mt-3 mb-2 xl:mb-3 leading-normal"
            >
              Required:
              <span class="font-monument-regular">5 CB Sai Looks</span> <br />
              or <span class="font-monument-regular">1 CB Sai F&F Look</span>
            </p>

            <p
              class="details font-monument-light text-white text-[10px] xl:text-xs 2xl:text-sm pr-10 xl:pr-14 2xl:pr-28 xl:leading-relaxed"
            >
              The music agent role works closely with CODEBOY Sai to coordinate
              promotions, schedule tours and appearances, and secure deals.
              <span class="agent-span hidden">
                Agents will communicate with other professionals in the industry
                like venue managers, concert organizers, promoters, and scouts
                to make sure CODEBOY Sai gets adequate support and coverage and
                is able to share his talents with the public. Music Agents will
                retain a broker fee for any deals they secure.
              </span>
            </p>

            <button
              class="ar-read-more font-monument-regular text-white text-[10px] xl:text-xs 2xl:text-sm flex justify-between items-center mt-1 xl:mt-2"
              @click="handleAgent"
            >
              {{ agentButtonState }}

              <svg
                class="w-2 xl:w-3 ml-2 xl:ml-3"
                viewBox="0 0 14 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M13.3848 6.78536L7.00005 12.771L0.615329 6.78536L1.38476 5.96464L6.43755 10.7016L6.43755 0L7.56255 0L7.56255 10.7016L12.6153 5.96464L13.3848 6.78536Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>

          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="800"
            class="position-resource-admin"
          >
            <p
              class="post font-monument-regular text-white text-xl xl:text-xl 2xl:t2xt-4xl"
            >
              Resource Admin
            </p>

            <p
              class="requirement font-monument-light text-white text-[10px] xl:text-xs 2xl:text-sm mt-2 xl:mt-3 mb-2 xl:mb-3 leading-normal"
            >
              Required:
              <span class="font-monument-regular">6 CB Sai Looks</span> <br />
              or <span class="font-monument-regular">1 CB Sai F&F Look</span>
            </p>

            <p
              class="details font-monument-light text-white text-[10px] xl:text-xs 2xl:text-sm pr-10 xl:pr-14 2xl:pr-28 xl:leading-relaxed"
            >
              The Resource Admin role is responsible for performing HR tasks
              like onboarding new staff, maintaining/enforcing the CODE LIFE
              Records handbook policies, and performing payroll for any CODEBOY
              Sai expenses.
              <span class="resource-admin-span hidden">
                Admins facilitate things like booking recording sessions
                when/where required. Resource Admins also share the
                responsibility of maintaining an accurate list of CODE LIFE
                Records staff.
              </span>
            </p>

            <button
              class="ar-read-more font-monument-regular text-white text-[10px] xl:text-xs 2xl:text-sm flex justify-between items-center mt-1 xl:mt-2"
              @click="handleResourceAdmin"
            >
              {{ resourceAdminButtonState }}

              <svg
                class="w-2 xl:w-3 ml-2 xl:ml-3"
                viewBox="0 0 14 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M13.3848 6.78536L7.00005 12.771L0.615329 6.78536L1.38476 5.96464L6.43755 10.7016L6.43755 0L7.56255 0L7.56255 10.7016L12.6153 5.96464L13.3848 6.78536Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>

    <section class="executive my-32 xl:px-20 overflow-hidden">
      <div class="executive space-y-10 sm:space-y-0 sm:grid grid-cols-2">
        <div
          data-aos="fade-in"
          data-aos-duration="1000"
          class="top-left flex justify-center"
        >
          <video
            src="https://res.cloudinary.com/eazzie/video/upload//v1644676113/Codeboy/EXECUTIVE_ag9s8g.mp4"
            alt="An Asset of the Executive"
            autoplay
            playsinline
            loop
            muted
          />
        </div>

        <div
          class="bottom-right flex flex-col justify-center items-center overflow-hidden"
        >
          <h2
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay=""
            class="font-monument-regular text-white text-[34px] sm:text-[40px] lg:text-[44px] 2xl:text-6xl"
          >
            Executive
          </h2>

          <p
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="200"
            class="requirement font-monument-regular text-white text-sm lg:text-base xl:text-lg 2xl:text-xl mt-2 xl:mt-3 mb-1 xl:mb-2"
          >
            7 Total Executives Positions
          </p>

          <p
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="400"
            class="details font-monument-light text-white text-[10px] lg:text-xs xl:text-sm 2xl:text-base leading-loose xl:leading-loose text-center mt-3"
          >
            The Executives will make executive decisions and oversee the
            publishing, manufacturing, marketing, promotion, production,
            distribution, and touring decisions for CODEBoy Sai and CODE LIFE
            Records DAO.
          </p>

          <ul data-aos="fade-in" data-aos-duration="1000" class="mt-5">
            <li class="font-monument-light text-white text-xs xl:text-sm">
              <span class="font-monument-regular text-lg">*</span>Only Positions
              #1, #2, & #3, #4 will go on auction after CB Sai Looks are 100%
              Minted.
            </li>

            <li class="font-monument-light text-white text-xs xl:text-sm">
              <span class="font-monument-regular text-lg">*</span>*#5 #6
              Executive Positions will be reserved for elected officials from
              CODE LIFE RECORDS DAO.
            </li>

            <li class="font-monument-light text-white text-xs xl:text-sm">
              <span class="font-monument-regular text-lg">*</span>#7 Executive
              Position will be reserved for CODEBOY Sai.
            </li>

            <li class="font-monument-light text-white text-xs xl:text-sm">
              <span class="font-monument-regular text-lg">*</span>*Sales from
              auction will be split 50/50 between CODEBOY Sai and CODE LIFE
              Records DAO
            </li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import aosMixin from "~/mixins/aos";

export default {
  mixins: [aosMixin],
  layout: "third",

  data() {
    return {
      arButtonState: "Read more",
      arScoutButtonState: "Read more",
      merchandiserButtonState: "Read more",
      marketingButtonState: "Read more",
      publicistButtonState: "Read more",
      agentButtonState: "Read more",
      resourceAdminButtonState: "Read more",
    };
  },

  methods: {
    handleAr() {
      const span = document.querySelector(".ar-span");

      if (this.arButtonState == "Read more") {
        this.arButtonState = "show less";
        span.classList.add("show");
      } else {
        this.arButtonState = "Read more";
        span.classList.remove("show");
      }
    },

    handleArScout() {
      const span = document.querySelector(".ar-scout-span");

      if (this.arScoutButtonState == "Read more") {
        this.arScoutButtonState = "show less";
        span.classList.add("show");
      } else {
        this.arScoutButtonState = "Read more";
        span.classList.remove("show");
      }
    },

    handleMerchandiser() {
      const span = document.querySelector(".merchandiser-span");

      if (this.merchandiserButtonState == "Read more") {
        this.merchandiserButtonState = "show less";
        span.classList.add("show");
      } else {
        this.merchandiserButtonState = "Read more";
        span.classList.remove("show");
      }
    },

    handleMarketing() {
      const span = document.querySelector(".marketing-span");

      if (this.marketingButtonState == "Read more") {
        this.marketingButtonState = "show less";
        span.classList.add("show");
      } else {
        this.marketingButtonState = "Read more";
        span.classList.remove("show");
      }
    },

    handlePublicist() {
      const span = document.querySelector(".publicist-span");

      if (this.publicistButtonState == "Read more") {
        this.publicistButtonState = "show less";
        span.classList.add("show");
      } else {
        this.publicistButtonState = "Read more";
        span.classList.remove("show");
      }
    },

    handleAgent() {
      const span = document.querySelector(".agent-span");

      if (this.agentButtonState == "Read more") {
        this.agentButtonState = "show less";
        span.classList.add("show");
      } else {
        this.agentButtonState = "Read more";
        span.classList.remove("show");
      }
    },

    handleResourceAdmin() {
      const span = document.querySelector(".resource-admin-span");

      if (this.resourceAdminButtonState == "Read more") {
        this.resourceAdminButtonState = "show less";
        span.classList.add("show");
      } else {
        this.resourceAdminButtonState = "Read more";
        span.classList.remove("show");
      }
    },
  },
};
</script>

<style>
.show {
  display: block;
}

/* .font-monument {
  font-family: 'Monument Extended';
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
  font-family: 'Monument Extended';
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
