<template>
  <section id="about-start">
    <div class="info-container">
      <div class="about-title">ABOUT</div>
      <div class="info_blurb">
        <div v-if="data" v-html="data.about"></div>
      </div>
    </div>
  </section>
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

<style lang="scss">
.info-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 280px;
  @media screen and (max-width: 768px) {
    margin: 0 47px;
  }
  @media screen and (max-width: 600px) {
    margin: 0 16px;
  }
}
.about-title {
  font-family: rock;
  font-size: 40px;
  border: solid 3px #000;
  background-color: #c1918b;
  padding: 16px;
  width: 262px;
  margin-bottom: 56px;
  @media screen and (max-width: 768px) {
    width: 195px;
    font-size: 20px;
  }
  @media screen and (max-width: 600px) {
    width: 195px;
    font-size: 20px;
  }
}
.info_blurb {
  font-family: rock;
  font-size: 32px;
  margin-bottom: 104px;
  width: 1186px;
  @media screen and (max-width: 768px) {
    font-size: 18px;
    width: 675px;
    margin-bottom: 64px;
  }
  @media screen and (max-width: 600px) {
    font-size: 18px;
    width: 370px;
    margin-bottom: 41px;
  }
}
</style>
