<template>
  <div class="logo">
    <img src="~assets/images/logo.svg" class="hero-logo" alt="logo" />
  </div>
</template>

<style lang="scss">
.logo {
  display: flex;
  justify-content: center;
  align-items: center;
}
.hero-logo {
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: 1s appear;
  margin-top: 54px;
  margin-bottom: 104px;
  width: 376px;
  @media screen and (max-width: 768px) {
    width: 246px;
    margin: 64px 0;
  }
  @media screen and (max-width: 600px) {
    width: 222px;
    margin: 40px 0 64px 0;
  }
}
</style>
