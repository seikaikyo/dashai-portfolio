---
title: 專案卡片加入截圖縮圖
type: feature
status: in-progress
created: 2026-03-18
---

# 專案卡片加入截圖縮圖

## 變更內容
每張專案卡片頂部加入截圖縮圖，提升視覺吸引力。

## 截圖規格
- 存放位置：`public/screenshots/{project-id}.png`
- 尺寸：1280x720（16:9）
- 語言：英文介面（主要受眾為英日文）
- 截圖方式：agent-browser 截取 Live URL

## 需截圖的專案（有 Live URL）
1. `smart-factory-demo` → https://factory.dashai.dev
2. `shukuyo` → https://shukuyo.dashai.dev
3. `ai-red-team` → https://ai-red-team.dashai.dev
4. `ai-english-tutor` → https://english.dashai.dev
5. `sinoauto` → https://sinoauto.dashai.dev（如果有）
6. `jlpt-n1-learner` → GitHub README 或 Live
7. `toeic-practice` → GitHub README 或 Live
8. `dash-devtools` → GitHub README
9. `dash-skills` → GitHub README
10. `git-security-hooks` → GitHub README
11. `dashastro` → GitHub README
12. `dashai-portfolio` → https://portfolio.dashai.dev

## 無截圖的專案處理
- 產業經歷類（ind-mes, ind-ai-vision 等）：顯示 category 色塊 + 大 icon
- 沒有公開 URL 的：同上

## 影響範圍
- `src/data/projects.ts` - 加 `screenshot?: string` 欄位
- `src/components/ProjectCard.vue` - 卡片頂部加縮圖區
- `src/components/FeaturedProject.vue` - 旗艦專案也加截圖（如適用）
- `public/screenshots/` - 12+ 張截圖

## UI/UX 規格
- 縮圖位於卡片頂部，圓角裁切（border-radius 跟卡片一致）
- 高度固定 160px，object-fit: cover
- hover 時 transform: scale(1.03)，200ms ease
- 無截圖時：category 色塊漸層背景 + 專案 icon 置中
- loading="lazy"（所有縮圖）
- Mobile：縮圖高度改 120px

## 截圖前注意
- 每個網站先設 localStorage locale 為 en 再截
- smart-factory: localStorage.setItem('locale', 'en')
- portfolio: localStorage.setItem('dashai-locale', 'en')
- shukuyo: 查 main.ts 確認 locale key

## 測試計畫
1. 有截圖的卡片正確顯示縮圖
2. 無截圖的卡片顯示 category 色塊 fallback
3. hover 動畫正確
4. Mobile RWD 縮圖高度
5. lazy loading 生效
6. vue-tsc + vite build 通過
