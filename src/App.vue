<script setup lang="ts">
import { computed, onMounted, ref } from "vue";

const bars = [
  44, 48, 55, 61, 66, 71, 76, 82, 88, 94, 101, 108, 116, 126, 137, 149, 160,
  169, 181, 193, 207, 220, 205, 192, 179, 168, 158, 150, 142, 135, 128, 122,
  116, 111,
];

const capabilities = [
  {
    title: "Артем Никандров",
    copy: "Сайт-визитка ecom специалиста с предоставляемыми услугами",
    index: "001",
    accent: "Стратегия и упаковка личного бренда",
    images: [
      {
        src: "/cases/artem-nikandrov/hero.jpeg",
        alt: "Главный экран сайта Артема Никандрова",
      },
      {
        src: "/cases/artem-nikandrov/about.jpeg",
        alt: "Блок о себе на сайте Артема Никандрова",
      },
      {
        src: "/cases/artem-nikandrov/approach.jpeg",
        alt: "Блок подхода к работе на сайте Артема Никандрова",
      },
    ],
  },
  {
    title: "ИИ-респонденты",
    copy: "Платформа запуска синтетических респондентов и анализа ответов",
    index: "002",
    accent: "AI-исследования, оркестрация сессий и аналитика ответов",
    imageLayout: "wide",
    images: [
      {
        src: "/cases/ai-respondents/respondents-launch.png",
        alt: "Экран запуска ИИ-респондентов с настройкой количества участников",
      },
      {
        src: "/cases/ai-respondents/analytics-dashboard.png",
        alt: "Экран аналитики ответов и распределения результатов в проекте ИИ-респонденты",
      },
    ],
  },
  {
    title: "Anasti",
    copy: "Платформа автоматизированного анализа и визуализации данных",
    index: "003",
    accent: "Сложная аналитика и визуализация данных",
    images: [
      {
        src: "/cases/anasti/control-surface.png",
        alt: "Экран авторизации и импорта датасета в проекте Anasti",
      },
    ],
  },
  {
    title: "Мотивация студентов",
    copy: "Интеграция балльной экономики в учебный процесс",
    index: "004",
    accent: "Telegram-продукт для вовлечения и поощрения студентов",
    images: [
      {
        src: "/cases/motivation-students/analytics.png",
        alt: "Экран аналитики и баланса в проекте Мотивация студентов",
      },
      {
        src: "/cases/motivation-students/merch.png",
        alt: "Экран мерча в проекте Мотивация студентов",
      },
      {
        src: "/cases/motivation-students/create-event.png",
        alt: "Экран FAQ в проекте Мотивация студентов",
      },
      {
        src: "/cases/motivation-students/event-card.png",
        alt: "Экран карточки события в проекте Мотивация студентов",
      },
    ],
  },
  {
    title: "Медиа-свадьба",
    copy: "Промо-сайт краудфандинговой свадьбы с нативными интеграциями для брендов",
    index: "005",
    accent: "Имиджевый лендинг, спонсорские пакеты и вирусная подача события",
    images: [
      {
        src: "/cases/media-wedding/promo.jpg",
        alt: "Главный промо-экран сайта проекта Медиа-свадьба",
      },
      {
        src: "/cases/media-wedding/hero.jpg",
        alt: "Экран с форматами интеграции брендов в проекте Медиа-свадьба",
      },
      {
        src: "/cases/media-wedding/progress.jpg",
        alt: "Экран прогресса краудфандинга и преимуществ для спонсоров в проекте Медиа-свадьба",
      },
    ],
  },
];

const principles = [
  {
    icon: "cross",
    title: "Практика и архитектура",
    copy: "Мы разрабатываем сложные цифровые системы с нуля, без шаблонов и CMS, опираясь на практический опыт и учитывая задачи и рост клиента",
  },
  {
    icon: "globe",
    title: "Индивидуальный подход",
    copy: "Мы обеспечиваем индивидуальный подход на всех этапах — от аналитики до поддержки, оставаясь на связи, прозрачно ведя процесс и учитывая обратную связь",
  },
  {
    icon: "arrow",
    title: "Долгосрочный результат",
    copy: "Наша цель — не просто выполнить проект, а создать инструмент, который будет эффективно работать в долгосрочной перспективе и масштабироваться вместе с бизнесом",
  },
];

const aboutParagraphs = [
  "Мы — молодое, амбициозное AI-first агентство, специализирующееся на разработке сайтов и цифровых продуктов под ключ. Мы объединяем современные технологии, дизайн и аналитику, чтобы создавать не просто сайты, а полноценные инструменты для роста бизнеса. Наша команда состоит из экспертов в области аналитики, проектирования, разработки и поддержки высоконагруженных сервисов для различных сфер бизнеса. Мы помогаем клиентам создавать сильное цифровое присутствие, формировать узнаваемый бренд и выстраивать эффективную коммуникацию с аудиторией. Мы не просто реализуем идеи — мы погружаемся в задачи бизнеса, находим оптимальные решения и создаем продукты, которые работают на результат: привлекают, удерживают и конвертируют.",
];

