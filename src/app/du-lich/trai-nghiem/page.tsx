import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { ContactShinsei } from "@/components/ContactShinsei";
import { Footer } from "@/components/Footer";
import { Sparkles, MapPin, CheckCircle2, ArrowRight, HeartHandshake, Compass, Utensils, Flower2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Du Lịch Trải Nghiệm Văn Hóa & Ẩm Thực Tinh Hoa Nhật Bản | SHINSEI TRAVEL",
  description:
    "Hành trình cá nhân hóa khám phá tinh hoa văn hóa Nhật Bản: Cố đô Kyoto, trà đạo Chado, mùa hoa anh đào Sakura, lá đỏ Momiji, ẩm thực bò Wagyu Kobe và nghỉ dưỡng Ryokan Onsen.",
};

export default function DuLichTraiNghiemPage() {
  const experiences = [
    {
      title: "Trà Đạo Chado & Văn Hóa Cố Đô Kyoto",
      japanese: "京都・茶道と歴史文化",
      desc: "Trải nghiệm không gian thanh tịnh của trà thất cổ, học cách thưởng trà đạo truyền thống cùng nghệ nhân, dạo bước qua ngôi chùa nghìn năm tuổi Kinkaku-ji và đền nghìn cổng Fushimi Inari.",
      img: "/images/Travel/1-Tra-dao-Nhat-Ban.png",
      tag: "Văn hóa tinh hoa",
      highlights: [
        "Thưởng thức matcha nguyên chất pha tay theo nghi thức Chado",
        "Trải nghiệm mặc Kimono truyền thống dạo bước phố cổ Gion",
        "Thăm di sản văn hóa thế giới UNESCO tại Kyoto và Nara",
      ],
    },
    {
      title: "Mùa Hoa Anh Đào Sakura & Mùa Lá Đỏ Momiji",
      japanese: "桜の季節 & 紅葉狩り",
      desc: "Hành trình ngắm sắc hoa anh đào rực rỡ vào mùa xuân từ tháng 3 đến tháng 4 và ngắm những rặng phong đỏ rực mùa thu từ tháng 10 đến tháng 11 tại các danh thắng đẹp nhất xứ sở Phù Tang.",
      img: "/images/Travel/travel_2.jpg",
      tag: "Tuyệt tác bốn mùa",
      highlights: [
        "Du thuyền ngắm hoa anh đào bên sông Meguro, Tokyo",
        "Ngắm lá đỏ Momiji phản chiếu mặt hồ tại Kyoto và Hakone",
        "Lộ trình thiết kế theo lịch nở hoa và chuyển màu lá đẹp nhất",
      ],
    },
    {
      title: "Hành Trình Ẩm Thực Tinh Hoa & Wagyu Kobe A5",
      japanese: "神戸牛 & 豊洲市場グルメ",
      desc: "Đánh thức mọi giác quan với bò Wagyu Kobe A5 nướng than hoa, thưởng thức sushi cá ngừ vây xanh tươi sống tại chợ hải sản Toyosu và bàn tiệc Kaiseki do đầu bếp sao Michelin phục vụ.",
      img: "/images/Travel/HanhTrinhAmThuc.jpg",
      tag: "Ẩm thực thượng hạng",
      highlights: [
        "Thịt bò Wagyu Kobe A5 chính gốc đạt chuẩn bảo tồn",
        "Sashimi hải sản tươi sống nhập trực tiếp chợ đấu giá Toyosu",
        "Rượu Sake thủ công lên men truyền thống từ các hầm rượu cổ",
      ],
    },
    {
      title: "Nghỉ Dưỡng Suối Khoáng Nóng Onsen & Ryokan",
      japanese: "温泉旅館 & 露天風呂",
      desc: "Lưu trú tại những Ryokan nghìn năm tuổi bằng gỗ tuyết tùng, ngâm mình trong làn suối khoáng nóng lộ thiên Rotenburo nhìn thẳng ra núi tuyết Phú Sĩ, tái tạo năng lượng thể chất và tinh thần.",
      img: "/images/Travel/NghiDuongSuoiKhoang.jpg",
      tag: "Nghỉ dưỡng tĩnh tâm",
      highlights: [
        "Bể tắm khoáng nóng tự nhiên giàu khoáng chất lưu huỳnh",
        "Không gian phòng chiếu Tatami truyền thống thơm mùi cỏ lau",
        "Phục vụ riêng tư chuẩn phong cách Omotenashi tận tâm",
      ],
    },
  ];

  const travelPhotos = [
    "/images/Travel/1-Tra-dao-Nhat-Ban.png",
    "/images/Travel/travel_2.jpg",
    "/images/Travel/HanhTrinhAmThuc.jpg",
    "/images/Travel/NghiDuongSuoiKhoang.jpg",
    "/images/Travel/travel_4.jpg",
    "/images/Travel/travel_5.jpg",
    "/images/Travel/travel_7.jpg",
    "/images/Travel/travel_8.jpg",
    "/images/Travel/travel_9.jpg",
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
              <Flower2 className="w-3.5 h-3.5" />
              <span>Shinsei Travel · Du Lịch Trải Nghiệm Tinh Hoa</span>
            </div>

            <h1 className="font-title text-4xl sm:text-5xl lg:text-6xl font-light text-white leading-[1.08]">
              Du Lịch Trải Nghiệm Văn Hóa & Ẩm Thực Nhật Bản
            </h1>

            <p className="text-base sm:text-lg text-[#f1e2c8]/85 font-normal leading-relaxed mt-4">
              Hành trình cá nhân hóa thiết kế riêng theo sở thích của Quý Khách. Cảm nhận trọn vẹn nét đẹp thanh tao của trà đạo, cố đô nghìn năm, ẩm thực đỉnh cao và suối khoáng nóng Onsen.
            </p>

            <div className="pt-6">
              <a href="#experiences" className="shushi-btn !bg-white !text-[#75182d] hover:!bg-[#f1e2c8] shadow-lg inline-flex items-center">
                <span>Khám phá các trải nghiệm độc quyền</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </div>
          </div>
        </section>

        {/* 4 Trải Nghiệm Độc Quyền */}
        <section id="experiences" className="py-24 bg-white border-b border-black/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-16">
              <span className="text-xs uppercase font-mono tracking-[0.2em] text-[#75182d] font-bold block mb-2">
                Hành Trình Tinh Tế
              </span>
              <h2 className="font-title text-3xl sm:text-4xl lg:text-5xl font-light text-[#222222]">
                Những Trải Nghiệm Độc Đáo Tại Nhật Bản
              </h2>
              <p className="text-sm sm:text-base text-[#222222]/75 mt-3">
                Mỗi chuyến đi là một câu chuyện riêng biệt, được chăm chút tỉ mỉ từ phương tiện đưa đón đến hướng dẫn viên bản xứ am tường văn hóa.
              </p>
            </div>

            <div className="space-y-16">
              {experiences.map((exp, idx) => (
                <div
                  key={idx}
                  className="bg-[#fbf7ef] border border-black/15 shadow-sm overflow-hidden hover:border-[#75182d] transition-all"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-10">
                    <div className="lg:col-span-5">
                      <div className="relative rounded overflow-hidden border border-black/10 shadow-md">
                        <img
                          src={exp.img}
                          alt={exp.title}
                          className="w-full h-64 sm:h-80 object-cover"
                        />
                        <div className="absolute top-3 left-3 bg-[#75182d] text-[#f1e2c8] text-[10px] font-mono uppercase px-2.5 py-1 font-bold">
                          Trải nghiệm 0{idx + 1}
                        </div>
                      </div>
                    </div>

                    <div className="lg:col-span-7 space-y-4">
                      <div>
                        <div className="inline-block bg-[#f1e2c8]/60 text-[#75182d] text-[11px] font-mono uppercase px-3 py-1 rounded-full font-bold mb-2">
                          {exp.tag}
                        </div>
                        <h3 className="font-title text-2xl sm:text-3xl font-light text-[#222222]">
                          {exp.title}
                        </h3>
                        <p className="text-xs font-mono text-[#75182d] font-semibold mt-0.5">
                          {exp.japanese}
                        </p>
                      </div>

                      <p className="text-xs sm:text-sm text-[#222222]/85 leading-relaxed font-normal pt-2 border-t border-black/10">
                        {exp.desc}
                      </p>

                      <div className="space-y-2 pt-2">
                        {exp.highlights.map((hl, hlIdx) => (
                          <div key={hlIdx} className="flex items-center gap-2.5 text-xs text-[#222222]">
                            <CheckCircle2 className="w-4 h-4 text-[#75182d] shrink-0" />
                            <span>{hl}</span>
                          </div>
                        ))}
                      </div>

                      <div className="pt-4 border-t border-black/10">
                        <a
                          href="#contact"
                          className="shushi-btn shushi-btn-primary !py-2 !px-4 text-xs inline-flex items-center"
                        >
                          <span>Tư vấn tour trải nghiệm này</span>
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

        {/* Gallery Trọn Bộ 9 Ảnh Thực Tế Travel (No text overlay) */}
        <section className="py-24 bg-[#fbf7ef] border-b border-black/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs uppercase font-mono tracking-[0.2em] text-[#75182d] font-bold block mb-2">
                Bộ Sưu Tập Hình Ảnh
              </span>
              <h2 className="font-title text-3xl sm:text-4xl lg:text-5xl font-light text-[#222222]">
                Hình Ảnh Thực Tế Du Lịch Shinsei
              </h2>
              <p className="text-sm sm:text-base text-[#222222]/75 mt-3">
                Vẻ đẹp bốn mùa và nét duyên dáng thanh lịch của đất nước mặt trời mọc qua từng góc máy.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {travelPhotos.map((src, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-black/10 overflow-hidden shadow-sm hover:border-[#75182d] hover:shadow-md transition-all group rounded-sm"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={src}
                      alt={`Hình ảnh thực tế du lịch Nhật Bản ${idx + 1}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
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
