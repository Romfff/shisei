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
  title: "SHISEI FOOD | Suất Ăn Công Nghiệp & Bếp Tập Thể Chuẩn Nhật Bản",
  description:
    "Chuyên cung cấp suất ăn công nghiệp tiêu chuẩn Nhật Bản cho nhà xưởng, khu công nghiệp và tổ chức giáo dục. Quy trình bếp một chiều, kiểm định an toàn HACCP và ISO 22000.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi" className={`${fraunces.variable} ${jost.variable}`}>
      <body className="font-body bg-[#f5ece4] text-[#3a3a3a] selection:bg-[#e94222] selection:text-white antialiased">
        {children}
      </body>
    </html>
  );
}
