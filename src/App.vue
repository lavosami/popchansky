<script setup lang="ts">
const bars = [
  44, 48, 55, 61, 66, 71, 76, 82, 88, 94, 101, 108, 116, 126, 137, 149, 160,
  169, 181, 193, 207, 220, 205, 192, 179, 168, 158, 150, 142, 135, 128, 122,
  116, 111,
];

const capabilities = [
  {
    title: "Track",
    copy: "Emissions, energy, and waste across your value chain",
    index: "001",
  },
  {
    title: "Model",
    copy: "Forecast performance and goal alignment",
    index: "002",
  },
  {
    title: "Report",
    copy: "Generate ESG disclosures, automate frameworks",
    index: "003",
  },
  {
    title: "Act",
    copy: "Surface insights and operational next steps",
    index: "004",
  },
];

const principles = [
  {
    icon: "cross",
    title: "Clarity drives action",
    copy: "We believe better decisions start with better data-measured, visible, and trusted.",
  },
  {
    icon: "globe",
    title: "Sustainability is a systems problem",
    copy: "We build tools that help teams connect the dots between operations, impact, and accountability.",
  },
  {
    icon: "arrow",
    title: "Progress over perfection",
    copy: "We support real-world momentum-helping organizations move from ambition to measurable change.",
  },
];

const articles = [
  {
    title: "How to Build a Climate-ready Data Stack",
    meta: "Insights · 4 min",
    image: "fabric",
  },
  {
    title: "Sustainability Isn't a Side Project: Making Impact Operational",
    meta: "Strategy · 7 min",
    image: "forest",
  },
  {
    title: "Inside the Aetherfield Model: How We Turn Data Into Action",
    meta: "Insights · 5 min",
    image: "wind",
  },
];
</script>

