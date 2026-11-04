import type { Metadata } from "next";
import { DuLichOverviewContent } from "./DuLichOverviewContent";

export const metadata: Metadata = {
  title: "Shinsei Travel · Du Lịch Y Tế, Golf & Trải Nghiệm Tinh Hoa Nhật Bản",
  description:
    "Shinsei Travel mang đến các hành trình chuyên biệt tại Nhật Bản: Du lịch Y tế tầm soát & tế bào gốc liên kết 6 bệnh viện top đầu, Tour Golf PGA dưới chân núi Phú Sĩ và Du lịch trải nghiệm văn hóa Onsen - Kaiseki.",
};

export default function DuLichOverviewPage() {
  return <DuLichOverviewContent />;
}
