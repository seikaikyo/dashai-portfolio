export interface TechTag {
  id: string
  label: string
  color?: string
}

export interface Category {
  id: string
  label: string
  color: string
  icon: string
}

export type ProjectScale = 'enterprise' | 'production' | 'internal' | 'personal' | 'prototype'

export interface Project {
  id: string
  name: string
  description: string
  category: string
  tags: string[]
  year: number
  scale: ProjectScale
  url?: string
}
