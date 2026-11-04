"use client";

import { useLanguage } from "@/context/LanguageContext";
import { Navbar } from "@/components/Navbar";
import { ContactShinsei } from "@/components/ContactShinsei";
import { Footer } from "@/components/Footer";
import { CheckCircle2, ArrowRight, MapPin, Trophy } from "lucide-react";

export function GolfContent() {
  const { isJa } = useLanguage();

  const golfCourses = isJa
    ? [
        {
          name: "太平洋クラブ 御殿場コース",
          location: "静岡県御殿場市 · 富士山麓",
          img: "/images/Golf/taiheiyo-club-gotemba.jpg",
          tag: "PGAツアー開催地 · 富士山麓名門コース",
          desc: "三井住友VISA太平洋マスターズやワールドカップゴルフを開催してきた日本屈指のトーナメントコース。雄大な富士の絶景と、松林に囲まれた戦略的なフェアウェイが世界中のゴルファーを魅了します。",
          features: [
            "国際チャンピオンシップ基準18ホール · Par 72",
            "富士山の白雪を正面に望む圧巻のパノラマビュー",
            "世界的巨匠ロバート・トレント・ジョーンズJr.設計",
          ],
        },
        {
          name: "相模原ゴルフクラブ",
          location: "神奈川県相模原市 · 首都圏（東京近郊）",
          img: "/images/Golf/sagamihara-golf-club-tokyo.png",
          tag: "日本オープン開催歴 · 東京名門クラブ",
          desc: "1955年創設、名門の風格漂う林間コース（東コース・西コース計36ホール）。日本オープンゴルフ選手権の舞台となった歴史を誇り、都心からのアクセスも良好なVIP限定クラブです。",
          features: [
            "格式高い36ホール：伝統の東コース & 戦略的な西コース",
            "国内最高峰トーナメント「日本オープン」開催実績",
            "完全会員制プライベートクラブの優先予約手配",
          ],
        },
        {
          name: "ワールドカントリーゴルフクラブ",
          location: "大阪府南河内郡河南町 · 関西エリア",
          img: "/images/Golf/osaka-world-country-golf-club.jpg",
          tag: "大阪平野360°一望 · ピーター・トムソン設計",
          desc: "全英オープン5度制覇のピーター・トムソン氏による設計。ヨーロッパの古城を彷彿とさせる壮麗なクラブハウスと、大阪平野を眼下に望むダイナミックなコースレイアウトが自慢の27ホールです。",
          features: [
            "起伏に富んだ個性豊かな27ホール（東・西・南コース）",
            "関西屈指の優雅さを誇る古城風クラブハウス",
            "大阪市内・関西国際空港・古都京都からの快適アクセス",
          ],
        },
      ]
    : [
        {
          name: "Sân Taiheiyo Club Gotemba Course",
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
          location: "Sagamihara, Kanagawa · Đại đô thị Tokyo",
          img: "/images/Golf/sagamihara-golf-club-tokyo.png",
          tag: "CLB Danh Giá Vùng Tokyo · Japan Open Venue",
          desc: "Thành lập từ năm 1955, Sagamihara Golf Club là một trong những câu lạc bộ danh giá và truyền thống bậc nhất vùng thủ đô Tokyo. Từng là địa điểm đăng cai Japan Open Golf Championship, sở hữu địa hình rừng thông phẳng và mặt cỏ nhung chăm sóc tỉ mỉ theo tiêu chuẩn đỉnh cao Nhật Bản.",
          features: [
            "Quy mô 36 hố đẳng cấp: Sân Đông & Sân Tây",
            "Từng đăng cai giải đấu Japan Open Golf Championship danh giá",
            "Chính sách độc quyền hội viên VIP, thuận tiện di chuyển từ Tokyo",
          ],
        },
        {
          name: "Sân World Country Golf Club",
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
              <span>{isJa ? "SHINSEI トラベル · 名門ゴルフツアー" : "Shinsei Travel · Du Lịch Golf Đẳng Cấp"}</span>
            </div>

            <h1 className="font-title text-4xl sm:text-5xl lg:text-6xl font-light text-white leading-[1.08]">
              {isJa ? "国際水準の日本名門ゴルフツアー" : "Du Lịch Golf Nhật Bản Đẳng Cấp Quốc Tế"}
            </h1>

            <p className="text-base sm:text-lg text-[#f1e2c8]/85 font-normal leading-relaxed mt-4">
              {isJa
                ? "富士山麓・東京・大阪のPGA基準名門コースを巡る特別な旅。天然温泉旅館と本格会席料理を組み合わせ、極上の体験をお届けします。"
                : "Chinh phục những sân golf đạt chuẩn PGA quốc tế tại Phú Sĩ, Tokyo và Osaka. Kết hợp kỳ nghỉ dưỡng suối nước nóng Onsen truyền thống và thưởng thức ẩm thực Kaiseki thượng hạng."}
            </p>

            <div className="pt-6">
              <a href="#golf-courses" className="shushi-btn !bg-white !text-[#75182d] hover:!bg-[#f1e2c8] shadow-lg inline-flex items-center">
                <span>{isJa ? "名門ゴルフ場を見る" : "Khám phá các sân golf danh tiếng"}</span>
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
                {isJa ? "国際標準トーナメントコース" : "Sân Golf Tiêu Chuẩn Quốc Tế"}
              </span>
              <h2 className="font-title text-3xl sm:text-4xl lg:text-5xl font-light text-[#222222]">
                {isJa ? "日本を代表する最高峰のゴルフデスティネーション" : "Những Điểm Đến Golf Đỉnh Cao Tại Nhật Bản"}
              </h2>
              <p className="text-sm sm:text-base text-[#222222]/75 mt-3">
                {isJa
                  ? "完全会員制名門クラブの優先ティータイム手配から専用送迎まで、SHINSEIがワンストップでサポート。"
                  : "Shinsei Travel hỗ trợ đặt Tee-time độc quyền tại các câu lạc bộ danh giá chỉ dành riêng cho hội viên VIP."}
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
                          {isJa ? `コース 0${idx + 1}` : `Sân Golf 0${idx + 1}`}
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
                        <div className="flex items-center gap-1.5 text-xs text-[#222222]/65 mt-2 font-mono">
                          <MapPin className="w-3.5 h-3.5 text-[#75182d] shrink-0" />
                          <span>{isJa ? `所在地：${c.location}` : `Khu vực: ${c.location}`}</span>
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
                          <span>{isJa ? "このコースの予約相談をする" : "Đặt lịch & Tư vấn sân này"}</span>
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

        {/* Gallery 9 Ảnh Thật Về Golf Nhật Bản */}
        <section className="py-20 bg-[#fbf7ef] border-b border-black/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs uppercase font-mono tracking-[0.2em] text-[#75182d] font-bold block mb-2">
                {isJa ? "フォトギャラリー" : "Khoảnh Khắc Đẹp"}
              </span>
              <h3 className="font-title text-3xl sm:text-4xl font-light text-[#222222]">
                {isJa ? "四季折々の日本名門コース" : "Hình Ảnh Thực Tế Các Sân Golf Nhật Bản"}
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {golfPhotos.map((photo, idx) => (
                <div
                  key={idx}
                  className="aspect-[4/3] rounded overflow-hidden border border-black/10 shadow-sm bg-stone-200 group relative"
                >
                  <img
                    src={photo}
                    alt={isJa ? `名門ゴルフ場ギャラリー ${idx + 1}` : `Sân golf Nhật Bản ${idx + 1}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <span className="text-white text-xs font-mono">
                      {isJa ? `SHINSEI ゴルフセレクション 0${idx + 1}` : `Khoảnh khắc Golf Nhật Bản 0${idx + 1}`}
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
