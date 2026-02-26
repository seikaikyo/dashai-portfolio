<script setup lang="ts">
import Tag from 'primevue/tag'
import type { Project } from '../types'
import { categoryMap } from '../data/categories'
import { techTagMap } from '../data/tech-tags'
import { useI18n } from '../composables/useI18n'

const { locale, t } = useI18n()

const props = defineProps<{
  project: Project
}>()

const category = categoryMap[props.project.category]
</script>

<template>
  <article
    class="card"
    :style="{ '--cat-color': category?.color }"
  >
    <div class="card__header">
      <span class="card__category">{{ category?.label[locale] }}</span>
    </div>

    <h3 class="card__title">
      <a v-if="project.url" :href="project.url" target="_blank" rel="noopener">
        {{ project.name[locale] }}
      </a>
      <span v-else>{{ project.name[locale] }}</span>
    </h3>

    <p class="card__desc">{{ project.description[locale] }}</p>

    <div class="card__tags">
      <Tag
        v-for="tagId in project.tags"
        :key="tagId"
        :value="techTagMap[tagId]?.label ?? tagId"
        severity="secondary"
      />
    </div>

    <div class="card__footer">
      <span class="card__year">{{ project.year }}</span>
      <span class="card__dot"></span>
      <span class="card__scale">{{ t(`scale.${project.scale}`) }}</span>
    </div>
  </article>
</template>

<style scoped>
.card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-left: 3px solid var(--cat-color, var(--brand));
  border-radius: var(--radius-md);
  padding: var(--sp-6);
  display: flex;
  flex-direction: column;
  gap: var(--sp-3);
  transition: box-shadow var(--transition), border-color var(--transition);
}

.card:hover {
  box-shadow: var(--shadow-hover);
  border-color: var(--cat-color, var(--brand));
}

.card__header {
  display: flex;
  align-items: center;
}

.card__category {
  font-size: 0.75rem;
  color: var(--cat-color, var(--text-secondary));
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.card__title {
  font-size: 1.125rem;
  font-weight: 700;
  line-height: 1.3;
}

.card__title a {
  color: var(--text-primary);
  text-decoration: none;
  transition: color var(--transition);
}

.card__title a:hover {
  color: var(--brand);
}

.card__desc {
  font-size: 0.875rem;
  color: var(--text-secondary);
  line-height: 1.5;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.card__tags {
  display: flex;
  flex-wrap: wrap;
  gap: var(--sp-1);
  margin-top: auto;
}

.card__tags :deep(.p-tag) {
  font-size: 0.7rem;
  padding: 2px 8px;
}

.card__footer {
  display: flex;
  align-items: center;
  gap: var(--sp-2);
  font-size: 0.8rem;
  color: var(--text-muted);
  padding-top: var(--sp-2);
  border-top: 1px solid var(--border);
}

.card__dot {
  width: 3px;
  height: 3px;
  border-radius: 50%;
  background: var(--text-muted);
}
</style>
