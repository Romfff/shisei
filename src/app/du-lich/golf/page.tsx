import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { ContactShinsei } from "@/components/ContactShinsei";
import { Footer } from "@/components/Footer";
import { Flag, Sparkles, Award, CheckCircle2, ArrowRight, ShieldCheck, MapPin, Trophy } from "lucide-react";

export const metadata: Metadata = {
  title: "Du Lịch Golf Nhật Bản · Phú Sĩ, Tokyo & Osaka Chuẩn PGA | SHINSEI TRAVEL",
  description:
    "Trải nghiệm đánh golf tại các sân golf danh giá đạt chuẩn PGA quốc tế tại Phú Sĩ (Taiheiyo), Tokyo (Sagamihara) và Osaka (World Country), kết hợp nghỉ dưỡng suối nước nóng Onsen và ẩm thực Kaiseki thượng hạng.",
};

export default function DuLichGolfPage() {
  const golfCourses = [
    {
      name: "Sân Taiheiyo Club Gotemba Course",
      japanese: "太平洋クラブ 御殿場コース",
      location: "Gotemba, Shizuoka · Chân núi Phú Sĩ",
      img: "/images/Golf/taiheiyo-club-gotemba.jpg",
      tag: "PGA Tour Venue · Chân Núi Phú Sĩ",
      desc: "Nơi đăng cai giải đấu danh giá Mitsui Sumitomo VISA Taiheiyo Masters và World Cup Golf. Tầm nhìn thẳng lên đỉnh núi Phú Sĩ tuyết phủ hùng vĩ, fairway uốn lượn giữa rừng thông bạt ngàn.",
      features: [
        "18 hố tiêu chuẩn Championship quốc tế · Par 72",
        "Tầm nhìn trực diện đỉnh núi Phú Sĩ tuyết phủ tuyệt mỹ",
        "Thiết kế bởi huyền thoại Robert Trent Jones Jr. & Rees Jones",
      ],
    },
    {
      name: "Sân Sagamihara Golf Club",
      japanese: "相模原ゴルフクラブ",
      location: "Sagamihara, Kanagawa · Đại đô thị Tokyo",
      img: "/images/Golf/sagamihara-golf-club-tokyo.png",
      tag: "CLB Danh Giá Vùng Tokyo · Japan Open Venue",
      desc: "Thành lập từ năm 1955, Sagamihara Golf Club là một trong những câu lạc bộ danh giá và truyền thống bậc nhất vùng thủ đô Tokyo. Từng là địa điểm đăng cai Japan Open Golf Championship, sở hữu địa hình rừng thông phẳng (Rinkan Course) và mặt cỏ nhung chăm sóc tỉ mỉ theo tiêu chuẩn đỉnh cao Nhật Bản.",
      features: [
        "Quy mô 36 hố đẳng cấp: Sân Đông (East) & Sân Tây (West)",
        "Từng đăng cai giải đấu Japan Open Golf Championship danh giá",
        "Chính sách độc quyền hội viên VIP, thuận tiện di chuyển từ Tokyo",
      ],
    },
    {
      name: "Sân World Country Golf Club",
      japanese: "ワールドカントリーゴルフクラブ",
      location: "Kanan, Minamikawachi · Vùng đô thị Osaka",
      img: "/images/Golf/osaka-world-country-golf-club.jpg",
      tag: "Toàn Cảnh Osaka 360° · Thiết Kế Peter Thomson",
      desc: "Sân golf danh tiếng tại Osaka nổi bật với nhà câu lạc bộ phong cách lâu đài châu Âu tráng lệ và tầm nhìn 360 độ ôm trọn đồng bằng Osaka. Được thiết kế bởi huyền thoại 5 lần vô địch The Open - Peter Thomson, kết hợp hài hòa giữa đồi dốc tự nhiên, hố nước chiến lược và thảm cỏ xanh mướt quanh năm.",
      features: [
        "Quy mô 27 hố đa dạng địa hình (vòng Đông, Tây, Nam)",
        "Clubhouse phong cách lâu đài châu Âu sang trọng bậc nhất Kansai",
        "Kết nối thuận tiện trung tâm Osaka, sân bay Kansai và cố đô Kyoto",
      ],
    },
  ];

  const golfPhotos = [
    "/images/Golf/golf_1.jpg",
    "/images/Golf/golf_2.jpg",
    "/images/Golf/golf_3.jpg",
    "/images/Golf/golf_4.jpg",
    "/images/Golf/golf_5.jpg",
    "/images/Golf/golf_6.jpg",
    "/images/Golf/golf_7.jpg",
    "/images/Golf/golf_8.jpg",
    "/images/Golf/golf_9.jpg",
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#fbf7ef] text-[#222222]">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-28 bg-[#75182d] text-[#f1e2c8] overflow-hidden">
          <div className="absolute inset-0 opacity-15 mix-blend-overlay pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-bold text-[#f1e2c8] bg-white/10 px-3.5 py-1.5 rounded-full border border-white/15 mb-6">
              <Trophy className="w-3.5 h-3.5" />
              <span>Shinsei Travel · Du Lịch Golf Đẳng Cấp</span>
            </div>

            <h1 className="font-title text-4xl sm:text-5xl lg:text-6xl font-light text-white leading-[1.08]">
              Du Lịch Golf Nhật Bản Đẳng Cấp Quốc Tế
            </h1>

            <p className="text-base sm:text-lg text-[#f1e2c8]/85 font-normal leading-relaxed mt-4">
              Chinh phục những sân golf đạt chuẩn PGA quốc tế tại Phú Sĩ, Tokyo và Osaka. Kết hợp kỳ nghỉ dưỡng suối nước nóng Onsen truyền thống và thưởng thức ẩm thực Kaiseki thượng hạng.
            </p>

            <div className="pt-6">
              <a href="#golf-courses" className="shushi-btn !bg-white !text-[#75182d] hover:!bg-[#f1e2c8] shadow-lg inline-flex items-center">
                <span>Khám phá các sân golf danh tiếng</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </div>
          </div>
        </section>

        {/* 3 Sân Golf Danh Giá */}
        <section id="golf-courses" className="py-24 bg-white border-b border-black/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-16">
              <span className="text-xs uppercase font-mono tracking-[0.2em] text-[#75182d] font-bold block mb-2">
                Sân Golf Tiêu Chuẩn Quốc Tế
              </span>
              <h2 className="font-title text-3xl sm:text-4xl lg:text-5xl font-light text-[#222222]">
                Những Điểm Đến Golf Đỉnh Cao Tại Nhật Bản
              </h2>
              <p className="text-sm sm:text-base text-[#222222]/75 mt-3">
                Shinsei Travel hỗ trợ đặt Tee-time độc quyền tại các câu lạc bộ danh giá chỉ dành riêng cho hội viên VIP.
              </p>
            </div>

            <div className="space-y-16">
              {golfCourses.map((c, idx) => (
                <div
                  key={idx}
                  className="bg-[#fbf7ef] border border-black/15 shadow-sm overflow-hidden hover:border-[#75182d] transition-all"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-10">
                    <div className="lg:col-span-5">
                      <div className="relative rounded overflow-hidden border border-black/10 shadow-md">
                        <img
                          src={c.img}
                          alt={c.name}
                          className="w-full h-64 sm:h-80 object-cover"
                        />
                        <div className="absolute top-3 left-3 bg-[#75182d] text-[#f1e2c8] text-[10px] font-mono uppercase px-2.5 py-1 font-bold">
                          Sân Golf 0{idx + 1}
                        </div>
                      </div>
                    </div>

                    <div className="lg:col-span-7 space-y-4">
                      <div>
                        <div className="inline-block bg-[#f1e2c8]/60 text-[#75182d] text-[11px] font-mono uppercase px-3 py-1 rounded-full font-bold mb-2">
                          {c.tag}
                        </div>
                        <h3 className="font-title text-2xl sm:text-3xl font-light text-[#222222]">
                          {c.name}
                        </h3>
                        <p className="text-xs font-mono text-[#75182d] font-semibold mt-0.5">
                          {c.japanese}
                        </p>
                        <div className="flex items-center gap-1.5 text-xs text-[#222222]/65 mt-2 font-mono">
                          <MapPin className="w-3.5 h-3.5 text-[#75182d] shrink-0" />
                          <span>Khu vực: {c.location}</span>
                        </div>
                      </div>

                      <p className="text-xs sm:text-sm text-[#222222]/85 leading-relaxed font-normal pt-2 border-t border-black/10">
                        {c.desc}
                      </p>

                      <div className="space-y-2 pt-2">
                        {c.features.map((f, fIdx) => (
                          <div key={fIdx} className="flex items-center gap-2.5 text-xs text-[#222222]">
                            <CheckCircle2 className="w-4 h-4 text-[#75182d] shrink-0" />
                            <span>{f}</span>
                          </div>
                        ))}
                      </div>

                      <div className="pt-4 border-t border-black/10">
                        <a
                          href="#contact"
                          className="shushi-btn shushi-btn-primary !py-2 !px-4 text-xs inline-flex items-center"
                        >
                          <span>Đặt lịch chơi tại sân golf này</span>
                          <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Trọn Bộ 9 Ảnh Thực Tế Sân Golf (No text overlay) */}
        <section className="py-24 bg-[#fbf7ef] border-b border-black/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs uppercase font-mono tracking-[0.2em] text-[#75182d] font-bold block mb-2">
                Bộ Sưu Tập Hình Ảnh
              </span>
              <h2 className="font-title text-3xl sm:text-4xl lg:text-5xl font-light text-[#222222]">
                Hình Ảnh Thực Tế Sân Golf Shinsei
              </h2>
              <p className="text-sm sm:text-base text-[#222222]/75 mt-3">
                Ghi lại những góc máy thực tế trên sân cỏ Nhật Bản cùng đoàn golfer Shinsei.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {golfPhotos.map((src, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-black/10 overflow-hidden shadow-sm hover:border-[#75182d] hover:shadow-md transition-all group rounded-sm"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={src}
                      alt={`Hình ảnh thực tế sân golf Nhật Bản ${idx + 1}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Dịch vụ tiện ích kèm theo: Onsen & Kaiseki */}
        <section className="py-24 bg-white border-b border-black/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="bg-[#fbf7ef] p-8 border border-black/10 space-y-3">
                <div className="font-mono text-xl font-bold text-[#75182d]">01</div>
                <h3 className="font-title text-2xl font-light text-[#222222]">Tee-Time VIP & Thuê Gậy</h3>
                <p className="text-xs sm:text-sm text-[#222222]/80 leading-relaxed">
                  Bảo đảm giờ chơi đẹp nhất trong ngày. Dịch vụ cho thuê bộ gậy Honma, Majesty chính hãng Nhật Bản cao cấp mà không cần mang theo hành lý cồng kềnh.
                </p>
              </div>

              <div className="bg-[#fbf7ef] p-8 border border-black/10 space-y-3">
                <div className="font-mono text-xl font-bold text-[#75182d]">02</div>
                <h3 className="font-title text-2xl font-light text-[#222222]">Khoáng Nóng Onsen Phục Hồi</h3>
                <p className="text-xs sm:text-sm text-[#222222]/80 leading-relaxed">
                  Thư giãn tại các bể tắm khoáng nóng tự nhiên Rotenburo nhìn thẳng ra núi rừng sau 18 hố căng thẳng, giúp phục hồi cơ bắp và tĩnh tâm tuyệt đối.
                </p>
              </div>

              <div className="bg-[#fbf7ef] p-8 border border-black/10 space-y-3">
                <div className="font-mono text-xl font-bold text-[#75182d]">03</div>
                <h3 className="font-title text-2xl font-light text-[#222222]">Tiệc Tối Kaiseki Thượng Hạng</h3>
                <p className="text-xs sm:text-sm text-[#222222]/80 leading-relaxed">
                  Bữa tối đẳng cấp nghệ thuật Kaiseki với bò Wagyu nướng đá nham thạch, sashimi cá ngừ vây xanh tươi sống và rượu sake truyền thống hảo hạng.
                </p>
              </div>
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
