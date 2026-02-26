export interface TechTag {
  id: string
  label: string
  color?: string
}

export type Locale = 'zh-TW' | 'en' | 'ja'

export type LocalizedString = Record<Locale, string>

export interface Category {
  id: string
  label: LocalizedString
  color: string
  icon: string
}

export type ProjectScale = 'enterprise' | 'production' | 'internal' | 'personal' | 'prototype'

export interface Project {
  id: string
  name: LocalizedString
  description: LocalizedString
  category: string
  tags: string[]
  year: number
  scale: ProjectScale
  url?: string
}
