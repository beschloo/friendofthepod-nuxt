<template>
  <section class="podcast_grid">
    <div v-if="data" v-html="data.projects.json"></div>
    <div class="podcast_block">
      <div class="podcast_image__block">
        <img
          src="~assets/images/saving.png"
          class="prodcast-image"
          alt="podcast"
        />
        <!-- <img src="~assets/images/saving.png" class="podcast-image-hover" alt="hover"> -->
      </div>
      <div class="podcast-title__flex">
        <div class="podcast-title">Saving Sex & the City 3</div>
      </div>
    </div>
    <div class="podcast_block">
      <div class="podcast_image__block">
        <img src="~assets/images/sup.png" class="podcast-image" alt="podcast" />
        <!-- <img src="~assets/images/sup.png" class="podcast-image-hover" alt="hover"> -->
      </div>
      <div class="podcast-title__flex">
        <div class="podcast-title">SUP</div>
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
.podcast_grid {
  grid-auto-flow: column;
  justify-content: space-around;
  align-content: center;
  margin: 24px;
}
.podcast_block {
  position: relative;
  display: inline-block;
  width: 380px;
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
}
.podcast-title__flex {
  display: flex;
  justify-content: space-around;
  margin: 27px;
}
.podcast_title {
  color: #000;
  padding: 32px;
  font-size: 32px;
}
</style>
