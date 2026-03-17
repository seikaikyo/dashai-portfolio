<script setup lang="ts">
import { useI18n } from '../composables/useI18n'

const { t } = useI18n()

const metrics = [
  { value: '54', key: 'featured.m1' },
  { value: '9', key: 'featured.m2' },
  { value: '15', key: 'featured.m3' },
  { value: '3', key: 'featured.m4' },
]

const highlights = [
  { icon: 'pi pi-comment', titleKey: 'featured.hl1Title', descKey: 'featured.hl1Desc' },
  { icon: 'pi pi-shield', titleKey: 'featured.hl2Title', descKey: 'featured.hl2Desc' },
  { icon: 'pi pi-sitemap', titleKey: 'featured.hl3Title', descKey: 'featured.hl3Desc' },
]

const tags = ['Vue 3', 'PrimeVue', 'TypeScript', 'FastAPI', 'SQLModel', 'Neon PostgreSQL', 'Claude AI', 'Chart.js', 'vue-i18n']
</script>

<template>
  <section class="featured">
    <div class="container">
      <div class="featured__badge">{{ t('featured.badge') }}</div>
      <h2 class="featured__title">Smart Factory Demo</h2>
      <p class="featured__tagline">{{ t('featured.tagline') }}</p>

      <!-- Metrics -->
      <div class="featured__metrics">
        <div v-for="m in metrics" :key="m.key" class="metric">
          <span class="metric__value">{{ m.value }}</span>
          <span class="metric__label">{{ t(m.key) }}</span>
        </div>
      </div>

      <!-- Highlights -->
      <div class="featured__highlights">
        <div v-for="hl in highlights" :key="hl.titleKey" class="highlight">
          <i :class="hl.icon" class="highlight__icon" />
          <div class="highlight__text">
            <div class="highlight__name">{{ t(hl.titleKey) }}</div>
            <div class="highlight__desc">{{ t(hl.descKey) }}</div>
          </div>
        </div>
      </div>

      <!-- Tags -->
      <div class="featured__tags">
        <span v-for="tag in tags" :key="tag" class="tag-pill">{{ tag }}</span>
      </div>

      <!-- CTA -->
      <a
        href="https://factory.dashai.dev/"
        target="_blank"
        rel="noopener noreferrer"
        class="featured__cta"
      >
        <i class="pi pi-external-link" />
        {{ t('featured.cta') }}
      </a>
    </div>
  </section>
</template>

<style scoped>
.featured {
  padding: var(--sp-8) 0;
}

.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 var(--sp-6);
}

.featured__badge {
  display: inline-block;
  font-size: 0.68rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--brand);
  background: rgba(0, 180, 216, 0.12);
  border: 1px solid rgba(0, 180, 216, 0.25);
  border-radius: var(--radius-sm);
  padding: 3px 10px;
  margin-bottom: var(--sp-4);
}

.featured__title {
  font-size: 2rem;
  font-weight: 800;
  color: var(--text-primary);
  margin: 0 0 var(--sp-2) 0;
  letter-spacing: -0.5px;
}

.featured__tagline {
  font-size: 1rem;
  color: var(--text-secondary);
  line-height: 1.6;
  margin: 0 0 var(--sp-6) 0;
  max-width: 640px;
}

/* Metrics */
.featured__metrics {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--sp-3);
  margin-bottom: var(--sp-6);
}

.metric {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  padding: var(--sp-4) var(--sp-3);
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.metric__value {
  font-size: 1.75rem;
  font-weight: 800;
  color: var(--brand);
}

.metric__label {
  font-size: 0.7rem;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

/* Highlights */
.featured__highlights {
  display: flex;
  flex-direction: column;
  gap: var(--sp-3);
  margin-bottom: var(--sp-6);
}

.highlight {
  display: flex;
  align-items: flex-start;
  gap: var(--sp-4);
  padding: var(--sp-4);
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  transition: border-color var(--transition);
}

.highlight:hover {
  border-color: rgba(0, 180, 216, 0.3);
}

.highlight__icon {
  font-size: 1.25rem;
  color: var(--brand);
  margin-top: 2px;
  flex-shrink: 0;
}

.highlight__name {
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 2px;
}

.highlight__desc {
  font-size: 0.8rem;
  color: var(--text-secondary);
  line-height: 1.5;
}

/* Tags */
.featured__tags {
  display: flex;
  flex-wrap: wrap;
  gap: var(--sp-2);
  margin-bottom: var(--sp-6);
}

.tag-pill {
  font-size: 0.72rem;
  padding: 3px 10px;
  background: var(--bg-surface);
  border: 1px solid var(--border);
  border-radius: 20px;
  color: var(--text-secondary);
}

/* CTA */
.featured__cta {
  display: inline-flex;
  align-items: center;
  gap: var(--sp-2);
  padding: var(--sp-3) var(--sp-6);
  background: var(--brand);
  color: #0a0a0f;
  border-radius: var(--radius-md);
  font-size: 0.9rem;
  font-weight: 600;
  text-decoration: none;
  transition: transform var(--transition), box-shadow var(--transition);
}

.featured__cta:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 16px rgba(0, 180, 216, 0.3);
}

.featured__cta i {
  font-size: 0.85rem;
}

@media (max-width: 768px) {
  .featured__title {
    font-size: 1.5rem;
  }

  .featured__metrics {
    grid-template-columns: repeat(2, 1fr);
  }

  .highlight {
    flex-direction: column;
    gap: var(--sp-2);
  }
}
</style>
