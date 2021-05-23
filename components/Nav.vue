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

<style scoped>
.nav {
  background-color: #c1918b;
  border-bottom: solid 3px #000;
  height: 81px;
  font-family: rock;
  font-size: 40px;
  color: #000;
  display: flex;
  justify-content: space-between;
  padding: 16px 116px;
}
.site-title {
}
.links {
  display: flex;
  justify-content: space-between;
  list-style-type: none;
}
.links li {
  color: #000;
  margin-right: 24px;
}
.links li a {
  color: #000;
  text-decoration: none;
}
</style>
