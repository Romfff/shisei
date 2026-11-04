import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { ContactShinsei } from "@/components/ContactShinsei";
import { Footer } from "@/components/Footer";
import { ShieldCheck, Sparkles, HeartHandshake, Eye, Target, Award, CheckCircle2, RefreshCw, Truck, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Về Chúng Tôi - Hồ Sơ Năng Lực & Tiêu Chuẩn 5S | CÔNG TY CP THƯƠNG MẠI SHINSEI",
  description:
    "Tìm hiểu về Công ty Cổ phần Thương Mại Shinsei, thông điệp Chủ tịch Đỗ Thị Trang, tiêu chuẩn vận hành 5S Nhật Bản, quy chuẩn đồng phục và đội xe bảo ôn giao hàng chuyên nghiệp.",
};

export default function VeChungToiPage() {
  const coreValues = [
    { title: "An Toàn", desc: "Kiểm soát nghiêm ngặt 100% nguyên liệu đầu vào, quy trình chế biến một chiều và lưu mẫu thức ăn 24 giờ." },
    { title: "Chất Lượng", desc: "Bảo đảm hương vị tươi ngon, khẩu phần dinh dưỡng cân đối và hình thức trình bày chỉn chu, bắt mắt." },
    { title: "Trách Nhiệm", desc: "Đúng giờ tuyệt đối trong từng ca phục vụ, minh bạch nguồn gốc và phản hồi giải quyết thắc mắc nhanh chóng." },
    { title: "Đồng Hành", desc: "Lắng nghe, thấu hiểu và thiết kế giải pháp ẩm thực linh hoạt theo ngân sách của từng đối tác doanh nghiệp." },
    { title: "Cải Tiến", desc: "Không ngừng hoàn thiện quy trình theo tinh thần Kaizen, đào tạo nhân sự và áp dụng triệt để chuẩn 5S Nhật Bản." },
  ];

  const steps5S = [
    { code: "1S", name: "Sàng Lọc", japanese: "SEIRI", desc: "Phân loại rõ ràng nguyên liệu, dụng cụ cần thiết và loại bỏ ngay lập tức những thứ không phù hợp khỏi khu vực bếp." },
    { code: "2S", name: "Sắp Xếp", japanese: "SEITON", desc: "Quy định vị trí cố định, dán nhãn nhận diện cho từng khu vực: kho khô, kho lạnh, dao thớt theo màu sắc chống nhiễm chéo." },
    { code: "3S", name: "Sạch Sẽ", japanese: "SEISO", desc: "Vệ sinh, khử trùng toàn bộ bề mặt bàn chế biến, sàn nhà và thiết bị bếp liên tục trước, trong và sau mỗi ca nấu." },
    { code: "4S", name: "Săn Sóc", japanese: "SEIKETSU", desc: "Duy trì và chuẩn hóa 3S đầu tiên thành thói quen kỷ luật hằng ngày, niêm yết bảng kiểm tra trực quan tại bếp." },
    { code: "5S", name: "Sẵn Sàng", japanese: "SHITSUKE", desc: "Đào tạo thường xuyên, rèn luyện tinh thần tự giác và tác phong phục vụ chuyên nghiệp của toàn thể cán bộ nhân viên." },
  ];

  const implementationSteps = [
    { num: "01", title: "Khảo Sát Thực Tế", desc: "Tiếp nhận nhu cầu, khảo sát mặt bằng bếp, công suất và đặc thù ca kíp của nhà máy, văn phòng." },
    { num: "02", title: "Tư Vấn & Nếm Thử", desc: "Thiết kế phương án thực đơn tối ưu chi phí và tổ chức buổi nếm thử mẫu cơm trực tiếp cho cán bộ đơn vị." },
    { num: "03", title: "Ký Kết Hợp Đồng & SLA", desc: "Xác lập rõ ràng cam kết chất lượng, định lượng khẩu phần, thời gian giao hàng và cơ chế kiểm tra mẫu." },
    { num: "04", title: "Setup & Triển Khai", desc: "Chuẩn bị nhân sự đồng phục chuẩn 5S, thiết bị bếp và quy trình vận hành một chiều an toàn tuyệt đối." },
    { num: "05", title: "Đánh Giá & Cải Tiến", desc: "Khảo sát ý kiến người dùng hằng tuần, báo cáo minh bạch kết quả kiểm thực và cải tiến thực đơn liên tục." },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#fbf7ef] text-[#222222]">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-28 bg-[#75182d] text-[#f1e2c8] overflow-hidden">
          <div className="absolute inset-0 opacity-15 mix-blend-overlay pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl space-y-6">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] font-bold text-[#f1e2c8] bg-white/10 px-3.5 py-1.5 rounded-full border border-white/15">
                <span className="w-1.5 h-1.5 rounded-full bg-[#f1e2c8] animate-pulse"></span>
                <span>Hồ Sơ Năng Lực · Company Profile</span>
              </div>

              <h1 className="font-title text-4xl sm:text-5xl lg:text-6xl font-light text-white leading-[1.08]">
                Công ty Cổ phần Thương Mại Shinsei
              </h1>

              <p className="text-base sm:text-lg text-[#f1e2c8]/85 font-normal leading-relaxed">
                Dịch vụ Bếp ăn & Café theo tiêu chuẩn 5S Nhật Bản — An tâm trong từng bữa ăn, tận tâm trong từng trải nghiệm.
              </p>
            </div>
          </div>
        </section>

        {/* Thông điệp Chủ Tịch & Tầm Nhìn */}
        <section className="py-24 bg-white border-b border-black/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
              
              {/* Left: Thông điệp người đại diện - Đỗ Thị Trang (7 cols) */}
              <div className="lg:col-span-7 bg-[#fbf7ef] p-8 sm:p-12 border border-[#75182d]/20 flex flex-col justify-between shadow-sm">
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-6 pb-6 mb-6 border-b border-black/10">
                    <div className="relative shrink-0 mx-auto sm:mx-0">
                      <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-full overflow-hidden border-[3px] border-[#75182d] p-1.5 bg-white shadow-lg">
                        <img
                          src="/images/shinsei-trang-zoomed.jpg"
                          alt="Đỗ Thị Trang - Chủ tịch Hội đồng Quản trị SHINSEI"
                          className="w-full h-full object-cover rounded-full"
                        />
                      </div>
                    </div>

                    <div className="text-center sm:text-left">
                      <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#75182d] font-bold block mb-1">
                        Thông điệp người đại diện
                      </span>
                      <h3 className="font-title text-2xl sm:text-3xl font-normal text-[#222222] leading-tight">
                        Đỗ Thị Trang
                      </h3>
                      <p className="text-xs text-[#222222]/80 font-mono mt-1 font-semibold">
                        Chủ tịch Hội đồng Quản trị · Người đại diện pháp luật
                      </p>
                      <p className="text-[11px] text-[#75182d] font-medium mt-0.5">
                        CÔNG TY CỔ PHẦN THƯƠNG MẠI SHINSEI
                      </p>
                    </div>
                  </div>

                  <blockquote className="font-title italic text-lg sm:text-xl font-light text-[#222222] mb-4 leading-snug border-l-2 border-[#75182d] pl-4">
                    &ldquo;Chúng tôi tin rằng chất lượng của một bữa ăn không chỉ nằm ở nguyên liệu và hương vị, mà còn ở tính an toàn, sự đúng giờ và tinh thần trách nhiệm trong từng công đoạn phục vụ.&rdquo;
                  </blockquote>
                  
                  <div className="space-y-3 text-xs sm:text-sm text-[#222222]/85 leading-relaxed font-normal">
                    <p>
                      SHINSEI hướng đến xây dựng mô hình dịch vụ ăn uống có quy trình rõ ràng, môi trường làm việc ngăn nắp và khả năng thích ứng với nhu cầu của từng đơn vị. Chúng tôi coi trọng sự minh bạch trong phối hợp, chất lượng phục vụ và cải tiến liên tục.
                    </p>
                    <p>
                      Từ định hướng quản lý theo tinh thần 5S Nhật Bản, SHINSEI mong muốn trở thành đối tác lâu dài của Quý Đối Tác trong trường học, cơ quan và doanh nghiệp tại Việt Nam.
                    </p>
                    <div className="p-4 bg-[#f1e2c8]/60 border border-[#75182d]/20 text-[#75182d] font-semibold text-xs sm:text-sm">
                      &ldquo;Mỗi bữa ăn an toàn và ngon miệng là nền tảng cho sức khoẻ, học tập và làm việc hiệu quả!&rdquo;
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: Tầm nhìn & Sứ mệnh (5 cols) */}
              <div className="lg:col-span-5 flex flex-col justify-between gap-6">
                <div className="bg-[#75182d] text-[#f1e2c8] p-8 sm:p-10 border border-black/10 shadow-sm flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                        <Eye className="w-5 h-5 text-[#f1e2c8]" />
                      </div>
                      <span className="font-mono text-xs uppercase tracking-widest text-[#f1e2c8]/90 font-bold">
                        Tầm Nhìn · Vision
                      </span>
                    </div>
                    <h4 className="font-title text-2xl font-light text-white mb-3">
                      Chất lượng ổn định & Quản trị minh bạch
                    </h4>
                    <p className="text-xs sm:text-sm text-[#f1e2c8]/85 leading-relaxed font-normal">
                      Phát triển thành đơn vị cung cấp giải pháp dịch vụ ăn uống có chất lượng ổn định, quản trị minh bạch và khả năng mở rộng linh hoạt theo nhu cầu của từng khách hàng.
                    </p>
                  </div>
                  <div className="pt-6 mt-6 border-t border-white/15 text-[11px] font-mono text-[#f1e2c8]/80">
                    Mục tiêu định hướng bền vững 2026 - 2030
                  </div>
                </div>

                <div className="bg-[#fbf7ef] text-[#222222] p-8 sm:p-10 border border-[#75182d]/20 shadow-sm flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-full bg-[#75182d]/10 flex items-center justify-center">
                        <Target className="w-5 h-5 text-[#75182d]" />
                      </div>
                      <span className="font-mono text-xs uppercase tracking-widest text-[#75182d] font-bold">
                        Sứ Mệnh · Mission
                      </span>
                    </div>
                    <h4 className="font-title text-2xl font-light text-[#222222] mb-3">
                      Bữa ăn an toàn, dịch vụ tận tâm
                    </h4>
                    <p className="text-xs sm:text-sm text-[#222222]/80 leading-relaxed font-normal">
                      Cung cấp bữa ăn phù hợp, an toàn và dịch vụ tận tâm; góp phần tạo dựng môi trường học tập, làm việc thuận tiện, văn minh và lành mạnh.
                    </p>
                  </div>
                  <div className="pt-6 mt-6 border-t border-black/10 text-[11px] font-mono text-[#75182d] font-semibold">
                    Đồng hành cùng sức khỏe người lao động
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 5 Giá Trị Cốt Lõi */}
        <section className="py-24 bg-[#fbf7ef] border-b border-black/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs uppercase font-mono tracking-[0.2em] text-[#75182d] font-bold block mb-2">
                Giá Trị Cốt Lõi
              </span>
              <h2 className="font-title text-3xl sm:text-4xl lg:text-5xl font-light text-[#222222]">
                5 Trụ Cột Xuyên Suốt Của Shinsei
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              {coreValues.map((val, idx) => (
                <div
                  key={idx}
                  className="bg-white p-6 sm:p-8 border border-black/10 hover:border-[#75182d] transition-all shadow-sm flex flex-col justify-between group"
                >
                  <div>
                    <span className="font-mono text-2xl font-light text-[#75182d] block mb-2">
                      0{idx + 1}
                    </span>
                    <h4 className="font-title text-xl font-normal text-[#222222] mb-3 group-hover:text-[#75182d] transition-colors">
                      {val.title}
                    </h4>
                    <p className="text-xs text-[#222222]/75 leading-relaxed font-normal">
                      {val.desc}
                    </p>
                  </div>
                  <div className="pt-4 mt-6 border-t border-black/5 text-[10.5px] font-mono text-[#75182d]">
                    Chuẩn Shinsei 5S
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tiêu chuẩn 5S Nhật Bản */}
        <section className="py-24 bg-white border-b border-black/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-16">
              <span className="text-xs uppercase font-mono tracking-[0.2em] text-[#75182d] font-bold block mb-2">
                Phương Pháp Quản Lý 5S Nhật Bản · 5S管理基準
              </span>
              <h2 className="font-title text-3xl sm:text-4xl lg:text-5xl font-light text-[#222222]">
                Kỷ Luật & Quy Chuẩn Trong Từng Khâu Vận Hành
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-16">
              {steps5S.map((s, idx) => (
                <div key={idx} className="bg-[#fbf7ef] p-6 border border-black/10 hover:border-[#75182d] transition-all shadow-sm">
                  <div className="flex items-center justify-between pb-3 border-b border-black/10 mb-3">
                    <span className="font-mono text-xl font-bold text-[#75182d]">{s.code}</span>
                    <span className="font-mono text-[11px] text-[#222222]/60 font-semibold">{s.japanese}</span>
                  </div>
                  <h4 className="font-title text-lg font-normal text-[#222222] mb-2">{s.name}</h4>
                  <p className="text-xs text-[#222222]/75 leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>

            {/* Quy chuẩn đồng phục & Đội xe bảo ôn */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#fbf7ef] p-8 sm:p-12 border border-[#75182d]/20">
              <div className="lg:col-span-7">
                <img
                  src="/images/shinsei-uniform-chef-full.jpg"
                  alt="Bảng quy chuẩn chi tiết Đồng phục Bếp 5S Shinsei"
                  className="w-full h-auto object-contain bg-white border border-black/10 shadow-sm"
                />
              </div>
              <div className="lg:col-span-5 space-y-4">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#75182d] font-bold block">
                  Nhận diện & Tác phong 5S
                </span>
                <h3 className="font-title text-2xl sm:text-3xl font-light text-[#222222]">
                  Đồng Phục Bếp & Vận Tải Chuyên Nghiệp
                </h3>
                <p className="text-xs sm:text-sm text-[#222222]/80 leading-relaxed">
                  Trang phục bếp được thiết kế khép kín gồm áo bếp viền đỏ thêu logo Shinsei, mũ bếp xếp ly, tạp dề bảo hộ chống bẩn và giày chống trượt. Đội xe bán tải giao hàng thùng bảo ôn giữ nhiệt trên 65°C, bảo đảm suất ăn nóng sốt khi đến tay đối tác.
                </p>
                <div className="pt-2">
                  <img
                    src="/images/shinsei-truck.jpg"
                    alt="Xe bán tải giao hàng bảo ôn Shinsei"
                    className="w-full h-40 object-cover border border-black/10 shadow-sm rounded"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5 Bước Triển Khai Dịch Vụ */}
        <section className="py-24 bg-[#fbf7ef] border-b border-black/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs uppercase font-mono tracking-[0.2em] text-[#75182d] font-bold block mb-2">
                Quy Trình Phối Hợp
              </span>
              <h2 className="font-title text-3xl sm:text-4xl lg:text-5xl font-light text-[#222222]">
                5 Bước Triển Khai Dịch Vụ Với Khách Hàng
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {implementationSteps.map((step, idx) => (
                <div key={idx} className="bg-white p-6 border border-black/10 shadow-sm flex flex-col justify-between">
                  <div>
                    <span className="font-mono text-2xl font-light text-[#75182d] block mb-3">
                      {step.num}
                    </span>
                    <h4 className="font-title text-lg font-medium text-[#222222] mb-2">
                      {step.title}
                    </h4>
                    <p className="text-xs text-[#222222]/75 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                  <div className="pt-4 mt-4 border-t border-black/5 text-[10px] font-mono text-[#75182d] font-semibold">
                    Cam kết SLA rõ ràng
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact form */}
        <ContactShinsei />
      </main>

      <Footer />
    </div>
  );
}
