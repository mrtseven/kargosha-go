import { InfoIcon } from "./icons";

/**
 * اطلاعیه دسترسی — پیام اطلاعاتی است، نه محدودکننده.
 * هیچ تشخیص IP یا VPN انجام نمی‌شود؛ کارت همیشه دیده می‌شود.
 */
export default function AccessNotice() {
  return (
    <section
      aria-labelledby="access-notice-title"
      className="reveal reveal-4 mt-9 rounded-2xl border border-warn/25 bg-warn/[0.07] p-4 sm:p-5"
    >
      <div className="flex gap-3.5">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-warn/10 text-warn">
          <InfoIcon className="h-5 w-5" />
        </span>
        <div className="min-w-0">
          <h2 id="access-notice-title" className="text-[15px] font-bold text-warn">
            اطلاعیه مهم برای ورود به کارگشا
          </h2>
          <p className="mt-2 text-sm leading-7 text-ink/90">
            سایت کارگشا با آی‌پی ایران در دسترس است. لطفاً پیش از ورود، VPN یا فیلترشکن خود را خاموش
            کنید.
          </p>
          <p className="mt-1.5 text-sm leading-7 text-muted">
            در صورت فعال بودن VPN، ممکن است سایت یا نسخه وب به‌درستی باز نشود.
          </p>
        </div>
      </div>
    </section>
  );
}
