<script setup lang="ts">
import { computed } from 'vue'
import { projects } from '../data/projects'
import { categories } from '../data/categories'
import { techTags } from '../data/tech-tags'
import { useI18n } from '../composables/useI18n'

const { t } = useI18n()

const usedTags = new Set(projects.flatMap(p => p.tags))
const frameworkCount = techTags.filter(t => usedTags.has(t.id)).length

const stats = computed(() => [
  { value: String(projects.length), label: t('stats.projects') },
  { value: String(categories.length), label: t('stats.categories') },
  { value: `${frameworkCount}+`, label: t('stats.techStacks') }
])
</script>

<template>
  <section class="stats">
    <div class="container">
      <div class="stats__grid">
        <div v-for="s in stats" :key="s.label" class="stats__item">
          <span class="stats__value">{{ s.value }}</span>
          <span class="stats__label">{{ s.label }}</span>
        </div>
      </div>
      <p class="stats__notice">{{ t('stats.nda') }}</p>
    </div>
  </section>
</template>

<style scoped>
.stats {
  padding: var(--sp-8) 0;
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
}

.stats__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--sp-6);
  text-align: center;
}

.stats__item {
  display: flex;
  flex-direction: column;
  gap: var(--sp-1);
}

.stats__value {
  font-size: 2rem;
  font-weight: 800;
  font-family: 'JetBrains Mono', monospace;
  color: var(--brand);
}

.stats__label {
  font-size: 0.875rem;
  color: var(--text-secondary);
  text-transform: uppercase;
  letter-spacing: 1px;
}

.stats__notice {
  margin-top: var(--sp-6);
  text-align: center;
  font-size: 0.8rem;
  color: var(--text-muted);
  letter-spacing: 0.3px;
}

@media (max-width: 768px) {
  .stats__grid {
    grid-template-columns: repeat(2, 1fr);
    gap: var(--sp-6) var(--sp-4);
  }
  .stats__value {
    font-size: 1.5rem;
  }
}
</style>
