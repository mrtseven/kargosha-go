import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { siteConfig } from "@/lib/config";
import "./globals.css";

/** فونت فارسی Peyda — محلی، بدون فونت ریموت */
const peyda = localFont({
  src: [
    { path: "../fonts/peyda-Regular.woff2", weight: "400", style: "normal" },
    { path: "../fonts/peyda-Bold.woff2", weight: "700", style: "normal" },
    { path: "../fonts/peyda-Black.woff2", weight: "900", style: "normal" },
  ],
  variable: "--font-peyda",
  display: "swap",
});

const TITLE = "کارگشا | دانلود اپلیکیشن و ورود به نسخه وب";
const DESCRIPTION =
  "دانلود اپلیکیشن کارگشا، ورود به نسخه وب و دسترسی به مجموعه‌ای از ابزارهای هوشمند و کاربردی.";

export const metadata: Metadata = {
  metadataBase: siteConfig.siteUrl ? new URL(siteConfig.siteUrl) : undefined,
  title: TITLE,
  description: DESCRIPTION,
  alternates: siteConfig.siteUrl ? { canonical: "/" } : undefined,
  openGraph: {
    type: "website",
    locale: "fa_IR",
    siteName: "کارگشا",
    title: TITLE,
    description: DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#080D1B",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fa" dir="rtl" className={peyda.variable}>
      <body className="min-h-dvh font-sans text-ink antialiased">
        {/* اگر جاوااسکریپت غیرفعال بود، دکمه‌های نیازمند JS پنهان می‌شوند؛
           همه محتوای اصلی و لینک‌ها بدون JS هم کار می‌کنند */}
        <noscript>
          <style>{".js-only{display:none !important}"}</style>
        </noscript>
        {children}
      </body>
    </html>
  );
}
