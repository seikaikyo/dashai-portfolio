'use client'

import { useI18n } from '@/lib/i18n'
import type { Category } from '@/data/types'
import { Input } from '@/components/ui/input'

export function FilterBar({
  categories,
  selectedCategory,
  onCategoryChange,
  searchQuery,
  onSearchChange,
}: {
  categories: Category[]
  selectedCategory: string | null
  onCategoryChange: (cat: string | null) => void
  searchQuery: string
  onSearchChange: (q: string) => void
}) {
  const { locale, t } = useI18n()

  return (
    <div className="flex gap-3 pt-12 pb-5 flex-wrap items-center">
      <div className="flex gap-1 flex-wrap">
        <button
          onClick={() => onCategoryChange(null)}
          className={`px-4 py-1.5 text-[0.8rem] rounded transition-all tracking-wide ${
            !selectedCategory
              ? 'text-primary border border-primary bg-primary/[0.08]'
              : 'text-muted-foreground border border-transparent hover:text-secondary-foreground'
          }`}
        >
          {t('filter.all')}
        </button>
        {categories.map(cat => (
          <button
            key={cat.id}
            onClick={() => onCategoryChange(cat.id === selectedCategory ? null : cat.id)}
            className={`px-4 py-1.5 text-[0.8rem] rounded transition-all tracking-wide ${
              selectedCategory === cat.id
                ? 'text-primary border border-primary bg-primary/[0.08]'
                : 'text-muted-foreground border border-transparent hover:text-secondary-foreground'
            }`}
          >
            {cat.label[locale]}
          </button>
        ))}
      </div>
      <Input
        value={searchQuery}
        onChange={e => onSearchChange(e.target.value)}
        placeholder={t('filter.search')}
        className="ml-auto max-w-[240px] h-8 text-sm bg-card border-border/50"
      />
    </div>
  )
}