const services = [
  {
    title: "Сайт-визитка",
    description:
      "Компактный, но выразительный сайт, который помогает быстро презентовать компанию, услугу или личный бренд. В результате клиент получает продуманную структуру, сильный визуальный образ, адаптивную верстку, формы заявок, базовую SEO-подготовку и удобный инструмент для первого контакта с аудиторией.",
  },
  {
    title: "Маркетплейс",
    description:
      "Полноценная торговая платформа для работы с большим количеством товаров, продавцов и пользователей. Итоговый продукт включает масштабируемый каталог, фильтрацию, поиск, личные кабинеты, корзину, оплату, управление заказами, административную панель и архитектуру, готовую к росту нагрузки и развитию бизнес-логики.",
  },
  {
    title: "Мобильное приложение",
    description:
      "Мобильный продукт с удобным пользовательским сценарием, быстрым интерфейсом и надежной технической основой. В результате вы получаете приложение с продуманным UX, интеграцией с серверной частью, push-уведомлениями, авторизацией, аналитикой и возможностью масштабировать функциональность по мере роста бизнеса.",
  },
  {
    title: "Личный кабинет / CRM-система",
    description:
      "Система для автоматизации внутренних процессов и управления клиентскими данными в одном цифровом контуре. Итоговый продукт может включать роли и права доступа, воронки, карточки клиентов, отчеты, задачи, уведомления, аналитику и интеграции с внешними сервисами, чтобы команда работала быстрее и прозрачнее.",
  },
  {
    title: "Сайт под узконаправленные задачи",
    description:
      "Индивидуальное веб-решение под конкретный бизнес-сценарий, где важна не шаблонная подача, а точное попадание в задачу. Это может быть сервис, калькулятор, внутренняя платформа, витрина, конфигуратор или специализированный инструмент с уникальной логикой, разработанный с учетом процессов компании и будущего масштабирования.",
  },
];

type Capability = (typeof capabilities)[number];

const openedService = ref<number | null>(null);
const openedPrinciple = ref<number | null>(null);
const activeCaseIndex = ref(3);
const activeCaseImageIndex = ref(0);
const selectedProjectType = ref("");
const customProjectType = ref("");
const name = ref("");
const email = ref("");
const contactPreference = ref("");
const idea = ref("");
const privacyConsent = ref(false);
const personalDataConsent = ref(false);
const formMessage = ref("");
const isSubmitting = ref(false);
const cookieConsentStatus = ref<"accepted" | "necessary" | null>(null);
const requestForm = ref<HTMLFormElement | null>(null);
const recipientEmail = "paramonovjegor@yandex.ru";
const companyInn = "344111595700";
const touchStartX = ref<number | null>(null);
const touchCurrentX = ref<number | null>(null);
const swipeThreshold = 42;
const cookieConsentStorageKey = "jorwell-cookie-consent";
const apiBaseUrl = import.meta.env.VITE_API_BASE_URL?.trim();

const toggleService = (index: number) => {
  openedService.value = openedService.value === index ? null : index;
};

const togglePrinciple = (index: number) => {
  openedPrinciple.value = openedPrinciple.value === index ? null : index;
};

const setActiveCase = (index: number) => {
  activeCaseIndex.value = index;
  activeCaseImageIndex.value = 0;
};

const activeCase = computed<Capability>(() => {
  return capabilities[activeCaseIndex.value] ?? capabilities[0]!;
});

const activeCaseImage = computed(() => {
  return activeCase.value.images[activeCaseImageIndex.value] ?? null;
});

const isWideCaseImage = computed(() => {
  return activeCase.value.imageLayout === "wide";
});

const showPrevCaseImage = () => {
  if (!activeCase.value.images.length) {
    return;
  }

  activeCaseImageIndex.value =
    activeCaseImageIndex.value === 0
      ? activeCase.value.images.length - 1
      : activeCaseImageIndex.value - 1;
};

const showNextCaseImage = () => {
  if (!activeCase.value.images.length) {
    return;
  }

  activeCaseImageIndex.value =
    activeCaseImageIndex.value === activeCase.value.images.length - 1
      ? 0
      : activeCaseImageIndex.value + 1;
};

const setActiveCaseImage = (index: number) => {
  activeCaseImageIndex.value = index;
};

const handleCaseTouchStart = (event: TouchEvent) => {
  const touch = event.touches[0];

  if (!touch) {
    return;
  }

  touchStartX.value = touch.clientX;
  touchCurrentX.value = touch.clientX;
};

const handleCaseTouchMove = (event: TouchEvent) => {
  const touch = event.touches[0];

  if (!touch || touchStartX.value === null) {
    return;
  }

  touchCurrentX.value = touch.clientX;
};

