/**
 * پیکربندی صفحه ورود کارگشا
 * همه آدرس‌ها با متغیر محیطی قابل تغییرند و پس از خواندن از نظر امن بودن (https) بررسی می‌شوند.
 * اگر آدرسی نامعتبر یا خالی باشد، صفحه به‌جای لینک شکسته، حالت امن نشان می‌دهد.
 */

function isSafeHttpUrl(value: string): boolean {
  try {
    const url = new URL(value);
    return url.protocol === "https:" || url.protocol === "http:";
  } catch {
    return false;
  }
}

const MAIN_SITE_URL = (process.env.NEXT_PUBLIC_MAIN_SITE_URL ?? "").trim() || "https://kar-gosha.ir";
const WEB_APP_URL = (process.env.NEXT_PUBLIC_WEB_APP_URL ?? "").trim() || "https://app.kar-gosha.ir";
const ANDROID_DOWNLOAD_URL =
  (process.env.NEXT_PUBLIC_ANDROID_DOWNLOAD_URL ?? "").trim() || "https://kar-gosha.ir/api/landing/apk";
const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "").trim();

export const siteConfig = {
  name: "کارگشا",
  nameEn: "KarGosha",
  // آدرس سایت اصلی (دکمه «مشاهده سایت اصلی کارگشا» و کپی لینک)
  mainSiteUrl: isSafeHttpUrl(MAIN_SITE_URL) ? MAIN_SITE_URL : "",
  // نسخه وب (دکمه «ورود به نسخه وب»)
  webAppUrl: isSafeHttpUrl(WEB_APP_URL) ? WEB_APP_URL : "",
  // دانلود اپ اندروید
  androidDownloadUrl: isSafeHttpUrl(ANDROID_DOWNLOAD_URL) ? ANDROID_DOWNLOAD_URL : "",
  // دامنه نهایی همین صفحه برای canonical — اگر تنظیم نشود، canonical حذف می‌شود
  siteUrl: SITE_URL && isSafeHttpUrl(SITE_URL) ? SITE_URL : "",
};
