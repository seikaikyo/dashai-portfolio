import type { Project } from '../types'

export const projects: Project[] = [
  // === 產業經歷 (industry) ===
  {
    id: 'ind-mes',
    name: {
      'zh-TW': '製造執行系統 (MES)',
      en: 'Manufacturing Execution System (MES)',
      ja: '製造実行システム (MES)'
    },
    description: {
      'zh-TW': '半導體廠 MES 全端開發，工單派工報工、設備程式管理、配方版控與 Golden Recipe 評分、簽核流程引擎、SPC 製程管制，涵蓋 8 個以上製程站點',
      en: 'Full-stack MES for semiconductor fab: work order dispatch & reporting, equipment program management, recipe version control with Golden Recipe scoring, approval workflow engine, SPC process control across 8+ stations',
      ja: '半導体工場向けMES全スタック開発、作業指示・実績報告、設備プログラム管理、レシピ版管理とGolden Recipeスコアリング、承認ワークフローエンジン、SPC工程管理、8+工程ステーション対応'
    },
    category: 'industry',
    tags: ['angular', 'primeng', 'typescript', 'fastapi', 'neon', 'vue3', 'vite', 'gas'],
    year: 2025,
    scale: 'enterprise'
  },
  {
    id: 'ind-ai-vision',
    name: {
      'zh-TW': 'AI 視覺辨識系統',
      en: 'AI Vision Recognition System',
      ja: 'AI視覚認識システム'
    },
    description: {
      'zh-TW': '工廠 AI 視覺辨識平台，VLM/YOLO 影像分析、製程影片自動分段與週期時間計算、廠區即時監控告警、人臉辨識異常偵測、8D 報告自動生成',
      en: 'Factory AI vision platform: VLM/YOLO image analysis, process video auto-segmentation with cycle time calculation, real-time monitoring alerts, face recognition anomaly detection, automated 8D report generation',
      ja: '工場AI視覚プラットフォーム、VLM/YOLO画像分析、製造動画自動分割＆サイクルタイム計算、リアルタイム監視アラート、顔認識異常検知、8Dレポート自動生成'
    },
    category: 'industry',
    tags: ['yolo', 'python', 'opencv', 'vite', 'fastapi', 'gemini', 'streamlit'],
    year: 2024,
    scale: 'production'
  },
  {
    id: 'ind-warehouse',
    name: {
      'zh-TW': '智慧倉儲物流系統',
      en: 'Smart Warehouse Logistics',
      ja: 'スマート倉庫物流システム'
    },
    description: {
      'zh-TW': '自動搬運車調度模擬與路徑規劃、RFID 產品生命週期追蹤、標籤樣板視覺化編輯器、多種讀取模式互動展示',
      en: 'AMR autonomous vehicle dispatch simulation & path planning, RFID product lifecycle tracking, label template visual editor, interactive multi-mode reader demo',
      ja: 'AMR無人搬送車配車シミュレーション＆経路計画、RFID製品ライフサイクル追跡、ラベルテンプレートビジュアルエディタ、マルチモードリーダーインタラクティブデモ'
    },
    category: 'industry',
    tags: ['vite', 'javascript', 'shoelace', 'vercel'],
    year: 2024,
    scale: 'production'
  },
  {
    id: 'ind-quality',
    name: {
      'zh-TW': '品質管理系統',
      en: 'Quality Management System',
      ja: '品質管理システム'
    },
    description: {
      'zh-TW': 'ISO 合規品質管理，8D 問題解決全流程（D0-D8）、SPC 統計製程管制與管制圖、AI 輔助分析填寫、AES 加密報表匯出',
      en: 'ISO-compliant quality management: full 8D problem-solving workflow (D0-D8), SPC statistical process control with control charts, AI-assisted analysis, AES-encrypted report export',
      ja: 'ISO準拠品質管理、8D問題解決フルワークフロー（D0-D8）、SPC統計的工程管理＆管理図、AI支援分析、AES暗号化レポートエクスポート'
    },
    category: 'industry',
    tags: ['vite', 'javascript', 'python', 'streamlit', 'shoelace'],
    year: 2024,
    scale: 'production'
  },
  {
    id: 'ind-platform',
    name: {
      'zh-TW': '企業平台與工具',
      en: 'Enterprise Platform & Tools',
      ja: '企業プラットフォーム＆ツール'
    },
    description: {
      'zh-TW': 'SSO 統一認證（130+ 權限項目）、API 閘道與 OpenAPI 文件、承攬商門禁管理、自動化技術文件產生、資料庫備份排程、碳盤查計算、SSL 憑證管理',
      en: 'SSO unified auth (130+ permission items), API gateway with OpenAPI docs, contractor access control, automated technical documentation, database backup scheduling, carbon inventory calculation, SSL certificate management',
      ja: 'SSO統合認証（130+権限項目）、APIゲートウェイ＆OpenAPIドキュメント、請負業者入退管理、技術ドキュメント自動生成、DBバックアップスケジューリング、炭素インベントリ計算、SSL証明書管理'
    },
    category: 'industry',
    tags: ['fastapi', 'neon', 'clerk', 'vercel', 'render', 'python', 'javascript', 'prisma', 'github-actions'],
    year: 2025,
    scale: 'enterprise'
  },

  // === 交易金融 (trading) ===
  {
    id: 'sinoauto',
    name: {
      'zh-TW': 'SinoAuto 台股自動交易',
      en: 'SinoAuto Taiwan Stock Auto Trading',
      ja: 'SinoAuto 台湾株式自動売買'
    },
    description: {
      'zh-TW': '永豐 Shioaji API 整合 Claude AI 決策引擎，整張交易、自動學習反思、策略調整、績效追蹤',
      en: 'Sinopac Shioaji API with Claude AI decision engine: full-lot trading, auto-learning with reflection, strategy adjustment, performance tracking',
      ja: '永豊Shioaji API＋Claude AI意思決定エンジン、単元株取引、自動学習＆反省、戦略調整、パフォーマンス追跡'
    },
    category: 'trading',
    tags: ['vue3', 'primevue', 'fastapi', 'shioaji', 'claude', 'vercel', 'render'],
    year: 2025,
    scale: 'production'
  },
  {
    id: 'dashtrade',
    name: {
      'zh-TW': 'DashTrade AI 技術分析',
      en: 'DashTrade AI Technical Analysis',
      ja: 'DashTrade AI テクニカル分析'
    },
    description: {
      'zh-TW': '台股美股日股多市場支援，RSI/KD/MACD/布林通道、雙引擎分析、每日自動預測 80 支股票並隔日驗證',
      en: 'Multi-market support (TW/US/JP stocks): RSI/KD/MACD/Bollinger Bands, dual-engine analysis, daily auto-prediction of 80 stocks with next-day validation',
      ja: '台湾・米国・日本株マルチマーケット対応、RSI/KD/MACD/ボリンジャーバンド、デュアルエンジン分析、毎日80銘柄自動予測＆翌日検証'
    },
    category: 'trading',
    tags: ['vue3', 'shoelace', 'fastapi', 'sqlmodel', 'neon', 'vercel', 'render'],
    year: 2025,
    scale: 'personal'
  },

  // === 開發工具 (devtools) ===
  {
    id: 'dash-devtools',
    name: {
      'zh-TW': 'DashAI DevTools',
      en: 'DashAI DevTools',
      ja: 'DashAI DevTools'
    },
    description: {
      'zh-TW': '開發工具集：E2E 測試、Gemini AI 視覺分析、程式碼品質檢查、OpenSpec 規格驅動、專案健康評分',
      en: 'Developer toolkit: E2E testing, Gemini AI visual analysis, code quality checks, OpenSpec spec-driven workflow, project health scoring',
      ja: '開発ツールキット：E2Eテスト、Gemini AI視覚分析、コード品質チェック、OpenSpec仕様駆動、プロジェクトヘルススコアリング'
    },
    category: 'devtools',
    tags: ['python', 'gemini', 'bash'],
    year: 2025,
    scale: 'personal'
  },
  {
    id: 'dash-skills',
    name: {
      'zh-TW': 'Claude Code Skills',
      en: 'Claude Code Skills',
      ja: 'Claude Code スキル'
    },
    description: {
      'zh-TW': '自建 6 + 外部收錄 17 個 Claude Code 技能，涵蓋 OpenSpec、FastAPI、Angular、UI/UX 設計等模板',
      en: '6 custom + 17 curated Claude Code skills covering OpenSpec, FastAPI, Angular, UI/UX design templates',
      ja: '自作6＋外部キュレーション17のClaude Codeスキル、OpenSpec・FastAPI・Angular・UI/UXデザインテンプレート'
    },
    category: 'devtools',
    tags: ['claude', 'bash'],
    year: 2025,
    scale: 'personal'
  },
  {
    id: 'git-security-hooks',
    name: {
      'zh-TW': 'Git Security Hooks',
      en: 'Git Security Hooks',
      ja: 'Git Security Hooks'
    },
    description: {
      'zh-TW': 'gitleaks pre-commit hook，自動掃描 API Key / Token / 密碼，阻擋提交、支援全域設定',
      en: 'Gitleaks pre-commit hook: auto-scan for API keys, tokens, passwords with commit blocking and global configuration support',
      ja: 'gitleaks pre-commitフック、API Key/Token/パスワード自動スキャン、コミットブロック、グローバル設定対応'
    },
    category: 'devtools',
    tags: ['bash', 'git'],
    year: 2025,
    scale: 'personal'
  },

  // === 個人作品 (personal) ===
  {
    id: 'sukuyodo',
    name: {
      'zh-TW': '宿曜道 運勢系統',
      en: 'Sukuyodo Fortune System',
      ja: '宿曜道 運勢システム'
    },
    description: {
      'zh-TW': '日本真言宗宿曜占星術，27 宿分析、九曜流年、雙人相性診斷、吉日查詢，經六輪驗證通過',
      en: 'Japanese Shingon Sukuyodo astrology: 27 mansion analysis, nine-planet annual fortune, dual compatibility diagnosis, auspicious day lookup, 6-round verified',
      ja: '真言宗宿曜占星術、27宿分析、九曜流年、二人相性診断、吉日検索、6ラウンド検証済み'
    },
    category: 'personal',
    tags: ['vue3', 'primevue', 'fastapi', 'neon', 'vercel', 'render'],
    year: 2025,
    scale: 'production'
  },
  {
    id: 'job-crawler',
    name: {
      'zh-TW': '外包平台職缺爬蟲',
      en: 'Freelance Job Platform Crawler',
      ja: 'フリーランス求人クローラー'
    },
    description: {
      'zh-TW': '日本 Lancers/CrowdWorks/Coconala + 美國 Upwork/Freelancer 多平台爬取，Claude API 雙語翻譯',
      en: 'Multi-platform crawler for Japan (Lancers/CrowdWorks/Coconala) & US (Upwork/Freelancer) with Claude API bilingual translation',
      ja: '日本（Lancers/CrowdWorks/Coconala）＋米国（Upwork/Freelancer）マルチプラットフォームクローラー、Claude API二言語翻訳'
    },
    category: 'personal',
    tags: ['vue3', 'shoelace', 'fastapi', 'neon', 'claude'],
    year: 2025,
    scale: 'personal'
  },
  {
    id: 'jinkochino',
    name: {
      'zh-TW': '人工知能股份有限公司官網 (已停運)',
      en: 'Jinkochino Ltd. Official Website (Dissolved)',
      ja: '人工知能株式会社公式サイト (解散済み)'
    },
    description: {
      'zh-TW': '已解散公司官方網站，正體中文/English/日本語三語切換、深色淺色主題、響應式設計',
      en: 'Dissolved company official website: Traditional Chinese/English/Japanese trilingual, dark/light theme, responsive design',
      ja: '解散済み企業公式サイト、繁体中文/English/日本語トリリンガル、ダーク/ライトテーマ、レスポンシブデザイン'
    },
    category: 'personal',
    tags: ['vite', 'shoelace', 'vercel'],
    year: 2024,
    scale: 'personal',
    url: 'https://portfolio.dashai.dev/'
  },
  {
    id: 'dashastro',
    name: {
      'zh-TW': 'DashAstro 占星工具平台',
      en: 'DashAstro Astrology Platform',
      ja: 'DashAstro 占星プラットフォーム'
    },
    description: {
      'zh-TW': '融合宿曜道、西方占星、塔羅、日本吉日曆，Skyfield 行星計算 + Claude AI 解讀，9 組 API 路由',
      en: 'Blending Sukuyodo, Western astrology, tarot, and Japanese auspicious calendar: Skyfield planetary calculations + Claude AI interpretation, 9 API routes',
      ja: '宿曜道・西洋占星術・タロット・日本吉日暦を融合、Skyfield惑星計算＋Claude AI解読、9組APIルート'
    },
    category: 'personal',
    tags: ['vue3', 'shoelace', 'fastapi', 'sqlmodel', 'neon', 'claude', 'vercel', 'render'],
    year: 2025,
    scale: 'personal'
  },
  {
    id: 'dashai-portfolio',
    name: {
      'zh-TW': 'DashAI Portfolio',
      en: 'DashAI Portfolio',
      ja: 'DashAI ポートフォリオ'
    },
    description: {
      'zh-TW': '本作品集網站，Vue 3 + PrimeVue Aura 暗色主題，專案分類篩選與技術棧統計',
      en: 'This portfolio site: Vue 3 + PrimeVue Aura dark theme, project category filtering and tech stack statistics',
      ja: '本ポートフォリオサイト、Vue 3 + PrimeVue Auraダークテーマ、プロジェクトカテゴリフィルタリング＆技術スタック統計'
    },
    category: 'personal',
    tags: ['vue3', 'primevue', 'typescript', 'vite', 'vercel'],
    year: 2025,
    scale: 'personal'
  },

  // === 學習專案 (learning) ===
  {
    id: 'jlpt-n1-learner',
    name: {
      'zh-TW': 'JLPT 學習系統',
      en: 'JLPT Learning System',
      ja: 'JLPT 学習システム'
    },
    description: {
      'zh-TW': 'Claude AI 自適應學習，N5-N1 全級別支援、文法弱項追蹤、讀解練習、聽解男女聲切換、語速調整',
      en: 'Claude AI adaptive learning: N5-N1 full level support, grammar weak point tracking, reading comprehension, listening with male/female voice toggle, speed adjustment',
      ja: 'Claude AI適応学習、N5-N1全レベル対応、文法弱点追跡、読解練習、聴解男女音声切替、速度調整'
    },
    category: 'learning',
    tags: ['vue3', 'primevue', 'typescript', 'fastapi', 'claude'],
    year: 2025,
    scale: 'personal'
  },
  {
    id: 'toeic-practice',
    name: {
      'zh-TW': 'TOEIC 刷題系統',
      en: 'TOEIC Practice',
      ja: 'TOEIC 練習システム'
    },
    description: {
      'zh-TW': 'TOEIC Reading Part 5/6/7 獨立刷題 App，練習模式即時回饋、75 分鐘模擬考計時、成績趨勢追蹤與弱項分析，124 題離線題庫',
      en: 'Standalone TOEIC Reading drill app: Part 5/6/7 practice with instant feedback, 75-min timed mock test, score trend tracking and weak category analysis, 124-question offline bank',
      ja: 'TOEIC Reading Part 5/6/7 独立練習アプリ、即時フィードバック付き練習モード、75分模試タイマー、成績推移追跡＆弱点分析、124問オフライン問題集'
    },
    category: 'learning',
    tags: ['vue3', 'primevue', 'typescript', 'fastapi', 'sqlmodel', 'chartjs'],
    year: 2026,
    scale: 'personal'
  },
  {
    id: 'ai-english-tutor',
    name: {
      'zh-TW': 'AI 英語家教',
      en: 'AI English Tutor',
      ja: 'AI英語チューター'
    },
    description: {
      'zh-TW': '語音優先的英語口說練習工具，場景模擬對話、Web Speech API 語音輸入輸出、即時文法修正、對話匯出',
      en: 'Voice-first English speaking practice: scenario-based conversation, Web Speech API input/output, real-time grammar correction, chat export',
      ja: '音声ファースト英語スピーキング練習、シナリオベース会話、Web Speech API入出力、リアルタイム文法修正、チャットエクスポート'
    },
    category: 'learning',
    tags: ['vue3', 'primevue', 'typescript', 'fastapi', 'claude'],
    year: 2026,
    scale: 'personal'
  }
]
