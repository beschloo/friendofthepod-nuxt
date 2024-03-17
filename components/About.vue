<template>
  <section id="about-start">
    <div class="info-container">
      <div class="about-title">ABOUT</div>
      <div class="info_blurb">
        <p>
          {{ about }}
        </p>
      </div>
    </div>
  </section>
</template>

<script>
// import { groq } from '@nuxtjs/sanity'

// const query = groq`*[_type == 'aboutSection']`

export default {
  layout: 'layout',
  props: ['about'],
}
</script>

<style lang="scss">
.info-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 110px;
  @media screen and (min-width: 801px) and (max-width: 1024px) {
    margin: 0 47px;
  }
  @media screen and (min-width: 641px) and (max-width: 800px) {
    margin: 0 47px;
  }
  @media screen and (max-width: 640px) {
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
  text-align: center;
  @media screen and (min-width: 801px) and (max-width: 1024px) {
    width: 195px;
    font-size: 20px;
  }
  @media screen and (min-width: 641px) and (max-width: 800px) {
    width: 195px;
    font-size: 20px;
  }
  @media screen and (max-width: 640px) {
    width: 195px;
    font-size: 20px;
  }
}
.info_blurb {
  font-family: rock;
  font-size: 32px;
  margin-bottom: 104px;
  text-align: center;
  @media screen and (min-width: 801px) and (max-width: 1024px) {
    font-size: 18px;
    margin-bottom: 64px;
  }
  @media screen and (min-width: 641px) and (max-width: 800px) {
    font-size: 18px;
    margin-bottom: 64px;
  }
  @media screen and (max-width: 640px) {
    font-size: 18px;
    margin-bottom: 41px;
    padding-right: 16px;
    padding-left: 16px;
  }
}
</style>
