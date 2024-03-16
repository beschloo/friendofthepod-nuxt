<template>
  <section id="projects-start">
    <div class="podcast-section__title-container">
      <div class="podcast-section__title">PROJECTS</div>
    </div>
    <div class="podcast_grid">
      <div
        class="podcast_block"
        v-bind:key="podcast._id"
        v-for="podcast in podcasts"
      >
        <div class="podcast_image__block">
          <a :href="podcast.podcastURL" class="podcast-image" target="_blank">
            <SanityImage
              :asset-id="podcast.podcastImage.asset._ref"
              auto="format"
            >
              <template #default="{ src }">
                <img
                  :src="src"
                  loading="lazy"
                  class="podcast-image"
                  alt="podcast"
                />
              </template>
            </SanityImage>
          </a>
        </div>
        <div class="podcast-title__flex">
          <div class="podcast-title">{{ podcast.podcastTitle }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { groq } from '@nuxtjs/sanity'

const query = groq`*[_type == 'podcastSection']
{
  podcast
}`

export default {
  data() {
    return {
      podcasts: [],
    }
  },
  async fetch() {
    // try {
    const result = await this.$sanity.fetch(query)
    this.podcasts = result[0].podcast
  },
}
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
  display: grid;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  grid-template-columns: repeat(3, 1fr);
  margin: 24px;
  gap: 24px;
  margin-left: auto;
  margin-right: auto;
  max-width: 860px;
  @media screen and (min-width: 801px) and (max-width: 1024px) {
    max-width: 70vw;
    gap: unset;
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (min-width: 641px) and (max-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 640px) {
    // flex-direction: column;
    grid-template-columns: repeat(1, 1fr);
  }
}
.podcast_block {
  position: relative;
  display: inline-block;
  width: 385px;
  height: 425px;
  padding: 34px;
  border: solid 3px #000;
  margin: 24px;
  @media screen and (min-width: 801px) and (max-width: 1024px) {
    width: 265px;
    height: 290px;
    padding: 24px;
    // margin: 18px;
  }
  @media screen and (min-width: 641px) and (max-width: 800px) {
    width: 265px;
    height: 290px;
    padding: 24px;
    // margin: 18px;
  }
  @media screen and (max-width: 640px) {
    width: 335px;
    height: 360px;
    padding: 24px;
    // margin: 18px;
  }

  margin-left: auto;
  margin-right: auto;
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
