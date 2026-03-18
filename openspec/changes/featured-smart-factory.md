---
title: Featured Project - Smart Factory Demo 大版面展示
type: feature
status: completed
created: 2026-03-18
---

# Featured Project - Smart Factory Demo

## 變更內容
在 HeroSection 與 StatsBar 之間新增 FeaturedProject 全寬展示區塊，
專門介紹 Smart Factory Demo 這個殺手級作品。

### FeaturedProject 區塊內容
- 標題 + 一句話定位
- 4 個數字指標 (54 API / 9 Stage / 15 AI Tools / 3 Lang)
- 3 個核心亮點 (DashAI / BCM / Agentic)
- Live Demo 按鈕
- 技術 tag pills

### 同時新增到 projects 列表
分類: industry, scale: production

## 影響範圍
- `src/components/FeaturedProject.vue` (新檔案)
- `src/App.vue` - 插入 FeaturedProject
- `src/data/projects.ts` - 新增 smart-factory-demo
- `src/data/locales/zh-TW.ts` - featured 文案
- `src/data/locales/en.ts` - featured 文案
- `src/data/locales/ja.ts` - featured 文案

## 測試計畫
1. vue-tsc + vite build 通過
2. 三語切換正常
3. Mobile 響應式正常
