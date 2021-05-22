<template>
  <section class="info_blurb">
    <div v-if="data" v-html="data.about"></div>
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

<style scoped>
.info_blurb {
  font-family: rock;
  font-size: 18px;
}
</style>
