"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Sparkles, HeartHandshake, Eye, Target, Award, CheckCircle2, RefreshCw } from "lucide-react";

export function AboutShinsei() {
  const coreValues = [
    { title: "An Toàn", desc: "Kiểm soát nghiêm ngặt 100% nguyên liệu, chế biến một chiều và lưu mẫu thức ăn." },
    { title: "Chất Lượng", desc: "Bảo đảm hương vị tươi ngon, khẩu phần dinh dưỡng cân đối và trình bày chỉn chu." },
    { title: "Trách Nhiệm", desc: "Đúng giờ trong từng ca phục vụ, minh bạch nguồn gốc và phản hồi nhanh chóng." },
    { title: "Đồng Hành", desc: "Lắng nghe, thấu hiểu và thiết kế giải pháp ẩm thực linh hoạt theo từng đối tác." },
    { title: "Cải Tiến", desc: "Không ngừng hoàn thiện quy trình, đào tạo nhân sự và áp dụng chuẩn 5S Nhật Bản." },
  ];

  const servicePrinciples = [
    "Lấy nhu cầu thực tế của đơn vị sử dụng dịch vụ làm trung tâm phục vụ.",
    "Minh bạch định lượng, tiêu chuẩn chất lượng và phương án xử lý phản hồi kịp thời.",
    "Tuân thủ nghiêm ngặt quy định pháp luật và yêu cầu đặc thù của từng địa điểm vận hành.",
  ];

  return (
    <section id="about" className="py-24 bg-[#ffffff] border-b border-black/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] font-bold text-[#75182d] mb-3 bg-[#f1e2c8]/60 px-3.5 py-1.5 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-[#75182d]"></span>
            <span>Hồ sơ năng lực · Company Profile</span>
          </div>
          <h2 className="font-title text-4xl sm:text-5xl font-light text-[#222222] tracking-tight leading-[1.05]">
            Công ty Cổ phần Thương Mại Shinsei
          </h2>
          <p className="text-base text-[#222222]/80 mt-4 leading-relaxed font-normal">
            Dịch vụ Bếp ăn & Café theo tiêu chuẩn 5S Nhật Bản — An tâm trong từng bữa ăn, tận tâm trong từng trải nghiệm.
          </p>
        </div>

        {/* Message from Founder & Company Profile */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch mb-16">
          
          {/* Left: Thông điệp người đại diện - Đỗ Thị Trang (7 cols) */}
          <div className="lg:col-span-7 bg-[#fbf7ef] p-8 sm:p-12 border border-[#75182d]/15 flex flex-col justify-between shadow-sm relative">
            <div>
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#75182d] font-bold block mb-2">
                Thông điệp người đại diện
              </span>
              <h3 className="font-title text-2xl sm:text-3xl font-light text-[#222222] mb-4 leading-snug">
                &ldquo;Chúng tôi tin rằng chất lượng của một bữa ăn không chỉ nằm ở nguyên liệu và hương vị, mà còn ở tính an toàn, sự đúng giờ và tinh thần trách nhiệm trong từng công đoạn phục vụ.&rdquo;
              </h3>
              
              <div className="space-y-3 text-sm text-[#222222]/85 leading-relaxed font-normal">
                <p>
                  SHINSEI hướng đến xây dựng mô hình dịch vụ ăn uống có quy trình rõ ràng, môi trường làm việc ngăn nắp và khả năng thích ứng với nhu cầu của từng đơn vị. Chúng tôi coi trọng sự minh bạch trong phối hợp, chất lượng phục vụ và cải tiến liên tục.
                </p>
                <p>
                  Từ định hướng quản lý theo tinh thần 5S Nhật Bản, SHINSEI mong muốn trở thành đối tác lâu dài của Quý Đối Tác trong trường học, cơ quan và doanh nghiệp tại Việt Nam.
                </p>
                <p className="font-title italic text-base text-[#75182d] pt-1">
                  &ldquo;Mỗi bữa ăn an toàn và ngon miệng là nền tảng cho sức khoẻ, học tập và làm việc hiệu quả!&rdquo;
                </p>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-black/10 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#75182d] shrink-0 shadow-sm bg-stone-100">
                  <img
                    src="/images/shinsei-ceo.jpg"
                    alt="Đỗ Thị Trang - Chủ tịch Hội đồng Quản trị SHINSEI"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="font-title text-xl font-normal text-[#75182d]">
                    Đỗ Thị Trang
                  </div>
                  <div className="text-xs text-[#222222]/70 font-mono mt-0.5">
                    Chủ tịch Hội đồng Quản trị · CÔNG TY CỔ PHẦN THƯƠNG MẠI SHINSEI
                  </div>
                </div>
              </div>

              <div className="font-title italic text-sm text-[#75182d]/80 font-serif hidden sm:block">
                Chairwoman
              </div>
            </div>
          </div>

          {/* Right: Tầm nhìn & Sứ mệnh (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            
            {/* Tầm nhìn Card */}
            <div className="bg-[#75182d] text-white p-8 border border-black/15 shadow-sm flex-1">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-[#f1e2c8]">
                  <Eye className="w-5 h-5" />
                </div>
                <span className="font-mono text-xs uppercase tracking-widest text-[#f1e2c8] font-bold">
                  Tầm nhìn
                </span>
              </div>
              <h4 className="font-title text-xl font-normal text-white mb-2">
                Chất lượng ổn định & Quản trị minh bạch
              </h4>
              <p className="text-xs sm:text-sm text-stone-200 leading-relaxed font-normal">
                Phát triển thành đơn vị cung cấp giải pháp dịch vụ ăn uống có chất lượng ổn định, quản trị minh bạch và khả năng mở rộng linh hoạt theo nhu cầu của từng khách hàng.
              </p>
            </div>

            {/* Sứ mệnh Card */}
            <div className="bg-[#f1e2c8]/40 p-8 border border-[#75182d]/20 flex-1">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-full bg-[#75182d] flex items-center justify-center text-white">
                  <Target className="w-5 h-5" />
                </div>
                <span className="font-mono text-xs uppercase tracking-widest text-[#75182d] font-bold">
                  Sứ mệnh
                </span>
              </div>
              <h4 className="font-title text-xl font-normal text-[#222222] mb-2">
                Bữa ăn an toàn, dịch vụ tận tâm
              </h4>
              <p className="text-xs sm:text-sm text-[#222222]/85 leading-relaxed font-normal">
                Cung cấp bữa ăn phù hợp, an toàn và dịch vụ tận tâm; góp phần tạo dựng môi trường học tập, làm việc thuận tiện, văn minh và lành mạnh.
              </p>
            </div>

          </div>

        </div>

        {/* 3 Nguyên Tắc Phục Vụ Banner */}
        <div className="bg-[#fbf7ef] border border-black/10 p-6 sm:p-8 mb-16">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="shrink-0">
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#75182d] font-bold block mb-1">
                Phương châm hành động
              </span>
              <h4 className="font-title text-xl sm:text-2xl font-light text-[#222222]">
                3 Nguyên Tắc Phục Vụ Cốt Lõi
              </h4>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 flex-1">
              {servicePrinciples.map((principle, pIdx) => (
                <div key={pIdx} className="flex items-start gap-2.5 text-xs text-[#222222]/85 leading-relaxed">
                  <CheckCircle2 className="w-4 h-4 text-[#75182d] shrink-0 mt-0.5" />
                  <span>{principle}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 5 Giá Trị Cốt Lõi */}
        <div className="border-t border-black/10 pt-12">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="font-mono text-xs uppercase tracking-widest text-[#75182d] font-bold block mb-1">
              Giá trị cốt lõi
            </span>
            <h3 className="font-title text-2xl sm:text-3xl font-light text-[#222222]">
              5 Cam kết chuẩn mực của Shinsei
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {coreValues.map((val, idx) => (
              <div
                key={idx}
                className="bg-[#fbf7ef] p-6 border border-black/10 hover:border-[#75182d] transition-all text-center group cursor-default"
              >
                <div className="w-10 h-10 rounded-full bg-white border border-[#75182d]/20 flex items-center justify-center text-[#75182d] font-bold text-sm mx-auto mb-4 group-hover:bg-[#75182d] group-hover:text-white transition-colors">
                  0{idx + 1}
                </div>
                <h4 className="font-title text-lg font-normal text-[#222222] mb-1.5">
                  {val.title}
                </h4>
                <p className="text-xs text-[#222222]/75 leading-relaxed">
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
