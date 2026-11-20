"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { CheckIcon, LinkIcon } from "./icons";

type Status = "idle" | "copied" | "error";

/** اگر promise کلیپ‌بورد بی‌پاسخ ماند (بعضی مرورگرهای درون‌برنامه‌ای)، مسیر جایگزین فعال شود */
function withTimeout(p: Promise<void>, ms: number): Promise<boolean> {
  return Promise.race([
    p.then(
      () => true,
      () => false,
    ),
    new Promise<false>((resolve) => setTimeout(() => resolve(false), ms)),
  ]);
}

/**
 * دکمه کپی لینک — تنها کامپوننت کلاینت صفحه.
 * Clipboard API با fallback امن (textarea + execCommand).
 * بدون جاوااسکریپت این دکمه با کلاس js-only پنهان می‌شود
 * و خودِ آدرس به‌صورت متن قابل انتخاب و کپی دستی باقی می‌ماند.
 */
export default function CopyLinkButton({
  url,
  label,
  className = "",
}: {
  url: string;
  label?: string;
  className?: string;
}) {
  const [status, setStatus] = useState<Status>("idle");
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, []);

  const fallbackCopy = useCallback((text: string): boolean => {
    const ta = document.createElement("textarea");
    ta.value = text;
    ta.setAttribute("readonly", "");
    ta.style.position = "fixed";
    ta.style.opacity = "0";
    document.body.appendChild(ta);
    ta.select();
    let ok = false;
    try {
      ok = document.execCommand("copy");
    } catch {
      ok = false;
    }
    document.body.removeChild(ta);
    return ok;
  }, []);

  const onCopy = useCallback(async () => {
    let ok = false;
    try {
      if (navigator.clipboard?.writeText) {
        ok = await withTimeout(navigator.clipboard.writeText(url), 1500);
      }
    } catch {
      ok = false;
    }
    if (!ok) ok = fallbackCopy(url);
    setStatus(ok ? "copied" : "error");
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setStatus("idle"), 2400);
  }, [url, fallbackCopy]);

  return (
    <>
      <button
        type="button"
        onClick={onCopy}
        className={`inline-flex min-h-[44px] items-center gap-2 rounded-xl border border-white/10 bg-white/[0.06] px-4 text-sm font-bold text-ink transition-colors hover:bg-white/[0.1] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-base ${className}`}
      >
        {status === "copied" ? (
          <CheckIcon className="h-4 w-4 text-accent" />
        ) : (
          <LinkIcon className="h-4 w-4 text-accent" />
        )}
        <span>{status === "copied" ? "کپی شد" : status === "error" ? "کپی نشد" : label}</span>
      </button>

      {/* بازخورد برای صفحه‌خوان‌ها */}
      <span role="status" aria-live="polite" className="sr-only">
        {status === "copied"
          ? "لینک کارگشا کپی شد"
          : status === "error"
            ? "کپی انجام نشد؛ لینک را دستی انتخاب و کپی کنید"
            : ""}
      </span>
    </>
  );
}