const handleCaseTouchEnd = () => {
  if (touchStartX.value === null || touchCurrentX.value === null) {
    touchStartX.value = null;
    touchCurrentX.value = null;
    return;
  }

  const deltaX = touchCurrentX.value - touchStartX.value;

  if (Math.abs(deltaX) >= swipeThreshold) {
    if (deltaX < 0) {
      showNextCaseImage();
    } else {
      showPrevCaseImage();
    }
  }

  touchStartX.value = null;
  touchCurrentX.value = null;
};

onMounted(() => {
  const savedConsent = window.localStorage.getItem(cookieConsentStorageKey);

  if (savedConsent === "accepted" || savedConsent === "necessary") {
    cookieConsentStatus.value = savedConsent;
  }
});

const setCookieConsent = (status: "accepted" | "necessary") => {
  cookieConsentStatus.value = status;
  window.localStorage.setItem(cookieConsentStorageKey, status);
};

const getRequestUrl = () => {
  if (apiBaseUrl) {
    return new URL("/api/request", apiBaseUrl).toString();
  }

  if (
    window.location.protocol === "http:" ||
    window.location.protocol === "https:"
  ) {
    return "/api/request";
  }

  return "http://127.0.0.1:3001/api/request";
};

const handleRequestSubmit = async () => {
  if (!requestForm.value?.reportValidity()) {
    return;
  }

  const resolvedProjectType =
    selectedProjectType.value === "Другое"
      ? customProjectType.value.trim()
      : selectedProjectType.value;

  formMessage.value = "";
  isSubmitting.value = true;

  try {
    const response = await fetch(getRequestUrl(), {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name.value.trim(),
        email: email.value.trim(),
        projectType: resolvedProjectType,
        contactPreference: contactPreference.value.trim(),
        idea: idea.value.trim(),
      }),
    });

    const data = (await response.json()) as { message?: string };

    if (!response.ok) {
      throw new Error(data.message || "Не удалось отправить заявку.");
    }

    formMessage.value =
      data.message || "Заявка отправлена. Мы скоро свяжемся с вами.";

    name.value = "";
    email.value = "";
    selectedProjectType.value = "";
    customProjectType.value = "";
    contactPreference.value = "";
    idea.value = "";
    privacyConsent.value = false;
    personalDataConsent.value = false;
    requestForm.value?.reset();
  } catch (error) {
    formMessage.value =
      error instanceof Error &&
        /expected pattern|failed to parse url|invalid url/i.test(error.message)
        ? "Не удалось определить адрес отправки формы. Откройте сайт через http://localhost:5173 или укажите VITE_API_BASE_URL."
        : error instanceof Error
          ? error.message
          : "Не удалось отправить заявку. Попробуйте еще раз.";
  } finally {
    isSubmitting.value = false;
  }
};
</script>

