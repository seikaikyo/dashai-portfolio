# 瀏覽器防護標頭與相依套件修補

## Title

security-headers-and-deps：補上 CSP 把六項瀏覽器防護標頭補齊，並修掉 production 相依的 high 等級漏洞。

## Type

build / security（不含功能與 UI 變更）

## 變更內容

1. `next.config.ts` 既有的 `securityHeaders` 陣列補進 `Content-Security-Policy`。補完之後 `source: '/:path*'` 帶滿六項：

   | 標頭 | 值 | 本次 |
   |---|---|---|
   | X-Content-Type-Options | nosniff | 原有 |
   | X-Frame-Options | DENY | 原為 SAMEORIGIN，改齊 |
   | Referrer-Policy | strict-origin-when-cross-origin | 原有 |
   | Permissions-Policy | camera=(), microphone=(), geolocation=() | 原有 |
   | Strict-Transport-Security | max-age=63072000; includeSubDomains; preload | 原有 |
   | Content-Security-Policy | 見下 | 新增 |

   X-Frame-Options 改成 DENY 的理由：`vercel.json` 在平台層本來就發 DENY，兩邊值不一致；本站沒有任何 iframe，新增的 `frame-ancestors 'none'` 也是同一個立場。

2. CSP 依本站實際連線對象收斂。這是純靜態作品集，沒有 API route 也不打後端：
   - `connect-src` 除了 `'self'` 只加 `https://va.vercel-scripts.com` 與 `https://vitals.vercel-insights.com`（Vercel Analytics 與 Speed Insights）
   - `script-src` 只加 `https://va.vercel-scripts.com`
   - `font-src` 收到 `'self' data:`：字型走 `next/font/google` 建構期自託管，執行期不對 Google 發請求
   - `media-src 'self'`：專案介紹影片都在 `/public/videos/`
   - 連到 GitHub、LinkedIn、各 seikai.dev 站的是一般連結導覽，不受 CSP fetch 類指令管轄，不必列
   - `frame-ancestors 'none'` / `base-uri 'self'` / `form-action 'self'` / `object-src 'none'` / `upgrade-insecure-requests`
   - `'unsafe-inline'` 與 `'unsafe-eval'` 本輪保留：Next.js App Router hydration 現階段需要，收緊另案處理

3. 相依套件：跑 `npm audit fix`（不加 `--force`），並把 next 由 `16.2.2` 升到 `^16.3.4`（同屬 16.x，非 major），`eslint-config-next` 同步。

## 影響範圍

- 改動檔案：`next.config.ts`、`package.json`、`package-lock.json`、本提案檔
- 不動：任何頁面、元件、業務邏輯、tailwind、tsconfig、環境變數、`vercel.json`（含其 redirects 與既有 headers）
- 執行期影響：所有回應多帶 CSP；X-Frame-Options 由 SAMEORIGIN 變 DENY
- 風險點：CSP 若漏列來源會讓該資源被擋，所以本地啟 production server 驗過才推

## UI 規格

無 UI 變更。畫面、版面、文案、互動全部不動，本提案只影響 HTTP 回應標頭與套件版本。

## 測試計畫

1. `npx tsc --noEmit` 零錯誤
2. `npm run build` 成功
3. `npx next start -p 4400` 後 `curl -sI http://127.0.0.1:4400/` 六項標頭皆在
4. agent-browser 開 `/` 並滾到底載入延遲內容，console 過濾 `Content Security Policy` 與 `Refused to`，違規數必須為 0
5. `npm audit --omit=dev` 的 high 與 critical 歸零
6. push 後確認 Vercel 部署 Ready，線上 `curl -I https://seikai.dev/` 六項標頭皆在
