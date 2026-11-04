import type { Metadata } from "next";
import { BepAnContent } from "./BepAnContent";

export const metadata: Metadata = {
  title: "Bếp Ăn & Thực Đơn Chuẩn 5S Nhật Bản | CÔNG TY CP THƯƠNG MẠI SHINSEI",
  description:
    "Dịch vụ cung cấp suất ăn công nghiệp 30k - 35k - 40k - 50k, tiệc bàn doanh nghiệp, cơm khay bento và takeaway theo tiêu chuẩn 5S Nhật Bản, bảo đảm an toàn thực phẩm 100%.",
};

export default function BepAnThucDonPage() {
  return <BepAnContent />;
}
