'use client'

import { useState, useMemo } from 'react'
import { useI18n } from '@/lib/i18n'
import { projects } from '@/data/projects'
import { categories } from '@/data/categories'
import { techTags, techTagMap } from '@/data/tech-tags'
import { Hero } from '@/components/hero'
import { StatsBar } from '@/components/stats-bar'
import { FeaturedProject } from '@/components/featured-project'
import { FilterBar } from '@/components/filter-bar'
import { ProjectList } from '@/components/project-list'
import { TechStack } from '@/components/tech-stack'
import { SiteFooter } from '@/components/site-footer'
import { BackToTop } from '@/components/back-to-top'

export default function Home() {
  const { locale } = useI18n()
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState('')

  const filteredProjects = useMemo(() => {
    let result = projects
    if (selectedCategory) {
      result = result.filter(p => p.category === selectedCategory)
    }
    const q = searchQuery.trim().toLowerCase()
    if (q) {
      result = result.filter(p =>
        p.name[locale].toLowerCase().includes(q) ||
        p.description[locale].toLowerCase().includes(q) ||
        p.tags.some(t => {
          const tag = techTagMap[t]
          return tag?.label.toLowerCase().includes(q)
        })
      )
    }
    return result
  }, [selectedCategory, searchQuery, locale])

  const techUsage = useMemo(() => {
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
  }, [])

  const featured = projects.find(p => p.id === 'smart-factory-demo')

  return (
    <div className="max-w-[920px] mx-auto px-8">
      <Hero />
      <div className="divider" />
      <main>
        <StatsBar
          projectCount={projects.length}
          categoryCount={categories.length}
          techCount={techUsage.length}
        />
        <div className="divider" />
        {featured && <FeaturedProject project={featured} />}
        <div className="divider" />
        <FilterBar
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
        />
        <ProjectList projects={filteredProjects} />
        <div className="divider" />
        <TechStack items={techUsage} />
      </main>
      <SiteFooter />
      <BackToTop />
    </div>
  )
}
