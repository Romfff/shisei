"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ShieldCheck, ThermometerSnowflake, Flame, PackageCheck, Clock, Truck } from "lucide-react";

export function Standards5S() {
  const steps5S = [
    {
      code: "S1",
      name: "Sàng lọc",
      japanese: "Seiri",
      desc: "Loại bỏ những thứ không cần thiết, chỉ giữ lại những gì thực sự cần dùng cho khu bếp.",
    },
    {
      code: "S2",
      name: "Sắp xếp",
      japanese: "Seiton",
      desc: "Sắp xếp gọn gàng, khoa học, dễ tìm, dễ lấy, dễ kiểm tra ngay cả trong giờ cao điểm.",
    },
    {
      code: "S3",
      name: "Sạch sẽ",
      japanese: "Seiso",
      desc: "Vệ sinh sạch sẽ, giữ môi trường làm việc luôn đảm bảo tiêu chuẩn vô trùng nghiêm ngặt.",
    },
    {
      code: "S4",
      name: "Săn sóc",
      japanese: "Seiketsu",
      desc: "Duy trì, kiểm tra, phòng ngừa thường xuyên các nguy cơ nhiễm bẩn chéo bằng checklist chuẩn.",
    },
    {
      code: "S5",
      name: "Sẵn sàng",
      japanese: "Shitsuke",
      desc: "Rèn luyện thói quen, nâng cao ý thức, kỷ luật và trách nhiệm tự giác của từng nhân viên.",
    },
  ];

  const safetyProcess = [
    {
      step: "01",
      title: "Kiểm soát nguồn nguyên liệu",
      desc: "Truy xuất nguồn gốc 100%, rau VietGAP và thịt tươi kiểm dịch thú y.",
      icon: ThermometerSnowflake,
    },
    {
      step: "02",
      title: "Nhập hàng – Kiểm tra chất lượng",
      desc: "Kiểm định quy cách, chủng loại, hạn sử dụng và cảm quan tại cửa kho mát.",
      icon: CheckCircle2,
    },
    {
      step: "03",
      title: "Sơ chế – Chế biến một chiều",
      desc: "Theo quy trình khép kín, kiểm soát chặt chẽ nhiệt độ tâm món và thời gian nấu.",
      icon: Flame,
    },
    {
      step: "04",
      title: "Chia suất – Đóng gói",
      desc: "Đảm bảo vệ sinh phòng vô trùng, định lượng cân đối theo thực đơn.",
      icon: PackageCheck,
    },
    {
      step: "05",
      title: "Lưu mẫu thức ăn 24h",
      desc: "Lưu trữ mẫu thức ăn trong dụng cụ inox vô trùng theo đúng quy định Bộ Y Tế.",
      icon: Clock,
    },
    {
      step: "06",
      title: "Vận chuyển – Phục vụ",
      desc: "Bảo ôn giữ nhiệt trên 65°C, giao hàng đúng giờ theo từng ca kíp.",
      icon: Truck,
    },
  ];

  return (
    <section id="standards-5s" className="py-24 bg-[#fbf7ef] border-b border-black/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] font-bold text-[#75182d] mb-3 bg-[#f1e2c8]/60 px-3.5 py-1.5 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-[#75182d]"></span>
            <span>Tiêu chuẩn vận hành 5S Nhật Bản</span>
          </div>
          <h2 className="font-title text-4xl sm:text-5xl font-light text-[#222222] tracking-tight leading-[1.05]">
            Nền tảng quản lý chuyên nghiệp & Quản lý an toàn thực phẩm
          </h2>
          <p className="text-base text-[#222222]/80 mt-4 leading-relaxed font-normal">
            Shinsei áp dụng triệt để phương pháp quản lý 5S Nhật Bản cùng các tiêu chuẩn quốc tế HACCP và ISO 22000 trong toàn bộ chuỗi tiếp nhận, chế biến và phục vụ.
          </p>
        </div>

        {/* 5S Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-16">
          {steps5S.map((s, idx) => (
            <div
              key={idx}
              className="bg-white p-6 border border-black/10 hover:border-[#75182d] transition-all shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-black/10 mb-4">
                  <span className="font-mono text-2xl font-light text-[#75182d]">
                    {s.code}
                  </span>
                  <span className="font-mono text-xs uppercase tracking-wider text-[#222222]/50 font-semibold">
                    {s.japanese}
                  </span>
                </div>
                <h4 className="font-title text-xl font-normal text-[#222222] mb-2">
                  {s.name}
                </h4>
                <p className="text-xs text-[#222222]/75 leading-relaxed font-normal">
                  {s.desc}
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-black/5 text-[11px] font-mono text-[#75182d]">
                Chuẩn hóa 5S Shinsei
              </div>
            </div>
          ))}
        </div>

        {/* 6 Bước Quản Lý An Toàn Thực Phẩm */}
        <div className="bg-[#ffffff] p-8 sm:p-12 border border-[#75182d]/15 shadow-sm">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10 pb-8 border-b border-black/10">
            <div className="max-w-xl">
              <span className="font-mono text-xs uppercase tracking-widest text-[#75182d] font-bold block mb-1">
                Quy trình một chiều khép kín
              </span>
              <h3 className="font-title text-2xl sm:text-3xl font-light text-[#222222]">
                6 Bước kiểm soát chất lượng an toàn thực phẩm
              </h3>
            </div>
            <div className="text-xs font-mono text-[#75182d] bg-[#f1e2c8]/60 px-4 py-2 rounded-full border border-[#75182d]/20 shrink-0">
              Áp dụng tiêu chuẩn quốc tế HACCP & ISO
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {safetyProcess.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-[#fbf7ef] p-6 border border-black/10 hover:border-[#75182d] transition-all group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-lg bg-white border border-[#75182d]/20 flex items-center justify-center text-[#75182d]">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-2xl font-light text-[#222222]/30 group-hover:text-[#75182d] transition-colors">
                      {item.step}
                    </span>
                  </div>
                  <h4 className="font-title text-lg font-normal text-[#222222] mb-1.5">
                    {item.title}
                  </h4>
                  <p className="text-xs text-[#222222]/75 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
