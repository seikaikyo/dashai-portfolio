<script setup lang="ts">
import Button from 'primevue/button'
import ButtonGroup from 'primevue/buttongroup'
import { useI18n } from '../composables/useI18n'

const { locale, t, setLocale } = useI18n()
</script>

<template>
  <section class="hero">
    <div class="container">
      <div class="hero__lang">
        <ButtonGroup>
          <Button
            label="中"
            :severity="locale === 'zh-TW' ? undefined : 'secondary'"
            size="small"
            @click="setLocale('zh-TW')"
          />
          <Button
            label="EN"
            :severity="locale === 'en' ? undefined : 'secondary'"
            size="small"
            @click="setLocale('en')"
          />
          <Button
            label="日"
            :severity="locale === 'ja' ? undefined : 'secondary'"
            size="small"
            @click="setLocale('ja')"
          />
        </ButtonGroup>
      </div>
      <h1 class="hero__brand">Dash<span class="hero__accent">AI</span></h1>
      <p class="hero__tagline">{{ t('hero.tagline') }}</p>
    </div>
  </section>
</template>

<style scoped>
.hero {
  padding: 80px 0 48px;
  text-align: center;
}

.hero__lang {
  display: flex;
  justify-content: flex-end;
  margin-bottom: var(--sp-6);
}

.hero__brand {
  font-size: 4rem;
  font-weight: 800;
  letter-spacing: -2px;
  line-height: 1.1;
}

.hero__accent {
  color: var(--brand);
}

.hero__tagline {
  margin-top: var(--sp-4);
  font-size: 1.25rem;
  color: var(--text-secondary);
  font-weight: 400;
  letter-spacing: 0.5px;
}

@media (max-width: 768px) {
  .hero {
    padding: 48px 0 32px;
  }
  .hero__brand {
    font-size: 2.5rem;
  }
  .hero__tagline {
    font-size: 1rem;
  }
}
</style>