<template>
  <main class="site-shell">
    <section class="hero-band">
      <header class="topbar" aria-label="Primary navigation">
        <a class="brand" href="#">Aetherfield</a>
        <nav class="desktop-nav" aria-label="Main navigation">
          <a href="#product">Product</a>
          <a href="#journal">Journal</a>
          <a href="#about">About</a>
          <a href="#careers">Careers</a>
          <a href="#start">Get started -></a>
        </nav>
      </header>

      <div class="hero-copy">
        <h1>
          <span>Sustainability insights,</span>
          <span>built for business</span>
        </h1>
        <p>
          Track impact, reduce emissions, and accelerate progress-with clarity
          and confidence.
        </p>
        <div class="hero-actions" aria-label="Primary actions">
          <a class="button" href="#start">· Request a demo</a>
          <a class="button" href="#product">· Explore the platform</a>
        </div>
      </div>

      <section class="dashboard" aria-label="Aetherfield dashboard preview">
        <div class="dashboard-title">
          <h2>Good morning, Acme Inc</h2>
          <p>Your daily impact metrics are ready to review.</p>
        </div>

        <div class="metrics">
          <article class="metric-card metric-card--wide">
            <span>192,000 tCO₂e</span>
            <strong>56%</strong>
          </article>
          <article class="metric-card">
            <span>Energy consumption</span>
            <i aria-hidden="true"></i>
            <strong>583.7 <small>MWh</small></strong>
            <em>↓12.4%</em>
          </article>
          <article class="metric-card forecast-card">
            <div class="mini-image mini-image--forest"></div>
            <div>
              <span>Forecast</span>
              <strong>You're 16% off your 2027 emissions goal</strong>
            </div>
          </article>
        </div>

        <div class="chart-panel">
          <span>Carbon emissions trend</span>
          <div class="chart-grid">
            <b>240</b>
            <b>160</b>
            <b>80</b>
            <b>0</b>
            <div class="chart-bars">
              <i
                v-for="(bar, index) in bars"
                :key="`${bar}-${index}`"
                :style="{ height: `${bar}px` }"
              ></i>
            </div>
          </div>
          <div class="chart-months" aria-hidden="true">
            <span>Feb</span>
            <span>Mar</span>
            <span>Apr</span>
            <span>May</span>
            <span>Jun</span>
          </div>
        </div>
      </section>
    </section>

    <section id="product" class="measure-section section-pad">
      <h2>Everything you need to measure, model, and act on sustainability</h2>
      <div class="measure-grid">
        <div class="image-panel image-panel--fabric">
          <article class="floating-metric">
            <span>Energy consumption</span>
            <i aria-hidden="true"></i>
            <strong>583.7 <small>MWh</small></strong>
            <em>↓12.4%</em>
          </article>
        </div>
        <div class="capability-list">
          <article v-for="capability in capabilities" :key="capability.title">
            <div>
              <h3>{{ capability.title }}</h3>
              <p>{{ capability.copy }}</p>
            </div>
            <span>{{ capability.index }}</span>
          </article>
          <a class="button" href="#features">· Explore features</a>
        </div>
      </div>
    </section>

    <section id="about" class="clarity-section section-pad">
      <h2>
        <span>Built for clarity</span>
        <span>Designed for action</span>
      </h2>
      <div class="principle-grid">
        <article v-for="principle in principles" :key="principle.title">
          <span
            class="principle-icon"
            :class="`principle-icon--${principle.icon}`"
          ></span>
          <h3>{{ principle.title }}</h3>
          <p>{{ principle.copy }}</p>
        </article>
      </div>
    </section>

    <section class="case-section section-pad">
      <div class="case-card">
        <div class="image-panel image-panel--people"></div>
        <div class="case-copy">
          <h2>Why Acme Inc chose Aetherfield</h2>
          <p>
            With fragmented data and growing reporting pressure, Acme turned to
            Aetherfield to streamline their ESG workflows. The result? Faster
            decisions, fewer spreadsheets, and 34% more coverage.
          </p>
          <a class="button" href="#case">Read case study</a>
        </div>
      </div>
    </section>

    <section id="journal" class="journal-section section-pad">
      <div class="journal-stamp" aria-hidden="true">
        <span>earth</span>
        <strong>Aetherfield<br />Journal</strong>
        <span>data</span>
        <small>tech</small>
      </div>
      <div class="journal-list">
        <h2>From the journal</h2>
        <article v-for="article in articles" :key="article.title">
          <div
            class="article-image"
            :class="`article-image--${article.image}`"
          ></div>
          <div>
            <h3>{{ article.title }}</h3>
            <p>{{ article.meta }}</p>
          </div>
        </article>
        <a class="button" href="#all">View all articles</a>
      </div>
    </section>

    <section class="quote-section section-pad">
      <div class="portrait-panel"></div>
      <blockquote>
        <span aria-hidden="true">“</span>
        <p>
          We finally moved past spreadsheets and guesswork. Now we have real
          data to guide real decisions.
        </p>
        <footer>
          <strong>Elliot Williams</strong>
          <span>Head of Sustainability, Flux Materials</span>
        </footer>
      </blockquote>
    </section>

    <section id="start" class="cta-section section-pad">
      <h2>Ready to operationalize your sustainability goals?</h2>
      <a class="button" href="#demo">· Request a demo</a>
    </section>

    <footer class="footer-band">
      <div class="footer-nav">
        <nav aria-label="Footer navigation">
          <a href="#product">Product</a>
          <a href="#journal">Journal</a>
          <a href="#about">About</a>
          <a href="#careers">Careers</a>
          <a href="#start">Get started</a>
        </nav>
        <span>© 2025 · All rights reserved</span>
      </div>
      <div class="footer-image" aria-hidden="true"></div>
      <strong>Aetherfield</strong>
    </footer>
  </main>
</template>

<style scoped>
:global(*) {
  box-sizing: border-box;
}

:global(html) {
  scroll-behavior: smooth;
}

:global(body) {
  margin: 0;
  background: #ffffff;
  color: #050505;
  font-family:
    Inter,
    ui-sans-serif,
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    sans-serif;
}

:global(a) {
  color: inherit;
  text-decoration: none;
}

.site-shell {
  min-width: 320px;
  overflow: hidden;
}

.hero-band {
  min-height: 1080px;
  padding: 22px 32px 96px;
  background:
    linear-gradient(
      180deg,
      rgba(190, 220, 247, 0.95) 0%,
      rgba(231, 241, 244, 0.95) 63%,
      #fbf2dc 100%
    ),
    #c7e3fb;
}

.topbar,
.footer-nav,
.desktop-nav,
.hero-actions,
.metrics,
.measure-grid,
.principle-grid,
.case-card,
.journal-section,
.quote-section {
  display: flex;
}

.topbar {
  align-items: center;
  justify-content: space-between;
  gap: 24px;
}

