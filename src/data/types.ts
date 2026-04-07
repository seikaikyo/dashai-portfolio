export type Locale = 'zh-TW' | 'en' | 'ja'
export type LocalizedString = Record<Locale, string>
export type ProjectScale = 'enterprise' | 'production' | 'internal' | 'personal' | 'prototype'

export interface TechTag {
  id: string
  label: string
}

export interface Category {
  id: string
  label: LocalizedString
  color: string
}

export interface Project {
  id: string
  name: LocalizedString
  description: LocalizedString
  narrative?: LocalizedString
  category: string
  tags: string[]
  year: number
  scale: ProjectScale
  url?: string
  screenshot?: string
  video?: Record<string, string>
}
