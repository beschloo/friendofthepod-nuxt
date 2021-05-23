<template>
  <div class="logo">
    <img src="~assets/images/logo.svg" class="fotp-logo" alt="logo" />
  </div>
</template>

<style>
.logo {
  display: flex;
  justify-content: center;
  align-items: center;
}
.logo img {
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: 1s appear;
  margin-top: 54px;
  margin-bottom: 104px;
  width: 376px;
  @media screen and (max-width: 768px) {
    width: 248px;
  }
  @media screen and (max-width: 600px) {
    width: 222px;
  }
}
</style>
