'use client'

import { useI18n, type Locale } from '@/lib/i18n'

const locales: { label: string; value: Locale }[] = [
  { label: 'EN', value: 'en' },
  { label: '中', value: 'zh-TW' },
  { label: '日', value: 'ja' },
]

const heroText: Record<Locale, { statement: string; highlight: string; sub: string }> = {
  en: {
    statement: 'Solving problems at the point where ',
    highlight: 'people do the work',
    sub: "25 years of going to where operations happen, understanding how people actually work, and building systems that fit their workflow. Manufacturing floors, equipment rooms, shipping docks. The context changes; the method stays the same. Most of what I've built is now open-source.",
  },
  'zh-TW': {
    statement: '在人們工作的地方，',
    highlight: '解決實際的問題',
    sub: '25 年來做的事情是一樣的：到現場去，理解人們實際的工作方式，做出符合他們流程的系統。產線、設備間、出貨區。場景不同，方法相同。大部分做過的東西現在都開源了。',
  },
  ja: {
    statement: '現場で働く人のそばで、',
    highlight: '実際の課題を解く',
    sub: '25年間やってきたことは同じです。現場に行き、人がどう働いているかを理解し、そのワークフローに合うシステムを作る。製造ライン、設備室、出荷場。文脈は変わっても、方法は変わりません。作ったものの多くはオープンソースにしています。',
  },
}

export function Hero() {
  const { locale, setLocale } = useI18n()
  const text = heroText[locale]

  return (
    <section className="pt-24 pb-16">
      <div className="flex justify-between items-center mb-14">
        <div className="text-sm font-medium tracking-[4px] uppercase text-muted-foreground">
          Dash<span className="text-primary">AI</span>
        </div>
        <div className="flex gap-0.5">
          {locales.map(l => (
            <button
              key={l.value}
              onClick={() => setLocale(l.value)}
              className={`px-3.5 py-1.5 text-xs rounded transition-all ${
                locale === l.value
                  ? 'text-foreground bg-card'
                  : 'text-muted-foreground hover:text-secondary-foreground'
              }`}
            >
              {l.label}
            </button>
          ))}
        </div>
      </div>

      <h1 className="text-[2.4rem] font-light tracking-tight leading-[1.3] max-w-[720px]">
        {text.statement}
        <strong className="font-bold text-primary">{text.highlight}</strong>
        {locale === 'en' ? '.' : locale === 'zh-TW' ? '。' : '。'}
      </h1>

      <p className="mt-6 text-[0.95rem] text-secondary-foreground max-w-[600px] leading-[1.9]">
        {text.sub}
      </p>

      <div className="mt-8 flex gap-7">
        {[
          { label: 'Live Demo', href: 'https://factory.dashai.dev' },
          { label: 'GitHub', href: 'https://github.com/seikaikyo' },
          { label: 'LinkedIn', href: 'https://linkedin.com/in/seikaikyo' },
        ].map(link => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground text-[0.8rem] tracking-[1px] uppercase no-underline transition-colors hover:text-primary"
          >
            {link.label}
          </a>
        ))}
      </div>
    </section>
  )
}
