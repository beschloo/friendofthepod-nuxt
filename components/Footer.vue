<template>
  <section id="contact-start">
    <div class="contact-contents">
      <div class="contact-section_left">
        <div class="fotp-logo">
          <img
            src="~assets/images/logo.svg"
            class="fotp-logo_footer"
            alt="logo"
          />
        </div>
        <div class="contact-details">
          <div class="contact-title">CONTACT</div>
          <div class="phone">
            <img
              src="~assets/images/phone-logo.svg"
              class="phone-logo"
              alt="phone-logo"
            />
            <div class="phone-number">504-621-7648</div>
          </div>
          <div class="email">
            <img
              src="~assets/images/mail-logo.svg"
              class="email-logo"
              alt="email-logo"
            />
            <div class="email-address">
              <a href="mailto:jonathan@friendofthepod.org"
                >jonathan@friendofthepod.org</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="copyright">
      <div class="copyright-copy">Copyright 2021, Friend of the Pod</div>
    </div>
  </section>
</template>

<style lang="scss">
#contact-start {
  display: flex;
  flex-direction: column;
  background-color: #c1918b;
  border-top: solid 3px #000;
  height: 429px;
  font-family: rock;
  @media screen and (max-width: 768px) {
    height: 325px;
  }
  @media screen and (max-width: 600px) {
    height: 190px;
  }
}
.contact-contents {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 80px 116px;
  @media screen and (max-width: 768px) {
    margin: 40px 60px;
  }
  @media screen and (max-width: 600px) {
    margin: 20px 20px;
  }
}
.contact-section_left {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.fotp-logo {
  margin-right: 40px;
  @media screen and (max-width: 768px) {
    margin-right: 40px;
  }
  @media screen and (max-width: 600px) {
    margin-right: 40px;
  }
}
.fotp-logo img {
  width: 168px;
  @media screen and (max-width: 768px) {
    width: 150px;
  }
  @media screen and (max-width: 600px) {
    display: none;
  }
}
.contact-details {
}
.contact-title {
  display: flex;
  align-items: flex-start;
  font-size: 40px;
  margin-bottom: 18px;
  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
  @media screen and (max-width: 600px) {
    font-size: 24px;
  }
}
.phone {
  display: flex;
  flex-direction: row;
  margin-bottom: 6px;
}
.phone-logo {
  margin-right: 19px;
}
.phone-number {
  font-size: 32px;
  margin-bottom: 6px;
  @media screen and (max-width: 1024px) {
    font-size: 16px;
  }
}
.email {
  display: flex;
  flex-direction: row;
}
.email-logo {
  margin-right: 19px;
  padding-top: 8px;
}
.email-address {
  font-size: 32px;
  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
  @media screen and (max-width: 600px) {
    font-size: 16px;
  }
}
.email-address a {
  color: #000;
  text-decoration: none;
  transition: 0.3s;
}
.email-address a:hover {
  opacity: 0.4;
}
.copyright {
}
.copyright-copy {
  font-size: 16px;
  margin-bottom: 24px;
  text-align: center;
  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
  @media screen and (max-width: 600px) {
    font-size: 12px;
  }
}
</style>
