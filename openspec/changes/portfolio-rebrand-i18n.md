---
title: Portfolio 品牌轉型 + 三語化 + Jinkochino 重導向
type: feature
status: in-progress
created: 2026-02-26
---

# Portfolio 品牌轉型 + 三語化 + Jinkochino 重導向

## 變更內容
1. 品牌定位從「AI Systems Integration Specialist」改為「AI Security & Adversarial Testing Consultant」
2. 新增中英日三語切換（自建輕量 i18n，不用 vue-i18n）
3. jinkochino.ltd 設定 301 永久重導向至 portfolio.dashai.dev
4. jinkochino 專案條目標註「已停運/Dissolved」

## 影響範圍
### dashai-portfolio
- `index.html` — SEO meta 標籤
- `src/composables/useI18n.ts` — 新增
- `src/data/locales/{zh-TW,en,ja}.ts` — 新增（3 檔）
- `src/data/projects.ts` — 多語結構改寫
- `src/data/categories.ts` — 多語名稱
- `src/types/index.ts` — 型別更新
- `src/components/*.vue` — 7 個元件多語化
- `src/App.vue` — provide i18n

### jinkochino
- `vercel.json` — 301 redirect 規則

## 測試計畫
1. npm run build 無錯誤
2. 本地三語切換驗證
3. 線上部署確認（portfolio.dashai.dev + jinkochino.ltd redirect）

## Checklist
- [ ] i18n composable
- [ ] 三語翻譯檔
- [ ] 專案資料多語化
- [ ] 元件更新
- [ ] SEO 更新
- [ ] jinkochino redirect
- [ ] Git push 兩個 repo
