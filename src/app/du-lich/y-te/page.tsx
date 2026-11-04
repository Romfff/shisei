import type { Metadata } from "next";
import { YTeContent } from "./YTeContent";

export const metadata: Metadata = {
  title: "Du Lịch Y Tế Tại Nhật Bản · Liệu Pháp DFPP, Tế Bào Gốc, NK & 6 Bệnh Viện Top Đầu | SHINSEI TRAVEL",
  description:
    "Du lịch y tế Nhật Bản toàn diện: Liệu pháp lọc máu DFPP, tế bào gốc tự thân trẻ hóa, tế bào miễn dịch NK phòng chống ung thư, StemSup Exosomes và tầm soát công nghệ cao liên kết 6 bệnh viện hàng đầu Nhật Bản.",
};

export default function DuLichYTePage() {
  return <YTeContent />;
}
