import type { Project } from '../types'

export const projects: Project[] = [
  // === 製造執行系統 (manufacturing) ===
  {
    id: 'mes',
    name: 'MES 製造執行系統',
    description: 'Angular 21 + PrimeNG 企業級製造執行系統，涵蓋工單管理、製程追蹤、產能分析、品質記錄等完整功能',
    category: 'manufacturing',
    tags: ['angular', 'primeng', 'typescript', 'fastapi', 'neon'],
    year: 2025,
    scale: 'enterprise'
  },
  {
    id: 'msw',
    name: 'MSW 模治具管理系統',
    description: '模治具全生命週期管理，含借還紀錄、保養排程、庫存追蹤，前端 Vue 3 + PrimeVue',
    category: 'manufacturing',
    tags: ['vue3', 'primevue', 'typescript', 'gas', 'sheets'],
    year: 2024,
    scale: 'production'
  },
  {
    id: 'eap',
    name: 'EAP 設備自動化程式',
    description: '半導體設備自動化控制介面，設備參數監控、配方管理、SECS/GEM 通訊整合',
    category: 'manufacturing',
    tags: ['vue3', 'primevue', 'typescript', 'csharp', 'dotnet'],
    year: 2024,
    scale: 'enterprise'
  },
  {
    id: 'bpm',
    name: 'BPM 流程管理系統',
    description: '企業流程自動化引擎，支援簽核流程、表單設計、權限控管、流程追蹤',
    category: 'manufacturing',
    tags: ['vue3', 'primevue', 'typescript'],
    year: 2024,
    scale: 'enterprise'
  },
  {
    id: 'rms',
    name: 'RMS 配方管理系統',
    description: '製程配方版本控管、參數比對、下載派送，確保產線一致性',
    category: 'manufacturing',
    tags: ['vue3', 'primevue', 'typescript'],
    year: 2024,
    scale: 'production'
  },

  // === AI 視覺系統 (ai-vision) ===
  {
    id: 'visionai',
    name: 'VisionAI 視覺檢測平台',
    description: 'AI 瑕疵檢測平台，整合 YOLO 模型訓練、影像標註、即時推論，支援多產線部署',
    category: 'ai-vision',
    tags: ['vue3', 'primevue', 'python', 'yolo', 'opencv'],
    year: 2024,
    scale: 'enterprise'
  },
  {
    id: 'dash-amc-ai',
    name: 'AMC AI 環境監測',
    description: 'AI 驅動的空氣分子汙染監測，即時分析潔淨室環境數據，異常預警',
    category: 'ai-vision',
    tags: ['vue3', 'primevue', 'python', 'tensorflow'],
    year: 2024,
    scale: 'production'
  },
  {
    id: 'demo-vision',
    name: '製程視覺監控',
    description: '製程影像即時監控系統，結合 OpenCV 影像處理與深度學習模型',
    category: 'ai-vision',
    tags: ['vue3', 'primevue', 'python', 'opencv', 'yolo'],
    year: 2024,
    scale: 'production'
  },
  {
    id: 'facematch',
    name: 'FaceMatch 人臉辨識',
    description: '人臉辨識比對系統，用於門禁與身分驗證場景',
    category: 'ai-vision',
    tags: ['python', 'opencv', 'tensorflow'],
    year: 2023,
    scale: 'prototype'
  },

  // === 倉儲物流 (warehouse) ===
  {
    id: 'mcs',
    name: 'MCS 物料控制系統',
    description: '自動倉儲物料搬運控制，AGV 派車、路徑規劃、即時庫位追蹤',
    category: 'warehouse',
    tags: ['vue3', 'primevue', 'typescript', 'csharp'],
    year: 2024,
    scale: 'enterprise'
  },
  {
    id: 'mids',
    name: 'MIDS 物料識別系統',
    description: '物料進出識別與追蹤，結合條碼掃描與影像辨識',
    category: 'warehouse',
    tags: ['vue3', 'primevue', 'typescript'],
    year: 2024,
    scale: 'production'
  },
  {
    id: 'rfid',
    name: 'RFID 資產追蹤系統',
    description: 'RFID 標籤管理與資產定位，支援批量盤點、即時追蹤、異常告警',
    category: 'warehouse',
    tags: ['vue3', 'primevue', 'typescript'],
    year: 2024,
    scale: 'production'
  },

  // === 交易金融 (trading) ===
  {
    id: 'sinoauto',
    name: 'SinoAuto 汽車銷售系統',
    description: 'Vue 3 + FastAPI 全端汽車銷售管理，含庫存管理、訂單追蹤、客戶 CRM',
    category: 'trading',
    tags: ['vue3', 'primevue', 'fastapi', 'neon', 'vercel'],
    year: 2025,
    scale: 'production'
  },
  {
    id: 'dashtrade',
    name: 'DashTrade 量化交易',
    description: '美股量化交易策略平台，整合 Finnhub 即時數據、技術指標分析、回測引擎',
    category: 'trading',
    tags: ['python', 'finnhub', 'neon'],
    year: 2025,
    scale: 'personal'
  },

  // === 環保合規 (esg) ===
  {
    id: 'dash-ghg',
    name: 'Dash-GHG 碳盤查系統',
    description: 'ISO 14064 碳盤查管理，排放源鑑別、活動數據登錄、排放量計算、報告產出',
    category: 'esg',
    tags: ['vue3', 'primevue', 'fastapi', 'neon', 'vercel'],
    year: 2025,
    scale: 'production'
  },

  // === 品質管理 (quality) ===
  {
    id: 'aoi-8d',
    name: 'AOI-8D 品質異常管理',
    description: 'AOI 檢測異常的 8D 改善流程，從問題描述到預防措施的完整追蹤',
    category: 'quality',
    tags: ['vue3', 'primevue', 'typescript'],
    year: 2024,
    scale: 'production'
  },
  {
    id: 'demo-8d',
    name: 'DEMO 8D 報告系統',
    description: '通用 8D 問題解決報告平台，支援跨部門協作與改善追蹤',
    category: 'quality',
    tags: ['vue3', 'primevue', 'typescript'],
    year: 2024,
    scale: 'production'
  },
  {
    id: 'spc',
    name: 'SPC 統計製程管制',
    description: '即時管制圖監控、CPK/PPK 計算、異常規則判定、改善趨勢分析',
    category: 'quality',
    tags: ['vue3', 'primevue', 'typescript'],
    year: 2024,
    scale: 'enterprise'
  },

  // === 人資/門禁 (hr-security) ===
  {
    id: 'sso',
    name: 'SSO 單一登入系統',
    description: '企業 SSO 身分驗證中心，整合 LDAP/AD，支援 RBAC 權限管理',
    category: 'hr-security',
    tags: ['vue3', 'primevue', 'typescript'],
    year: 2024,
    scale: 'enterprise'
  },
  {
    id: 'vac',
    name: 'VAC 門禁管制系統',
    description: '訪客與員工門禁管理，刷卡記錄、區域權限、即時監控儀表板',
    category: 'hr-security',
    tags: ['vue3', 'primevue', 'typescript'],
    year: 2024,
    scale: 'enterprise'
  },
  {
    id: 'shift-schedule',
    name: '排班管理系統',
    description: '工廠輪班排程自動化，含班表產生、人力平衡、加班計算',
    category: 'hr-security',
    tags: ['python', 'gas', 'sheets'],
    year: 2023,
    scale: 'internal'
  },

  // === 平台基礎建設 (platform) ===
  {
    id: 'api-center',
    name: 'API Center 服務閘道',
    description: 'API 統一管理中心，含路由分發、認證授權、流量控制、日誌記錄',
    category: 'platform',
    tags: ['vue3', 'primevue', 'typescript'],
    year: 2024,
    scale: 'enterprise'
  },
  {
    id: 'demo-mcp',
    name: 'MCP Server 管理中心',
    description: 'Model Context Protocol 伺服器管理，AI 工具串接、上下文管理',
    category: 'platform',
    tags: ['vue3', 'primevue', 'typescript', 'mcp', 'claude'],
    year: 2025,
    scale: 'internal'
  },
  {
    id: 'demo-ui',
    name: 'DEMO UI 元件庫',
    description: '企業統一 UI 元件庫，封裝常用表單、表格、圖表元件，確保跨系統一致性',
    category: 'platform',
    tags: ['vue3', 'primevue', 'typescript'],
    year: 2024,
    scale: 'internal'
  },
  {
    id: 'documentation',
    name: '技術文件中心',
    description: '企業技術文件統一管理，含 API 文件、架構圖、開發規範',
    category: 'platform',
    tags: ['vue3', 'primevue', 'typescript'],
    year: 2024,
    scale: 'internal'
  },
  {
    id: 'ssl',
    name: 'SSL 憑證管理',
    description: 'HTTPS 憑證申請、更新、部署自動化管理',
    category: 'platform',
    tags: ['bash', 'docker'],
    year: 2023,
    scale: 'internal'
  },
  {
    id: 'seo',
    name: 'SEO 分析工具',
    description: '網站 SEO 健檢與優化建議產生器',
    category: 'platform',
    tags: ['vue3', 'primevue', 'typescript'],
    year: 2024,
    scale: 'internal'
  },

  // === 開發工具 (devtools) ===
  {
    id: 'dash-devtools',
    name: 'DashAI DevTools',
    description: 'Python CLI 開發工具集，含專案驗證、安全掃描、程式碼品質檢查',
    category: 'devtools',
    tags: ['python', 'bash'],
    year: 2025,
    scale: 'personal'
  },
  {
    id: 'dash-skills',
    name: 'Claude Code Skills',
    description: 'Claude Code 自訂技能集，含 OpenSpec、FastAPI、Angular 等開發模板',
    category: 'devtools',
    tags: ['claude', 'mcp', 'bash'],
    year: 2025,
    scale: 'personal'
  },
  {
    id: 'git-security-hooks',
    name: 'Git Security Hooks',
    description: 'Git pre-commit hooks，防止 API Key、密碼、Token 等機敏資料提交',
    category: 'devtools',
    tags: ['bash', 'git'],
    year: 2025,
    scale: 'personal'
  },
  {
    id: 'demo-backup',
    name: '資料庫備份工具',
    description: '自動化 PostgreSQL 備份、壓縮、上傳、保留策略管理',
    category: 'devtools',
    tags: ['python', 'bash', 'neon'],
    year: 2024,
    scale: 'internal'
  },

  // === 個人作品 (personal) ===
  {
    id: 'sukuyodo',
    name: '宿曜道 運勢系統',
    description: 'Vue 3 + FastAPI 全端宿曜占星系統，27 宿分析、九曜流年、相性診斷，經六輪驗證通過',
    category: 'personal',
    tags: ['vue3', 'primevue', 'fastapi', 'neon', 'vercel', 'render'],
    year: 2025,
    scale: 'production',
    url: 'https://sukuyodo.vercel.app'
  },
  {
    id: 'job-crawler',
    name: '求職爬蟲系統',
    description: '104/1111 職缺自動爬取、薪資分析、條件篩選、趨勢追蹤',
    category: 'personal',
    tags: ['python', 'vue3', 'primevue'],
    year: 2025,
    scale: 'personal'
  },
  {
    id: 'jinkochino',
    name: '人口知能 資料視覺化',
    description: '日本人口數據視覺化分析，縣市比較、趨勢預測、互動圖表',
    category: 'personal',
    tags: ['vue3', 'primevue', 'typescript'],
    year: 2024,
    scale: 'personal'
  },
  {
    id: 'wind',
    name: 'Wind 風力資料分析',
    description: '風力發電數據分析與視覺化，風速分布、發電量預測',
    category: 'personal',
    tags: ['python'],
    year: 2023,
    scale: 'prototype'
  },
  {
    id: 'dashastro',
    name: 'DashAstro 占星系統',
    description: '西洋占星術計算引擎，星盤繪製、行星相位、宮位分析',
    category: 'personal',
    tags: ['vue3', 'vite', 'fastapi', 'python'],
    year: 2025,
    scale: 'personal'
  },

  // === 學習專案 (learning) ===
  {
    id: 'jlpt-n1-learner',
    name: 'JLPT N1 學習系統',
    description: 'Vue 3 + FastAPI 日語 N1 學習平台，含語彙、文法、讀解練習與錯題追蹤',
    category: 'learning',
    tags: ['vue3', 'primevue', 'fastapi', 'neon', 'vercel'],
    year: 2025,
    scale: 'personal'
  },

  // === 招募測試 (recruit) ===
  {
    id: 'demo-recruit',
    name: '技術面試測驗平台',
    description: '線上技術測驗系統，含題庫管理、計時作答、自動評分、成績報告',
    category: 'recruit',
    tags: ['vue3', 'primevue', 'typescript'],
    year: 2024,
    scale: 'internal'
  },

  // === GAS 系列 (分散在各類別) ===
  {
    id: 'gas-mes',
    name: 'GAS MES 輕量版',
    description: 'Google Apps Script 實作的輕量 MES，使用 Sheets 作為資料庫，適合小型產線',
    category: 'manufacturing',
    tags: ['gas', 'sheets'],
    year: 2024,
    scale: 'production'
  },
  {
    id: 'archived-ghg',
    name: 'GHG 碳盤查 (前端版)',
    description: '碳盤查系統前端原型，後演化為 Dash-GHG 全端版本',
    category: 'esg',
    tags: ['vue3', 'typescript'],
    year: 2024,
    scale: 'prototype'
  },

  // === 額外 ===
  {
    id: 'dashai-portfolio',
    name: 'DashAI Portfolio',
    description: '本作品集網站，Vue 3 + PrimeVue 暗色主題靜態站，展示 42 個專案與技術棧統計',
    category: 'personal',
    tags: ['vue3', 'primevue', 'typescript', 'vite', 'vercel'],
    year: 2025,
    scale: 'personal',
    url: 'https://dashai.dev'
  },
  {
    id: 'gas-apps',
    name: 'GAS 自動化工具集',
    description: 'Google Apps Script 企業自動化：排程通知、報表產生、跨系統資料同步',
    category: 'devtools',
    tags: ['gas', 'sheets'],
    year: 2024,
    scale: 'internal'
  }
]
