<template>
  <div class="info-container">
    <div class="about-title">ABOUT</div>
    <section class="info_blurb">
      <div v-if="data" v-html="data.about"></div>
    </section>
  </div>
</template>

<script>
export default {
  layout: 'layout',
  data() {
    return {
      data: {
        about: '',
      },
    }
  },
  async fetch() {
    try {
      const data = await import(`~/content/data/about.json`)
      this.data = data
    } catch (err) {
      return false
    }
  },
  computed: {
    isInfoPage() {
      return this.$nuxt._route.name === 'info' && true
    },
  },
}
</script>

<style scoped>
.info-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 280px;
  margin-bottom: 104px;
}
.about-title {
  font-family: rock;
  font-size: 40px;
  border: solid 3px #000;
  background-color: #c1918b;
  padding: 16px;
  width: 262px;
  margin-bottom: 56px;
}
.info_blurb {
  font-family: rock;
  font-size: 32px;
}
</style>
