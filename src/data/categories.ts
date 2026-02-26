import type { Category } from '../types'

export const categories: Category[] = [
  {
    id: 'industry',
    label: { 'zh-TW': '產業經歷', en: 'Industry', ja: '産業経験' },
    color: '#00b4d8',
    icon: 'pi-building'
  },
  {
    id: 'trading',
    label: { 'zh-TW': '交易金融', en: 'Trading', ja: 'トレーディング' },
    color: '#f59e0b',
    icon: 'pi-chart-line'
  },
  {
    id: 'personal',
    label: { 'zh-TW': '個人作品', en: 'Personal', ja: '個人開発' },
    color: '#fbbf24',
    icon: 'pi-star'
  },
  {
    id: 'devtools',
    label: { 'zh-TW': '開發工具', en: 'DevTools', ja: '開発ツール' },
    color: '#a78bfa',
    icon: 'pi-wrench'
  },
  {
    id: 'learning',
    label: { 'zh-TW': '學習專案', en: 'Learning', ja: '学習' },
    color: '#67e8f9',
    icon: 'pi-book'
  }
]

export const categoryMap = Object.fromEntries(
  categories.map(c => [c.id, c])
)
