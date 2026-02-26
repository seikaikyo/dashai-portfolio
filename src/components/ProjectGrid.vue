<script setup lang="ts">
import type { Project } from '../types'
import ProjectCard from './ProjectCard.vue'
import { useI18n } from '../composables/useI18n'

const { t } = useI18n()

defineProps<{
  projects: Project[]
}>()
</script>

<template>
  <section class="grid-section">
    <div class="container">
      <p v-if="projects.length === 0" class="grid-section__empty">
        {{ t('filter.noResults') }}
      </p>
      <div v-else class="grid-section__grid">
        <ProjectCard
          v-for="p in projects"
          :key="p.id"
          :project="p"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
.grid-section {
  padding-bottom: var(--sp-12);
}

.grid-section__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--sp-6);
}

.grid-section__empty {
  text-align: center;
  color: var(--text-muted);
  padding: var(--sp-12) 0;
  font-size: 1rem;
}

@media (max-width: 1024px) {
  .grid-section__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .grid-section__grid {
    grid-template-columns: 1fr;
  }
}
</style>
