<template>
  <section id="projects-start">
    <div class="podcast-section__title-container">
      <div class="podcast-section__title">PROJECTS</div>
    </div>
    <div class="podcast_grid">
      <!-- <div v-if="data" v-html="data.projects.json"></div> -->
      <div class="podcast_block">
        <div class="podcast_image__block">
          <img
            src="~assets/images/saving.png"
            class="podcast-image"
            alt="podcast"
          />
        </div>
        <div class="podcast-title__flex">
          <div class="podcast-title">Saving Sex & the City 3</div>
        </div>
      </div>
      <div class="podcast_block">
        <div class="podcast_image__block">
          <img
            src="~assets/images/sup.png"
            class="podcast-image"
            alt="podcast"
          />
        </div>
        <div class="podcast-title__flex">
          <div class="podcast-title">SUP: Sexy Unique Podcast</div>
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

<style scoped>
.podcast-section__title-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 280px;
}
.podcast-section__title {
  font-family: rock;
  font-size: 40px;
  border: solid 3px #000;
  background-color: #c1918b;
  padding: 16px;
  width: 262px;
  margin-bottom: 56px;
}
.podcast_grid {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin: 24px;
}
.podcast_block {
  position: relative;
  display: inline-block;
  width: 385px;
  height: 425px;
  padding: 34px;
  margin: 24px;
  border: solid 3px #000;
}
.podcast_image__block img {
  position: relative;
  display: flex;
  justify-content: center;
  /* object-fit: cover; */
  width: 312px;
  height: 312px;
  border: solid 3px #000;
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
}
.podcast_title {
  color: #000;
  padding: 32px;
}
</style>
