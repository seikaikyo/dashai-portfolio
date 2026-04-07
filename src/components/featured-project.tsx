'use client'

import { useI18n } from '@/lib/i18n'
import type { Project } from '@/data/types'

export function FeaturedProject({ project }: { project: Project }) {
  const { locale, t } = useI18n()

  const metrics = [
    { value: '54', label: 'CRUD APIs' },
    { value: '9', label: 'Stages' },
    { value: '15', label: 'AI Tools' },
    { value: '3', label: 'Languages' },
  ]

  return (
    <section className="py-14">
      <div className="text-[0.65rem] text-blue-jp-light uppercase tracking-[3px] font-semibold mb-4">
        {t('featured.eyebrow')}
      </div>
      <h2 className="font-serif text-3xl font-bold tracking-tight mb-3">
        {project.name[locale]}
      </h2>
      <p className="text-secondary-foreground max-w-[620px] leading-[1.9] text-[0.95rem]">
        {t('featured.desc')}
      </p>
      <div className="flex gap-10 mt-7">
        {metrics.map(m => (
          <div key={m.label}>
            <div className="font-mono text-2xl font-semibold text-primary">{m.value}</div>
            <div className="text-[0.6rem] text-muted-foreground uppercase tracking-[2px] mt-0.5">
              {m.label}
            </div>
          </div>
        ))}
      </div>
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 mt-7 px-7 py-3 border border-primary text-primary text-[0.8rem] font-medium tracking-[1px] rounded transition-all hover:bg-primary hover:text-background"
      >
        {t('featured.cta')} &rarr;
      </a>
    </section>
  )
}
