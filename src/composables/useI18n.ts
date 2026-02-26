import { ref } from 'vue'
import type { Locale } from '../types'
import { zhTW } from '../data/locales/zh-TW'
import { en } from '../data/locales/en'
import { ja } from '../data/locales/ja'

type Messages = Record<string, string | Record<string, string>>

const messages: Record<Locale, Messages> = {
  'zh-TW': zhTW,
  en,
  ja
}

function detectLocale(): Locale {
  const saved = localStorage.getItem('dashai-locale')
  if (saved && saved in messages) return saved as Locale
  const lang = navigator.language
  if (lang.startsWith('ja')) return 'ja'
  if (lang.startsWith('zh')) return 'zh-TW'
  return 'en'
}

const locale = ref<Locale>(detectLocale())

export function useI18n() {
  function t(key: string): string {
    const parts = key.split('.')
    const msgs = messages[locale.value] as Record<string, any>
    let result: any = msgs
    for (const part of parts) {
      result = result?.[part]
    }
    return typeof result === 'string' ? result : key
  }

  function setLocale(lang: Locale) {
    locale.value = lang
    localStorage.setItem('dashai-locale', lang)
    document.documentElement.lang = lang === 'zh-TW' ? 'zh-Hant' : lang
  }

  return { locale, t, setLocale }
}
