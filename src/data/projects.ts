import type { Project } from '../types'

export const projects: Project[] = [
  // === 製造執行系統 (manufacturing) ===
  {
    id: 'mes',
    name: 'MES 製造執行系統',
    description: '濾網再生工廠 MES，工單管理、派工報工、倉儲調撥、品質管理，涵蓋 8 個製程站點完整追蹤',
    category: 'manufacturing',
    tags: ['angular', 'primeng', 'typescript', 'fastapi', 'neon', 'clerk', 'render'],
    year: 2025,
    scale: 'enterprise'
  },
  {
    id: 'msw',
    name: 'MSW 製程管理系統',
    description: 'MES + SPC + WMS 整合系統，50 個 AI 模組戰情儀表板、RFID 再生次數追蹤、能源監控、完整簽核流程',
    category: 'manufacturing',
    tags: ['vite', 'javascript', 'chartjs', 'plotly'],
    year: 2024,
    scale: 'production'
  },
  {
    id: 'eap',
    name: 'EAP 設備自動程式系統',
    description: '機台程式管理與 ECU 自動下放，Modbus TCP 通訊、參數可視化編輯、版本控制、7 個產業模組',
    category: 'manufacturing',
    tags: ['vite', 'javascript'],
    year: 2024,
    scale: 'enterprise'
  },
  {
    id: 'bpm',
    name: 'BPM 簽核流程管理系統',
    description: '拖拽式表單建置器 + 視覺化流程設計器，支援並簽串簽、條件分支、11 種運算子、PDF 報表匯出',
    category: 'manufacturing',
    tags: ['vite', 'javascript'],
    year: 2024,
    scale: 'enterprise'
  },
  {
    id: 'rms',
    name: 'RMS 配方管理系統',
    description: '配方版本控管、Golden Recipe 自動評分、SPC 製程能力分析、差異比對回滾、自動化測試系統',
    category: 'manufacturing',
    tags: ['vite', 'javascript', 'chartjs'],
    year: 2024,
    scale: 'production'
  },
  {
    id: 'gas-mes',
    name: 'GAS MES 備援系統',
    description: '主系統故障時切換的輕量備援 MES，工單派工報工、AOI 品檢、點檢表、倉儲管理，資料同步回 Sheets',
    category: 'manufacturing',
    tags: ['gas', 'sheets', 'vue3'],
    year: 2024,
    scale: 'production'
  },

  // === AI 視覺系統 (ai-vision) ===
  {
    id: 'visionai',
    name: 'VisionAI 智慧廠區監控',
    description: 'VLM + LLM 視覺辨識平台，Watch Dogs 風格廠區平面圖、12 攝影機 PTZ 掃描、入侵偵測、保全派遣',
    category: 'ai-vision',
    tags: ['vite', 'javascript', 'shoelace', 'yolo', 'clerk'],
    year: 2024,
    scale: 'enterprise'
  },
  {
    id: 'dash-amc-ai',
    name: 'AMC AI 智能監控系統',
    description: '晶圓良率 AMC 防線，TOTP 雙重驗證、3D 即時視覺化、統計分析、智能測試數據生成器',
    category: 'ai-vision',
    tags: ['react', 'typescript', 'vite', 'plotly'],
    year: 2024,
    scale: 'production'
  },
  {
    id: 'demo-vision',
    name: 'Process Vision 製程分析',
    description: 'YOLO11 製程影片自動分段、週期時間計算、時間軸視覺化編輯、改善前後比對、Cloudinary 影片管理',
    category: 'ai-vision',
    tags: ['vue3', 'fastapi', 'neon', 'yolo', 'gemini', 'vercel', 'render'],
    year: 2024,
    scale: 'production'
  },
  {
    id: 'facematch',
    name: 'FaceMatch Log 異常分析',
    description: '人臉辨識系統 log 分析工具，設備離線偵測、Session 異常監控、MQTT 追蹤，零依賴純 Bash 實作',
    category: 'ai-vision',
    tags: ['bash'],
    year: 2023,
    scale: 'internal'
  },

  // === 倉儲物流 (warehouse) ===
  {
    id: 'mcs',
    name: 'MCS 智慧物料搬運控制',
    description: '示範工廠工廠 自動移動設備調度，A* 路徑規劃、27 段通道統計、LiDAR 視覺化、GHG 碳排計算',
    category: 'warehouse',
    tags: ['vite', 'javascript', 'shoelace', 'vercel'],
    year: 2024,
    scale: 'enterprise'
  },
  {
    id: 'mids',
    name: 'MIDS 材料追蹤系統',
    description: '產品 RFID 追蹤，TAG 註冊查詢列印、生命週期追蹤、標籤樣板視覺化編輯器、批次匯出',
    category: 'warehouse',
    tags: ['vite', 'javascript', 'shoelace', 'vercel'],
    year: 2024,
    scale: 'production'
  },
  {
    id: 'rfid',
    name: 'RFID 智慧倉儲讀取展示',
    description: '三種讀取模式互動展示（隧道雙門/單門/門口直讀），移動設備棧板動畫、RSSI 訊號波形、播放速度控制',
    category: 'warehouse',
    tags: ['vite', 'javascript', 'shoelace', 'vercel'],
    year: 2024,
    scale: 'production'
  },

  // === 交易金融 (trading) ===
  {
    id: 'sinoauto',
    name: 'SinoAuto 台股自動交易',
    description: '永豐 Shioaji API 整合 Claude AI 決策引擎，整張交易、自動學習反思、策略調整、績效追蹤',
    category: 'trading',
    tags: ['vue3', 'primevue', 'fastapi', 'shioaji', 'claude', 'vercel', 'render'],
    year: 2025,
    scale: 'production'
  },
  {
    id: 'dashtrade',
    name: 'DashTrade AI 技術分析',
    description: '台股美股日股多市場支援，RSI/KD/MACD/布林通道、雙引擎分析、每日自動預測 80 支股票並隔日驗證',
    category: 'trading',
    tags: ['vue3', 'shoelace', 'fastapi', 'sqlmodel', 'neon', 'vercel', 'render'],
    year: 2025,
    scale: 'personal'
  },

  // === 環保合規 (esg) ===
  {
    id: 'dash-ghg',
    name: 'Dash-GHG 溫室氣體盤查',
    description: 'ISO 14064-1 盤查管理，範疇一二三排放計算、距離計算器、排放係數庫、Google Maps 截圖稽核',
    category: 'esg',
    tags: ['vue3', 'typescript', 'shoelace', 'chartjs', 'fastapi', 'neon', 'vercel', 'render'],
    year: 2025,
    scale: 'production'
  },
  {
    id: 'archived-ghg',
    name: 'GHG 碳盤查 (前端版)',
    description: '範例企業碳盤查系統前端原型，儀表板、數據盤查、排放係數庫，後演化為 Dash-GHG 全端版本',
    category: 'esg',
    tags: ['vite', 'javascript', 'shoelace', 'vercel'],
    year: 2024,
    scale: 'prototype'
  },

  // === 品質管理 (quality) ===
  {
    id: 'aoi-8d',
    name: 'AOI-8D 製程影片分析',
    description: 'YOLO11 影片物件偵測、週期時間計算、自訂動作標註學習、Word 報告自動生成、8D 流程 AI 輔助填寫',
    category: 'quality',
    tags: ['streamlit', 'python', 'yolo', 'opencv'],
    year: 2024,
    scale: 'production'
  },
  {
    id: 'demo-8d',
    name: '8D 問題解決系統',
    description: 'ISO 27001 合規 8D 管理，D0-D8 完整流程、智慧提示與範例指引、AES 加密、PDF/Excel 匯出',
    category: 'quality',
    tags: ['vite', 'javascript', 'shoelace'],
    year: 2024,
    scale: 'production'
  },
  {
    id: 'spc',
    name: 'SPC 統計製程管制整合',
    description: '台達 DIASPC 系統整合規劃，AMC 濾網再生製程參數監控、品質管制圖、COA 報表、OCAP 流程',
    category: 'quality',
    tags: ['python'],
    year: 2024,
    scale: 'enterprise'
  },

  // === 人資/門禁 (hr-security) ===
  {
    id: 'sso',
    name: 'SSO 統一身份認證平台',
    description: '企業集中式認證，130+ 權限項目、AD/LDAP 同步、MFA 管理、稽核日誌、IP 封鎖、跨應用會話管理',
    category: 'hr-security',
    tags: ['vite', 'javascript', 'shoelace', 'clerk', 'vercel'],
    year: 2024,
    scale: 'enterprise'
  },
  {
    id: 'vac',
    name: 'VAC 承攬商門禁管理',
    description: 'ISO 27001 承攬商管理，雙層有效期模型、安全衛生教育追蹤、施工單時段管理、稽核 CSV 匯出',
    category: 'hr-security',
    tags: ['javascript', 'shoelace', 'prisma', 'neon', 'vercel'],
    year: 2024,
    scale: 'enterprise'
  },

  // === 平台基礎建設 (platform) ===
  {
    id: 'api-center',
    name: 'API Center 統一管理中心',
    description: '標準化 API 入口，OpenAPI 3.0 線上文件、JWT 認證、Vercel Serverless Functions、安全控制',
    category: 'platform',
    tags: ['vite', 'shoelace', 'vercel', 'prisma'],
    year: 2024,
    scale: 'enterprise'
  },
  {
    id: 'demo-mcp',
    name: 'MCP 統一 API 閘道',
    description: 'FastAPI + FastMCP 架構，整合 MES/MIDS/VAC/GHG/SSO 多系統、Neon DB 對接、Clerk OAuth',
    category: 'platform',
    tags: ['fastapi', 'fastmcp', 'neon', 'clerk', 'docker', 'render'],
    year: 2025,
    scale: 'internal'
  },
  {
    id: 'demo-ui',
    name: '企業 UI 元件庫',
    description: '企業統一 UI 元件庫，可複用元件封裝、npm link 支援跨系統引用',
    category: 'platform',
    tags: ['javascript'],
    year: 2024,
    scale: 'internal'
  },
  {
    id: 'documentation',
    name: '技術文件產生器',
    description: '自動化產生 9 個系統 17 種技術文件（技術/維運/測試/管理/訓練），排程釋出管理',
    category: 'platform',
    tags: ['python'],
    year: 2024,
    scale: 'internal'
  },
  {
    id: 'ssl',
    name: 'SSL 憑證管理工具',
    description: 'SSH 連線遠端 Linux 伺服器，憑證上傳備份更新、到期檢查、批次操作，GUI + CLI 雙介面',
    category: 'platform',
    tags: ['python'],
    year: 2023,
    scale: 'internal'
  },
  {
    id: 'seo',
    name: 'SEO 分析工具',
    description: '網站 SEO 健檢與優化建議產生器',
    category: 'platform',
    tags: ['vite', 'javascript', 'shoelace'],
    year: 2024,
    scale: 'internal'
  },

  // === 開發工具 (devtools) ===
  {
    id: 'dash-devtools',
    name: 'DashAI DevTools',
    description: '開發工具集：E2E 測試、Gemini AI 視覺分析、程式碼品質檢查、OpenSpec 規格驅動、專案健康評分',
    category: 'devtools',
    tags: ['python', 'gemini', 'bash'],
    year: 2025,
    scale: 'personal'
  },
  {
    id: 'dash-skills',
    name: 'Claude Code Skills',
    description: '自建 6 + 外部收錄 17 個 Claude Code 技能，涵蓋 OpenSpec、FastAPI、Angular、UI/UX 設計等模板',
    category: 'devtools',
    tags: ['claude', 'bash'],
    year: 2025,
    scale: 'personal'
  },
  {
    id: 'git-security-hooks',
    name: 'Git Security Hooks',
    description: 'gitleaks pre-commit hook，自動掃描 API Key / Token / 密碼，阻擋提交、支援全域設定',
    category: 'devtools',
    tags: ['bash', 'git'],
    year: 2025,
    scale: 'personal'
  },
  {
    id: 'demo-backup',
    name: 'Neon 資料庫自動備份',
    description: 'GitHub Actions 每日自動備份 Neon PostgreSQL，30 天保留策略、手動觸發、自動還原',
    category: 'devtools',
    tags: ['neon', 'github-actions'],
    year: 2024,
    scale: 'internal'
  },
  {
    id: 'gas-apps',
    name: 'GAS 自動化工具集',
    description: 'Google Apps Script 企業自動化：排程通知、報表產生、跨系統資料同步',
    category: 'devtools',
    tags: ['gas', 'sheets'],
    year: 2024,
    scale: 'internal'
  },

  // === 個人作品 (personal) ===
  {
    id: 'sukuyodo',
    name: '宿曜道 運勢系統',
    description: '日本真言宗宿曜占星術，27 宿分析、九曜流年、雙人相性診斷、吉日查詢，經六輪驗證通過',
    category: 'personal',
    tags: ['vue3', 'primevue', 'fastapi', 'neon', 'vercel', 'render'],
    year: 2025,
    scale: 'production'
  },
  {
    id: 'job-crawler',
    name: '外包平台職缺爬蟲',
    description: '日本 Lancers/CrowdWorks/Coconala + 美國 Upwork/Freelancer 多平台爬取，Claude API 雙語翻譯',
    category: 'personal',
    tags: ['vue3', 'shoelace', 'fastapi', 'neon', 'claude'],
    year: 2025,
    scale: 'personal'
  },
  {
    id: 'jinkochino',
    name: '人工知能公司官網',
    description: 'Jinkochino Ltd. 官方網站，正體中文/English/日本語三語切換、深色淺色主題、響應式設計',
    category: 'personal',
    tags: ['vite', 'shoelace', 'vercel'],
    year: 2024,
    scale: 'personal'
  },
  {
    id: 'wind',
    name: 'Wind CFD 風場模擬',
    description: '90 度彎管 CFD 模擬動畫，Navier-Stokes 計算、粒子流動、LIC 紋理、即時速度偏差顯示',
    category: 'personal',
    tags: ['python', 'javascript'],
    year: 2023,
    scale: 'prototype'
  },
  {
    id: 'dashastro',
    name: 'DashAstro 占星工具平台',
    description: '融合宿曜道、西方占星、塔羅、日本吉日曆，Skyfield 行星計算 + Claude AI 解讀，9 組 API 路由',
    category: 'personal',
    tags: ['vue3', 'shoelace', 'fastapi', 'sqlmodel', 'neon', 'claude', 'vercel', 'render'],
    year: 2025,
    scale: 'personal'
  },
  {
    id: 'dashai-portfolio',
    name: 'DashAI Portfolio',
    description: '本作品集網站，Vue 3 + PrimeVue Aura 暗色主題，42 專案分類篩選與技術棧統計',
    category: 'personal',
    tags: ['vue3', 'primevue', 'typescript', 'vite', 'vercel'],
    year: 2025,
    scale: 'personal'
  },

  // === 學習專案 (learning) ===
  {
    id: 'jlpt-n1-learner',
    name: 'JLPT N1 學習系統',
    description: 'Claude AI 自適應學習，25+ 個 N1 文法點弱項追蹤、讀解練習、聽解男女聲切換、語速調整',
    category: 'learning',
    tags: ['vue3', 'primevue', 'typescript', 'fastapi', 'claude'],
    year: 2025,
    scale: 'personal'
  },

  // === 招募測試 (recruit) ===
  {
    id: 'demo-recruit',
    name: 'AI 技術人才測驗系統',
    description: 'Claude 動態出題 + 行為分析，7 種職位、難度自適應、人格四維度分析、PGlite 離線優先架構',
    category: 'recruit',
    tags: ['vue3', 'javascript', 'claude', 'vercel'],
    year: 2024,
    scale: 'internal'
  }
]
