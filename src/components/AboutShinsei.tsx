"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Sparkles, HeartHandshake, Eye, Target, Award } from "lucide-react";

export function AboutShinsei() {
  const coreValues = [
    { title: "An Toàn", desc: "Tuyệt đối an toàn vệ sinh thực phẩm trong từng công đoạn chế biến." },
    { title: "Sạch Sẽ", desc: "Không gian bếp và căng tin luôn ngăn nắp, vệ sinh theo tiêu chuẩn 5S." },
    { title: "Chất Lượng", desc: "100% nguyên liệu tươi mới, có nguồn gốc kiểm định rõ ràng mỗi ngày." },
    { title: "Dinh Dưỡng", desc: "Khẩu phần cân bằng vi chất, năng lượng theo khuyến nghị chuyên gia." },
    { title: "Hài Lòng", desc: "Đem lại trải nghiệm ẩm thực vui vẻ, ngon miệng và phục vụ chu đáo." },
  ];

  return (
    <section id="about" className="py-24 bg-[#ffffff] border-b border-black/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] font-bold text-[#75182d] mb-3 bg-[#f1e2c8]/60 px-3.5 py-1.5 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-[#75182d]"></span>
            <span>Về chúng tôi · 会社案内</span>
          </div>
          <h2 className="font-title text-4xl sm:text-5xl font-light text-[#222222] tracking-tight leading-[1.05]">
            Công ty Cổ phần Thương Mại Shinsei
          </h2>
          <p className="text-base text-[#222222]/80 mt-4 leading-relaxed font-normal">
            Doanh nghiệp tiên phong cung cấp giải pháp toàn diện về dịch vụ bếp ăn tập thể, vận hành căng tin, quầy cà phê và các dịch vụ du lịch cao cấp tiêu chuẩn Nhật Bản.
          </p>
        </div>

        {/* Message from Founder & Company Profile */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch mb-16">
          
          {/* Left: Thông điệp sáng lập - Đỗ Thị Trang (7 cols) */}
          <div className="lg:col-span-7 bg-[#fbf7ef] p-8 sm:p-12 border border-[#75182d]/15 flex flex-col justify-between shadow-sm relative">
            <div>
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#75182d] font-bold block mb-2">
                Thông điệp sáng lập
              </span>
              <h3 className="font-title text-2xl sm:text-3xl font-light text-[#222222] mb-4">
                &ldquo;Mỗi bữa ăn an toàn và ngon miệng là nền tảng cho sức khỏe, học tập và làm việc hiệu quả.&rdquo;
              </h3>
              
              <div className="space-y-3 text-sm text-[#222222]/85 leading-relaxed font-normal">
                <p>
                  Với hơn 10 năm kinh nghiệm học tập và làm việc tại Nhật Bản, tôi luôn tin rằng một bữa ăn ngon, an toàn và một hành trình trải nghiệm chất lượng sẽ tạo nên nền tảng cho một cuộc sống khỏe mạnh, hạnh phúc và hiệu quả hơn.
                </p>
                <p>
                  <strong>SHINSEI</strong> được thành lập với mong muốn mang đến những giá trị Nhật Bản tốt nhất cho khách hàng tại Việt Nam thông qua dịch vụ bếp ăn tập thể, café và du lịch.
                </p>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-black/10 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#75182d] shrink-0 shadow-sm bg-stone-100">
                  <img
                    src="/images/shinsei-ceo.jpg"
                    alt="Đỗ Thị Trang - Tổng Giám đốc Công ty Cổ phần SHINSEI"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="font-title text-xl font-normal text-[#75182d]">
                    Đỗ Thị Trang
                  </div>
                  <div className="text-xs text-[#222222]/70 font-mono mt-0.5">
                    Tổng Giám đốc · Công ty Cổ phần SHINSEI
                  </div>
                </div>
              </div>

              <div className="font-title italic text-sm text-[#75182d]/80 font-serif hidden sm:block">
                CEO Shinsei
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
                Đơn vị hàng đầu Việt Nam
              </h4>
              <p className="text-xs sm:text-sm text-stone-200 leading-relaxed font-normal">
                Trở thành đơn vị hàng đầu Việt Nam về dịch vụ bếp ăn tập thể và du lịch theo tiêu chuẩn Nhật Bản, là đối tác tin cậy của các trường học, tập đoàn và doanh nghiệp trong & ngoài nước.
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
                Trọn vẹn từng trải nghiệm
              </h4>
              <p className="text-xs sm:text-sm text-[#222222]/85 leading-relaxed font-normal">
                Mang đến những bữa ăn an toàn, dinh dưỡng, chất lượng và trải nghiệm dịch vụ tốt nhất cho khách hàng, gắn kết cộng đồng và phát triển bền vững.
              </p>
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
              5 Cam kết nền tảng của Shinsei
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
