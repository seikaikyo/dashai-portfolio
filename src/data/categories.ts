import type { Category } from '../types'

export const categories: Category[] = [
  { id: 'manufacturing', label: '製造執行系統', color: '#00b4d8', icon: 'pi-cog' },
  { id: 'ai-vision', label: 'AI 視覺系統', color: '#c084fc', icon: 'pi-eye' },
  { id: 'warehouse', label: '倉儲物流', color: '#34d399', icon: 'pi-truck' },
  { id: 'trading', label: '交易金融', color: '#f59e0b', icon: 'pi-chart-line' },
  { id: 'esg', label: '環保合規', color: '#22c55e', icon: 'pi-globe' },
  { id: 'quality', label: '品質管理', color: '#f97316', icon: 'pi-check-circle' },
  { id: 'hr-security', label: '人資/門禁', color: '#ef4444', icon: 'pi-shield' },
  { id: 'platform', label: '平台基礎建設', color: '#3b82f6', icon: 'pi-server' },
  { id: 'devtools', label: '開發工具', color: '#a78bfa', icon: 'pi-wrench' },
  { id: 'personal', label: '個人作品', color: '#fbbf24', icon: 'pi-star' },
  { id: 'learning', label: '學習專案', color: '#67e8f9', icon: 'pi-book' },
  { id: 'recruit', label: '招募測試', color: '#fb923c', icon: 'pi-users' }
]

export const categoryMap = Object.fromEntries(
  categories.map(c => [c.id, c])
)
