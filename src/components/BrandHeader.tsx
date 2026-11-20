import Image from "next/image";

/** سربرگ کوچک برند — لوگو و نام، بدون لینک اضافه */
export default function BrandHeader() {
  return (
    <header className="flex items-center justify-between pt-1">
      <div className="flex items-center gap-2.5">
        <Image
          src="/images/kargosha-logo.png"
          alt=""
          aria-hidden
          width={34}
          height={34}
          sizes="34px"
          className="rounded-xl"
        />
        <span className="text-[15px] font-bold text-ink">کارگشا</span>
      </div>
      <span className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1.5 text-xs font-bold text-muted">
        صفحه ورود و دانلود
      </span>
    </header>
  );
}
