import { UtensilsCrossed, Building2, Clock4, ShieldCheck } from "lucide-react";

export function StatsBar() {
  const metrics = [
    {
      value: "18.000+",
      label: "Suất ăn phục vụ mỗi ngày",
      detail: "Cung ứng ổn định theo 3 ca sản xuất liên tục",
    },
    {
      value: "45+",
      label: "Nhà máy đối tác gắn bó",
      detail: "Tập trung tại KCN VSIP, Amata, Sóng Thần, Hiệp Phước",
    },
    {
      value: "99.8%",
      label: "Đúng giờ ăn theo từng ca kíp",
      detail: "Hệ thống xe chuyên dụng điều phối theo lộ trình GPS",
    },
    {
      value: "0 Sự cố",
      label: "An toàn vệ sinh trong 8 năm",
      detail: "Kiểm dịch thú y và lưu mẫu độc lập 24/7",
    },
  ];

  return (
    <section className="bg-[#fff9f3] py-14 border-b border-black/10">
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
                <div className="font-title text-4xl sm:text-5xl font-light text-[#0d1717] tracking-tight">
                  {item.value}
                </div>
                <div className="text-xs uppercase tracking-widest font-bold text-[#e94222] mt-2">
                  {item.label}
                </div>
              </div>
              <p className="text-xs text-[#3a3a3a]/75 mt-3 leading-relaxed font-normal">
                {item.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
