import type { Metadata } from "next";
import { DoUongContent } from "./DoUongContent";

export const metadata: Metadata = {
  title: "Đồ Uống & Café Nhận Diện Thương Hiệu | SHINSEI FOOD & COFFEE",
  description:
    "Menu đồ uống & cà phê nhận diện Shinsei: Cà phê pha máy, Matcha Uji Nhật Bản, trà hoa quả tươi và dịch vụ phục vụ cà phê chuyên nghiệp cho văn phòng, nhà máy và sự kiện.",
};

export default function DoUongPage() {
  return <DoUongContent />;
}
