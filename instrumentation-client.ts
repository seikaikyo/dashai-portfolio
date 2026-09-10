import * as Sentry from "@sentry/nextjs";

const dsn = process.env.NEXT_PUBLIC_SENTRY_DSN;

if (dsn) {
  Sentry.init({
    dsn,
    environment: process.env.NEXT_PUBLIC_VERCEL_ENV ?? "development",
    release: process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA,
    tracesSampleRate: 0.2,
    replaysSessionSampleRate: 0,
    replaysOnErrorSampleRate: 0,
    sendDefaultPii: false,
    // 瀏覽器擴充套件注入的雜訊，不是這個站的程式碼。微軟 Office 系套件會丟出
    // 一個不是 Error 的字串、沒有 stack，例如
    //   Object Not Found Matching Id:1, MethodName:update, ParamCount:4
    // 每個裝了那個套件的訪客都會產生一筆，會把真訊號淹掉。
    beforeSend(event, hint) {
      const raw = hint?.originalException;
      const text =
        typeof raw === "string" ? raw : (event.exception?.values?.[0]?.value ?? "");
      if (/Object Not Found Matching Id:\d+/.test(text)) return null;
      return event;
    },
  });
}

export const onRouterTransitionStart = Sentry.captureRouterTransitionStart;
