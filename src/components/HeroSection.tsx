import Image from "next/image";

/** بخش اصلی: لوگو با هاله درخشان + تیتر + زیرتیتر + متن معرفی */
export default function HeroSection() {
  return (
    <section className="mt-9 flex flex-col items-center text-center sm:mt-12">
      <div className="relative">
        {/* هاله نور پشت لوگو — صرفاً تزئینی */}
        <div
          aria-hidden
          className="halo absolute -inset-7 rounded-full bg-[radial-gradient(closest-side,rgba(57,230,192,0.30),rgba(100,139,255,0.16),transparent)] blur-2xl"
        />
        <Image
          priority
          src="/images/kargosha-logo.png"
          alt="لوگوی کارگشا"
          width={132}
          height={132}
          sizes="(max-width: 640px) 112px, 132px"
          className="reveal reveal-1 relative h-auto w-28 sm:w-32"
        />
      </div>

      <h1 className="reveal reveal-2 mt-6 text-[clamp(1.8rem,7.2vw,2.5rem)] font-black leading-[1.3] text-ink">
        کارگشا؛ دنیایی از ابزارهای هوشمند
      </h1>

      <p className="reveal reveal-3 mt-3 bg-gradient-to-l from-accent to-accent2 bg-clip-text text-lg font-bold text-transparent">
        همه ابزارهایی که نیاز داری، در یک اپلیکیشن
      </p>

      <p className="reveal reveal-3 mt-3 max-w-sm text-[15px] leading-7 text-muted">
        نسخه اندروید کارگشا را دانلود کن یا مستقیماً وارد نسخه وب شو.
      </p>
    </section>
  );
}
