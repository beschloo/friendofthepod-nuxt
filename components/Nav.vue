<template>
  <section class="nav">
    <div class="site-title">Friend of the Pod</div>
    <div>
      <ul class="links">
        <li><a href="#about-start">ABOUT</a></li>
        <li><a href="#projects-start">PROJECTS</a></li>
        <li><a href="#contact-start">CONTACT</a></li>
      </ul>
    </div>
  </section>
</template>

<style lang="scss">
.nav {
  background-color: #c1918b;
  border-bottom: solid 3px #000;
  height: 81px;
  min-width: 100%;
  font-family: rock;
  font-size: 40px;
  color: #000;
  display: flex;
  justify-content: space-between;
  padding: 16px 24px;
  @media screen and (min-width: 801px) and (max-width: 1024px) {
    height: 71px;
    font-size: 20px;
    padding: 24px 80px;
  }
  @media screen and (min-width: 641px) and (max-width: 800px) {
    height: 71px;
    font-size: 20px;
    padding: 24px 60px;
  }
  @media screen and (max-width: 640px) {
    height: 65px;
    font-size: 20px;
    padding: 20px 0;
    justify-content: space-around;
  }
}
.site-title {
  @media screen and (min-width: 801px) and (max-width: 1024px) {
  }
  @media screen and (min-width: 641px) and (max-width: 800px) {
  }
  @media screen and (max-width: 640px) {
    display: none;
  }
}
.links {
  display: flex;
  justify-content: space-between;
  list-style-type: none;
  li {
    color: #000;
    margin-right: 24px;
  }
  li a {
    color: #000;
    text-decoration: none;
    transition: 0.3s;
  }
}
li a:hover {
  opacity: 0.4;
}
</style>
