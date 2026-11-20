import Image from "next/image";

/** بخش اصلی: فقط لوگو با هاله درخشان — تیتر برای سئو و صفحه‌خوان‌ها پنهان است (صفحه کوتاه) */
export default function HeroSection() {
  return (
    <section className="mt-8 flex flex-col items-center text-center sm:mt-10">
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
