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
            <div class="phone-logo">
              <img
                src="~assets/images/phone-logo.svg"
                class="phone-logo"
                alt="phone-logo"
              />
            </div>
            <div class="phone-number">504-621-7648</div>
          </div>
          <div class="email">
            <div class="email-logo">
              <img
                src="~assets/images/mail-logo.svg"
                class="mail-logo"
                alt="mail-logo"
              />
            </div>
            <div class="email-address">jonathan@friendofthepod.org</div>
          </div>
        </div>
      </div>
      <div class="contact-section_right">
        <div class="ig">
          <img src="~assets/images/ig-logo.svg" class="ig-logo" alt="ig-logo" />
        </div>
        <div class="fb">
          <img src="~assets/images/fb-logo.svg" class="fb-logo" alt="fb-logo" />
        </div>
      </div>
    </div>
    <div class="copyright">
      <div class="copyright-copy">Copyright 2021, Friend of the Pod</div>
    </div>
  </section>
</template>

<style scoped>
#contact-start {
  display: flex;
  flex-direction: column;
  background-color: #c1918b;
  border-top: solid 3px #000;
  height: 429px;
  font-family: rock;
}
.contact-contents {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 80px 116px;
}
.contact-section_left {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.fotp-logo {
  margin-right: 40px;
}
.fotp-logo img {
  width: 168px;
}
.contact-details {
}
.contact-title {
  display: flex;
  align-items: flex-start;
  font-size: 40px;
  margin-bottom: 16px;
}
.phone {
  display: flex;
  flex-direction: row;
  margin-bottom: 16px;
}
.phone-logo {
  margin-right: 19px;
  height: 24px;
  width: 24px;
  margin-bottom: 16px;
}
.phone-number {
  font-size: 32px;
  margin-bottom: 16px;
}
.email {
  display: flex;
  flex-direction: row;
  margin-bottom: 16px;
}
.email-logo {
  margin-right: 19px;
  height: 24px;
  width: 24px;
  margin-bottom: 16px;
}
.email-address {
  font-size: 32px;
  margin-bottom: 16px;
}
.contact-section_right {
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  margin: 13px;
}
.ig {
  height: 32px;
  width: 32px;
  margin-right: 10px;
}
.fb {
  height: 32px;
  width: 32px;
  margin-left: 10px;
}
.copyright {
}
.copyright-copy {
  font-size: 16px;
  margin-bottom: 24px;
}
</style>
