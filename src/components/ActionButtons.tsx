import type { ReactNode } from "react";
import { siteConfig } from "@/lib/config";
import { AndroidIcon, GlobeIcon, DownloadIcon } from "./icons";

/** کلاس پایه همه دکمه‌ها — حداقل ۵۶px برای لمس راحت، فوکوس واضح، RTL */
const BTN =
  "inline-flex min-h-[56px] w-full select-none items-center justify-center gap-2.5 rounded-2xl px-5 text-[15px] font-bold transition-all duration-200 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-base";

const BTN_PRIMARY = `${BTN} bg-[linear-gradient(100deg,#39E6C0,#648BFF)] text-[#07121D] shadow-glow hover:brightness-110 hover:shadow-[0_16px_46px_-10px_rgba(57,230,192,0.55)]`;

const BTN_SECONDARY = `${BTN} border border-white/10 bg-white/[0.06] text-ink hover:border-white/20 hover:bg-white/[0.09]`;

const BTN_GHOST = `${BTN} border border-white/10 bg-transparent text-muted hover:bg-white/[0.05] hover:text-ink`;

function DisabledButton({ icon, label }: { icon: ReactNode; label: string }) {
  return (
    <div className={`${BTN_PRIMARY} cursor-not-allowed opacity-55`} aria-disabled="true">
      {icon}
      <span>{label}</span>
    </div>
  );
}

/** سه دکمه اصلی: ورود به نسخه وب، دانلود اندروید، سایت اصلی */
export default function ActionButtons() {
  const { webAppUrl, androidDownloadUrl, mainSiteUrl } = siteConfig;

  return (
    <section aria-label="دسترسی‌های اصلی" className="reveal reveal-5 mt-8 flex flex-col gap-3">
      {webAppUrl ? (
        <a href={webAppUrl} target="_blank" rel="noopener noreferrer" className={BTN_PRIMARY}>
          <GlobeIcon className="h-5 w-5" />
          <span>ورود به نسخه وب</span>
        </a>
      ) : (
        <DisabledButton icon={<GlobeIcon className="h-5 w-5" />} label="ورود به نسخه وب" />
      )}

      {androidDownloadUrl ? (
        <>
          <a href={androidDownloadUrl} className={BTN_SECONDARY}>
            <AndroidIcon className="h-5 w-5" />
            <span>دانلود اپلیکیشن اندروید</span>
            <DownloadIcon className="h-5 w-5 opacity-70" />
          </a>
          <p className="-mt-1.5 text-center text-xs text-muted/80">
            فایل رسمی APK، مستقیم از سرور کارگشا
          </p>
        </>
      ) : (
        <>
          <DisabledButton icon={<AndroidIcon className="h-5 w-5" />} label="دانلود اپلیکیشن اندروید" />
          <p className="-mt-1.5 text-center text-xs text-muted/80">
            لینک دانلود به‌زودی از این صفحه فعال می‌شود
          </p>
        </>
      )}

      {mainSiteUrl ? (
        <a href={mainSiteUrl} className={BTN_GHOST}>
          <span>مشاهده سایت اصلی کارگشا</span>
        </a>
      ) : (
        <DisabledButton icon={<span>مشاهده سایت اصلی کارگشا</span>} label="" />
      )}
    </section>
  );
}
