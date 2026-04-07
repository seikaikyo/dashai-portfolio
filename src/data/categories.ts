import type { Category } from './types'

export const categories: Category[] = [
  {
    id: 'industry',
    label: { 'zh-TW': '產業經歷', en: 'Industry', ja: '産業実績' },
    color: '#6a9ab8',
  },
  {
    id: 'trading',
    label: { 'zh-TW': '交易金融', en: 'Trading', ja: '金融取引' },
    color: '#c8a84e',
  },
  {
    id: 'devtools',
    label: { 'zh-TW': '開發工具', en: 'DevTools', ja: '開発ツール' },
    color: '#9a7ab8',
  },
  {
    id: 'personal',
    label: { 'zh-TW': '個人作品', en: 'Personal', ja: '個人開発' },
    color: '#b8906a',
  },
  {
    id: 'learning',
    label: { 'zh-TW': '學習專案', en: 'Learning', ja: '学習' },
    color: '#6aaa8a',
  },
]
