import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { ContactShinsei } from "@/components/ContactShinsei";
import { Footer } from "@/components/Footer";
import { Compass, Activity, Flag, Sparkles, ArrowRight, ShieldCheck, HeartHandshake, CheckCircle2, Globe } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Shinsei Travel · Du Lịch Y Tế, Golf & Trải Nghiệm Tinh Hoa Nhật Bản",
  description:
    "Shinsei Travel mang đến các hành trình chuyên biệt tại Nhật Bản: Du lịch Y tế tầm soát & tế bào gốc liên kết 6 bệnh viện top đầu, Tour Golf PGA dưới chân núi Phú Sĩ và Du lịch trải nghiệm văn hóa Onsen - Kaiseki.",
};

export default function DuLichOverviewPage() {
  const travelPillars = [
    {
      id: "y-te",
      title: "Du Lịch Y Tế Chuyên Sâu",
      subtitle: "Medical Tourism Japan · 医療ツーリズム",
      desc: "Hợp tác trực tiếp với 6 bệnh viện đại học và viện nghiên cứu hàng đầu Nhật Bản (ĐH Y Tokyo, Fujita, Jikei, St. Luke's, Shonan Kamakura, Viện tế bào gốc CIRA - Nobel GS Yamanaka). Tầm soát ung thư sớm, y học tái tạo tế bào gốc, khám tổng quát Ningen Dock với phiên dịch y tế chứng chỉ quốc tế.",
      link: "/du-lich/y-te",
      linkText: "Khám phá Du lịch Y tế chi tiết",
      badge: "Y tế kỹ thuật cao",
      img: "/images/Hospital/fujita-univ-hospital.png",
      highlights: [
        "Khám tổng quát Ningen Dock & Tầm soát ung thư",
        "Y học tái tạo tế bào gốc iPS Cell",
        "Liên kết 6 bệnh viện uy tín hàng đầu Tokyo & Kyoto",
        "Visa y tế & Phiên dịch y tế chứng chỉ quốc tế",
      ],
    },
    {
      id: "golf",
      title: "Du Lịch Golf Đẳng Cấp",
      subtitle: "Japan Golf Experience · ゴルフツアー",
      desc: "Chinh phục những sân golf danh giá đạt chuẩn PGA quốc tế ven biển và dưới chân núi Phú Sĩ hùng vĩ (Taiheiyo Gotemba, Kawana). Kết hợp thư giãn suối khoáng nóng Onsen lộ thiên (Rotenburo) và thưởng thức tiệc Kaiseki thượng hạng sau mỗi trận đánh.",
      link: "/du-lich/golf",
      linkText: "Khám phá Tour Golf Nhật Bản",
      badge: "Sân PGA danh giá",
      img: "/images/Golf/golf_3.jpg",
      highlights: [
        "Sân golf view trọn vẹn núi Phú Sĩ & biển Thái Bình Dương",
        "Đặt Tee-time độc quyền cho khách VIP & đoàn doanh nghiệp",
        "Dịch vụ Caddy bản xứ & xe đưa đón limousine cao cấp",
        "Nghỉ dưỡng Ryokan Onsen khoáng nóng tự nhiên",
      ],
    },
    {
      id: "trai-nghiem",
      title: "Du Lịch Trải Nghiệm Văn Hóa & Ẩm Thực",
      subtitle: "Cultural & Bespoke Luxury · 文化・グルメ体験",
      desc: "Hành trình cá nhân hóa khám phá tinh hoa văn hóa và ẩm thực Nhật Bản: Dạo bước cố đô Kyoto nghìn năm tuổi, thưởng thức trà đạo Chado thanh tịnh, đắm chìm trong sắc hoa anh đào Sakura hay mùa lá đỏ Momiji, thưởng thức bò Wagyu Kobe A5 và hải sản đấu giá tươi sống tại chợ Toyosu.",
      link: "/du-lich/trai-nghiem",
      linkText: "Khám phá Tour Trải nghiệm",
      badge: "Bespoke Luxury",
      img: "/images/Travel/travel_1.jpg",
      highlights: [
        "Trà đạo Chado, Kimono truyền thống tại phố cổ Gion, Kyoto",
        "Hành trình ẩm thực bò Wagyu Kobe A5 & Sushi Michelin",
        "Thưởng ngoạn mùa hoa anh đào Sakura & lá đỏ Momiji",
        "Lưu trú tại các Ryokan cổ truyền thống cao cấp",
      ],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#fbf7ef] text-[#222222]">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-28 bg-[#75182d] text-[#f1e2c8] overflow-hidden">
          <div className="absolute inset-0 opacity-15 mix-blend-overlay pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] font-bold text-[#f1e2c8] bg-white/10 px-3.5 py-1.5 rounded-full border border-white/15 mb-6">
              <Compass className="w-3.5 h-3.5" />
              <span>Shinsei Travel · Du Lịch Chuyên Sâu Nhật Bản</span>
            </div>

            <h1 className="font-title text-4xl sm:text-5xl lg:text-6xl font-light text-white leading-[1.08]">
              Hành Trình Tinh Hoa, Tận Tâm Trong Từng Trải Nghiệm.
            </h1>

            <p className="text-base sm:text-lg text-[#f1e2c8]/85 font-normal leading-relaxed mt-4">
              Không chỉ là du lịch đơn thuần, Shinsei Travel thiết kế những hành trình đặc biệt kết nối y tế công nghệ cao, sân golf chuẩn PGA và trải nghiệm văn hóa ẩm thực Nhật Bản thượng hạng.
            </p>

            <div className="flex flex-wrap justify-center gap-3 pt-6">
              <Link href="/du-lich/y-te" className="shushi-btn !bg-white !text-[#75182d] hover:!bg-[#f1e2c8]">
                <span>Du lịch Y tế</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
              </Link>
              <Link href="/du-lich/golf" className="shushi-btn !bg-white/15 !text-white hover:!bg-white/25 border border-white/20">
                <span>Du lịch Golf PGA</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
              </Link>
              <Link href="/du-lich/trai-nghiem" className="shushi-btn !bg-white/15 !text-white hover:!bg-white/25 border border-white/20">
                <span>Du lịch Trải nghiệm</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
              </Link>
            </div>
          </div>
        </section>

        {/* 3 Trụ Cột Du Lịch Cốt Lõi */}
        <section className="py-24 bg-white border-b border-black/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-24">
              {travelPillars.map((pillar, idx) => (
                <div
                  key={pillar.id}
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center ${
                    idx % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  <div className={`lg:col-span-6 space-y-6 ${idx % 2 === 1 ? "lg:order-2" : ""}`}>
                    <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-bold text-[#75182d] bg-[#f1e2c8]/60 px-3 py-1 rounded-full">
                      <span>0{idx + 1}</span>
                      <span>·</span>
                      <span>{pillar.badge}</span>
                    </div>

                    <h2 className="font-title text-3xl sm:text-4xl lg:text-5xl font-light text-[#222222] leading-tight">
                      {pillar.title}
                    </h2>
                    <p className="text-xs font-mono uppercase tracking-widest text-[#75182d] font-bold">
                      {pillar.subtitle}
                    </p>

                    <p className="text-sm sm:text-base text-[#222222]/80 leading-relaxed font-normal">
                      {pillar.desc}
                    </p>

                    <div className="space-y-2.5 pt-2">
                      {pillar.highlights.map((pt, pIdx) => (
                        <div key={pIdx} className="flex items-center gap-3 text-xs sm:text-sm text-[#222222]">
                          <CheckCircle2 className="w-4 h-4 text-[#75182d] shrink-0" />
                          <span>{pt}</span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-4">
                      <Link
                        href={pillar.link}
                        className="shushi-btn shushi-btn-primary inline-flex items-center"
                      >
                        <span>{pillar.linkText}</span>
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </div>
                  </div>

                  <div className={`lg:col-span-6 ${idx % 2 === 1 ? "lg:order-1" : ""}`}>
                    <div className="relative rounded overflow-hidden border border-black/15 shadow-xl group">
                      <img
                        src={pillar.img}
                        alt={pillar.title}
                        className="w-full h-[380px] sm:h-[450px] object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
                        <div className="text-white">
                          <span className="text-xs font-mono uppercase tracking-widest text-[#f1e2c8] block mb-1">
                            Shinsei Travel Nhật Bản
                          </span>
                          <h4 className="font-title text-xl font-light">{pillar.title}</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quy Trình Đồng Hành Shinsei Travel */}
        <section className="py-24 bg-[#fbf7ef] border-b border-black/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs uppercase font-mono tracking-[0.2em] text-[#75182d] font-bold block mb-2">
                Dịch Vụ Trọn Gói
              </span>
              <h2 className="font-title text-3xl sm:text-4xl lg:text-5xl font-light text-[#222222]">
                Quy Trình Phục Vụ Chuẩn Nhật Bản
              </h2>
              <p className="text-sm sm:text-base text-[#222222]/75 mt-3">
                Chúng tôi đồng hành cùng Quý Khách từ khâu tư vấn, thủ tục visa, lưu trú cao cấp đến phiên dịch chuyên nghiệp.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { step: "01", title: "Tư Vấn & Thiết Kế Lộ Trình", desc: "Lắng nghe nhu cầu y tế, sở thích chơi golf hay văn hóa để lên chương trình tour cá nhân hóa tối ưu." },
                { step: "02", title: "Thủ Tục Visa & Đặt Chỗ Độc Quyền", desc: "Hỗ trợ xin visa y tế / thương mại chính thức, bảo đảm lịch khám bệnh viện và tee time sân golf VIP." },
                { step: "03", title: "Đưa Đón & Phiên Dịch Chứng Chỉ", desc: "Xe limousine đưa đón riêng, đội ngũ phiên dịch y tế chứng chỉ quốc tế và hướng dẫn viên bản xứ 24/7." },
                { step: "04", title: "Hậu Mãi & Đồng Hành Dài Hạn", desc: "Nhận kết quả bệnh án song ngữ, tư vấn chăm sóc sức khỏe sau chuyến đi và kế hoạch tái khám." },
              ].map((item, idx) => (
                <div key={idx} className="bg-white p-6 sm:p-8 border border-black/10 shadow-sm flex flex-col justify-between">
                  <div>
                    <span className="font-mono text-3xl font-light text-[#75182d] block mb-3">
                      {item.step}
                    </span>
                    <h4 className="font-title text-lg font-medium text-[#222222] mb-2">
                      {item.title}
                    </h4>
                    <p className="text-xs text-[#222222]/75 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                  <div className="pt-4 mt-4 border-t border-black/5 text-[10.5px] font-mono text-[#75182d] font-semibold">
                    Omotenashi Tận Tâm
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
