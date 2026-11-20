import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import path from "node:path";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "کارگشا | دانلود اپلیکیشن و ورود به نسخه وب";

/** تصویر پیش‌نمایش اشتراک‌گذاری — لوگوی واقعی کارگشا روی زمینه تیره برند */
export default async function OpenGraphImage() {
  const logo = await readFile(path.join(process.cwd(), "public", "images", "kargosha-logo.png"));
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#080D1B",
          backgroundImage:
            "linear-gradient(135deg, rgba(57,230,192,0.14) 0%, rgba(8,13,27,0) 45%, rgba(100,139,255,0.16) 100%)",
        }}
      >
        <img
          src={logoSrc}
          width={216}
          height={216}
          alt="لوگوی کارگشا"
          style={{ borderRadius: 48 }}
        />
        <div
          style={{
            color: "#F5F8FF",
            fontSize: 64,
            fontWeight: 700,
            marginTop: 40,
            letterSpacing: 1,
          }}
        >
          KarGosha
        </div>
        <div style={{ color: "#A8B4CC", fontSize: 30, marginTop: 12 }}>kar-gosha.ir</div>
      </div>
    ),
    { ...size }
  );
}
