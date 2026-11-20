import { siteConfig } from "@/lib/config";

/** سال میلادی به ارقام فارسی */
function toFa(value: number | string): string {
  return String(value).replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[Number(d)]);
}

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-12 border-t border-white/[0.08] pb-2 pt-6 text-center">
      <div className="flex items-center justify-center gap-2.5 text-sm">
        {siteConfig.mainSiteUrl ? (
          <>
            <a
              href={siteConfig.mainSiteUrl}
              className="font-bold text-ink underline-offset-4 hover:text-accent hover:underline"
            >
              کارگشا
            </a>
            <span aria-hidden className="text-muted/50">
              ·
            </span>
            <a
              href={siteConfig.mainSiteUrl}
              dir="ltr"
              className="text-muted underline-offset-4 hover:text-accent hover:underline"
            >
              kar-gosha.ir
            </a>
          </>
        ) : (
          <span className="font-bold text-ink">کارگشا</span>
        )}
      </div>
      <p className="mt-2.5 text-xs text-muted/70">
        © {toFa(year)} کارگشا — تمام حقوق محفوظ است.
      </p>
    </footer>
  );
}
