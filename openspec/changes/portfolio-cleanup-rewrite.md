---
title: 作品集改版 - 去除前公司痕跡
type: refactor
status: in-progress
created: 2026-02-24
---

# 作品集改版 - 去除前公司痕跡

## 變更內容

重新整理 projects.ts 資料，將前公司專案改寫為通用經歷描述：
- 移除所有 `smai` 字眼
- 移除 `AMC` 公司名稱相關
- 前公司專案改為「產業經歷」呈現，去掉具體系統名稱和內部代號
- 已刪除 repo 的項目不再連結 GitHub
- 保留個人作品原樣

## 分類重新定義

| 新分類 | 內容 |
|--------|------|
| 製造業經歷 | MES/EAP/BPM/RMS 等合併為產業經驗描述 |
| AI 視覺經歷 | AOI/FaceMatch/AMC 合併 |
| 倉儲物流經歷 | MCS/MIDS/RFID 合併 |
| 個人作品 | sukuyodo, DashAstro, sinoauto 等保留 |
| 開發工具 | dash-devtools, dash-skills 等保留 |
| 學習專案 | jlpt-n1-learner 保留 |

## 處理策略

前公司專案改寫原則：
1. 去除公司名稱、內部代號
2. 用通用產業術語描述（如「半導體廠 MES」而非「SMAI MES」）
3. 強調技術能力而非具體客戶/公司
4. 不提供 GitHub 連結（repo 已刪）
5. 合併同類型小專案，減少數量

## 影響範圍

- `src/data/projects.ts` - 主要修改，重寫專案清單
- `src/data/categories.ts` - 可能需更新分類
- `src/components/StatsBar.vue` - 統計數字會變

## 測試計畫

1. `npm run build` 確認無錯誤
2. 本地預覽確認頁面正常載入
3. 確認無任何 smai/鈺祥/AMC/yesiang 字眼殘留

## Checklist

- [ ] 重寫 projects.ts
- [ ] 更新 categories.ts
- [ ] 確認 build 通過
- [ ] 全文搜尋無前公司痕跡