<template>
  <main class="site-shell">
    <section class="hero-band">
      <header class="topbar" aria-label="Primary navigation">
        <a class="brand" href="#">Jorwell</a>
        <nav class="desktop-nav" aria-label="Main navigation">
          <a href="#about">О нас</a>
          <a href="#product">Кейсы</a>
          <a href="#services">Услуги</a>
          <a href="/privacy.html" target="_blank" rel="noreferrer">
            Политика
          </a>
          <a href="#start">Оставить заявку</a>
        </nav>
      </header>

      <div class="hero-copy">
        <h1>
          <span>Расскажите о себе</span>
          <span>просто и понятно</span>
        </h1>
        <p>Создаем цифровые продукты, которые работают на рост бизнеса</p>
        <div class="hero-actions" aria-label="Primary actions">
          <a class="button" href="#start">Оставить заявку</a>
        </div>
      </div>
    </section>

    <section id="about" class="clarity-section section-pad">
      <h2>
        <span>О нас</span>
      </h2>
      <div class="about-list">
        <article
          v-for="(principle, index) in principles"
          :key="principle.title"
          :class="{ 'service-item--open': openedPrinciple === index }"
        >
          <button
            class="service-toggle"
            type="button"
            :aria-expanded="openedPrinciple === index"
            :aria-controls="`principle-panel-${index}`"
            @click="togglePrinciple(index)"
          >
            <h3>{{ principle.title }}</h3>
            <span
              class="service-plus"
              :class="{ 'service-plus--open': openedPrinciple === index }"
            >
              +
            </span>
          </button>
          <p
            v-if="openedPrinciple === index"
            :id="`principle-panel-${index}`"
            class="service-description"
          >
            {{ principle.copy }}
          </p>
        </article>
      </div>
    </section>

    <section id="product" class="measure-section section-pad">
      <h2>Наши кейсы</h2>
      <div class="measure-grid">
        <div class="case-preview">
          <div
            v-if="activeCaseImage"
            class="case-slider"
            :class="{ 'case-slider--wide': isWideCaseImage }"
            @touchstart.passive="handleCaseTouchStart"
            @touchmove.passive="handleCaseTouchMove"
            @touchend="handleCaseTouchEnd"
            @touchcancel="handleCaseTouchEnd"
          >
            <div
              class="case-slider-figure"
              :class="{ 'case-slider-figure--wide': isWideCaseImage }"
            >
              <img
                class="case-slider-image"
                :class="{ 'case-slider-image--wide': isWideCaseImage }"
                :src="activeCaseImage.src"
                :alt="activeCaseImage.alt"
              />
            </div>
            <button
              class="case-slider-arrow case-slider-arrow--prev"
              type="button"
              aria-label="Предыдущий экран проекта"
              @click="showPrevCaseImage"
            >
              ←
            </button>
            <button
              class="case-slider-arrow case-slider-arrow--next"
              type="button"
              aria-label="Следующий экран проекта"
              @click="showNextCaseImage"
            >
              →
            </button>
            <div class="case-slider-dots" aria-label="Навигация по экранам проекта">
              <button
                v-for="(image, index) in activeCase.images"
                :key="image.src"
                class="case-slider-dot"
                :class="{ 'case-slider-dot--active': activeCaseImageIndex === index }"
                type="button"
                :aria-label="`Показать экран ${index + 1}`"
                @click="setActiveCaseImage(index)"
              ></button>
            </div>
          </div>
          <div v-else class="case-preview-placeholder">
            <span>{{ activeCase.index }}</span>
            <strong>{{ activeCase.title }}</strong>
            <p>{{ activeCase.accent }}</p>
          </div>
        </div>
        <div class="capability-list">
          <button
            v-for="(capability, index) in capabilities"
            :key="capability.title"
            class="case-selector"
            :class="{ 'case-selector--active': activeCaseIndex === index }"
            type="button"
            @click="setActiveCase(index)"
          >
            <div>
              <h3>{{ capability.title }}</h3>
              <p>{{ capability.copy }}</p>
            </div>
            <span>{{ capability.index }}</span>
          </button>
        </div>
      </div>
    </section>

    <section id="services" class="journal-section section-pad">
      <div class="journal-list">
        <h2>Наши услуги</h2>
        <article
          v-for="(service, index) in services"
          :key="service.title"
          :class="{ 'service-item--open': openedService === index }"
        >
          <button
            class="service-toggle"
            type="button"
            :aria-expanded="openedService === index"
            :aria-controls="`service-panel-${index}`"
            @click="toggleService(index)"
          >
            <h3>{{ service.title }}</h3>
            <span
              class="service-plus"
              :class="{ 'service-plus--open': openedService === index }"
            >
              +
            </span>
          </button>
          <p
            v-if="openedService === index"
            :id="`service-panel-${index}`"
            class="service-description"
          >
            {{ service.description }}
          </p>
        </article>
      </div>
    </section>

    <section id="start" class="cta-section section-pad">
      <h2>Уже решили, чего хотите?</h2>
      <form
        ref="requestForm"
        class="request-form"
        @submit.prevent="handleRequestSubmit"
      >
        <label class="request-field">
          <span>Как к Вам обращаться?</span>
          <input
            v-model.trim="name"
            type="text"
            name="name"
            placeholder="Введите имя"
            required
          />
        </label>
        <label class="request-field">
          <span>Почта</span>
          <input
            v-model.trim="email"
            type="email"
            name="email"
            placeholder="example@mail.com"
            required
          />
        </label>
        <label class="request-field">
          <span>Тип проекта</span>
          <select
            v-model="selectedProjectType"
            class="request-select"
            name="projectType"
            required
          >
            <option value="" disabled>Выберите тип проекта</option>
            <option
              v-for="service in services"
              :key="service.title"
              :value="service.title"
            >
              {{ service.title }}
            </option>
            <option value="Другое">Другое</option>
          </select>
        </label>
        <label v-if="selectedProjectType === 'Другое'" class="request-field">
          <span>Свой тип проекта</span>
          <input
            v-model.trim="customProjectType"
            type="text"
            name="customProjectType"
            placeholder="Укажите тип проекта"
            required
          />
        </label>
        <label class="request-field request-field--full">
          <span>Как нам связаться с Вами?</span>
          <input
            v-model.trim="contactPreference"
            type="text"
            name="contactPreference"
            placeholder="Оставьте ссылку на Ваш Telegram/Max"
          />
        </label>
        <label class="request-field request-field--full">
          <span>Описание идеи</span>
          <textarea
            v-model.trim="idea"
            name="idea"
            rows="6"
            placeholder="Кратко опишите задачу, цель проекта и ваши ожидания"
            required
          ></textarea>
        </label>
        <button class="button request-submit" type="submit" :disabled="isSubmitting">
          {{ isSubmitting ? "Отправляем..." : "Отправить заявку" }}
        </button>
        <p class="request-helper request-field--full">
          Заявка будет отправлена автоматически на {{ recipientEmail }}.
        </p>
        <label class="request-consent request-field--full">
          <input
            v-model="privacyConsent"
            type="checkbox"
            name="privacyConsent"
            required
          />
          <span>
            Я подтверждаю, что ознакомился(ась) с
            <a href="/privacy.html" target="_blank" rel="noreferrer">
              Политикой конфиденциальности
            </a>.
          </span>
        </label>
        <label class="request-consent request-field--full">
          <input
            v-model="personalDataConsent"
            type="checkbox"
            name="personalDataConsent"
            required
          />
          <span>
            Я даю согласие на
            <a
              href="/personal-data-consent.html"
              target="_blank"
              rel="noreferrer"
            >
              обработку персональных данных
            </a>.
          </span>
        </label>
        <p v-if="formMessage" class="request-feedback request-field--full">
          {{ formMessage }}
        </p>
      </form>
    </section>

    <footer class="footer-band">
      <div class="footer-nav">
        <div class="footer-meta">
          <a class="footer-email" :href="`mailto:${recipientEmail}`">
            {{ recipientEmail }}
          </a>
          <span class="footer-inn">ИНН {{ companyInn }}</span>
        </div>
        <nav aria-label="Footer navigation">
          <a href="#about">О нас</a>
          <a href="#product">Кейсы</a>
          <a href="#services">Услуги</a>
          <a href="/privacy.html" target="_blank" rel="noreferrer">
            Политика конфиденциальности
          </a>
          <a href="#start">Оставить заявку</a>
        </nav>
      </div>
      <div class="footer-image" aria-hidden="true"></div>
      <strong>JORWELL</strong>
    </footer>

    <aside
      v-if="cookieConsentStatus === null"
      class="cookie-banner"
      aria-label="Уведомление об использовании cookie"
    >
      <div class="cookie-banner__copy">
        <strong>Мы используем cookie</strong>
        <p>
          Сайт использует технически необходимые cookie и локальные данные
          браузера для корректной работы интерфейса.
          <a href="/privacy.html" target="_blank" rel="noreferrer">
            Подробнее в политике конфиденциальности
          </a>
        </p>
      </div>
      <div class="cookie-banner__actions">
        <button
          class="button cookie-banner__button"
          type="button"
          @click="setCookieConsent('accepted')"
        >
          Принять
        </button>
        <button
          class="cookie-banner__button cookie-banner__button--secondary"
          type="button"
          @click="setCookieConsent('necessary')"
        >
          Только необходимые
        </button>
      </div>
    </aside>
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
  padding: 22px 32px 56px;
  background:
    linear-gradient(
      180deg,
      rgba(190, 220, 247, 0.95) 0%,
      rgba(231, 241, 244, 0.95) 52%,
      #fbf2dc 78%
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
  flex-wrap: wrap;
  justify-content: flex-end;
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
  font-family: "Big Caslon", "Times New Roman", serif;
  font-weight: 400;
}

