"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { SpeakerOffIcon, SpeakerOnIcon } from "./icons";

const MUSIC_SRC = "/audio/bg-music.m4a";
const MUSIC_VOLUME = 0.3; // صدای ملایم پس‌زمینه
const MUTE_KEY = "kg-music-muted";

/**
 * موسیقی پس‌زمینه — تلاش برای پخش خودکار بعد از باز شدن صفحه.
 * مرورگرها (به‌ویژه سافاری آیفون و مرورگر درون‌برنامه‌ای اینستاگرام) پخش با صدا را
 * فقط پس از اولین تعامل کاربر اجازه می‌دهند؛ در آن حالت با اولین لمس/کلید پخش شروع می‌شود.
 * انتخاب قطع صدا در localStorage یادمانده می‌شود.
 */
export default function BackgroundMusic() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [muted, setMuted] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = MUSIC_VOLUME;

    // یادآوری انتخاب قبلی کاربر
    try {
      if (localStorage.getItem(MUTE_KEY) === "1") {
        audio.muted = true;
        setMuted(true);
      }
    } catch {
      /* دسترسی به localStorage ممکن نیست — بدون آن ادامه بده */
    }

    const start = () => audio.play().catch(() => {});

    // تلاش اولیه (در مرورگرهایی که مجازند، همان لحظه شروع می‌شود)
    audio.play().catch(() => {
      // مسیر مرورگرهای سخت‌گیر: پخش با اولین تعامل واقعی کاربر
      const onGesture = () => {
        window.removeEventListener("pointerdown", onGesture);
        window.removeEventListener("touchstart", onGesture);
        window.removeEventListener("keydown", onGesture);
        start();
      };
      window.addEventListener("pointerdown", onGesture, { passive: true });
      window.addEventListener("touchstart", onGesture, { passive: true });
      window.addEventListener("keydown", onGesture);
    });
  }, []);

  const toggle = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const next = !audio.muted;
    audio.muted = next;
    setMuted(next);
    try {
      localStorage.setItem(MUTE_KEY, next ? "1" : "0");
    } catch {
      /* بدون ذخیره هم کار می‌کند */
    }
    if (!next) audio.play().catch(() => {}); // داخل همین لمس کاربر → مجاز است
  }, []);

  return (
    <>
      <button
        type="button"
        onClick={toggle}
        aria-pressed={!muted}
        aria-label={muted ? "پخش موسیقی پس‌زمینه" : "قطع موسیقی پس‌زمینه"}
        title={muted ? "پخش موسیقی" : "قطع موسیقی"}
        className="js-only fixed bottom-4 left-4 z-50 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.08] text-ink/80 transition-colors hover:bg-white/[0.14] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
      >
        {muted ? <SpeakerOffIcon className="h-5 w-5" /> : <SpeakerOnIcon className="h-5 w-5" />}
      </button>
      <audio ref={audioRef} src={MUSIC_SRC} loop preload="auto" className="hidden" aria-hidden />
    </>
  );
}
