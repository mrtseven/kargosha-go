import { ChevronDownIcon } from "./icons";

/**
 * راهنمای باز کردن لینک در مرورگر اصلی — با <details> بومی،
 * بدون هیچ جاوااسکریپتی کار می‌کند (مناسب مرورگر درون‌برنامه‌ای اینستاگرام).
 */
export default function BrowserHelp() {
  return (
    <details className="reveal reveal-6 group mt-8 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04]">
      <summary className="flex cursor-pointer select-none list-none items-center justify-between gap-3 px-5 py-4 text-[15px] font-bold text-ink transition-colors hover:bg-white/[0.03] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-accent">
        اگر لینک باز نشد چه کار کنم؟
        <ChevronDownIcon className="h-5 w-5 shrink-0 text-muted transition-transform duration-200 group-open:rotate-180" />
      </summary>

      <div className="border-t border-white/[0.08] px-5 pb-5 pt-4">
        <ol className="list-decimal space-y-2.5 pr-5 text-sm leading-7 text-muted marker:font-bold marker:text-accent/80">
          <li>منوی مرورگر را باز کنید (معمولاً سه‌نقطه یا خط‌های افقی بالای صفحه).</li>
          <li>
            اگر گزینه‌ای مثل «باز کردن در کروم» یا «Open in browser» دیدید، آن را انتخاب کنید تا صفحه
            در مرورگر اصلی گوشی باز شود.
          </li>
          <li>
            اگر چنین گزینه‌ای نبود، لینک کارگشا را کپی کنید و در Chrome یا Safari باز کنید.
          </li>
          <li>پیش از ورود، اطلاعیه دسترسی را بخوانید و VPN یا فیلترشکن را خاموش کنید.</li>
        </ol>
        <p className="mt-3.5 text-xs leading-6 text-muted/75">
          نام و جای گزینه‌ها در نسخه‌های مختلف اینستاگرام ممکن است کمی متفاوت باشد.
        </p>
      </div>
    </details>
  );
}
