import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { ContactShinsei } from "@/components/ContactShinsei";
import { Footer } from "@/components/Footer";
import { Flag, Sparkles, Award, CheckCircle2, ArrowRight, ShieldCheck, MapPin, HeartPulse, Trophy } from "lucide-react";

export const metadata: Metadata = {
  title: "Du Lịch Golf Nhật Bản · Sân PGA Dưới Chân Núi Phú Sĩ | SHINSEI TRAVEL",
  description:
    "Trải nghiệm đánh golf tại các sân golf đạt chuẩn PGA quốc tế ven biển và dưới chân núi Phú Sĩ, kết hợp nghỉ dưỡng suối nước nóng Onsen và ẩm thực Kaiseki thượng hạng.",
};

export default function DuLichGolfPage() {
  const golfCourses = [
    {
      name: "Sân Taiheiyo Club Gotemba Course",
      japanese: "太平洋クラブ 御殿場コース",
      location: "Gotemba, Shizuoka (Chân núi Phú Sĩ)",
      img: "/images/Golf/golf_3.jpg",
      tag: "PGA Tour Venue",
      desc: "Nơi đăng cai giải đấu danh giá Mitsui Sumitomo VISA Taiheiyo Masters và World Cup Golf. Tầm nhìn thẳng lên đỉnh núi Phú Sĩ tuyết phủ hùng vĩ, fairway uốn lượn giữa rừng thông bạt ngàn.",
      features: ["18 hố tiêu chuẩn Championship", "Par 72 · Chiều dài 7.327 yards", "Thiết kế bởi huyền thoại Robert Trent Jones Jr."],
    },
    {
      name: "Sân Kawana Hotel Golf Course (Fuji Course)",
      japanese: "川奈ホテルゴルフコース 富士コース",
      location: "Ito, Shizuoka (Bán đảo Izu ven biển)",
      img: "/images/Golf/golf_4.jpg",
      tag: "Top 100 Sân Golf Đẹp Nhất Thế Giới",
      desc: "Được mệnh danh là 'Pebble Beach của châu Á'. Sân nằm trên vách đá nhìn ra biển Thái Bình Dương với gió biển và địa hình thách thức mọi golfer đẳng cấp.",
      features: ["Xếp hạng Top 100 Thế giới (Golf Magazine)", "Par 72 · Khung cảnh biển tuyệt mỹ", "Dịch vụ caddy đi bộ truyền thống chuẩn Nhật"],
    },
    {
      name: "Sân Narita Golf Club",
      japanese: "成田ゴルフ倶楽部",
      location: "Narita, Chiba (Gần thủ đô Tokyo)",
      img: "/images/Golf/golf_8.jpg",
      tag: "Câu Lạc Bộ Độc Quyền Thành Viên",
      desc: "Câu lạc bộ golf thượng lưu hàng đầu vùng Kanto với nhà câu lạc bộ tráng lệ và mặt cỏ nhung mượt mà được chăm sóc tỉ mỉ từng milimet theo tiêu chuẩn Nhật Bản.",
      features: ["Chỉ tiếp khách hội viên & khách VIP quốc tế", "Dịch vụ ẩm thực nhà hàng 5 sao tại sân", "Thuận tiện di chuyển từ sân bay quốc tế Narita"],
    },
  ];

  const golfGallery = [
    { src: "/images/Golf/golf_1.jpg", title: "Cú swing chuẩn xác trên green", sub: "Khung cảnh thiên nhiên Nhật Bản nguyên sơ" },
    { src: "/images/Golf/golf_2.jpg", title: "Sân golf dưới tán lá đỏ", sub: "Mùa thu thi đấu lý tưởng nhất trong năm" },
    { src: "/images/Golf/golf_3.jpg", title: "Fairway hướng đỉnh Phú Sĩ", sub: "Trải nghiệm tầm nhìn ngoạn mục" },
    { src: "/images/Golf/golf_4.jpg", title: "Địa hình thách thức PGA", sub: "Hố cát & bẫy nước thiết kế thông minh" },
    { src: "/images/Golf/golf_5.jpg", title: "Khoảnh khắc thi đấu tập trung", sub: "Không khí trong lành, mặt cỏ hoàn hảo" },
    { src: "/images/Golf/golf_6.jpg", title: "Cú gạt bóng quyết định", sub: "Đội ngũ caddy bản xứ hỗ trợ chuyên nghiệp" },
    { src: "/images/Golf/golf_7.jpg", title: "Khởi động và tập luyện", sub: "Khu vực driving range hiện đại" },
    { src: "/images/Golf/golf_8.jpg", title: "Góc nhìn toàn cảnh hố số 18", sub: "Câu lạc bộ đẳng cấp quốc tế" },
    { src: "/images/Golf/golf_9.jpg", title: "Nghỉ ngơi sau trận đánh", sub: "Thưởng trà và ngắm cảnh sân golf" },
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
              <Trophy className="w-3.5 h-3.5" />
              <span>Japan Golf Experience · ゴルフツアー</span>
            </div>

            <h1 className="font-title text-4xl sm:text-5xl lg:text-6xl font-light text-white leading-[1.08]">
              Du Lịch Golf Nhật Bản Đẳng Cấp Quốc Tế
            </h1>

            <p className="text-base sm:text-lg text-[#f1e2c8]/85 font-normal leading-relaxed mt-4">
              Chinh phục những sân golf đạt chuẩn PGA quốc tế dưới chân núi Phú Sĩ hùng vĩ. Kết hợp kỳ nghỉ dưỡng suối nước nóng Onsen truyền thống và thưởng thức ẩm thực Kaiseki thượng hạng.
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

        {/* Gallery Trọn Bộ 9 Ảnh Thực Tế Sân Golf */}
        <section className="py-24 bg-[#fbf7ef] border-b border-black/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs uppercase font-mono tracking-[0.2em] text-[#75182d] font-bold block mb-2">
                Bộ Sưu Tập Hình Ảnh
              </span>
              <h2 className="font-title text-3xl sm:text-4xl lg:text-5xl font-light text-[#222222]">
                Hình Ảnh Thực Tế Sân Golf Shinsei Travel
              </h2>
              <p className="text-sm sm:text-base text-[#222222]/75 mt-3">
                Ghi lại những khoảnh khắc thăng hoa trên sân cỏ Nhật Bản cùng đoàn golfer Shinsei.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {golfGallery.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-black/10 overflow-hidden shadow-sm hover:border-[#75182d] transition-all group"
                >
                  <div className="aspect-[4/3] overflow-hidden relative">
                    <img
                      src={item.src}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent flex items-end p-4">
                      <div className="text-white">
                        <h4 className="font-title text-base font-medium">{item.title}</h4>
                        <p className="text-[11px] text-[#f1e2c8] font-mono mt-0.5">{item.sub}</p>
                      </div>
                    </div>
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
