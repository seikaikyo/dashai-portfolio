'use client'

import { createContext, useContext, useState, useCallback, ReactNode } from 'react'

export type Locale = 'zh-TW' | 'en' | 'ja'

const messages: Record<Locale, Record<string, Record<string, string>>> = {
  en: {
    hero: {
      tagline: 'Forward Deployed Engineer | Vue 3 / Angular / React / FastAPI / Go',
    },
    featured: {
      eyebrow: 'Featured',
      desc: 'A working replica of the manufacturing systems I built over the past two and a half years. Nine production stages from order intake to shipment, each with full CRUD. The AI panel calls APIs directly to create work orders and schedule shipments. The disaster simulation traces cascading impacts across departments. Three languages because the original environment used all three daily.',
      cta: 'Open the demo',
    },
    stats: {
      projects: 'Projects',
      categories: 'Categories',
      techStacks: 'Tech Stacks',
      nda: 'Enterprise projects are protected under NDA. Live demos available on request.',
    },
    filter: {
      all: 'All',
      search: 'Search projects...',
      noResults: 'No projects match the current filter.',
    },
    tech: { title: 'What I use' },
    scale: {
      enterprise: 'Enterprise',
      production: 'Production',
      internal: 'Internal',
      personal: 'Personal',
      prototype: 'Prototype',
    },
  },
  'zh-TW': {
    hero: {
      tagline: 'Forward Deployed Engineer | Vue 3 / Angular / React / FastAPI / Go',
    },
    featured: {
      eyebrow: '代表作品',
      desc: '過去兩年半建置的製造系統的完整重現。九個生產階段，從接單到出貨，每一步都有完整 CRUD。AI 面板直接呼叫 API 建立工單、排程出貨。災害模擬追蹤衝擊在部門間的連鎖擴散。三語介面，因為原始環境每天三種語言並用。',
      cta: '開啟 Demo',
    },
    stats: {
      projects: '專案',
      categories: '分類',
      techStacks: '技術棧',
      nda: '企業專案受 NDA 保護，如需展示請另行聯繫。',
    },
    filter: {
      all: '全部',
      search: '搜尋專案...',
      noResults: '沒有符合條件的專案。',
    },
    tech: { title: '用了什麼' },
    scale: {
      enterprise: '企業級',
      production: '生產環境',
      internal: '內部系統',
      personal: '個人專案',
      prototype: '原型',
    },
  },
  ja: {
    hero: {
      tagline: 'Forward Deployed Engineer | Vue 3 / Angular / React / FastAPI / Go',
    },
    featured: {
      eyebrow: '代表作品',
      desc: '過去2年半で構築した製造システムの完全な再現です。受注から出荷まで9つの生産段階、各段階にフルCRUD。AIパネルはAPIを直接呼び出し、作業指示の作成や出荷スケジューリングを実行します。災害シミュレーションは部門間の連鎖的影響を追跡。三言語対応は、元の現場が毎日三言語を使っていたため。',
      cta: 'デモを開く',
    },
    stats: {
      projects: 'プロジェクト',
      categories: 'カテゴリ',
      techStacks: '技術スタック',
      nda: '企業プロジェクトはNDAにより保護されています。デモをご希望の方はお問い合わせください。',
    },
    filter: {
      all: '全て',
      search: 'プロジェクト検索...',
      noResults: '条件に一致するプロジェクトがありません。',
    },
    tech: { title: '使っているもの' },
    scale: {
      enterprise: 'エンタープライズ',
      production: 'プロダクション',
      internal: '社内システム',
      personal: '個人開発',
      prototype: 'プロトタイプ',
    },
  },
}

type I18nContextType = {
  locale: Locale
  setLocale: (l: Locale) => void
  t: (key: string) => string
}

const I18nContext = createContext<I18nContextType>({
  locale: 'en',
  setLocale: () => {},
  t: (k) => k,
})

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('dashai-locale')
      if (saved && saved in messages) return saved as Locale
    }
    return 'en'
  })

  const setLocale = useCallback((l: Locale) => {
    setLocaleState(l)
    localStorage.setItem('dashai-locale', l)
    document.documentElement.lang = l === 'zh-TW' ? 'zh-Hant' : l
  }, [])

  const t = useCallback((key: string) => {
    const [section, field] = key.split('.')
    return messages[locale]?.[section]?.[field] ?? key
  }, [locale])

  return (
    <I18nContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </I18nContext.Provider>
  )
}

export function useI18n() {
  return useContext(I18nContext)
}
