<script setup lang="ts">
import { ref, computed } from 'vue'
import HeroSection from './components/HeroSection.vue'
import StatsBar from './components/StatsBar.vue'
import FilterBar from './components/FilterBar.vue'
import ProjectGrid from './components/ProjectGrid.vue'
import TechStackSection from './components/TechStackSection.vue'
import SiteFooter from './components/SiteFooter.vue'
import { projects } from './data/projects'
import { useI18n } from './composables/useI18n'

const { locale } = useI18n()

const selectedCategory = ref<string | null>(null)
const searchQuery = ref('')

const filteredProjects = computed(() => {
  let result = projects

  if (selectedCategory.value) {
    result = result.filter(p => p.category === selectedCategory.value)
  }

  const q = searchQuery.value.trim().toLowerCase()
  if (q) {
    result = result.filter(p =>
      p.name[locale.value].toLowerCase().includes(q) ||
      p.description[locale.value].toLowerCase().includes(q) ||
      p.tags.some(t => t.toLowerCase().includes(q))
    )
  }

  return result
})
</script>

<template>
  <HeroSection />
  <StatsBar />
  <FilterBar
    v-model:selectedCategory="selectedCategory"
    v-model:searchQuery="searchQuery"
  />
  <ProjectGrid :projects="filteredProjects" />
  <TechStackSection />
  <SiteFooter />
</template>