.brand {
  font-size: 24px;
  font-weight: 800;
  line-height: 1;
}

.desktop-nav {
  align-items: center;
  gap: 30px;
  font-size: 16px;
  font-weight: 700;
}

.hero-copy {
  max-width: 860px;
  margin: 126px auto 0;
  text-align: center;
}

h1,
h2,
h3,
p {
  margin: 0;
}

.hero-copy h1 {
  font-size: 78px;
  font-weight: 400;
  line-height: 0.96;
}

.hero-copy h1 span:first-child,
.clarity-section h2 span:first-child {
  display: block;
  font-family: Georgia, "Times New Roman", serif;
  font-weight: 400;
}

.hero-copy h1 span:last-child,
.clarity-section h2 span:last-child {
  display: block;
  font-weight: 800;
}

.hero-copy p {
  margin-top: 26px;
  font-family: Georgia, "Times New Roman", serif;
  font-size: 23px;
}

.hero-actions {
  justify-content: center;
  gap: 18px;
  margin-top: 36px;
}

.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 48px;
  padding: 0 22px;
  border: 0;
  border-radius: 0;
  background: #050505;
  color: #ffffff;
  font-family: "Courier New", monospace;
  font-size: 15px;
  line-height: 1;
  white-space: nowrap;
}

.dashboard {
  width: min(1020px, 100%);
  margin: 60px auto 0;
  padding: 84px 22px 22px;
  border: 2px solid #050505;
  border-radius: 24px;
  background: #f8f9fa;
}

.dashboard-title h2 {
  font-size: 25px;
  line-height: 1.1;
}

.dashboard-title p {
  margin-top: 4px;
  color: #6b6b6b;
  font-family: Georgia, "Times New Roman", serif;
  font-size: 26px;
  line-height: 1;
}

.metrics {
  gap: 12px;
  margin-top: 22px;
}

.metric-card,
.floating-metric {
  position: relative;
  min-height: 120px;
  padding: 14px;
  border-radius: 7px;
  background: #ffffff;
}

.metric-card span,
.floating-metric span,
.chart-panel span {
  display: block;
  font-family: "Courier New", monospace;
  font-size: 12px;
}

.metric-card strong,
.floating-metric strong {
  position: absolute;
  bottom: 12px;
  left: 14px;
  font-size: 31px;
  line-height: 1;
}

.metric-card small,
.floating-metric small {
  color: #6b6b6b;
  font-size: 11px;
  font-weight: 400;
}

.metric-card em,
.floating-metric em {
  position: absolute;
  right: 14px;
  bottom: 12px;
  color: #055bd9;
  font-family: "Courier New", monospace;
  font-size: 12px;
  font-style: normal;
}

.metric-card {
  flex: 1 1 0;
}

