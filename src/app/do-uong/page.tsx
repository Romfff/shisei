import type { Metadata } from "next";
import { DoUongContent } from "./DoUongContent";

export const metadata: Metadata = {
  title: "Đồ Uống & Café Nhận Diện Thương Hiệu | SHINSEI FOOD & COFFEE",
  description:
    "Giải pháp đồ uống & cà phê nhận diện Shinsei: Dịch vụ phục vụ cà phê và thức uống chuyên nghiệp cho văn phòng, nhà máy và sự kiện.",
};

export default function DoUongPage() {
  return <DoUongContent />;
}
