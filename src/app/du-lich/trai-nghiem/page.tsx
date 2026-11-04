import type { Metadata } from "next";
import { TraiNghiemContent } from "./TraiNghiemContent";

export const metadata: Metadata = {
  title: "Du Lịch Trải Nghiệm Văn Hóa & Ẩm Thực Tinh Hoa Nhật Bản | SHINSEI TRAVEL",
  description:
    "Hành trình cá nhân hóa khám phá tinh hoa văn hóa Nhật Bản: Cố đô Kyoto, trà đạo Chado, mùa hoa anh đào Sakura, lá đỏ Momiji, ẩm thực bò Wagyu Kobe và nghỉ dưỡng Ryokan Onsen.",
};

export default function DuLichTraiNghiemPage() {
  return <TraiNghiemContent />;
}