.hero-copy h1 span:last-child,
.clarity-section h2 span:last-child {
  display: block;
  font-weight: 800;
}

.hero-copy p {
  margin-top: 26px;
  font-family: "Big Caslon", "Times New Roman", serif;
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
  max-width: 100%;
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
  font-family: "Big Caslon", "Times New Roman", serif;
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
  --case-block-height: 500px;
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

.case-preview {
  flex: 1 1 58%;
  min-height: var(--case-block-height);
}

.case-slider,
.case-preview-placeholder {
  height: 100%;
  min-height: var(--case-block-height);
  border-radius: 18px;
}

.case-slider {
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  touch-action: pan-y;
  background:
    linear-gradient(
      130deg,
      rgba(128, 203, 231, 0.22),
      rgba(238, 249, 253, 0.48) 54%,
      rgba(121, 191, 219, 0.26)
    ),
    #eaf2f7;
}

.case-slider--wide {
  background:
    linear-gradient(
      130deg,
      rgba(128, 203, 231, 0.16),
      rgba(238, 249, 253, 0.4) 54%,
      rgba(121, 191, 219, 0.18)
    ),
    #edf3f6;
}

.case-slider-figure {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 34px 88px 72px;
}

.case-slider-figure--wide {
  padding: 24px 38px 72px;
}

.case-slider-image {
  width: min(270px, 100%);
  max-height: 100%;
  border-radius: 24px;
  object-fit: contain;
  object-position: center top;
  display: block;
  box-shadow: 0 22px 44px rgba(5, 24, 43, 0.22);
}

.case-slider-image--wide {
  width: 100%;
  max-width: 860px;
  max-height: calc(100% - 4px);
  border-radius: 18px;
  object-position: center center;
}

.case-slider-arrow {
  position: absolute;
  top: 50%;
  z-index: 2;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border: 0;
  border-radius: 999px;
  background: rgba(5, 5, 5, 0.74);
  color: #ffffff;
  font-size: 24px;
  line-height: 1;
  cursor: pointer;
  transform: translateY(-50%);
}

.case-slider-arrow--prev {
  left: 18px;
}

.case-slider-arrow--next {
  right: 18px;
}

.case-slider-dots {
  position: absolute;
  bottom: 20px;
  left: 50%;
  z-index: 2;
  display: flex;
  gap: 8px;
  transform: translateX(-50%);
}

.case-slider-dot {
  width: 10px;
  height: 10px;
  padding: 0;
  border: 0;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.45);
  cursor: pointer;
}

.case-slider-dot--active {
  background: #ffffff;
}

