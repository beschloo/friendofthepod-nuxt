<template>
  <section id="projects-start">
    <div class="podcast-section__title-container">
      <div class="podcast-section__title">PROJECTS</div>
    </div>
    <div class="podcast_grid">
      <!-- <div v-if="data" v-html="data.projects.json"></div> -->
      <div class="podcast_block">
        <div class="podcast_image__block">
          <a
            href="https://open.spotify.com/show/5yHlD9lmwJavFz83AjI5yr?si=bsRJvuFNRD6JtipapDE9og"
            class="podcast-image"
            target="_blank"
          >
            <img
              src="~assets/images/saving.png"
              class="podcast-image"
              alt="podcast"
            />
          </a>
        </div>
        <div class="podcast-title__flex">
          <div class="podcast-title">Saving Sex & the City 3</div>
        </div>
      </div>
      <div class="podcast_block">
        <div class="podcast_image__block">
          <a
            href="https://open.spotify.com/show/72KwUG8XvMncTWqM32NOHH?si=93WycFgNSIm0XUBztAKF9A"
            class="podcast-image"
            target="_blank"
          >
            <img
              src="~assets/images/sup.jpg"
              class-podcast-image
              alt="podcast"
            />
          </a>
        </div>
        <div class="podcast-title__flex">
          <div class="podcast-title">SUP: Sexy Unique Podcast</div>
        </div>
      </div>
      <div class="podcast_block">
        <div class="podcast_image__block">
          <a
            href="https://open.spotify.com/show/0hWYHGpcgaDhEkTpWsMZ8Q?si=5224607427274cbc"
            class="podcast-image"
            target="_blank"
          >
            <img
              src="~assets/images/gayasspodcast.jpg"
              class-podcast-image
              alt="podcast"
            />
          </a>
        </div>
        <div class="podcast-title__flex">
          <div class="podcast-title">That's a Gay Ass Podcast</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// // export default {
// //   layout: 'layout',
// //   data() {
// //     return {
// //       data: {
// //         about: '',
// //       },
// //     }
// //   },
// //   async fetch() {
// //     try {
// //       const data = await import(`~/content/data/podcasts.json`)
// //       this.data = data
// //     } catch (err) {
// //       return false
// //     }
// //   },
// //   computed: {
// //     isInfoPage() {
// //       return this.$nuxt._route.name === 'info' && true
// //     },
// //   },
// // }
</script>

<style lang="scss">
.podcast-section__title-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 280px;
  @media screen and (min-width: 801px) and (max-width: 1024px) {
    margin: 0 114px;
  }
  @media screen and (min-width: 641px) and (max-width: 800px) {
    margin: 0 114px;
  }
  @media screen and (max-width: 640px) {
    margin: 0 16px;
  }
}
.podcast-section__title {
  font-family: rock;
  font-size: 40px;
  border: solid 3px #000;
  background-color: #c1918b;
  padding: 16px;
  width: 262px;
  margin-bottom: 56px;
  text-align: center;
  @media screen and (min-width: 801px) and (max-width: 1024px) {
    width: 195px;
    font-size: 20px;
    margin-bottom: 40px;
  }
  @media screen and (min-width: 641px) and (max-width: 800px) {
    width: 195px;
    font-size: 20px;
    margin-bottom: 40px;
  }
  @media screen and (max-width: 640px) {
    width: 195px;
    font-size: 20px;
    margin-bottom: 32px;
  }
}
.podcast_grid {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin: 24px;
  @media screen and (min-width: 801px) and (max-width: 1024px) {
  }
  @media screen and (min-width: 641px) and (max-width: 800px) {
  }
  @media screen and (max-width: 640px) {
    flex-direction: column;
  }
}
.podcast_block {
  position: relative;
  display: inline-block;
  width: 385px;
  height: 425px;
  padding: 34px;
  margin: 24px;
  border: solid 3px #000;
  @media screen and (min-width: 801px) and (max-width: 1024px) {
    width: 265px;
    height: 290px;
    padding: 24px;
    margin: 18px;
  }
  @media screen and (min-width: 641px) and (max-width: 800px) {
    width: 265px;
    height: 290px;
    padding: 24px;
    margin: 18px;
  }
  @media screen and (max-width: 640px) {
    width: 335px;
    height: 360px;
    padding: 24px;
    margin: 18px;
  }
}
.podcast_image__block img {
  position: relative;
  display: flex;
  justify-content: center;
  /* object-fit: cover; */
  width: 312px;
  height: 312px;
  border: solid 3px #000;
  @media screen and (min-width: 801px) and (max-width: 1024px) {
    width: 213px;
    height: 213px;
  }
  @media screen and (min-width: 641px) and (max-width: 800px) {
    width: 213px;
    height: 213px;
  }
  @media screen and (max-width: 640px) {
    width: 281px;
    height: 281px;
  }
}
.podcast-image {
  position: relative;
  display: inline-block;
  display: flex;
  justify-content: center;
  align-items: center;
  object-fit: cover;
  width: 312px;
  height: 312px;
  filter: grayscale(100%);
  transition: 0.3s;
  @media screen and (min-width: 801px) and (max-width: 1024px) {
    width: 213px;
    height: 213px;
  }
  @media screen and (min-width: 641px) and (max-width: 800px) {
    width: 213px;
    height: 213px;
  }
  @media screen and (max-width: 640px) {
    width: 281px;
    height: 281px;
  }
}
.podcast-image:hover {
  filter: none;
}
.podcast-title__flex {
  display: flex;
  justify-content: space-around;
  margin-top: 24px;
  margin-bottom: 28px;
  font-family: rock;
  font-size: 24px;
  @media screen and (min-width: 801px) and (max-width: 1024px) {
    margin-top: 12px;
    margin-bottom: 28px;
    font-size: 16px;
  }
  @media screen and (min-width: 641px) and (max-width: 800px) {
    margin-top: 12px;
    margin-bottom: 28px;
    font-size: 16px;
  }
  @media screen and (max-width: 640px) {
    margin-top: 12px;
    margin-bottom: 24px;
    font-size: 18px;
  }
}
.podcast_title {
  color: #000;
  padding: 32px;
}
</style>
