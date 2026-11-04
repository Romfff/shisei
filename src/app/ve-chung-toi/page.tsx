import type { Metadata } from "next";
import { VeChungToiContent } from "./VeChungToiContent";

export const metadata: Metadata = {
  title: "Về Chúng Tôi - Tiêu Chuẩn 5S Nhật Bản | CÔNG TY CP THƯƠNG MẠI SHINSEI",
  description:
    "Tìm hiểu về Công ty Cổ phần Thương Mại Shinsei, thông điệp Chủ tịch Đỗ Thị Trang, tiêu chuẩn vận hành 5S Nhật Bản, quy chuẩn đồng phục và đội xe bảo ôn giao hàng chuyên nghiệp.",
};

export default function VeChungToiPage() {
  return <VeChungToiContent />;
}
