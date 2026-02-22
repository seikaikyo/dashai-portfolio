<script setup lang="ts">
import Tag from 'primevue/tag'
import { computed } from 'vue'
import { projects } from '../data/projects'
import { techTags } from '../data/tech-tags'

const techUsage = computed(() => {
  const counts: Record<string, number> = {}
  for (const p of projects) {
    for (const t of p.tags) {
      counts[t] = (counts[t] || 0) + 1
    }
  }
  return techTags
    .map(t => ({ ...t, count: counts[t.id] || 0 }))
    .filter(t => t.count > 0)
    .sort((a, b) => b.count - a.count)
})
</script>

<template>
  <section class="tech">
    <div class="container">
      <h2 class="tech__title">Tech Stack</h2>
      <div class="tech__grid">
        <div
          v-for="t in techUsage"
          :key="t.id"
          class="tech__item"
        >
          <Tag :value="t.label" severity="secondary" />
          <span class="tech__count">{{ t.count }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.tech {
  padding: var(--sp-12) 0;
  border-top: 1px solid var(--border);
}

.tech__title {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: var(--sp-8);
  text-align: center;
}

.tech__grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: var(--sp-3);
}

.tech__item {
  display: flex;
  align-items: center;
  gap: var(--sp-2);
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  padding: var(--sp-2) var(--sp-3);
}

.tech__count {
  font-size: 0.8rem;
  font-family: 'JetBrains Mono', monospace;
  color: var(--brand);
  font-weight: 500;
}
</style>
