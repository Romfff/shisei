"use client";

import { useLanguage } from "@/context/LanguageContext";
import { Navbar } from "@/components/Navbar";
import { ContactShinsei } from "@/components/ContactShinsei";
import { Footer } from "@/components/Footer";
import { CheckCircle2, ArrowRight, Flower2 } from "lucide-react";

export function TraiNghiemContent() {
  const { isJa } = useLanguage();

  const experiences = isJa
    ? [
        {
          title: "京都の伝統文化 & 本格茶道体験",
          desc: "歴史ある茶室で、茶道家から学ぶ本格的な点前。金閣寺や伏見稲荷大社など、千年の歴史息づく古都の社寺を巡る静謐な時間をご案内します。",
          img: "/images/Travel/1-Tra-dao-Nhat-Ban.png",
          tag: "伝統文化の極み",
          highlights: [
            "茶道宗匠による本格薄茶・濃茶の点前手ほどき",
            "本場西陣織の着物着付けと祇園・東山散策",
            "京都・奈良のユネスコ世界文化遺産プライベート巡礼",
          ],
        },
        {
          title: "桜前線を追う春旅 & 錦秋の紅葉狩り",
          desc: "春（3月〜4月）の満開の桜、秋（10月〜11月）の深紅の紅葉。日本の四季が織りなす息をのむ絶景ポイントを、見頃に合わせて巡るオーダーメイド旅。",
          img: "/images/Travel/travel_2.jpg",
          tag: "四季の絶景めぐり",
          highlights: [
            "東京・目黒川や千鳥ヶ淵での優雅なお花見クルーズ",
            "京都・箱根の湖畔を彩る紅葉ライトアップ鑑賞",
            "開花・紅葉予報に合わせた柔軟なプライベートルート設計",
          ],
        },
        {
          title: "最高峰神戸牛Wagyu A5 & 豊洲美食紀行",
          desc: "選び抜かれたA5ランク神戸牛の鉄板焼き、豊洲市場の初競り直送本マグロ握り、ミシュラン星付き料亭での本格京会席など、日本の食の極みを堪能。",
          img: "/images/Travel/HanhTrinhAmThuc.jpg",
          tag: "極上のガストロノミー",
          highlights: [
            "本物の血統を受け継ぐ純正神戸牛A5ランクのコース料理",
            "豊洲市場の目利き仲卸から仕入れる最高鮮度の天然魚介",
            "老舗酒蔵の秘蔵酒・純米大吟醸とのペアリング",
          ],
        },
        {
          title: "名湯秘湯の温泉旅館 & 絶景露天風呂",
          desc: "樹齢数百年の杉や檜の老舗旅館。富士山や渓谷を望む源泉かけ流し露天風呂で心身を解き放ち、日本最高峰のおもてなしと四季会席を愉しむ贅沢。",
          img: "/images/Travel/NghiDuongSuoiKhoang.jpg",
          tag: "極上の癒しと温泉",
          highlights: [
            "天然ミネラル豊富な美肌・疲労回復の源泉かけ流し",
            "ほのかなイ草が香る純和風数寄屋造り客室",
            "客室専任仲居によるきめ細やかなおもてなし",
          ],
        },
      ]
    : [
        {
          title: "Trà Đạo Chado & Văn Hóa Cố Đô Kyoto",
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
              <span>{isJa ? "SHINSEI トラベル · 伝統文化と美食の旅" : "Shinsei Travel · Du Lịch Trải Nghiệm Tinh Hoa"}</span>
            </div>

            <h1 className="font-title text-4xl sm:text-5xl lg:text-6xl font-light text-white leading-[1.08]">
              {isJa ? "日本伝統文化と美食を五感で堪能する旅" : "Du Lịch Trải Nghiệm Văn Hóa & Ẩm Thực Nhật Bản"}
            </h1>

            <p className="text-base sm:text-lg text-[#f1e2c8]/85 font-normal leading-relaxed mt-4">
              {isJa
                ? "お客様のご要望に寄り添う完全オーダーメイド旅行。茶道の静寂、千年の古都、極上の会席料理、心洗われる名湯温泉へご案内いたします。"
                : "Hành trình cá nhân hóa thiết kế riêng theo sở thích của Quý Khách. Cảm nhận trọn vẹn nét đẹp thanh tao của trà đạo, cố đô nghìn năm, ẩm thực đỉnh cao và suối khoáng nóng Onsen."}
            </p>

            <div className="pt-6">
              <a href="#experiences" className="shushi-btn !bg-white !text-[#75182d] hover:!bg-[#f1e2c8] shadow-lg inline-flex items-center">
                <span>{isJa ? "特別な体験を見る" : "Khám phá các trải nghiệm độc quyền"}</span>
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
                {isJa ? "洗練された旅のテーマ" : "Hành Trình Tinh Tế"}
              </span>
              <h2 className="font-title text-3xl sm:text-4xl lg:text-5xl font-light text-[#222222]">
                {isJa ? "日本が誇る唯一無二の文化・美食体験" : "Những Trải Nghiệm Độc Đáo Tại Nhật Bản"}
              </h2>
              <p className="text-sm sm:text-base text-[#222222]/75 mt-3">
                {isJa
                  ? "専用車による快適な移動、日本文化に精通したガイド同行、細部まで行き届いた安心のサービス。"
                  : "Mỗi chuyến đi là một câu chuyện riêng biệt, được chăm chút tỉ mỉ từ phương tiện đưa đón đến hướng dẫn viên bản xứ am tường văn hóa."}
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
                          {isJa ? `体験 0${idx + 1}` : `Trải nghiệm 0${idx + 1}`}
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
                      </div>

                      <p className="text-xs sm:text-sm text-[#222222]/85 leading-relaxed font-normal pt-2 border-t border-black/10">
                        {exp.desc}
                      </p>

                      <div className="space-y-2 pt-2">
                        {exp.highlights.map((h, hIdx) => (
                          <div key={hIdx} className="flex items-center gap-2.5 text-xs text-[#222222]">
                            <CheckCircle2 className="w-4 h-4 text-[#75182d] shrink-0" />
                            <span>{h}</span>
                          </div>
                        ))}
                      </div>

                      <div className="pt-4 border-t border-black/10">
                        <a
                          href="#contact"
                          className="shushi-btn shushi-btn-primary !py-2 !px-4 text-xs inline-flex items-center"
                        >
                          <span>{isJa ? "このツアーの相談・日程作成" : "Tư vấn thiết kế tour này"}</span>
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

        {/* Gallery ảnh đẹp */}
        <section className="py-20 bg-[#fbf7ef] border-b border-black/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs uppercase font-mono tracking-[0.2em] text-[#75182d] font-bold block mb-2">
                {isJa ? "日本の美しい情景" : "Khoảnh Khắc Tinh Tế"}
              </span>
              <h3 className="font-title text-3xl sm:text-4xl font-light text-[#222222]">
                {isJa ? "写真で巡る美しい日本の四季と文化" : "Hình Ảnh Trải Nghiệm Văn Hóa Nhật Bản"}
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {travelPhotos.map((photo, idx) => (
                <div
                  key={idx}
                  className="aspect-[4/3] rounded overflow-hidden border border-black/10 shadow-sm bg-stone-200 group relative"
                >
                  <img
                    src={photo}
                    alt={isJa ? `日本文化写真 ${idx + 1}` : `Trải nghiệm văn hóa Nhật Bản ${idx + 1}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <span className="text-white text-xs font-mono">
                      {isJa ? `SHINSEI 日本の美 0${idx + 1}` : `Khoảnh khắc Shinsei Travel 0${idx + 1}`}
                    </span>
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
