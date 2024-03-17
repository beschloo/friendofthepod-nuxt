<template>
  <div class="container">
    <div>
      <Nav />
      <Logo />
      <About :about="about" />
      <Podcasts :podcasts="podcasts" />
      <Footer />
    </div>
  </div>
</template>

<script>
import { groq } from '@nuxtjs/sanity'

const queryAbout = groq`*[_type == 'aboutSection']`
const queryPodcast = groq`*[_type == 'podcastSection']
{
  podcast
}`

export default {
  async asyncData({ $sanity }) {
    const resultAbout = await $sanity.fetch(queryAbout)
    const resultPodcasts = await $sanity.fetch(queryPodcast)
    const about = resultAbout[0].aboutText
    const podcasts = resultPodcasts[0].podcast
    // console.log('about : ', about)
    return { about, podcasts }
  },
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  min-width: 100%;
}
</style>
