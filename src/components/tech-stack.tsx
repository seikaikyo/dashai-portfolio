'use client'

import { useI18n } from '@/lib/i18n'
import type { TechTag } from '@/data/types'

export function TechStack({ items }: { items: (TechTag & { count: number })[] }) {
  const { t } = useI18n()

  return (
    <section className="py-14">
      <h2 className="text-[0.65rem] uppercase tracking-[4px] text-muted-foreground mb-7">
        {t('tech.title')}
      </h2>
      <div className="flex flex-wrap gap-1.5">
        {items.map(item => (
          <div
            key={item.id}
            className="text-[0.8rem] text-secondary-foreground px-4 py-[7px] border border-border/40 rounded transition-all hover:border-border hover:text-foreground"
          >
            {item.label}
            <span className="font-mono text-[0.7rem] text-primary ml-1.5 opacity-70">
              {item.count}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