.case-preview-placeholder {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 26px;
  background:
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

.case-preview-placeholder span {
  color: #4e657d;
  font-family: "Courier New", monospace;
  font-size: 14px;
}

.case-preview-placeholder strong {
  margin-top: 10px;
  font-size: 34px;
  line-height: 1.04;
}

.case-preview-placeholder p {
  margin-top: 14px;
  max-width: 420px;
  color: rgba(5, 5, 5, 0.72);
  font-family: "Big Caslon", "Times New Roman", serif;
  font-size: 24px;
  line-height: 1.2;
}

.capability-list {
  display: flex;
  flex: 1 1 42%;
  flex-direction: column;
  min-height: var(--case-block-height);
}

.case-selector {
  display: flex;
  flex: 1 1 0;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  width: 100%;
  padding: 25px 0;
  border: 0;
  border-top: 1px solid #d8dde3;
  background: transparent;
  color: inherit;
  text-align: left;
  cursor: pointer;
  transition:
    color 180ms ease,
    transform 180ms ease;
}

.case-selector:last-of-type {
  border-bottom: 1px solid #d8dde3;
}

.case-selector--active {
  color: #055bd9;
  transform: translateX(6px);
}

.case-selector--active p {
  color: rgba(5, 91, 217, 0.92);
}

.capability-list h3,
.case-copy h2,
.journal-list h2 {
  font-size: 22px;
  line-height: 1.1;
}

.capability-list p {
  margin-top: 16px;
  font-family: "Big Caslon", "Times New Roman", serif;
  font-size: 21px;
  line-height: 1.2;
}

.capability-list span {
  color: #5f5f5f;
  font-family: "Courier New", monospace;
  font-size: 14px;
}

.clarity-section {
  margin-top: 28px;
  background: #ffffff;
}

.clarity-section h2 {
  font-size: 70px;
  line-height: 0.9;
  text-align: center;
}

.clarity-intro {
  display: grid;
  gap: 18px;
  max-width: 940px;
  margin: 32px auto 0;
}

.clarity-intro p {
  margin: 0;
  color: rgba(5, 5, 5, 0.78);
  font-size: 1.02rem;
  line-height: 1.8;
  text-align: center;
}

.clarity-subhead {
  margin-top: 40px;
  color: rgba(5, 5, 5, 0.72);
  font-size: 0.82rem;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-align: center;
  text-transform: uppercase;
}

.about-list {
  width: min(1120px, 100%);
  margin: 56px auto 0;
}

.about-list article {
  display: block;
  padding: 28px 0;
  border-top: 1px solid #d8dde3;
}

.about-list article:last-of-type {
  border-bottom: 1px solid #d8dde3;
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

.about-list h3 {
  font-size: 21px;
  line-height: 1.1;
  margin: 0;
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
  font-family: "Big Caslon", "Times New Roman", serif;
  font-size: 22px;
  line-height: 1.25;
}

.case-copy .button {
  margin-top: 28px;
}

.journal-section {
  justify-content: center;
  padding-top: 60px;
  padding-bottom: 84px;
}

.journal-list {
  width: min(1120px, 100%);
}

.journal-list h2 {
  margin-bottom: 28px;
  font-size: 48px;
}

.clarity-section > h2,
.measure-section > h2,
.journal-list > h2,
.cta-section > h2 {
  font-family:
    Inter,
    ui-sans-serif,
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    sans-serif;
  font-size: 48px;
  font-weight: 700;
  line-height: 1.1;
  text-align: center;
}

.clarity-section > h2 span {
  font-family:
    Inter,
    ui-sans-serif,
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    sans-serif;
  font-size: inherit;
  font-weight: inherit;
  line-height: inherit;
}

.clarity-section > h2 span:first-child,
.clarity-section > h2 span:last-child {
  font-family:
    Inter,
    ui-sans-serif,
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    sans-serif !important;
  font-weight: 700 !important;
}

.journal-list article {
  display: block;
  padding: 28px 0;
  border-top: 1px solid #d8dde3;
}

.journal-list article:last-of-type {
  border-bottom: 1px solid #d8dde3;
}

.service-toggle {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0;
  border: 0;
  background: transparent;
  color: inherit;
  text-align: left;
  cursor: pointer;
}

.journal-list h3,
.about-list h3 {
  font-size: 28px;
  line-height: 1.1;
  margin: 0;
}

.service-plus {
  flex: 0 0 auto;
  margin-left: 24px;
  font-size: 46px;
  line-height: 1;
  transition:
    transform 180ms ease,
    color 180ms ease;
}

.service-plus--open {
  color: #2c87ff;
  transform: rotate(45deg);
}

.service-description {
  max-width: 920px;
  margin: 18px 72px 0 0;
  color: #5f5f5f;
  font-size: 19px;
  line-height: 1.75;
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
  font-family: "Big Caslon", "Times New Roman", serif;
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
  font-family: "Big Caslon", "Times New Roman", serif;
  font-size: 21px;
}

.cta-section {
  background: #f5f7fb;
  text-align: center;
}

.cta-section h2 {
  margin: 0 auto 30px;
  max-width: 760px;
  font-size: 41px;
  line-height: 1.1;
}

.request-form {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 18px;
  width: min(980px, 100%);
  margin: 0 auto;
  padding: 34px;
  border: 1px solid #dde3ea;
  border-radius: 24px;
  background: #ffffff;
  text-align: left;
}

.request-field {
  display: grid;
  gap: 10px;
}

.request-field--full {
  grid-column: 1 / -1;
}

.request-field span {
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.request-field input,
.request-field select,
.request-field textarea {
  width: 100%;
  border: 1px solid #cfd6de;
  border-radius: 16px;
  background: #fbfcfe;
  color: #050505;
  font: inherit;
}

.request-field input,
.request-field select {
  min-height: 58px;
  padding: 0 18px;
}

.request-select {
  appearance: none;
  padding-right: 52px;
  background-image:
    linear-gradient(45deg, transparent 50%, #050505 50%),
    linear-gradient(135deg, #050505 50%, transparent 50%);
  background-position:
    calc(100% - 24px) calc(50% - 4px),
    calc(100% - 18px) calc(50% - 4px);
  background-size:
    7px 7px,
    7px 7px;
  background-repeat: no-repeat;
}

.request-select:invalid {
  color: #7c8794;
}

.request-field textarea {
  padding: 16px 18px;
  resize: vertical;
}

.request-field input::placeholder,
.request-field textarea::placeholder {
  color: #7c8794;
}

.request-submit {
  justify-self: start;
  margin-top: 8px;
}

.request-submit:disabled {
  opacity: 0.7;
  cursor: wait;
}

.request-helper,
.request-feedback {
  margin: 0;
  color: #5b6774;
  font-size: 14px;
  line-height: 1.6;
}

.request-feedback {
  color: #1d5fd1;
}

.request-consent {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  margin-top: 4px;
  color: #44505d;
  font-size: 14px;
  line-height: 1.6;
}

.request-consent input {
  flex: 0 0 auto;
  width: 18px;
  height: 18px;
  margin-top: 2px;
}

.request-consent span {
  display: block;
}

.request-consent a {
  text-decoration: underline;
  text-underline-offset: 0.16em;
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

.footer-meta {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 6px;
}

.footer-email {
  font-family: "Courier New", monospace;
  font-size: 15px;
  text-decoration: underline;
  text-underline-offset: 0.16em;
}

.footer-inn {
  color: rgba(107, 107, 0, 0.82);
  font-family: "Courier New", monospace;
  font-size: 14px;
  letter-spacing: 0.04em;
}

.footer-nav nav {
  display: flex;
  flex-wrap: wrap;
  gap: 28px;
  margin-left: auto;
  font-weight: 700;
  justify-content: flex-end;
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

.cookie-banner {
  position: fixed;
  right: 24px;
  bottom: 24px;
  left: 24px;
  z-index: 30;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 20px;
  width: min(960px, calc(100% - 48px));
  margin-left: auto;
  padding: 20px 22px;
  border: 1px solid rgba(5, 5, 5, 0.12);
  border-radius: 22px;
  background: rgba(255, 255, 255, 0.96);
  box-shadow: 0 18px 54px rgba(5, 24, 43, 0.14);
  backdrop-filter: blur(16px);
}

.cookie-banner__copy {
  max-width: 620px;
}

.cookie-banner__copy strong {
  display: block;
  font-size: 20px;
  line-height: 1.1;
}

.cookie-banner__copy p {
  margin-top: 8px;
  color: rgba(5, 5, 5, 0.72);
  font-size: 15px;
  line-height: 1.6;
}

.cookie-banner__copy a {
  text-decoration: underline;
  text-underline-offset: 0.14em;
}

.cookie-banner__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.cookie-banner__button {
  cursor: pointer;
}

.cookie-banner__button--secondary {
  min-height: 48px;
  padding: 0 22px;
  border: 1px solid rgba(5, 5, 5, 0.16);
  background: transparent;
  color: #050505;
  font-family: "Courier New", monospace;
  font-size: 15px;
  line-height: 1;
}

@media (max-width: 1180px) {
  .hero-copy h1 {
    font-size: clamp(56px, 8vw, 78px);
  }

  .section-pad {
    padding: 96px 24px;
  }

  .measure-grid {
    gap: 28px;
  }

  .case-slider-figure {
    padding-inline: 72px;
  }

  .case-slider-figure--wide {
    padding-inline: 28px;
  }

  .capability-list p {
    font-size: 19px;
  }

  .footer-band > strong {
    font-size: clamp(108px, 16vw, 174px);
  }

  .cookie-banner {
    align-items: stretch;
    width: min(900px, calc(100% - 48px));
  }
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

  .measure-grid {
    --case-block-height: auto;
    gap: 24px;
  }

  .case-preview {
    min-height: 0;
  }

  .case-slider-figure {
    padding: 26px 72px 72px;
  }

  .case-slider-figure--wide {
    padding: 22px 28px 72px;
  }

  .clarity-section h2 {
    font-size: 49px;
  }

  .clarity-section {
    margin-top: 24px;
  }

  .journal-section {
    align-items: center;
  }

  .quote-section {
    gap: 36px;
  }

  .request-form {
    grid-template-columns: 1fr;
    padding: 24px;
  }

  .request-field--full {
    grid-column: auto;
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
    font-size: clamp(72px, 14vw, 106px);
  }
}

@media (max-width: 560px) {
  .hero-band {
    padding: 18px 16px 48px;
  }

  .topbar {
    align-items: flex-start;
    flex-direction: column;
    gap: 18px;
  }

  .brand {
    flex: 0 0 auto;
    font-size: 20px;
  }

  .desktop-nav {
    flex: none;
    gap: 10px 14px;
    justify-content: flex-start;
    font-size: 12px;
    line-height: 1.15;
  }

  .hero-copy {
    margin-top: 66px;
  }

  .hero-copy h1 {
    font-size: 38px;
    line-height: 1;
  }

  .hero-copy p {
    max-width: 320px;
    margin: 18px auto 0;
    font-size: 16px;
    line-height: 1.35;
  }

  .hero-actions {
    flex-direction: column;
    align-items: center;
    gap: 8px;
    margin-top: 18px;
  }

  .button {
    min-height: 44px;
    padding: 0 18px;
    font-size: 13px;
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
    padding: 58px 16px;
  }

  .clarity-section > h2,
  .measure-section > h2,
  .journal-list > h2,
  .cta-section > h2 {
    font-size: 32px;
    line-height: 1.14;
  }

  .capability-list {
    min-height: 0;
  }

  .case-preview,
  .case-slider,
  .case-preview-placeholder {
    min-height: 260px;
  }

  .case-slider-figure {
    padding: 18px 20px 64px;
  }

  .case-slider-image {
    width: min(100%, 240px);
  }

  .case-slider-figure--wide {
    padding: 16px 16px 60px;
  }

  .case-slider-image--wide {
    width: 100%;
    max-width: none;
    border-radius: 14px;
  }

  .case-slider-arrow {
    top: auto;
    bottom: 14px;
    width: 36px;
    height: 36px;
    font-size: 18px;
    transform: none;
  }

  .case-slider-arrow--prev {
    left: 14px;
  }

  .case-slider-arrow--next {
    right: 14px;
  }

  .case-selector {
    flex: 0 1 auto;
    align-items: flex-start;
    gap: 16px;
    padding: 22px 0;
  }

  .capability-list h3,
  .case-copy h2,
  .journal-list h2 {
    font-size: 24px;
  }

  .capability-list p,
  .principle-grid p,
  .case-copy p {
    font-size: 17px;
    line-height: 1.35;
  }

  .case-slider-dots {
    bottom: 16px;
    gap: 6px;
    max-width: calc(100% - 112px);
    flex-wrap: wrap;
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

  .journal-list h3,
  .about-list h3 {
    font-size: 21px;
    line-height: 1.18;
  }

  .service-plus {
    margin-left: 16px;
    font-size: 34px;
  }

  .service-description {
    margin: 14px 0 0;
    font-size: 15px;
    line-height: 1.6;
  }

  .request-form {
    gap: 16px;
    padding: 16px;
    border-radius: 16px;
  }

  .request-field span {
    font-size: 11px;
    line-height: 1.35;
  }

  .request-field input,
  .request-field select {
    min-height: 50px;
    padding: 0 14px;
    font-size: 16px;
  }

  .request-field textarea {
    padding: 14px;
    font-size: 16px;
  }

  .request-submit {
    justify-self: stretch;
  }

  .request-consent {
    font-size: 13px;
    line-height: 1.55;
  }

  .request-helper,
  .request-feedback {
    font-size: 13px;
    line-height: 1.55;
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
    gap: 18px;
    font-size: 15px;
  }

  .footer-meta {
    gap: 4px;
  }

  .footer-email {
    font-size: 13px;
  }

  .footer-inn {
    font-size: 12px;
  }

  .footer-nav nav {
    justify-content: flex-start;
    margin-left: 0;
    gap: 12px 18px;
  }

  .footer-image {
    height: 95px;
  }

  .footer-band > strong {
    font-size: clamp(48px, 18vw, 74px);
    line-height: 0.86;
  }

  .cookie-banner {
    right: 16px;
    bottom: 16px;
    left: 16px;
    flex-direction: column;
    width: calc(100% - 32px);
    padding: 18px;
    border-radius: 18px;
  }

  .cookie-banner__copy {
    max-width: none;
  }

  .cookie-banner__copy strong {
    font-size: 18px;
  }

  .cookie-banner__copy p {
    font-size: 14px;
  }

  .cookie-banner__actions {
    width: 100%;
  }

  .cookie-banner__button,
  .cookie-banner__button--secondary {
    width: 100%;
  }
}
</style>
