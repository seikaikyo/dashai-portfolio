<script setup lang="ts">
import { computed } from 'vue'
import Select from 'primevue/select'
import InputText from 'primevue/inputtext'
import { categories } from '../data/categories'
import { useI18n } from '../composables/useI18n'

const { locale, t } = useI18n()

const props = defineProps<{
  selectedCategory: string | null
  searchQuery: string
}>()

const emit = defineEmits<{
  'update:selectedCategory': [value: string | null]
  'update:searchQuery': [value: string]
}>()

const categoryOptions = computed(() => [
  { id: null, label: t('filter.allCategories') },
  ...categories.map(c => ({ id: c.id, label: c.label[locale.value] }))
])
</script>

<template>
  <section class="filter">
    <div class="container">
      <div class="filter__row">
        <Select
          :modelValue="props.selectedCategory"
          @update:modelValue="emit('update:selectedCategory', $event)"
          :options="categoryOptions"
          optionLabel="label"
          optionValue="id"
          :placeholder="t('filter.allCategories')"
          class="filter__select"
        />
        <InputText
          :modelValue="props.searchQuery"
          @update:modelValue="emit('update:searchQuery', $event ?? '')"
          :placeholder="t('filter.searchPlaceholder')"
          class="filter__search"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
.filter {
  padding: var(--sp-8) 0 var(--sp-6);
}

.filter__row {
  display: flex;
  gap: var(--sp-3);
  align-items: center;
}

.filter__select {
  min-width: 200px;
}

.filter__search {
  flex: 1;
  max-width: 320px;
}

@media (max-width: 768px) {
  .filter__row {
    flex-direction: column;
    align-items: stretch;
  }
  .filter__select {
    min-width: unset;
  }
  .filter__search {
    max-width: unset;
  }
}
</style>
