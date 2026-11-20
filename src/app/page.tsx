import BrandHeader from "@/components/BrandHeader";
import HeroSection from "@/components/HeroSection";
import AccessNotice from "@/components/AccessNotice";
import ActionButtons from "@/components/ActionButtons";
import CopyLinkButton from "@/components/CopyLinkButton";
import BrowserHelp from "@/components/BrowserHelp";
import Footer from "@/components/Footer";
import BackgroundMusic from "@/components/BackgroundMusic";
import { siteConfig } from "@/lib/config";

export default function HomePage() {
  return (
    <>
      {/* شکل‌های تزئینی شناور — تزئینی، خارج از جریان و غیرقابل تعامل */}
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="floaty absolute -right-24 top-24 h-56 w-56 rounded-full bg-accent/[0.07] blur-3xl" />
        <div className="floaty-slow absolute -left-20 bottom-16 h-64 w-64 rounded-full bg-accent2/[0.08] blur-3xl" />
      </div>

      <main className="mx-auto flex w-full max-w-2xl flex-col px-5 pb-[max(2.5rem,env(safe-area-inset-bottom))] pt-[max(1rem,env(safe-area-inset-top))] sm:px-8">
        <BrandHeader />
        <HeroSection />
        <AccessNotice />
        <ActionButtons />

        {siteConfig.mainSiteUrl ? (
          <section
            aria-label="کپی لینک کارگشا"
            className="reveal reveal-3 mt-4 flex items-center justify-center gap-3"
          >
            <span dir="ltr" className="select-all text-sm text-muted">
              https://kar-gosha.ir
            </span>
            <CopyLinkButton url={siteConfig.mainSiteUrl} label="کپی لینک کارگشا" className="js-only" />
          </section>
        ) : null}

        <BrowserHelp />
        <Footer />
      </main>

      <BackgroundMusic />
    </>
  );
}
