'use client'

import { useI18n } from '@/lib/i18n'

export function StatsBar({
  projectCount,
  categoryCount,
  techCount,
}: {
  projectCount: number
  categoryCount: number
  techCount: number
}) {
  const { t } = useI18n()

  const stats = [
    { value: projectCount, label: t('stats.projects') },
    { value: categoryCount, label: t('stats.categories') },
    { value: `${techCount}+`, label: t('stats.techStacks') },
  ]

  return (
    <section className="flex gap-16 py-12">
      {stats.map(s => (
        <div key={s.label}>
          <div className="font-mono text-5xl font-semibold text-primary leading-none">
            {s.value}
          </div>
          <div className="text-[0.65rem] text-muted-foreground uppercase tracking-[3px] mt-2">
            {s.label}
          </div>
        </div>
      ))}
    </section>
  )
}
