import { UtensilsCrossed, Building2, Clock4, ShieldCheck } from "lucide-react";

export function StatsBar() {
  const metrics = [
    {
      value: "10.000+",
      label: "Suất ăn phục vụ mỗi ngày",
      detail: "Cung ứng ổn định cho nhà máy, trường học, bệnh viện",
    },
    {
      value: "10+ Năm",
      label: "Kinh nghiệm chuyên gia Nhật Bản",
      detail: "Đội ngũ sáng lập và quản lý dày dạn thực chiến tại Tokyo",
    },
    {
      value: "5S & HACCP",
      label: "Quy chuẩn an toàn quốc tế",
      detail: "Kiểm định nguồn gốc 100% và lưu mẫu thực phẩm 24h",
    },
    {
      value: "Trọn Gói",
      label: "Bếp ăn · Căng tin · Café · Travel",
      detail: "Hệ sinh thái ẩm thực và du lịch cao cấp chuẩn Nhật",
    },
  ];

  return (
    <section className="bg-[#ffffff] py-14 border-b border-black/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 divide-y md:divide-y-0 lg:divide-x divide-black/10">
          {metrics.map((item, idx) => (
            <div
              key={idx}
              className={`pt-6 md:pt-0 ${
                idx > 0 ? "lg:pl-8" : ""
              } flex flex-col justify-between`}
            >
              <div>
                <div className="font-title text-4xl sm:text-5xl font-light text-[#75182d] tracking-tight">
                  {item.value}
                </div>
                <div className="text-xs uppercase tracking-widest font-bold text-[#222222] mt-2">
                  {item.label}
                </div>
              </div>
              <p className="text-xs text-[#222222]/75 mt-3 leading-relaxed font-normal">
                {item.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
