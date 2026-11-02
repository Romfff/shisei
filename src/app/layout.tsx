import type { Metadata } from "next";
import { Fraunces, Jost } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin", "vietnamese"],
  display: "swap",
  variable: "--font-title",
});

const jost = Jost({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "SHINSEI | Công Ty Cổ Phần Thương Mại Shinsei - Food & Coffee & Travel",
  description:
    "Shinsei - An tâm trong từng bữa ăn, tận tâm trong từng trải nghiệm. Cung cấp suất ăn công nghiệp, phổ thông, cao cấp, tiệc bàn, cơm hộp mang đi, quầy cà phê và dịch vụ du lịch y tế, golf, trải nghiệm chuẩn Nhật Bản.",
  keywords: [
    "Shinsei",
    "Công ty Cổ phần Shinsei",
    "suất ăn công nghiệp",
    "suất ăn phổ thông",
    "suất ăn cao cấp",
    "tiêu chuẩn 5s",
    "food and coffee",
    "du lịch y tế nhật bản",
    "du lịch golf",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi" className={`${fraunces.variable} ${jost.variable}`}>
      <body className="font-body bg-[#fbf7ef] text-[#222222] selection:bg-[#75182d] selection:text-white antialiased">
        {children}
      </body>
    </html>
  );
}
