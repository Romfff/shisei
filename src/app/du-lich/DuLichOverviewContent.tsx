"use client";

import { useLanguage } from "@/context/LanguageContext";
import { Navbar } from "@/components/Navbar";
import { ContactShinsei } from "@/components/ContactShinsei";
import { Footer } from "@/components/Footer";
import { ArrowRight, ShieldCheck, HeartHandshake, CheckCircle2, Globe, HeartPulse, Trophy, Compass } from "lucide-react";
import Link from "next/link";

export function DuLichOverviewContent() {
  const { isJa } = useLanguage();

  const travelPillars = isJa
    ? [
        {
          id: "y-te",
          title: "先端医療・再生医療ツアー",
          desc: "東大病院、藤田医科大学、慈恵医大、聖路加、湘南鎌倉、ノーベル賞山中伸弥教授のCiRA研究所など、日本を代表する6大名門病院・研究機関と提携。がん早期発見のNingen Dock、自己脂肪由来幹細胞治療、DFPP二重濾過血漿交換療法を、医療通訳付きで安全に手配します。",
          link: "/du-lich/y-te",
          linkText: "医療ツアーの詳細を見る",
          badge: "高度先端医療",
          img: "/images/Hospital/fujita-univ-hospital.png",
          highlights: [
            "総合人間ドック & 超早期がんスクリーニング",
            "自己幹細胞・iPS細胞先端医療",
            "東京・京都の最高峰6大病院との直接連携",
            "医療滞在ビザ取得支援 & 認定医療通訳帯同",
          ],
        },
        {
          id: "golf",
          title: "PGA基準 名門ゴルフツアー",
          desc: "富士山麓の太平洋クラブ御殿場、首都圏の名門・相模原ゴルフクラブ、大阪平野を一望するワールドカントリーGCなど、国際PGA水準の名門コースを手配。ラウンド後は天然温泉露天風呂と本格会席料理で至福のひとときをご提供。",
          link: "/du-lich/golf",
          linkText: "ゴルフツアーの詳細を見る",
          badge: "PGA名門コース",
          img: "/images/Golf/taiheiyo-club-gotemba.jpg",
          highlights: [
            "富士山麓・東京・大阪の名門トーナメントコース",
            "VIP・企業様向けの独占的優先ティータイム手配",
            "専任キャディ帯同 & 専用ハイヤー送迎",
            "源泉かけ流し天然温泉旅館での優雅な宿泊",
          ],
        },
        {
          id: "trai-nghiem",
          title: "伝統文化 & 美食体験ツアー",
          desc: "千年の古都・京都の寺社巡り、茶道宗匠に学ぶ茶の湯体験、春の桜・秋の紅葉、最高峰A5ランク神戸牛の鉄板焼きや豊洲市場直送の極上鮨まで、日本の美意識と食の粋を五感で堪能する旅。",
          link: "/du-lich/trai-nghiem",
          linkText: "文化・美食ツアーの詳細を見る",
          badge: "伝統美 & 美食",
          img: "/images/Travel/1-Tra-dao-Nhat-Ban.png",
          highlights: [
            "京都老舗茶室での本格茶道体験 & 着物着付け",
            "四季の絶景を巡るプライベート観光設計",
            "最高峰A5ランク神戸牛とミシュラン料亭の京会席",
            "完全プライベート専用車 & 公認通訳ガイド同行",
          ],
        },
      ]
    : [
        {
          id: "y-te",
          title: "Du Lịch Y Tế Chuyên Sâu",
          desc: "Hợp tác trực tiếp với 6 bệnh viện đại học và viện nghiên cứu hàng đầu Nhật Bản: ĐH Y Tokyo, Fujita, Jikei, St. Luke's, Shonan Kamakura và Viện tế bào gốc CIRA của Giáo sư đoạt giải Nobel Yamanaka. Tầm soát ung thư sớm, y học tái tạo tế bào gốc, khám tổng quát Ningen Dock với phiên dịch y tế chứng chỉ quốc tế.",
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
          desc: "Chinh phục những sân golf danh giá đạt chuẩn PGA quốc tế tại chân núi Phú Sĩ (Taiheiyo Gotemba), thủ đô Tokyo (Sagamihara) và Osaka (World Country). Kết hợp thư giãn suối khoáng nóng Onsen lộ thiên Rotenburo và thưởng thức tiệc Kaiseki thượng hạng sau mỗi trận đánh.",
          link: "/du-lich/golf",
          linkText: "Khám phá Tour Golf Nhật Bản",
          badge: "Sân PGA danh giá",
          img: "/images/Golf/taiheiyo-club-gotemba.jpg",
          highlights: [
            "Sân golf danh tiếng tại Núi Phú Sĩ, Tokyo & Osaka",
            "Đặt Tee-time độc quyền cho khách VIP & đoàn doanh nghiệp",
            "Dịch vụ Caddy bản xứ & xe đưa đón limousine cao cấp",
            "Nghỉ dưỡng Ryokan Onsen khoáng nóng tự nhiên",
          ],
        },
        {
          id: "trai-nghiem",
          title: "Du Lịch Trải Nghiệm Văn Hóa & Ẩm Thực",
          desc: "Khám phá chiều sâu văn hóa xứ sở Phù Tang: Thưởng thức trà đạo Chado cùng nghệ nhân tại cố đô Kyoto, ngắm hoa anh đào mùa xuân hoặc sắc lá đỏ Momiji mùa thu, thưởng thức bàn tiệc bò Wagyu Kobe A5 trứ danh cùng trải nghiệm tắm khoáng Onsen tại các lữ quán Ryokan truyền thống.",
          link: "/du-lich/trai-nghiem",
          linkText: "Khám phá Tour Trải Nghiệm Văn Hóa",
          badge: "Văn hóa & Nghỉ dưỡng",
          img: "/images/Travel/1-Tra-dao-Nhat-Ban.png",
          highlights: [
            "Trải nghiệm trà đạo Chado & mặc Kimono tại Kyoto",
            "Săn hoa anh đào nở rộ & ngắm rặng phong lá đỏ Momiji",
            "Ẩm thực bò Wagyu Kobe A5 & Sashimi tươi chợ Toyosu",
            "Xe đưa đón riêng biệt & Hướng dẫn viên am tường văn hóa",
          ],
        },
      ];

  const reasons = isJa
    ? [
        {
          icon: ShieldCheck,
          title: "公式提携ネットワーク",
          desc: "日本国内の大学病院、PGAトーナメントゴルフ場、老舗高級旅館と直接提携し、中間マージンのない透明な手配を実現。",
        },
        {
          icon: Globe,
          title: "完全医療通訳 & ビザ支援",
          desc: "日本政府認定の医療滞在ビザ取得サポートから、専門の医療通訳士の全日程同行まで、安心のサポート体制。",
        },
        {
          icon: HeartHandshake,
          title: "1組限定のオーダーメイド",
          desc: "お客様のご体調、ご予算、目的に応じ、専任コンシェルジュが旅程をゼロから設計するプライベート対応。",
        },
      ]
    : [
        {
          icon: ShieldCheck,
          title: "Mạng lưới đối tác trực tiếp",
          desc: "Liên kết chính thức với các bệnh viện đại học danh tiếng, sân golf PGA và chuỗi resort Onsen cao cấp không qua trung gian.",
        },
        {
          icon: Globe,
          title: "Hỗ trợ thủ tục trọn gói",
          desc: "Tư vấn hồ sơ xin visa y tế, visa thương mại và dịch vụ phiên dịch viên y tế bản xứ có chứng chỉ hành nghề chính quy.",
        },
        {
          icon: HeartHandshake,
          title: "Hành trình cá nhân hóa",
          desc: "Thiết kế lịch trình linh hoạt theo tình trạng sức khỏe, thói quen sinh hoạt và mong muốn riêng biệt của từng gia đình.",
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
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-bold text-[#f1e2c8] bg-white/10 px-3.5 py-1.5 rounded-full border border-white/15 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#f1e2c8] animate-pulse"></span>
              <span>{isJa ? "SHINSEI トラベル · 国際旅行事業" : "Shinsei Travel · Du Lịch Quốc Tế Chuyên Sâu"}</span>
            </div>

            <h1 className="font-title text-4xl sm:text-5xl lg:text-6xl font-light text-white leading-[1.08]">
              {isJa ? "日本の真髄を巡る：先端医療 · 名門ゴルフ · 伝統文化" : "Hành Trình Tinh Hoa Nhật Bản: Y Tế · Golf · Trải Nghiệm"}
            </h1>

            <p className="text-base sm:text-lg text-[#f1e2c8]/85 font-normal leading-relaxed mt-4">
              {isJa
                ? "企業経営者様、ご家族の皆様に、最高峰の医療アクセス、格式ある名門ゴルフ、そして日本の伝統文化を極上の安心と共にお届けします。"
                : "Shinsei Travel tự hào đồng hành cùng quý doanh nhân và gia đình qua những hành trình chạm tới chiều sâu văn hóa, dịch vụ y tế kỹ thuật cao và sân golf chuẩn PGA tại xứ sở mặt trời mọc."}
            </p>

            <div className="pt-6">
              <a href="#services-list" className="shushi-btn !bg-white !text-[#75182d] hover:!bg-[#f1e2c8] shadow-lg inline-flex items-center">
                <span>{isJa ? "事業内容を見る" : "Khám phá các dịch vụ lữ hành"}</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </div>
          </div>
        </section>

        {/* 3 Trụ Cột Du Lịch Chi Tiết */}
        <section id="services-list" className="py-24 bg-white border-b border-black/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-16">
              <span className="text-xs uppercase font-mono tracking-[0.2em] text-[#75182d] font-bold block mb-2">
                {isJa ? "主要3事業領域" : "3 Dịch Vụ Mũi Nhọn"}
              </span>
              <h2 className="font-title text-3xl sm:text-4xl lg:text-5xl font-light text-[#222222]">
                {isJa ? "SHINSEI トラベルの専門事業展開" : "Các Lĩnh Vực Hoạt Động Của Shinsei Travel"}
              </h2>
              <p className="text-sm sm:text-base text-[#222222]/75 mt-3">
                {isJa
                  ? "一般の観光旅行とは一線を画す、厳選された質の高い専門プログラムをご提供。"
                  : "Mỗi dịch vụ đều được xây dựng dựa trên mối quan hệ hợp tác trực tiếp với các đơn vị uy tín hàng đầu tại Nhật Bản."}
              </p>
            </div>

            <div className="space-y-16">
              {travelPillars.map((p, idx) => (
                <div
                  key={p.id}
                  className="bg-[#fbf7ef] border border-black/15 shadow-sm overflow-hidden hover:border-[#75182d] transition-all"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-10">
                    <div className="lg:col-span-5">
                      <div className="relative rounded overflow-hidden border border-black/10 shadow-md">
                        <img
                          src={p.img}
                          alt={p.title}
                          className="w-full h-64 sm:h-80 object-cover"
                        />
                        <div className="absolute top-3 left-3 bg-[#75182d] text-[#f1e2c8] text-[10px] font-mono uppercase px-2.5 py-1 font-bold">
                          {p.badge}
                        </div>
                      </div>
                    </div>

                    <div className="lg:col-span-7 space-y-4">
                      <div>
                        <span className="font-mono text-xs uppercase tracking-widest text-[#75182d] font-bold block mb-1">
                          0{idx + 1}.
                        </span>
                        <h3 className="font-title text-2xl sm:text-3xl font-light text-[#222222]">
                          {p.title}
                        </h3>
                      </div>

                      <p className="text-xs sm:text-sm text-[#222222]/85 leading-relaxed font-normal pt-2 border-t border-black/10">
                        {p.desc}
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
                        {p.highlights.map((h, hIdx) => (
                          <div key={hIdx} className="flex items-center gap-2 text-xs text-[#222222]">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#75182d] shrink-0" />
                            <span>{h}</span>
                          </div>
                        ))}
                      </div>

                      <div className="pt-4 border-t border-black/10">
                        <Link
                          href={p.link}
                          className="shushi-btn shushi-btn-primary !py-2.5 !px-5 text-xs inline-flex items-center"
                        >
                          <span>{p.linkText}</span>
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Lý do chọn Shinsei Travel */}
        <section className="py-24 bg-[#fbf7ef] border-b border-black/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs uppercase font-mono tracking-[0.2em] text-[#75182d] font-bold block mb-2">
                {isJa ? "選ばれる理由" : "Giá Trị Khác Biệt"}
              </span>
              <h2 className="font-title text-3xl sm:text-4xl lg:text-5xl font-light text-[#222222]">
                {isJa ? "なぜSHINSEI トラベルなのか" : "Tại Sao Khách Hàng Chọn Shinsei Travel?"}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {reasons.map((r, idx) => {
                const Icon = r.icon;
                return (
                  <div key={idx} className="bg-white p-8 border border-black/10 shadow-sm flex flex-col justify-between">
                    <div>
                      <div className="w-12 h-12 rounded bg-[#75182d] text-white flex items-center justify-center mb-6">
                        <Icon className="w-6 h-6 text-[#f1e2c8]" />
                      </div>
                      <h4 className="font-title text-xl font-normal text-[#222222] mb-3">
                        {r.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-[#222222]/75 leading-relaxed">
                        {r.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
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