.metric-card--wide {
  background:
    linear-gradient(90deg, transparent 0 48%, #fff935 48% 96%, transparent 96%),
    #ffffff;
}

.metric-card i,
.floating-metric i {
  position: absolute;
  top: 14px;
  right: 14px;
  width: 26px;
  height: 26px;
  background:
    linear-gradient(#050505, #050505) 50% 0 / 1px 100% no-repeat,
    linear-gradient(90deg, #050505, #050505) 0 50% / 100% 1px no-repeat;
  transform: rotate(45deg);
}

.forecast-card {
  display: grid;
  grid-template-columns: 112px 1fr;
  gap: 14px;
  align-items: stretch;
}

.forecast-card strong {
  position: static;
  display: block;
  margin-top: 50px;
  font-size: 16px;
  line-height: 1.05;
}

.forecast-card span {
  display: inline-block;
  width: fit-content;
  padding: 3px 10px;
  border-radius: 999px;
  background: #fff935;
}

.mini-image,
.article-image,
.image-panel,
.portrait-panel,
.footer-image {
  background-size: cover;
  background-position: center;
}

.mini-image {
  border-radius: 5px;
}

.mini-image--forest,
.article-image--forest {
  background-image:
    radial-gradient(
      circle at 32% 28%,
      rgba(255, 255, 255, 0.25) 0 4%,
      transparent 5%
    ),
    radial-gradient(
      circle at 65% 40%,
      rgba(130, 170, 88, 0.92) 0 13%,
      transparent 14%
    ),
    radial-gradient(
      circle at 30% 70%,
      rgba(45, 89, 31, 0.95) 0 18%,
      transparent 19%
    ),
    linear-gradient(135deg, #14230f, #5b7a39 45%, #0b1708);
}

.chart-panel {
  margin-top: 14px;
  padding: 20px 20px 28px;
  background: #ffffff;
}

.chart-grid {
  position: relative;
  min-height: 270px;
  margin-top: 18px;
  border-bottom: 1px solid #d7dce1;
  background:
    linear-gradient(#d7dce1 1px, transparent 1px) 0 24px / 100% 70px,
    #ffffff;
}

.chart-grid b {
  position: absolute;
  left: 6px;
  color: #707070;
  font-family: "Courier New", monospace;
  font-size: 12px;
  font-weight: 400;
}

.chart-grid b:nth-child(1) {
  top: 16px;
}

.chart-grid b:nth-child(2) {
  top: 87px;
}

.chart-grid b:nth-child(3) {
  top: 158px;
}

.chart-grid b:nth-child(4) {
  bottom: 0;
}

.chart-bars {
  position: absolute;
  right: 4px;
  bottom: 0;
  left: 42px;
  display: grid;
  grid-template-columns: repeat(34, 1fr);
  align-items: end;
  gap: 17px;
  height: 228px;
}

.chart-bars i {
  display: block;
  width: 2px;
  max-height: 220px;
  background: #050505;
}

.chart-bars i:nth-child(22)::before {
  content: "220";
  position: absolute;
  bottom: 205px;
  margin-left: -16px;
  padding: 2px 8px;
  border-radius: 999px;
  background: #fff935;
  font-family: "Courier New", monospace;
  font-size: 12px;
}

.chart-months {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  padding-left: 105px;
  color: #797979;
  font-size: 12px;
}

.section-pad {
  padding: 112px 32px;
}

.measure-section h2 {
  width: min(620px, 100%);
  margin: 0 auto 44px;
  font-size: 38px;
  line-height: 1.02;
  text-align: center;
}

.measure-grid {
  align-items: stretch;
  gap: 42px;
}

.image-panel--fabric,
.article-image--fabric {
  background-image:
    radial-gradient(
      ellipse at 45% 42%,
      rgba(255, 242, 207, 0.55) 0 14%,
      transparent 15%
    ),
    radial-gradient(
      ellipse at 52% 50%,
      rgba(205, 225, 231, 0.75) 0 34%,
      transparent 35%
    ),
    linear-gradient(
      130deg,
      rgba(128, 203, 231, 0.7),
      rgba(238, 249, 253, 0.85) 54%,
      rgba(121, 191, 219, 0.8)
    );
}

.image-panel--fabric {
  position: relative;
  flex: 1 1 58%;
  min-height: 500px;
}

.floating-metric {
  position: absolute;
  right: 16%;
  bottom: 22%;
  width: min(490px, 72%);
  min-height: 176px;
}

.floating-metric strong {
  font-size: 42px;
}

.capability-list {
  flex: 1 1 42%;
}

.capability-list article {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  padding: 25px 0;
  border-top: 1px solid #d8dde3;
}

.capability-list article:last-of-type {
  border-bottom: 1px solid #d8dde3;
}

.capability-list h3,
.case-copy h2,
.journal-list h2 {
  font-size: 22px;
  line-height: 1.1;
}

.capability-list p {
  margin-top: 16px;
  font-family: Georgia, "Times New Roman", serif;
  font-size: 21px;
  line-height: 1.2;
}

.capability-list span {
  color: #5f5f5f;
  font-family: "Courier New", monospace;
  font-size: 14px;
}

.capability-list .button {
  margin-top: 26px;
}

.clarity-section {
  background:
    radial-gradient(
      ellipse at 20% 10%,
      rgba(255, 255, 255, 0.95) 0 12%,
      transparent 13%
    ),
    radial-gradient(
      ellipse at 80% 82%,
      rgba(255, 255, 255, 0.65) 0 16%,
      transparent 17%
    ),
    repeating-radial-gradient(
      circle at 45% 40%,
      rgba(255, 255, 255, 0.7) 0 1px,
      transparent 1px 4px
    ),
    #eee8d9;
}

.clarity-section h2 {
  font-size: 70px;
  line-height: 0.9;
  text-align: center;
}

.principle-grid {
  gap: 18px;
  margin-top: 56px;
}

.principle-grid article {
  flex: 1 1 0;
  min-height: 210px;
  padding: 32px;
  border-radius: 8px;
  background: #ffffff;
}

.principle-icon {
  position: relative;
  display: block;
  width: 44px;
  height: 44px;
  margin-bottom: 50px;
  border: 2px solid #050505;
  border-radius: 50%;
}

.principle-icon--cross::before,
.principle-icon--cross::after,
.principle-icon--globe::before,
.principle-icon--globe::after,
.principle-icon--arrow::before,
.principle-icon--arrow::after {
  content: "";
  position: absolute;
  background: #050505;
}

.principle-icon--cross::before,
.principle-icon--globe::before {
  top: 50%;
  left: 0;
  width: 100%;
  height: 1px;
}

.principle-icon--cross::after,
.principle-icon--globe::after {
  top: 0;
  left: 50%;
  width: 1px;
  height: 100%;
}

.principle-icon--globe {
  background:
    linear-gradient(
      90deg,
      transparent 30%,
      #050505 31% 32%,
      transparent 33% 67%,
      #050505 68% 69%,
      transparent 70%
    ),
    transparent;
}

.principle-icon--arrow::before {
  top: 13px;
  right: 10px;
  width: 18px;
  height: 2px;
  transform: rotate(-45deg);
}

.principle-icon--arrow::after {
  top: 12px;
  right: 10px;
  width: 13px;
  height: 13px;
  border-top: 2px solid #050505;
  border-right: 2px solid #050505;
  background: transparent;
}

.principle-grid h3 {
  font-size: 21px;
}

.principle-grid p {
  margin-top: 12px;
  font-family: Georgia, "Times New Roman", serif;
  font-size: 22px;
  line-height: 1.2;
}

.case-section {
  padding-top: 134px;
}

.case-card {
  align-items: center;
  gap: 42px;
  width: min(1040px, 100%);
  margin: 0 auto;
  padding: 22px;
  border-radius: 8px;
  background: #f4f6f9;
}

.image-panel--people {
  flex: 1 1 52%;
  min-height: 305px;
  border-radius: 8px;
  background-image:
    radial-gradient(
      circle at 24% 43%,
      rgba(255, 255, 255, 0.75) 0 8%,
      transparent 9%
    ),
    radial-gradient(
      circle at 57% 42%,
      rgba(255, 255, 255, 0.82) 0 7%,
      transparent 8%
    ),
    radial-gradient(
      circle at 85% 38%,
      rgba(255, 255, 255, 0.72) 0 8%,
      transparent 9%
    ),
    repeating-radial-gradient(
      circle at 52% 50%,
      rgba(255, 255, 255, 0.95) 0 1px,
      transparent 1px 4px
    ),
    linear-gradient(120deg, #2f8bff, #c9e4ff);
}

.case-copy {
  flex: 1 1 48%;
}

.case-copy p {
  margin-top: 18px;
  font-family: Georgia, "Times New Roman", serif;
  font-size: 22px;
  line-height: 1.25;
}

.case-copy .button {
  margin-top: 28px;
}

.journal-section {
  justify-content: center;
  gap: 58px;
  padding-top: 60px;
}

.journal-stamp {
  position: relative;
  width: 430px;
  height: 160px;
  margin-top: 44px;
  border: 3px solid #2c87ff;
  color: #2c87ff;
  transform: skewY(-9deg) rotate(-5deg);
}

.journal-stamp strong {
  position: absolute;
  left: 135px;
  top: 56px;
  font-size: 28px;
  line-height: 0.9;
}

.journal-stamp span,
.journal-stamp small {
  position: absolute;
  font-family: Georgia, "Times New Roman", serif;
  font-size: 16px;
}

.journal-stamp span:first-child {
  left: 185px;
  top: 16px;
}

.journal-stamp span:nth-child(3) {
  right: 22px;
  top: 54px;
}

.journal-stamp small {
  left: 28px;
  bottom: 30px;
}

.journal-list {
  width: min(660px, 100%);
}

.journal-list h2 {
  margin-bottom: 20px;
  font-size: 40px;
}

.journal-list article {
  display: grid;
  grid-template-columns: 176px 1fr;
  gap: 18px;
  align-items: center;
  padding: 22px 0;
  border-top: 1px solid #d8dde3;
}

.journal-list article:last-of-type {
  border-bottom: 1px solid #d8dde3;
}

.article-image {
  height: 76px;
}

.article-image--wind {
  background-image:
    radial-gradient(
      circle at 25% 56%,
      rgba(4, 5, 5, 0.55) 0 9%,
      transparent 10%
    ),
    linear-gradient(
      120deg,
      rgba(254, 183, 45, 0.9),
      rgba(241, 87, 32, 0.75),
      rgba(24, 28, 22, 0.85)
    );
}

.journal-list h3 {
  font-size: 21px;
  line-height: 1.05;
}

.journal-list p {
  margin-top: 8px;
  color: #5f5f5f;
  font-family: "Courier New", monospace;
  font-size: 15px;
}

.journal-list .button {
  margin: 26px auto 0;
}

.quote-section {
  align-items: center;
  gap: 130px;
}

.portrait-panel {
  width: min(650px, 52%);
  min-height: 520px;
  background-image:
    radial-gradient(
      circle at 47% 25%,
      rgba(255, 255, 255, 0.92) 0 13%,
      transparent 14%
    ),
    radial-gradient(
      circle at 37% 36%,
      rgba(255, 255, 255, 0.7) 0 4%,
      transparent 5%
    ),
    radial-gradient(
      circle at 57% 36%,
      rgba(255, 255, 255, 0.7) 0 4%,
      transparent 5%
    ),
    repeating-radial-gradient(
      circle at 42% 42%,
      rgba(255, 255, 255, 0.9) 0 1px,
      transparent 1px 4px
    ),
    linear-gradient(135deg, #d7ecff, #2587ff 72%);
}

blockquote {
  width: min(500px, 100%);
  margin: 0;
}

blockquote > span {
  display: block;
  color: #d8dde3;
  font-family: Georgia, "Times New Roman", serif;
  font-size: 78px;
  line-height: 0.6;
}

blockquote p {
  font-size: 39px;
  font-weight: 800;
  line-height: 1.04;
}

blockquote footer {
  margin-top: 44px;
}

blockquote footer strong,
blockquote footer span {
  display: block;
}

blockquote footer strong {
  font-size: 19px;
}

blockquote footer span {
  margin-top: 8px;
  color: #6b6b6b;
  font-family: Georgia, "Times New Roman", serif;
  font-size: 21px;
}

.cta-section {
  background: #f5f7fb;
  text-align: center;
}

.cta-section h2 {
  font-size: 41px;
  line-height: 1.1;
}

.cta-section .button {
  margin-top: 28px;
}

.footer-band {
  padding: 24px 22px 0;
  background: #fff935;
  color: #6b6b00;
}

.footer-nav {
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  font-size: 20px;
}

.footer-nav nav {
  display: flex;
  flex-wrap: wrap;
  gap: 28px;
  font-weight: 700;
}

.footer-nav span {
  font-family: Georgia, "Times New Roman", serif;
}

.footer-image {
  height: 170px;
  margin-top: 26px;
  background-image:
    repeating-radial-gradient(
      circle at 40% 40%,
      rgba(0, 0, 0, 0.48) 0 1px,
      transparent 1px 5px
    ),
    linear-gradient(
      140deg,
      rgba(0, 0, 0, 0.4),
      transparent 34% 42%,
      rgba(0, 0, 0, 0.35)
    ),
    #e5ea24;
}

.footer-band > strong {
  display: block;
  margin-top: 28px;
  color: #727200;
  font-size: 174px;
  line-height: 0.75;
}

@media (max-width: 900px) {
  .hero-band {
    min-height: 0;
    padding: 16px 18px 72px;
  }

  .desktop-nav {
    gap: 14px;
    font-size: 13px;
  }

  .hero-copy {
    margin-top: 70px;
  }

  .hero-copy h1 {
    font-size: 45px;
  }

  .hero-copy p {
    font-size: 17px;
  }

  .dashboard {
    padding-top: 50px;
  }

  .metrics,
  .measure-grid,
  .principle-grid,
  .case-card,
  .journal-section,
  .quote-section {
    flex-direction: column;
  }

  .metric-card,
  .forecast-card {
    min-height: 112px;
  }

  .chart-bars {
    gap: 8px;
  }

  .measure-section h2 {
    font-size: 30px;
  }

  .image-panel--fabric {
    min-height: 360px;
  }

  .floating-metric {
    right: 6%;
    width: 88%;
  }

  .clarity-section h2 {
    font-size: 49px;
  }

  .journal-section {
    align-items: center;
  }

  .journal-stamp {
    width: 340px;
  }

  .quote-section {
    gap: 36px;
  }

  .portrait-panel {
    width: 100%;
    min-height: 430px;
  }

  blockquote p,
  .cta-section h2 {
    font-size: 32px;
  }

  .footer-band > strong {
    font-size: 106px;
  }
}

@media (max-width: 560px) {
  .topbar {
    align-items: flex-start;
  }

  .brand {
    font-size: 13px;
  }

  .desktop-nav {
    gap: 8px;
    font-size: 9px;
  }

  .desktop-nav a:nth-child(-n + 4) {
    display: none;
  }

  .hero-copy {
    margin-top: 34px;
  }

  .hero-copy h1 {
    font-size: 30px;
  }

  .hero-copy p {
    max-width: 290px;
    margin: 12px auto 0;
    font-size: 10px;
  }

  .hero-actions {
    flex-direction: column;
    align-items: center;
    gap: 8px;
    margin-top: 18px;
  }

  .button {
    min-height: 34px;
    padding: 0 16px;
    font-size: 11px;
  }

  .dashboard {
    margin-top: 28px;
    padding: 26px 10px 10px;
    border-radius: 14px;
  }

  .dashboard-title h2 {
    font-size: 13px;
  }

  .dashboard-title p {
    font-size: 13px;
  }

  .metrics {
    gap: 8px;
    margin-top: 14px;
  }

  .metric-card,
  .floating-metric {
    min-height: 76px;
    padding: 9px;
  }

  .metric-card span,
  .floating-metric span,
  .chart-panel span {
    font-size: 8px;
  }

  .metric-card strong,
  .floating-metric strong {
    left: 9px;
    bottom: 9px;
    font-size: 19px;
  }

  .forecast-card {
    grid-template-columns: 72px 1fr;
  }

  .forecast-card strong {
    margin-top: 18px;
    font-size: 11px;
  }

  .chart-panel {
    padding: 12px 10px 16px;
  }

  .chart-grid {
    min-height: 145px;
    background:
      linear-gradient(#d7dce1 1px, transparent 1px) 0 18px / 100% 36px,
      #ffffff;
  }

  .chart-grid b {
    font-size: 8px;
  }

  .chart-grid b:nth-child(2) {
    top: 53px;
  }

  .chart-grid b:nth-child(3) {
    top: 88px;
  }

  .chart-bars {
    left: 28px;
    gap: 4px;
    height: 120px;
  }

  .chart-bars i {
    max-height: 112px;
  }

  .chart-months {
    padding-left: 45px;
    font-size: 8px;
  }

  .section-pad {
    padding: 54px 18px;
  }

  .measure-section h2 {
    font-size: 23px;
  }

  .image-panel--fabric {
    min-height: 260px;
  }

  .floating-metric {
    bottom: 18%;
    min-height: 96px;
  }

  .capability-list h3,
  .case-copy h2,
  .journal-list h2 {
    font-size: 19px;
  }

  .capability-list p,
  .principle-grid p,
  .case-copy p {
    font-size: 16px;
  }

  .clarity-section h2 {
    font-size: 35px;
  }

  .principle-grid article {
    min-height: 150px;
    padding: 18px;
  }

  .principle-icon {
    margin-bottom: 24px;
  }

  .case-section {
    padding-top: 64px;
  }

  .case-card {
    padding: 12px;
  }

  .image-panel--people {
    min-height: 180px;
  }

  .journal-stamp {
    width: 260px;
    height: 118px;
  }

  .journal-stamp strong {
    left: 82px;
    top: 42px;
    font-size: 23px;
  }

  .journal-list article {
    grid-template-columns: 105px 1fr;
  }

  .article-image {
    height: 58px;
  }

  .journal-list h3 {
    font-size: 14px;
  }

  .journal-list p {
    font-size: 11px;
  }

  .portrait-panel {
    min-height: 330px;
  }

  blockquote p,
  .cta-section h2 {
    font-size: 26px;
  }

  .footer-nav {
    align-items: flex-start;
    flex-direction: column;
    font-size: 13px;
  }

  .footer-nav nav {
    gap: 14px;
  }

  .footer-image {
    height: 95px;
  }

  .footer-band > strong {
    font-size: 58px;
  }
}
</style>
