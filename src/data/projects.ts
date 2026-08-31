import type { Project } from './types'

export const projects: Project[] = [
  // === 旗艦作品 (featured) ===
  {
    id: 'smart-factory-demo',
    name: {
      'zh-TW': 'Smart Factory Demo - 智慧工廠全端展示',
      en: 'Smart Factory Demo - Full-Stack Manufacturing Showcase',
      ja: 'Smart Factory Demo - スマートファクトリー全スタック展示'
    },
    description: {
      'zh-TW': '25 年工廠經驗做成的互動系統。9 階段 x 54 子系統 CRUD x DashAI 15 工具（即時 NCR 分診、訂單排程、風險評估）x BCM 災害模擬 x 5 Agent 協作 x OEE 設備即時監控（SECS/GEM）x 跨頁訂單高亮追蹤 x 10 War Room TV。三語介面',
      en: '25 years of factory knowledge in one system. 9 stages x 54 subsystem CRUDs x DashAI with 15 tools (NCR triage, order scheduling, risk assessment) x BCM disaster simulation x 5-agent collaboration x OEE real-time equipment monitoring (SECS/GEM) x cross-page order highlighting x 10 War Room TVs. Trilingual.',
      ja: '工場現場25年の経験を一つのシステムに。9段階 x 54サブシステムCRUD x DashAI 15ツール（NCRトリアージ、受注振り分け、リスク評価）x BCM災害シミュレーション x 5エージェント協調 x OEEリアルタイム設備監視（SECS/GEM）x ページ横断注文ハイライト x War Room TV 10画面。三言語'
    },
    category: 'industry',
    tags: ['vue3', 'primevue', 'typescript', 'fastapi', 'sqlmodel', 'neon', 'claude', 'chartjs', 'vercel', 'render'],
    year: 2026,
    scale: 'production',
    url: 'https://factory.seikai.dev',
    screenshot: '/screenshots/smart-factory-demo.png',
    video: { en: '/videos/smart-factory-intro.en.mp4', ja: '/videos/smart-factory-intro.ja.mp4' }
  },

  {
    id: 'amc-analytics',
    name: {
      'zh-TW': 'AMC Analytics Demo - AMC 濾網資料科學方法論',
      en: 'AMC Analytics Demo - AMC Filter Data Science Methodology',
      ja: 'AMC Analytics Demo - AMC フィルター・データサイエンス手法'
    },
    description: {
      'zh-TW': '用公開資料重現前公司 NDA 限制下做的 AMC 濾網分析方法論。三個模型：Thomas 破過曲線 + XGBoost（R² 0.84）、LSTM + CatBoost 週期衰減（MAE 0.46）、Isolation Forest 批次異常（F1 0.84）。完整 MLOps：PSI + KS drift、週排程 retrain、BigQuery 指標歷史、drift 儀表板。Next.js 16 + FastAPI + BigQuery + GCP',
      en: 'Public-data reproduction of the AMC filter analytics methodology I ran at a previous employer under NDA. Three models: Thomas breakthrough + XGBoost (R² 0.84), LSTM + CatBoost cycle degradation (MAE 0.46), Isolation Forest batch QC (F1 0.84). Full MLOps loop: PSI + KS drift, weekly scheduled retrain, BigQuery metric history, drift dashboard. Next.js 16 + FastAPI + BigQuery + GCP',
      ja: '前職で NDA の制約下に実施した AMC フィルター分析の手法を公開データで再現。3 モデル：Thomas 破過曲線 + XGBoost（R² 0.84）、LSTM + CatBoost サイクル劣化（MAE 0.46）、Isolation Forest バッチ QC（F1 0.84）。MLOps フルループ：PSI + KS ドリフト、週次再学習、BigQuery メトリクス履歴、ドリフトダッシュボード。Next.js 16 + FastAPI + BigQuery + GCP'
    },
    category: 'side-project',
    tags: ['nextjs', 'react', 'typescript', 'tailwindcss', 'shadcn', 'fastapi', 'xgboost', 'catboost', 'pytorch', 'bigquery', 'gcp', 'vercel', 'render'],
    year: 2026,
    scale: 'prototype',
    url: 'https://amc-analytics.seikai.dev',
  },

  {
    id: 'fab-analytics',
    name: {
      'zh-TW': 'Fab Analytics - 半導體前段資料科學展示',
      en: 'Fab Analytics - Semiconductor Front-End Data Science Showcase',
      ja: 'Fab Analytics - 半導体前工程データサイエンス展示'
    },
    description: {
      'zh-TW': '用模擬資料展示半導體前段（wafer / lot / 設備 / 感測器 / 缺陷，製程節點 N3-N14）的端到端資料科學能力。BigQuery ETL、XGBoost / CatBoost 模型訓練、Isolation Forest 異常偵測、特徵重要度、資料治理模式。資料全為模擬，不取自任何公司。Next.js + FastAPI + BigQuery + GCP',
      en: 'End-to-end fab front-end data science on simulated data (wafers / lots / equipment / sensors / defects, nodes N3-N14). BigQuery ETL, XGBoost / CatBoost training, Isolation Forest anomaly detection, feature importance, data governance patterns. All data simulated, not derived from any company. Next.js + FastAPI + BigQuery + GCP',
      ja: 'シミュレーションデータで半導体前工程（wafer / lot / 設備 / センサー / 欠陥、プロセスノード N3-N14）のエンドツーエンドデータサイエンスを展示。BigQuery ETL、XGBoost / CatBoost 学習、Isolation Forest 異常検知、特徴量重要度、データガバナンス。データは全てシミュレーション、特定企業由来ではありません。Next.js + FastAPI + BigQuery + GCP'
    },
    category: 'side-project',
    tags: ['nextjs', 'react', 'typescript', 'tailwindcss', 'shadcn', 'fastapi', 'xgboost', 'catboost', 'bigquery', 'gcp', 'vercel', 'render'],
    year: 2026,
    scale: 'prototype',
    url: 'https://fab-analytics.seikai.dev',
  },

  {
    id: 'gotech-demo',
    name: {
      'zh-TW': 'GoTech Demo - 企業架構互動展示',
      en: 'GoTech Demo - Enterprise Architecture Showcase',
      ja: 'GoTech Demo - エンタープライズアーキテクチャ展示'
    },
    description: {
      'zh-TW': '10K-1M 使用者規模的即時互動 Demo。五個場景：高併發 Goroutine Pool + Singleflight、K8s HPA 自動伸縮 + 滾動更新 + OOMKilled、分散式監控 RED Metrics + Error Budget、資料庫連線池飽和視覺化、即時協作編輯 CRDT。Scale Slider 拉動即時縮放所有數字（全場景為視覺化模擬，非真實壓測），三語切換（EN/JA/ZH）',
      en: 'Interactive demos scaling from 10K to 1M users. Five scenarios: high concurrency goroutine pool + singleflight, K8s HPA autoscaling + rolling update + OOMKilled, distributed monitoring RED metrics + error budget, database connection pool saturation, real-time collaborative editing CRDT. Scale slider dynamically adjusts all metrics. All scenarios are visual simulations, not real load tests. Trilingual (EN/JA/ZH).',
      ja: '1万〜100万ユーザー規模のインタラクティブデモ。5シナリオ：高並行処理Goroutine Pool + Singleflight、K8s HPAオートスケーリング + ローリングアップデート + OOMKilled、分散監視REDメトリクス + エラーバジェット、DBコネクションプール飽和、リアルタイム協調編集CRDT。スケールスライダーで全指標を動的調整（全シナリオは視覚化シミュレーションであり実負荷試験ではない）。三言語対応（EN/JA/ZH）'
    },
    category: 'side-project',
    tags: ['go', 'nextjs', 'react', 'typescript', 'tailwindcss', 'shadcn', 'kubernetes', 'websocket', 'vercel'],
    year: 2026,
    scale: 'prototype',
    url: 'https://gotech.seikai.dev',
    screenshot: '/screenshots/gotech-demo.png'
  },

  {
    id: 'trace-demo',
    name: {
      'zh-TW': 'Trace Demo - 七層分散式追蹤與根因歸因',
      en: 'Trace Demo - 7-Layer Distributed Tracing with Root Cause Attribution',
      ja: 'Trace Demo - 7層分散トレーシングと根本原因特定'
    },
    description: {
      'zh-TW': '用統一 trace ID 串起 7 個 layer（ISP / Host / VM / 應用 / 服務 / 資料庫 / 備援）的 timing 與 status，自動做根因歸因，把使用者反映、技術解析、建議 action 三段直接寫到 dashboard。內建拓樸設計器可編輯節點與連線，四種視覺風格。Next.js + shadcn + Sentry',
      en: 'Unified trace ID stitching timing and status across 7 layers (ISP / Host / VM / Application / Service / Database / Backup), with automatic root cause attribution that surfaces user-reported symptom, technical analysis, and suggested action on the dashboard. Built-in topology designer for editing nodes and edges. Four visual styles. Next.js + shadcn + Sentry',
      ja: '統一 trace ID で 7 層（ISP / Host / VM / アプリ / サービス / DB / バックアップ）の timing と status を連結し、自動で根本原因を特定。ユーザー報告・技術解析・推奨アクションをダッシュボードに表示。トポロジーデザイナーでノードとエッジを編集可能。4つのビジュアルスタイル。Next.js + shadcn + Sentry'
    },
    category: 'side-project',
    tags: ['nextjs', 'react', 'typescript', 'tailwindcss', 'shadcn', 'vercel'],
    year: 2026,
    scale: 'prototype',
    url: 'https://trace-demo.seikai.dev',
  },

  {
    id: 'motion-study',
    name: {
      'zh-TW': 'Motion Study - 動作對照分析',
      en: 'Motion Study - Operator Motion Comparison',
      ja: 'Motion Study - 動作対照分析'
    },
    description: {
      'zh-TW': '把老手的標準作業與待改善的對象作業並排，逐動素對齊時間軸、量化差異。標準工時（觀測時間 × 評比 × (1+寬放)）、動素分類佔比（有效/輔助/無效）、逐動素對照報告附 ECRS 對策，勾選對策即時重算改善後週期。兩個場景：電子桌面組裝、豬肉分切。三語介面、全 client-only、合成示範資料。Next.js 16 + React 19 + Tailwind v4',
      en: 'Places an expert\'s standard operation next to a target operation, aligns them element by element, and quantifies the gap. Standard time (observed time × rating × (1 + allowance)), motion-class breakdown (effective / auxiliary / ineffective), and an element-by-element report with ECRS countermeasures that recompute the improved cycle live when toggled. Two scenarios: electronics bench assembly, pork portioning. Trilingual, client-only, synthetic demo data. Next.js 16 + React 19 + Tailwind v4',
      ja: '熟練者の標準作業と改善対象の作業を並べ、動素単位で時間軸を揃えて差を定量化。標準時間（観測時間 × 評価係数 × (1 + 余裕率)）、動素分類比率（有効 / 補助 / 無効）、ECRS 改善策付きの動素別対照レポート（チェックで改善後サイクルを即時再計算）。2 シナリオ：電子機器の卓上組立、豚肉のカット。三言語・クライアントのみ・合成デモデータ。Next.js 16 + React 19 + Tailwind v4'
    },
    category: 'side-project',
    tags: ['nextjs', 'react', 'typescript', 'tailwindcss', 'vercel'],
    year: 2026,
    scale: 'prototype',
    url: 'https://motion.seikai.dev',
  },

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
    scale: 'enterprise',
    narrative: {
      en: "The factory ran entirely on paper forms and disconnected Excel files. Tracking a batch required calling three departments. I spent time with each team -- dispatch, quality control, warehouse -- documented their actual workflows, then built a system that mirrors how they operate.",
      'zh-TW': '工廠完全靠紙本表單和分散的 Excel 運作。追蹤一批貨要打三個部門的電話。我花時間跟著每個團隊，派工、品管、倉庫，記錄他們實際的工作流程，再做出一套對應真實運作方式的系統。',
      ja: '工場は紙の帳票とバラバラのExcelだけで回っていました。バッチの追跡には3部門に電話する必要がありました。派遣、品管、倉庫、各チームと時間を過ごし、実際のワークフローを記録した上で、現場の運用に合わせたシステムを構築しました。',
    }
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
    scale: 'production',
    narrative: {
      en: "Operator motion was hard to decompose and SOP compliance relied on supervisors watching the floor. I mounted Tapo webcams on workstations, ran YOLO11 with pose estimation, decomposed each action's timing automatically, and flagged SOP deviations on the spot for the IE team. AOI defect classification feeds into automated 8D report generation -- from detection to corrective report without manual handoff.",
      'zh-TW': '操作員動作拆不開，SOP 遵循度只能靠主管現場看。我把 Tapo webcam 架上工作站，YOLO11 加姿勢推定跑起來，每個動作的時間自動拆出來，SOP 偏差當場標給 IE 團隊審。AOI 缺陷分類再串進 8D 報告自動生成，從判別到改善報告不用手動搬。',
      ja: 'オペレーターの動作分解が難しく、SOP 遵守は現場監督の目視に頼っていました。作業ステーションに Tapo webcam を取り付け、YOLO11 + 姿勢推定を動かし、各動作のタイミングを自動分解、SOP 逸脱をその場で IE チームにフラグ。AOI 欠陥分類は 8D レポート自動生成にフィード -- 検出から改善レポートまで手動の受け渡しなし。',
    }
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
    scale: 'production',
    narrative: {
      en: "Warehouse workflows were handwritten with manual transport, and batch misplacement was common. I built AMR dispatch simulation with A* pathfinding to preview conflict scenarios; RFID product lifecycle tracking wired into WMS so every stage from receiving to shipping has event records; a visual label template editor lets warehouse operators edit versions themselves instead of filing tickets.",
      'zh-TW': '倉庫工作流手寫加人工搬運，批量錯置常見。我做了 AMR 調度模擬加 A* 路徑規劃，跑完排程預估衝突情境；RFID 產品生命週期追蹤接上 WMS，從入庫到出貨每階段都有事件記錄；標籤樣板視覺化編輯器讓倉管自己改版，不用再開 ticket。',
      ja: '倉庫ワークフローは手書き+手搬送で、ロット誤配置が多発していました。A* 経路探索を用いた AMR 配車シミュレーションで競合シナリオを事前確認、RFID 製品ライフサイクル追跡を WMS に接続、入庫から出荷まで各段階にイベント記録、ラベルテンプレートのビジュアルエディタで倉庫オペレーター自身がバージョン編集可能、チケット起票不要に。',
    }
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
      en: 'Quality management following ISO principles: full 8D problem-solving workflow (D0-D8), SPC statistical process control with control charts, AI-assisted analysis, AES-encrypted report export',
      ja: 'ISO準拠品質管理、8D問題解決フルワークフロー（D0-D8）、SPC統計的工程管理＆管理図、AI支援分析、AES暗号化レポートエクスポート'
    },
    category: 'industry',
    tags: ['vite', 'javascript', 'python', 'streamlit', 'shoelace'],
    year: 2024,
    scale: 'production',
    narrative: {
      en: "Quality was run on paper 8D forms and Excel SPC charts. I digitized the full 8D workflow D0 through D8 with structured fields and approvals at each step, added AI assistance for engineers filling in root-cause analysis, rendered SPC charts automatically, and exported reports AES-encrypted for customer delivery instead of manual packaging.",
      'zh-TW': '品管原本靠紙本 8D 表單加 Excel SPC 管制圖。我把 8D 全流程 D0 到 D8 數位化，每一步有欄位與簽核，AI 輔助讓工程師填根因分析時有參考；SPC 圖表自動化產出，報表用 AES 加密匯出給客戶，不用再人工打包壓縮。',
      ja: '品質管理は紙の 8D 帳票と Excel の SPC 管理図で回していました。8D フルワークフロー D0 から D8 までをデジタル化、各ステップに構造化フィールドと承認、AI が根本原因分析の記入を補助、SPC チャートは自動レンダリング、レポートは AES 暗号化で客先配信、手動パッケージング不要。',
    }
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
    tags: ['fastapi', 'neon', 'logto', 'vercel', 'render', 'python', 'javascript', 'prisma', 'github-actions'],
    year: 2025,
    scale: 'enterprise',
    narrative: {
      en: "Internal tools were scattered across a dozen systems -- logging into one meant typing a password five times. I built SSO unified auth with 130+ permission items organized into RBAC, an API gateway with OpenAPI docs so whoever takes over can read the interfaces, and handled cross-cutting utilities like contractor access control, DB backup scheduling, carbon inventory, and SSL certificate management as shared services instead of scattered tools.",
      'zh-TW': '企業內部資訊散在十幾個工具裡，登入一個系統要輸五次密碼。我做了 SSO 統一認證，把 130+ 個權限項目整理成一套 RBAC；API 閘道器加 OpenAPI 文件讓後續接手的人看得懂介面；承攬商門禁、DB 備份、碳盤查、SSL 憑證管理這類橫向需求當共用服務一次處理，不再是零散工具。',
      ja: '社内ツールが十数個に分散、一つログインするだけでパスワードを 5 回入力する状況。130+ の権限を RBAC に整理した SSO 統合認証を構築、OpenAPI ドキュメント付き API ゲートウェイで後任が仕様を読めるように、請負業者入退管理、DB バックアップ、炭素インベントリ、SSL 証明書管理を横断共通サービスとして一括整備、散在ツールから脱却。',
    }
  },

  {
    id: 'go-factory-io',
    name: {
      'zh-TW': 'go-factory-io - 開源 Go SECS/GEM Driver',
      en: 'go-factory-io - Open-Source Go SECS/GEM Driver',
      ja: 'go-factory-io - オープンソース Go SECS/GEM ドライバー'
    },
    description: {
      'zh-TW': '開源 SECS/GEM 設備驅動，E5/E30/E37 完整實作，其餘（E87/E40/E90/E94/E116/E187/E191）部分實作，整合 HSMS、OPC-UA、MQTT、Modbus TCP、gRPC 五種協定，參考 IEC 62443 SL4 設計原則（未取得認證，simulator 驗證）。單一 static binary，可跨編譯至 ARM64',
      en: 'Open-source SECS/GEM equipment driver: E5/E30/E37 fully implemented, others (E87/E40/E90/E94/E116/E187/E191) partially implemented, integrating HSMS, OPC-UA, MQTT, Modbus TCP, and gRPC. References IEC 62443 SL4 design principles (not certified, simulator-verified). Single static binary, cross-compiles to ARM64.',
      ja: 'オープンソースSECS/GEM設備ドライバー、E5/E30/E37を完全実装、その他（E87/E40/E90/E94/E116/E187/E191）は部分実装。HSMS、OPC-UA、MQTT、Modbus TCP、gRPCの5プロトコル統合。IEC 62443 SL4の設計原則を参考（認証取得なし、シミュレーター検証）。単一スタティックバイナリ、ARM64クロスコンパイル対応'
    },
    category: 'industry',
    tags: ['go', 'secs-gem', 'hsms', 'opcua', 'mqtt', 'modbus', 'grpc', 'iec62443', 'prometheus'],
    year: 2026,
    scale: 'personal',
    url: 'https://github.com/seikaikyo/go-factory-io',
    video: { en: '/videos/go-factory-io-showcase.mp4' },
    narrative: {
      en: "Four repositories that form a complete industrial edge stack. The SECS/GEM driver fully implements SEMI E5/E30/E37, with partial support for others (E87/E40/E90/E94/E116/E187/E191). The edge gateway bridges devices to MES through a plugin architecture. The OT security scanner maps compliance against IEC 62443 and NIST CSF 2.0. The API gateway ties them together. Each compiles to a single binary deployable on ARM64 hardware.",
      'zh-TW': '四個 repo 組成完整的工業邊緣棧。SECS/GEM driver 完整實作 SEMI E5/E30/E37，其餘（E87/E40/E90/E94/E116/E187/E191）部分實作。邊緣閘道器透過插件架構橋接設備到 MES。OT 資安掃描器對照 IEC 62443 和 NIST CSF 2.0 做合規檢查。API 閘道器把它們串起來。每個都編譯成單一 binary，可部署在 ARM64 硬體上。',
      ja: '4つのリポジトリで完全な産業エッジスタックを構成。SECS/GEMドライバーは SEMI E5/E30/E37 を完全実装、その他（E87/E40/E90/E94/E116/E187/E191）は部分実装。エッジゲートウェイはプラグインアーキテクチャでデバイスをMESに接続。OTセキュリティスキャナーはIEC 62443とNIST CSF 2.0のコンプライアンスを検証。APIゲートウェイがそれらを統合。各リポは単一バイナリにコンパイルされ、ARM64ハードウェアにデプロイ可能。',
    }
  },
  {
    id: 'secsgem-mcp-server',
    name: {
      'zh-TW': 'SECS/GEM MCP Server',
      en: 'SECS/GEM MCP Server',
      ja: 'SECS/GEM MCPサーバー'
    },
    description: {
      'zh-TW': 'Claude Code MCP Server，用自然語言操作半導體設備。包裝 go-factory-io REST API，10 個工具涵蓋設備監控（SV/EC/告警/OEE）、遠端指令、FOUP 管理、製程工作控制、E191 資安狀態',
      en: 'MCP Server for Claude Code -- control semiconductor equipment with natural language. Wraps go-factory-io REST API with 10 tools: equipment monitoring (SV/EC/alarms/OEE), remote commands, carrier management, process jobs, E191 security status.',
      ja: 'Claude Code用MCPサーバー。自然言語で半導体装置を制御。go-factory-io REST APIをラップ、10ツール：設備監視（SV/EC/アラーム/OEE）、リモートコマンド、キャリア管理、プロセスジョブ、E191セキュリティ'
    },
    category: 'industry',
    tags: ['python', 'fastmcp', 'secs-gem', 'claude', 'mcp'],
    year: 2026,
    scale: 'personal',
    url: 'https://github.com/seikaikyo/secsgem-mcp-server',
    narrative: {
      en: "An MCP Server that wraps go-factory-io, allowing Claude Code to interact with semiconductor equipment through natural language. Translates requests like reading sensor values or starting process jobs into proper SECS-II message sequences.",
      'zh-TW': '包裝 go-factory-io 的 MCP Server，讓 Claude Code 可以用自然語言與半導體設備互動。將讀取感測器值或啟動製程等請求轉譯為正確的 SECS-II 訊息序列。',
      ja: 'go-factory-ioをラップしたMCPサーバー。Claude Codeが自然言語で半導体装置と対話できるようにします。センサー値の読み取りやプロセスジョブの開始などのリクエストを、適切なSECS-IIメッセージシーケンスに変換。',
    }
  },

  {
    id: 'shopfloor',
    name: {
      'zh-TW': 'shopfloor - 某食品集團生產表單數位化雛形',
      en: 'shopfloor - Shop Floor Control Prototype for a Food-Industry Group',
      ja: 'shopfloor - 某食品グループ 生産現場管理システム試作版'
    },
    description: {
      'zh-TW': '某食品集團生產表單數位化雛形（Shop Floor Control / SFC）。平板優先 PWA，以該集團內部實際導入上線為目標，非 demo 展示。Phase 1 範圍：屠體秤重 OCR（glm-ocr 紅漆豬號辨識）+ 加工課工時表 + 線性簽核 + 電子磅秤 PoC',
      en: 'Shop Floor Control prototype for a food-industry group meat processing facility. Tablet-first PWA, on-prem deployment target rather than demo. Phase 1: carcass weight OCR (glm-ocr for handwritten pig ID) + processing department timesheet + linear approval workflow + electronic scale PoC',
      ja: '某食品グループの食肉加工工場向け生産現場管理システム（Shop Floor Control）試作版。タブレット優先 PWA、デモではなくオンプレミス導入を視野に入れた設計。Phase 1：屠体重量 OCR（glm-ocr による手書き個体番号認識）+ 加工課工数記録 + 線形承認フロー + 電子計量器 PoC'
    },
    category: 'industry',
    tags: ['nextjs', 'react', 'typescript', 'tailwindcss', 'shadcn', 'fastapi', 'sqlmodel', 'neon', 'logto', 'ocr', 'pwa', 'iot'],
    year: 2026,
    scale: 'prototype',
  },

  {
    id: 'factory-designer',
    name: {
      'zh-TW': 'Factory Designer - MES 低程式碼流程 / 表單設計器',
      en: 'Factory Designer - MES Low-Code Workflow / Form Designer',
      ja: 'Factory Designer - MES ローコード ワークフロー / フォームデザイナー'
    },
    description: {
      'zh-TW': '製造執行系統的低程式碼設定層：拖放式流程設計器與表單設計器，讓線上主管不用寫 JSON 就能設定簽核流程與現場表單。三欄式（元件 / 畫布 / 屬性）介面、節點圖自動排版加 SVG 連線、欄位型別系統。純前端，定義存 localStorage 並可匯出 JSON。通用、不含特定客戶領域。Next.js + React 19 + Tailwind v4',
      en: 'Low-code configuration layer for MES: drag-and-drop workflow designer and form designer that let line supervisors configure approval flows and shop-floor forms without writing JSON. Three-pane palette / canvas / properties layout, node-graph auto-layout with SVG edge routing, field-type system. Client-only, definitions persist to localStorage and export as JSON. Generic, domain-neutral. Next.js + React 19 + Tailwind v4',
      ja: 'MES のローコード設定層：ドラッグ＆ドロップのワークフローデザイナーとフォームデザイナー。ライン監督者が JSON を書かずに承認フローと現場フォームを設定可能。三ペイン（パレット / キャンバス / プロパティ）、ノードグラフ自動レイアウト＋SVG エッジルーティング、フィールド型システム。クライアントのみ、定義は localStorage 保存＆JSON エクスポート。汎用・ドメイン非依存。Next.js + React 19 + Tailwind v4'
    },
    category: 'industry',
    tags: ['nextjs', 'react', 'typescript', 'tailwindcss', 'vercel'],
    year: 2026,
    scale: 'prototype',
    url: 'https://designer.seikai.dev',
  },

  {
    id: 'go-edge-gateway',
    name: {
      'zh-TW': 'go-edge-gateway - 工業邊緣閘道器',
      en: 'go-edge-gateway - Industrial Edge Gateway',
      ja: 'go-edge-gateway - 産業エッジゲートウェイ'
    },
    description: {
      'zh-TW': '模組化邊緣閘道器，透過插件架構橋接工業設備到 MES/雲端。支援 SECS/GEM (HSMS)、Modbus TCP、MQTT 3.1.1/5.0，YAML 設定驅動。內建 Modbus 掃描 API + 嵌入式 React UI，掃描結果可一鍵轉為監控設定。單一 Go binary，ARM64 現場部署',
      en: 'Modular edge gateway bridging industrial devices to MES/cloud via plugin architecture. Supports SECS/GEM (HSMS), Modbus TCP, MQTT 3.1.1/5.0. YAML config-driven. Built-in Modbus scanner API with embedded React UI — scan results convert directly to monitoring config. Single Go binary for ARM64 field deployment.',
      ja: 'プラグインアーキテクチャで産業機器をMES/クラウドに橋渡しするモジュラーエッジゲートウェイ。SECS/GEM (HSMS)、Modbus TCP、MQTT 3.1.1/5.0対応。YAML設定駆動。内蔵Modbusスキャナー API + React UIで、スキャン結果を監視設定に直接変換。ARM64対応単一Goバイナリ'
    },
    category: 'industry',
    tags: ['go', 'secs-gem', 'modbus', 'mqtt', 'hsms', 'react'],
    year: 2026,
    scale: 'personal',
    url: 'https://github.com/seikaikyo/go-edge-gateway'
  },
  {
    id: 'go-ot-security',
    name: {
      'zh-TW': 'go-ot-security - OT/ICS 資安掃描平台',
      en: 'go-ot-security - OT/ICS Security Scanner',
      ja: 'go-ot-security - OT/ICSセキュリティスキャナー'
    },
    description: {
      'zh-TW': 'OT/ICS 資安評估與監控平台。子網掃描（8 種工業協定 + 11 種 IT 服務）、CVE/弱密碼偵測、合規對照（IEC 62443、NIST CSF 2.0、ISO 27001、SEMI E187）、Modbus 組態漂移偵測、內嵌 React 儀表板。單一 Go binary，可部署至 Raspberry Pi',
      en: 'OT/ICS security assessment platform. Subnet scanning (8 industrial protocols + 11 IT services), CVE/credential detection, compliance mapping (IEC 62443, NIST CSF 2.0, ISO 27001, SEMI E187), Modbus config drift detection, embedded React dashboard. Single Go binary for Raspberry Pi.',
      ja: 'OT/ICSセキュリティ評価プラットフォーム。サブネットスキャン（8産業プロトコル+11 ITサービス）、CVE/認証情報検出、コンプライアンスマッピング（IEC 62443、NIST CSF 2.0、ISO 27001、SEMI E187）、Modbus設定ドリフト検出、React組込みダッシュボード。Raspberry Pi対応単一Goバイナリ'
    },
    category: 'industry',
    tags: ['go', 'iec62443', 'nist', 'modbus', 'react'],
    year: 2026,
    scale: 'personal',
    url: 'https://github.com/seikaikyo/go-ot-security'
  },
  {
    id: 'dashai-go',
    name: {
      'zh-TW': 'dashai-go - Go 共用後端閘道器',
      en: 'dashai-go - Shared Go Backend Gateway',
      ja: 'dashai-go - 共通Goバックエンドゲートウェイ'
    },
    description: {
      'zh-TW': '共用 Go 後端閘道器，Chi 路由 + pgx (Neon PostgreSQL) + JWT (Logto) 認證。服務多個模組（宿曜道運勢/相性引擎、資安報告彙整、邊緣協調器），Rate limiting + CORS + 內嵌 React 監控儀表板。go-common 共用模組統一 response/middleware/auth。Render 自動部署',
      en: 'Shared Go backend gateway. Chi router + pgx (Neon PostgreSQL) + JWT (Logto) auth. Serves Shukuyo fortune/compatibility engine, security report aggregation, edge coordinator. Embedded React monitoring dashboard. Unified go-common modules for response/middleware/auth. Auto-deployed on Render.',
      ja: '共通Goバックエンドゲートウェイ。Chiルーター + pgx (Neon PostgreSQL) + JWT (Logto)認証。宿曜道運勢/相性エンジン、セキュリティレポート集約、エッジコーディネーターを提供。React組込み監視ダッシュボード。go-common共通モジュールで統一。Renderデプロイ'
    },
    category: 'industry',
    tags: ['go', 'chi', 'pgx', 'neon', 'jwt', 'render'],
    year: 2026,
    scale: 'personal',
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
      'zh-TW': '永豐 Shioaji API 整合 Claude AI 決策引擎，整張模擬交易（未接真實下單）、自動學習反思、策略調整、績效追蹤',
      en: 'Sinopac Shioaji API with Claude AI decision engine: full-lot paper trading (simulation, live order routing not connected), auto-learning with reflection, strategy adjustment, performance tracking',
      ja: '永豊Shioaji API＋Claude AI意思決定エンジン、単元株シミュレーション取引（実発注は未接続）、自動学習＆反省、戦略調整、パフォーマンス追跡'
    },
    category: 'trading',
    tags: ['vue3', 'primevue', 'fastapi', 'shioaji', 'claude', 'render'],
    year: 2025,
    scale: 'prototype'
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
    scale: 'personal',
    narrative: {
      en: "Technical analysis across Taiwan, US, and Japan markets. Generates daily predictions for 80 stocks using RSI, KD, MACD, and Bollinger Bands, then validates against next-day results. A testing ground for evaluating whether pattern-based signals carry predictive weight in practice.",
      'zh-TW': '台股、美股、日股的技術分析。每日用 RSI、KD、MACD、布林通道對 80 支股票產出預測，隔日驗證結果。用來測試型態訊號在實務上是否具有預測力。',
      ja: '台湾・米国・日本市場のテクニカル分析。RSI、KD、MACD、ボリンジャーバンドで毎日80銘柄の予測を生成し、翌日の結果で検証。パターンベースのシグナルが実際に予測力を持つかを検証する場。',
    }
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
      'zh-TW': '開發工具集：E2E 測試、Gemini AI 視覺分析、程式碼品質檢查、語意層驗證（Next.js/i18n/a11y）、OpenSpec 規格驅動、專案健康評分；已發佈於 PyPI（pip install dash-devtools）',
      en: 'Developer toolkit: E2E testing, Gemini AI visual analysis, code quality checks, semantic-layer validation (Next.js/i18n/a11y), OpenSpec spec-driven workflow, project health scoring; published on PyPI (pip install dash-devtools)',
      ja: '開発ツールキット：E2Eテスト、Gemini AI視覚分析、コード品質チェック、セマンティック層検証（Next.js/i18n/a11y）、OpenSpec仕様駆動、プロジェクトヘルススコアリング；PyPIに公開（pip install dash-devtools）'
    },
    category: 'devtools',
    tags: ['python', 'gemini', 'bash'],
    year: 2025,
    scale: 'personal',
    url: 'https://github.com/seikaikyo/dash-devtools'
  },
  {
    id: 'dash-skills',
    name: {
      'zh-TW': 'Claude Code Skills',
      en: 'Claude Code Skills',
      ja: 'Claude Code スキル'
    },
    description: {
      'zh-TW': '自建 9 + 外部收錄 45 個 Claude Code 技能，涵蓋 OpenSpec、FastAPI、Angular、UI/UX 設計等模板',
      en: '9 custom + 45 curated Claude Code skills covering OpenSpec, FastAPI, Angular, UI/UX design templates',
      ja: '自作9＋外部キュレーション45のClaude Codeスキル、OpenSpec・FastAPI・Angular・UI/UXデザインテンプレート'
    },
    category: 'devtools',
    tags: ['claude', 'bash'],
    year: 2025,
    scale: 'personal',
    url: 'https://github.com/seikaikyo/dash-skills'
  },
  {
    id: 'claude-code-skills',
    name: {
      'zh-TW': 'Claude Code Skill Pack (公開版)',
      en: 'Claude Code Skill Pack (Public)',
      ja: 'Claude Code スキルパック (公開版)'
    },
    description: {
      'zh-TW': '7 個可重用的 Claude Code 技能包：OpenSpec 規格驅動、建構錯誤修復、OWASP 安全審查、死碼清理、架構稽核、FastAPI 模式、Angular+PrimeNG 模式。一鍵安裝',
      en: '7 reusable Claude Code skills: OpenSpec spec-driven dev, build error resolver, OWASP security review, dead code cleanup, architecture audit, FastAPI patterns, Angular+PrimeNG patterns. One-command install.',
      ja: '再利用可能な7つのClaude Codeスキル：OpenSpec仕様駆動、ビルドエラー修復、OWASPセキュリティ審査、デッドコード削除、アーキテクチャ監査、FastAPIパターン、Angular+PrimeNGパターン。ワンコマンドインストール'
    },
    category: 'devtools',
    tags: ['claude', 'bash'],
    year: 2026,
    scale: 'personal',
    url: 'https://github.com/seikaikyo/claude-code-skills',
    narrative: {
      en: "Seven development patterns extracted from repeated cross-project workflows: spec-driven development, build error resolution, OWASP security review, dead code cleanup, architecture audit, and framework-specific patterns for FastAPI and Angular. Packaged as installable Claude Code skills.",
      'zh-TW': '從跨專案重複的工作流程中萃取出七個開發模式：規格驅動開發、建構錯誤修復、OWASP 安全審查、死碼清理、架構稽核，以及 FastAPI 和 Angular 的框架模式。打包為可安裝的 Claude Code 技能。',
      ja: 'プロジェクト横断的に繰り返される7つの開発パターンを抽出：仕様駆動開発、ビルドエラー修復、OWASPセキュリティ審査、デッドコード削除、アーキテクチャ監査、FastAPIとAngularのフレームワークパターン。インストール可能なClaude Codeスキルとしてパッケージ化。',
    }
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
    scale: 'personal',
    url: 'https://github.com/seikaikyo/git-security-hooks'
  },

  {
    id: 'ai-red-team',
    name: {
      'zh-TW': 'AI Red Team Toolkit',
      en: 'AI Red Team Toolkit',
      ja: 'AI Red Team Toolkit'
    },
    description: {
      'zh-TW': 'LLM 對抗性安全測試工具，177 個攻擊模板涵蓋 12 類攻擊向量（含 RAG 污染、工具注入、幻覺誘導），支援三語介面與主流模型分群測試',
      en: 'LLM adversarial safety testing toolkit: 177 attack templates across 12 categories (incl. RAG poisoning, tool use injection, hallucination), trilingual UI (EN/ZH/JA), multi-vendor model testing',
      ja: 'LLM敵対的安全テストツール、177攻撃テンプレート12カテゴリ（RAGポイズニング・ツール注入・ハルシネーション含む）、三言語UI、マルチベンダーモデルテスト対応'
    },
    category: 'devtools',
    tags: ['vue3', 'primevue', 'typescript', 'fastapi', 'sqlmodel', 'claude'],
    year: 2026,
    scale: 'personal',
    url: 'https://ai-red-team.seikai.dev',
    screenshot: '/screenshots/ai-red-team.png',
    narrative: {
      en: "A structured collection of 177 adversarial attack templates across 12 categories, covering prompt injection, RAG poisoning, tool use hijacking, and bias detection. Three languages. Built after observing that most teams deploying AI features had no systematic way to test adversarial robustness.",
      'zh-TW': '177 個對抗性攻擊模板，涵蓋 12 類攻擊向量：prompt injection、RAG 污染、工具劫持、偏見偵測。三語支援。起因是觀察到多數部署 AI 功能的團隊缺乏系統性的對抗性測試方法。',
      ja: '177のアドバーサリアル攻撃テンプレート、12カテゴリ。プロンプトインジェクション、RAGポイズニング、ツールハイジャック、バイアス検出を網羅。三言語対応。AI機能をデプロイするチームの多くが体系的な敵対的テスト手段を持っていないことがきっかけ。',
    }
  },

  {
    id: 'dash-doc-generator',
    name: {
      'zh-TW': '企業文件產生器',
      en: 'Enterprise Document Generator',
      ja: '企業ドキュメントジェネレーター'
    },
    description: {
      'zh-TW': 'Python + Claude API 自動產生 21 種技術文件類型。前公司內部採用的前身版本曾為 16 套系統產出 240 份技術文件',
      en: 'Python + Claude API auto-generates 21 technical document types. An earlier internal predecessor at a previous employer produced 240 documents across 16 systems',
      ja: 'Python + Claude API による自動ドキュメント生成、21 種類の文書に対応。前職内部で採用された前身版は 16 システム向けに 240 件の技術文書を生成'
    },
    category: 'devtools',
    tags: ['python', 'bash'],
    year: 2025,
    scale: 'internal'
  },

  // === 個人作品 (personal) ===
  {
    id: 'shukuyo',
    name: {
      'zh-TW': '宿曜道 - 運勢 / HR 選才 / 獵頭配對',
      en: 'Shukuyodo - Fortune / HR Matching / Headhunter',
      ja: '宿曜道 - 運勢・HR選考・ヘッドハント'
    },
    description: {
      'zh-TW': '空海從唐朝帶回的宿曜經，做成現代分析平台。27 宿相性診斷（每筆結果追溯原典）、個人運勢、HR 選才、獵頭交叉矩陣。規則引擎，不用 LLM 推論，資料存瀏覽器。中日英三語',
      en: 'Kukai brought this sutra from the Tang Dynasty in 806 AD. I turned it into software. 27 mansion compatibility (every result links to source text), personal fortune, HR talent matching, headhunter cross-matrix. Rule-based engine, no LLM. Trilingual.',
      ja: '空海が唐から持ち帰った宿曜経をソフトウェアに。27宿相性診断（全結果に原典リンク）、個人運勢、HR適材適所、ヘッドハントクロス表。ルールベースエンジン、LLMなし。三言語対応'
    },
    category: 'personal',
    tags: ['nuxt3', 'vue3', 'primevue', 'go', 'fastapi', 'neon', 'vercel', 'render', 'i18n'],
    year: 2025,
    scale: 'production',
    url: 'https://shukuyo.seikai.dev',
    screenshot: '/screenshots/shukuyo.png',
    video: { en: '/videos/shukuyodo-intro.en.mp4', ja: '/videos/shukuyodo-intro.ja.mp4' },
    narrative: {
      en: "Based on the Sukuyodo sutra that Kukai brought from Tang Dynasty China in 806 AD. The original text from the Taisho canon (T21 No.1299) is translated into a rule-based engine covering 27 lunar mansions and six relationship types. Every result traces back to its source passage. No LLM inference involved. An HR compatibility module extends the same logic to team composition analysis.",
      'zh-TW': '根據空海西元 806 年從唐朝帶回的宿曜經。以大正藏 T21 No.1299 原典為基礎，轉譯成規則引擎，涵蓋 27 宿和六種關係類型。每筆結果都可追溯到原文段落。不涉及 LLM 推論。HR 相性模組將同一套邏輯延伸到團隊組成分析。',
      ja: '空海が806年に唐から持ち帰った宿曜経に基づくシステム。大正蔵 T21 No.1299 の原典をルールベースエンジンに変換し、27宿と6つの関係タイプを網羅。全結果は原典の該当箇所に遡及可能。LLM推論は使用していません。HR相性モジュールは同じロジックをチーム構成分析に拡張。',
    }
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
    scale: 'personal'
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
    tags: ['vue3', 'shoelace', 'fastapi', 'sqlmodel', 'neon', 'claude', 'render'],
    year: 2025,
    scale: 'personal',
    url: 'https://github.com/seikaikyo/DashAstro'
  },
  {
    id: 'dashai-portfolio',
    name: {
      'zh-TW': 'DashAI Portfolio',
      en: 'DashAI Portfolio',
      ja: 'DashAI ポートフォリオ'
    },
    description: {
      'zh-TW': '本作品集網站，Next.js 16 + React 19 + shadcn/ui 暗色主題，專案分類篩選與技術棧統計',
      en: 'This portfolio site: Next.js 16 + React 19 + shadcn/ui dark theme, project category filtering and tech stack statistics',
      ja: '本ポートフォリオサイト、Next.js 16 + React 19 + shadcn/ui ダークテーマ、プロジェクトカテゴリフィルタリング＆技術スタック統計'
    },
    category: 'personal',
    tags: ['nextjs', 'react', 'typescript', 'shadcn', 'vercel'],
    year: 2025,
    scale: 'personal',
    screenshot: '/screenshots/dashai-portfolio.png'
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
    scale: 'personal',
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
    scale: 'personal',
    url: 'https://github.com/seikaikyo/toeic-practice'
  },
  {
    id: 'ai-english-tutor',
    name: {
      'zh-TW': 'AI 英語面試家教',
      en: 'AI English Tutor',
      ja: 'AI英語面接チューター'
    },
    description: {
      'zh-TW': '英語面試口說練習平台。27 題面試題庫 + 離線即時計分、語音輸入/輸出（Web Speech API）、AI 文法修正與翻譯、Claude API 深度回饋、藍染設計系統、PWA 離線可用。企業級資安（CSP / Rate Limiting / DOMPurify）+ WCAG AA 無障礙合規',
      en: 'English interview practice platform. 27-question bank with offline scoring, voice I/O (Web Speech API), AI grammar correction & translation, Claude API deep feedback, Aizome design system, PWA offline-ready. Enterprise security (CSP / rate limiting / DOMPurify) + WCAG AA accessibility',
      ja: '英語面接練習プラットフォーム。27問の面接問題バンク＋オフライン即時採点、音声入出力（Web Speech API）、AI文法修正＆翻訳、Claude APIディープフィードバック、藍染デザインシステム、PWAオフライン対応。企業レベルセキュリティ＋WCAG AAアクセシビリティ'
    },
    category: 'learning',
    tags: ['vue3', 'primevue', 'typescript', 'fastapi', 'claude', 'vercel', 'render', 'web-speech', 'pwa'],
    year: 2026,
    scale: 'production',
    url: 'https://english.seikai.dev',
    screenshot: '/screenshots/ai-english-tutor.png',
    narrative: {
      en: "An English speaking practice platform designed around job interview scenarios. Voice input through Web Speech API, grammar analysis and feedback via Claude API. 27 interview questions with offline scoring. Available as a PWA for use without network connectivity.",
      'zh-TW': '針對求職面試場景設計的英語口說練習平台。透過 Web Speech API 語音輸入，Claude API 做文法分析和回饋。27 題面試題，支援離線評分。可作為 PWA 在無網路環境下使用。',
      ja: '就職面接を想定した英語スピーキング練習プラットフォーム。Web Speech APIによる音声入力、Claude APIによる文法分析とフィードバック。27の面接質問とオフライン採点に対応。PWAとしてネットワーク接続なしでも利用可能。',
    }
  }
]
