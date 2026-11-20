# کارگشا Go — صفحه ورود و دانلود

صفحه رسمی ورود برای بازدیدکنندگان **اینستاگرام**: دانلود اپلیکیشن اندروید کارگشا، ورود به نسخه وب و مشاهده سایت اصلی.

این پروژه **مستقل** است و به هیچ‌یک از سرویس‌های دیگر کارگشا وابسته نیست.

- **مخزن:** [github.com/mrtseven/kargosha-go](https://github.com/mrtseven/kargosha-go)
- **سایت اصلی:** [kar-gosha.ir](https://kar-gosha.ir)
- **نسخه وب:** [app.kar-gosha.ir](https://app.kar-gosha.ir)

## ویژگی‌ها

- Next.js 15 (App Router) + TypeScript + Tailwind CSS، کاملاً فارسی و راست‌به‌چپ
- Server Component به‌صورت پیش‌فرض؛ تنها یک کامپوننت کلاینت (کپی لینک)
- فونت فارسی Peyda به‌صورت محلی با `next/font` (بدون فونت ریموت)
- همه لینک‌ها و محتوا **بدون جاوااسکریپت** هم کار می‌کنند (Progressive Enhancement)
- تصویر اشتراک‌گذاری (Open Graph) با لوگوی واقعی کارگشا، تولیدشده در زمان اجرا
- پشتیبانی `prefers-reduced-motion`، فوکوس واضح، اهداف لمسی بزرگ (≥۵۶px)
- راهنمای «اگر لینک باز نشد» با `<details>` بومی (بدون JS)

## شروع سریع

```bash
npm install
npm run dev        # http://localhost:3000
```

## بیلد تولید

```bash
npm run build
npm start
```

## متغیرهای محیطی

همه آدرس‌ها پیش‌فرض امن و تأییدشده دارند (`.env.example` را ببینید):

| متغیر | پیش‌فرض | توضیح |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | — (خالی) | دامنه نهایی همین صفحه (مثلاً `https://kargosha-go.vercel.app` یا دامنه اختصاصی). برای canonical و متادیتای اشتراک‌گذاری. خالی = بدون canonical، بدون خطا. |
| `NEXT_PUBLIC_MAIN_SITE_URL` | `https://kar-gosha.ir` | سایت اصلی کارگشا |
| `NEXT_PUBLIC_WEB_APP_URL` | `https://app.kar-gosha.ir` | نسخه وب |
| `NEXT_PUBLIC_ANDROID_DOWNLOAD_URL` | `https://kar-gosha.ir/api/landing/apk` | دانلود APK رسمی (همیشه آخرین نسخه) |

هیچ راز یا کلید محرمانه‌ای در این پروژه استفاده نمی‌شود.

## استقرار در Vercel

1. مخزن [mrtseven/kargosha-go](https://github.com/mrtseven/kargosha-go) را باز کنید.
2. در [Vercel Dashboard](https://vercel.com/dashboard) → **Add New… → Project** → همان مخزن را Import کنید.
3. تنظیمات بیلد را دست نزنید (Next.js خودکار شناسایی می‌شود).
4. (اختیاری ولی توصیه‌شده) در بخش **Environment Variables** مقدار `NEXT_PUBLIC_SITE_URL` را روی دامنه نهایی بگذارید.
5. **Deploy** را بزنید.

پس از انتشار، اگر دامنه اختصاصی وصل کردید، همان را در `NEXT_PUBLIC_SITE_URL` بگذارید و یک بار دیگر Deploy کنید تا canonical درست شود.
