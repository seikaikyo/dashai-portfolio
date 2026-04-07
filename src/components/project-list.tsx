'use client'

import { useI18n } from '@/lib/i18n'
import { categories } from '@/data/categories'
import { techTagMap } from '@/data/tech-tags'
import { Badge } from '@/components/ui/badge'
import type { Project } from '@/data/types'

const catMap = Object.fromEntries(categories.map(c => [c.id, c]))

export function ProjectList({ projects }: { projects: Project[] }) {
  const { locale, t } = useI18n()

  if (projects.length === 0) {
    return (
      <div className="py-20 text-center text-muted-foreground text-sm">
        {t('filter.noResults')}
      </div>
    )
  }

  return (
    <div className="pb-14">
      {projects.map((project, i) => {
        const cat = catMap[project.category]
        const narrative = project.narrative?.[locale]

        return (
          <div
            key={project.id}
            className={`grid grid-cols-[180px_1fr] gap-8 py-6 border-b border-border/40 items-start transition-all hover:pl-1.5 max-md:grid-cols-1 max-md:gap-1.5 ${
              i === 0 ? 'border-t border-t-border/40' : ''
            }`}
          >
            <div>
              <div className="font-mono text-[0.8rem] text-muted-foreground">
                {project.year}
              </div>
              {cat && (
                <div
                  className="text-[0.65rem] font-semibold uppercase tracking-[2px] mt-1"
                  style={{ color: cat.color }}
                >
                  {cat.label[locale]}
                </div>
              )}
              <div className="text-[0.65rem] text-muted-foreground mt-0.5 italic">
                {t(`scale.${project.scale}`)}
              </div>
            </div>
            <div>
              <div className="text-[1.05rem] font-semibold mb-1.5">
                {project.url ? (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground no-underline transition-colors hover:text-primary"
                  >
                    {project.name[locale]}
                  </a>
                ) : (
                  project.name[locale]
                )}
              </div>
              <p className="text-[0.85rem] text-secondary-foreground leading-[1.8]">
                {narrative || project.description[locale]}
              </p>
              <div className="flex flex-wrap gap-1 mt-2.5">
                {project.tags.map(tagId => {
                  const tag = techTagMap[tagId]
                  if (!tag) return null
                  return (
                    <Badge
                      key={tagId}
                      variant="outline"
                      className="text-[0.65rem] px-2.5 py-0.5 font-normal text-muted-foreground border-border/50 bg-muted/50"
                    >
                      {tag.label}
                    </Badge>
                  )
                })}
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
