import type { Metadata } from "next";
import { GolfContent } from "./GolfContent";

export const metadata: Metadata = {
  title: "Du Lịch Golf Nhật Bản · Phú Sĩ, Tokyo & Osaka Chuẩn PGA | SHINSEI TRAVEL",
  description:
    "Trải nghiệm đánh golf tại các sân golf danh giá đạt chuẩn PGA quốc tế tại Phú Sĩ (Taiheiyo), Tokyo (Sagamihara) và Osaka (World Country), kết hợp nghỉ dưỡng suối nước nóng Onsen và ẩm thực Kaiseki thượng hạng.",
};

export default function DuLichGolfPage() {
  return <GolfContent />;
}
