"use client";

import { useLanguage } from "@/context/LanguageContext";

export function StatsBar() {
  const { isJa } = useLanguage();

  const metrics = isJa
    ? [
        {
          value: "10,000食+",
          label: "1日の給食提供実績",
          detail: "工場、学校、病院への安定した給食供給体制",
        },
        {
          value: "10年+",
          label: "日本での実務経験",
          detail: "東京で長年培った創業チームとマネジメント陣",
        },
        {
          value: "5S & HACCP",
          label: "国際水準の衛生管理",
          detail: "原材料100%産地検査と24時間検食保管の徹底",
        },
        {
          value: "ワンストップ",
          label: "給食・カフェ・売店・旅行",
          detail: "日本基準の総合フードサービスと訪日ツアー",
        },
      ]
    : [
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
