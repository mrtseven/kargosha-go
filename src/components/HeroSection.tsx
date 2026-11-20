import Image from "next/image";

/**
 * بخش اصلی: لوگو با پس‌زمینه سینمایی چندلایه — فقط CSS (بدون کتابخانه).
 * لایه‌ها: سحابی چرخان، سه قوس مداری با سرعت/جهت متفاوت، حلقه‌های سونار،
 * جرقه‌های شناور و هسته درخشان. همه انیمیشن‌ها transform/opacity هستند
 * و با prefers-reduced-motion خاموش می‌شوند.
 */
export default function HeroSection() {
  return (
    <section className="mt-8 flex flex-col items-center text-center sm:mt-10">
      <div className="relative">
        {/* انیمیشن سینمایی پشت لوگو — صرفاً تزئینی */}
        <div className="logo-aura absolute -inset-10 sm:-inset-14" aria-hidden>
          {/* سحابی چرخان */}
          <span className="aura-nebula" />
          {/* جاروی نور */}
          <span className="aura-sweep" />
          {/* قوس‌های مداری */}
          <svg className="aura-orbit o1" viewBox="0 0 100 100" fill="none">
            <circle cx="50" cy="50" r="48" stroke="#39E6C0" strokeWidth="1.1" strokeLinecap="round" strokeDasharray="78 224" opacity="0.85" />
          </svg>
          <svg className="aura-orbit o2" viewBox="0 0 100 100" fill="none">
            <circle cx="50" cy="50" r="47" stroke="#648BFF" strokeWidth="0.9" strokeLinecap="round" strokeDasharray="46 250" opacity="0.7" />
          </svg>
          <svg className="aura-orbit o3" viewBox="0 0 100 100" fill="none">
            <circle cx="50" cy="50" r="46" stroke="#9B7BFF" strokeWidth="0.8" strokeLinecap="round" strokeDasharray="26 263" opacity="0.6" />
          </svg>
          {/* حلقه‌های سونار */}
          <span className="aura-ring r1" />
          <span className="aura-ring r2" />
          {/* هسته درخشان */}
          <span className="aura-core" />
          {/* جرقه‌های شناور */}
          <i className="aura-spark top-[4%] left-[26%] bg-accent shadow-[0_0_10px_2px_rgba(57,230,192,0.75)] [animation-delay:.2s]" />
          <i className="aura-spark top-[16%] right-[6%] w-[3px] h-[3px] bg-accent2 shadow-[0_0_9px_2px_rgba(100,139,255,0.75)] [animation-delay:1.1s]" />
          <i className="aura-spark top-[46%] right-[1%] w-[3px] h-[3px] bg-[#9B7BFF] shadow-[0_0_9px_2px_rgba(155,123,255,0.7)] [animation-delay:2.2s]" />
          <i className="aura-spark bottom-[10%] right-[18%] bg-accent shadow-[0_0_10px_2px_rgba(57,230,192,0.7)] [animation-delay:3.1s]" />
          <i className="aura-spark bottom-[4%] left-[38%] w-[3px] h-[3px] bg-accent2 shadow-[0_0_9px_2px_rgba(100,139,255,0.7)] [animation-delay:3.9s]" />
          <i className="aura-spark top-[30%] left-[2%] bg-[#9B7BFF] shadow-[0_0_10px_2px_rgba(155,123,255,0.7)] [animation-delay:4.7s]" />
        </div>

        <Image
          priority
          src="/images/kargosha-logo.png"
          alt="لوگوی کارگشا"
          width={144}
          height={144}
          sizes="(max-width: 640px) 128px, 144px"
          className="reveal reveal-1 relative h-auto w-32 sm:w-36"
        />
      </div>
      <h1 className="sr-only">کارگشا؛ دنیایی از ابزارهای هوشمند</h1>
    </section>
  );
}
