"use client";

import { useLanguage } from "@/context/LanguageContext";
import { Navbar } from "@/components/Navbar";
import { ContactShinsei } from "@/components/ContactShinsei";
import { Footer } from "@/components/Footer";
import { ShieldCheck, CheckCircle2, ArrowRight } from "lucide-react";

export function BepAnContent() {
  const { isJa } = useLanguage();

  const mealPackages = isJa
    ? [
        {
          price: "30.000đ",
          name: "学生・生徒向け給食プラン",
          target: "小・中・高校、大学、全寮制学校、教育研修センター向け",
          tag: "学生・生徒向け",
          features: [
            "高タンパク主菜1品：豚肉と煮卵 / 甘酢チキン / 白身魚のトマトソテー",
            "野菜炒め1品：空心菜のガーリック炒め / ハヤトウリ炒め / 茹でインゲン",
            "季節の汁物1品：田蟹とモロヘイヤのスープ / 冬瓜スープ / 豚挽肉の青菜スープ",
            "ふっくら白米（おかわり自由）",
            "デザート：バナナ / 新鮮なスイカ / 清涼茶",
          ],
          desc: "成長期の学生に必要なエネルギー（2,200〜2,600 kcal）と栄養バランスを徹底管理。",
        },
        {
          price: "40.000đ",
          name: "スタンダード給食プラン（標準）",
          target: "製造工場、大規模工場、シフト勤務現場、オフィス向け",
          tag: "標準・定番プラン",
          features: [
            "上質タンパク主菜1品：甘辛スペアリブ / 牛肉の黒胡椒炒め / バサ魚の香草ソテー",
            "副菜1品：出汁巻き玉子 / 肉詰め厚揚げ / 香草つくね",
            "VietGAP認証 五色野菜の彩り炒め",
            "カルシウム・ビタミン豊富なじっくり煮込みボーンスープ",
            "ふっくら白米 / ヘルシー玄米の選択可能",
            "デザート：ヨーグルト / 四季のフレッシュフルーツ",
          ],
          desc: "30日間重複のない日替わり献立。働く皆様のスタミナと健康をしっかり支えます。",
        },
        {
          price: "60.000đ",
          name: "アドバンス給食プラン（高度）",
          target: "外資・日系企業、技術専門職、エグゼクティブオフィス向け",
          tag: "人気アドバンス",
          features: [
            "特選主菜1品：サイコロステーキ / イカとセロリの炒め物 / 照り焼きチキン",
            "アジア・和風副菜1品：特製チャーシュー / 海老と豚バラの旨煮 / キノコと厚揚げの含め煮",
            "特選青菜料理：青梗菜の椎茸餡かけ / ブロッコリーのガーリック炒め",
            "特製スープ：若鶏とコーンのとろみスープ / スペアリブと昆布のスープ",
            "デザート：自家製プリン / 薬膳デザート / 生搾りフルーツジュース",
          ],
          desc: "専門職の健康と嗜好に配慮し、専用の重箱・弁当トレーで美しく盛り付けてお届けします。",
        },
        {
          price: "80.000đ",
          name: "プレミアム品質プラン",
          target: "役員・経営陣、日本人駐在員、VIP会議・来賓対応向け",
          tag: "最高峰品質",
          features: [
            "和風特選メイン1品：サーモンの照り焼き / 牛すき焼き風炒め / 揚げたてサクサクとんかつ",
            "伝統副菜1品：季節野菜の天ぷら / 出汁巻き玉子 / 刻み昆布と胡麻の和え物",
            "新鮮フルーツサラダ（キユーピー焙煎胡麻ドレッシング添え）",
            "伝統的な豆腐と若布の合わせ味噌汁",
            "厳選ジャポニカ米使用 白飯（黒胡麻ふりかけ）",
            "デザート：京都宇治抹茶ゼリー / 特選緑茶",
          ],
          desc: "日本の繊細な味付けと盛り付け美を完全再現。安心と確かな満足をお届けします。",
        },
      ]
    : [
        {
          price: "30.000đ",
          name: "Gói Học Sinh, Sinh Viên",
          target: "Trường học các cấp, đại học, trường nội trú, trung tâm đào tạo",
          tag: "Học sinh · Sinh viên",
          features: [
            "01 Món chính giàu đạm: Thịt kho trứng / Gà sốt chua ngọt / Cá nướng sốt cà",
            "01 Món xào: Rau muống xào tỏi / Su su xào thịt / Đỗ luộc",
            "01 Món canh theo mùa: Canh cua rau đay / Canh bí hầm / Canh rau ngót thịt băm",
            "Cơm trắng dẻo thơm không giới hạn khẩu phần",
            "Tráng miệng: Chuối / Dưa hấu tươi / Trà sạch thanh nhiệt",
          ],
          desc: "Thực đơn tối ưu dinh dưỡng cho lứa tuổi học sinh sinh viên, đảm bảo năng lượng học tập và phát triển thể chất.",
        },
        {
          price: "40.000đ",
          name: "Gói Tiêu Chuẩn",
          target: "Phù hợp nhà máy sản xuất, ca kíp xí nghiệp số lượng lớn, văn phòng",
          tag: "Tiêu chuẩn · Phổ biến",
          features: [
            "01 Món chính đạm chất lượng: Sườn rim mặn ngọt / Bò sốt tiêu / Cá basa phi lê áp chảo",
            "01 Món phụ kèm: Trứng cuộn tamagoyaki / Đậu phụ nhồi thịt / Chả lá lốt",
            "01 Món xào rau củ ngũ sắc tươi sạch VietGAP",
            "01 Món canh hầm xương giàu canxi & vitamin",
            "Cơm trắng dẻo / Cơm gạo lứt bổ dưỡng",
            "Tráng miệng: Sữa chua / Trái cây tươi 4 mùa",
          ],
          desc: "Thực đơn đổi mới 30 ngày không trùng lặp, tối ưu năng lượng từ 2.400 - 2.800 kcal cho người lao động.",
        },
        {
          price: "60.000đ",
          name: "Gói Nâng Cao",
          target: "Doanh nghiệp FDI, chuyên gia kỹ thuật, khối văn phòng cao cấp",
          tag: "Gói Nâng Cao",
          features: [
            "01 Món chính cao cấp: Bò lúc lắc nấm / Mực xào cần tỏi / Gà nướng mật ong sốt tare",
            "01 Món phụ phong cách Á - Nhật: Thịt heo xá xíu / Tôm rim thịt ba chỉ / Đậu Nhật xào nấm",
            "01 Món rau xanh đặc biệt: Cải thìa sốt nấm hương / Bông cải xanh xào tỏi",
            "01 Món canh súp đặc biệt: Súp gà ngô non / Canh sườn hầm rong biển",
            "Tráng miệng: Bánh pudding / Chè thanh nhiệt / Nước ép hoa quả",
          ],
          desc: "Cân đối hoàn hảo 4 nhóm chất, bài trí chuyên nghiệp trên khay bento chuyên dụng chuẩn Nhật.",
        },
        {
          price: "80.000đ",
          name: "Gói Chất Lượng",
          target: "Ban giám đốc, chuyên gia nước ngoài, tiếp khách VIP & sự kiện công ty",
          tag: "Chất lượng cao cấp",
          features: [
            "01 Món chính chuẩn Nhật: Cá hồi Nauy áp chảo Teriyaki / Bò Mỹ sốt tiêu / Tonkatsu giòn tan",
            "01 Món phụ truyền thống: Tempura rau củ / Trứng cuộn dashi / Rong biển tươi trộn mè",
            "Salad hoa quả tươi kèm sốt mè rang Kewpie Nhật Bản",
            "Canh Miso đậu hũ non và rong biển Wakame truyền thống",
            "Cơm gạo Nhật Japonica dẻo thơm rắc vừng đen",
            "Tráng miệng: Thạch matcha Kyoto / Trái cây cao cấp nhập khẩu",
          ],
          desc: "Đẳng cấp ẩm thực tinh hoa phục vụ theo hình thức bento cao cấp hoặc tiệc bàn VIP.",
        },
      ];

  const services = isJa
    ? [
        {
          title: "産業給食・集団社員食堂運営",
          desc: "工場、事業所、全寮制学校向けに、厨房設備投資から日々の現地調理・給食運営まで一括受託（日食200食〜10,000食以上対応）。",
          img: "/images/service-suat-an-cong-nghiep.jpg",
          points: ["日本式5S一方通行調理動線", "24時間検食保管の完全義務化", "定期的な微生物自主検査の実施"],
        },
        {
          title: "特選弁当・高級弁当トレー",
          desc: "役員・管理者・来賓向けに、栄養バランスと美しい彩りを追求した本格和食仕立てのプレミアム弁当をご提供。",
          img: "/images/service-suat-com-dac-biet.jpg",
          points: ["サーモン・Wagyu・天ぷら等の特選献立", "高級感のある断熱保温容器", "日本の食文化に則った美しい盛り付け"],
        },
        {
          title: "テイクアウト弁当・持ち帰りセット",
          desc: "環境に優しいエコ容器を使用。SHINSEIブランドのクラフト紙袋付きで、社内研修、出張、アウトドアイベントに最適。",
          img: "/images/service-com-hop-mang-di.jpg",
          points: ["安全生分解性エコ弁当容器", "配送中も適温を維持する定温管理", "専用カトラリーと紙袋の完全セット"],
        },
        {
          title: "企業円卓宴会・社内ケータリング",
          desc: "創立記念式典、忘新年会、VIP来賓接待、労働組合イベントなど、6〜10名様円卓料理からビュッフェまで幅広く対応。",
          img: "/images/service-tiec-ban-doanh-nghiep.jpg",
          points: ["贅沢で新鮮な宴会コース料理", "高品質なテーブルウェアの完備", "ご予算に合わせたオーダーメイド設計"],
        },
      ]
    : [
        {
          title: "Suất Ăn Công Nghiệp & Bếp Tập Thể",
          desc: "Thiết kế, đầu tư thiết bị và vận hành trọn gói bếp ăn tại chỗ cho các nhà máy, xí nghiệp, trường học bán trú từ 200 đến 10.000+ suất/ngày.",
          img: "/images/service-suat-an-cong-nghiep.jpg",
          points: ["Quy trình bếp 1 chiều chuẩn 5S", "Lưu mẫu 24 giờ tuyệt đối", "Kiểm định vi sinh định kỳ"],
        },
        {
          title: "Suất Cơm Đặc Biệt · Bento Cao Cấp",
          desc: "Suất ăn khẩu phần bento sang trọng chuẩn phong cách Nhật Bản, dinh dưỡng cân đối, chuyên phục vụ ban giám đốc, chuyên gia và cán bộ văn phòng.",
          img: "/images/service-suat-com-dac-biet.jpg",
          points: ["Thực đơn cá hồi, bò Wagyu, tempura", "Khay giữ nhiệt sang trọng", "Trình bày chuẩn mực văn hóa Nhật"],
        },
        {
          title: "Cơm Hộp Mang Đi",
          desc: "Hộp bento đóng gói thân thiện môi trường, nhỏ gọn, kín mùi, kèm túi giấy nhận diện thương hiệu Shinsei, chuyên dùng cho tour du lịch, hội thảo dã ngoại.",
          img: "/images/service-com-hop-mang-di.jpg",
          points: ["Hộp bento sinh học cao cấp", "Giữ ấm liên tục suốt chặng đường", "Đóng gói đồng bộ túi giấy Shinsei"],
        },
        {
          title: "Tiệc Bàn Doanh Nghiệp 6 - 8 - 10 Người",
          desc: "Phục vụ các sự kiện kỷ niệm thành lập, tiệc tất niên, đón tiếp đối tác, liên hoan công đoàn với thực đơn lẩu nướng và mâm tiệc thịnh soạn, phục vụ chuyên nghiệp.",
          img: "/images/service-tiec-ban-doanh-nghiep.jpg",
          points: ["Mâm tiệc phong phú, tươi ngon", "Dụng cụ bàn tiệc cao cấp", "Thiết kế thực đơn theo ngân sách"],
        },
      ];

  return (
    <div className="min-h-screen flex flex-col bg-[#fbf7ef] text-[#222222]">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-28 bg-[#75182d] text-[#f1e2c8] overflow-hidden">
          <div className="absolute inset-0 opacity-15 mix-blend-overlay pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] font-bold text-[#f1e2c8] bg-white/10 px-3.5 py-1.5 rounded-full border border-white/15">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#f1e2c8] animate-pulse"></span>
                  <span>{isJa ? "給食・メニュー · 日本式5S管理基準" : "Bếp Ăn & Thực Đơn · Tiêu Chuẩn 5S Nhật Bản"}</span>
                </div>

                <h1 className="font-title text-4xl sm:text-5xl lg:text-6xl font-light text-white leading-[1.08]">
                  {isJa ? "毎食に安心を、毎日に満ち足りた栄養を。" : "An tâm trong từng bữa ăn, trọn vẹn dinh dưỡng mỗi ngày."}
                </h1>

                <p className="text-base sm:text-lg text-[#f1e2c8]/85 font-normal leading-relaxed max-w-2xl">
                  {isJa
                    ? "工場向け集団給食から、役員向けプレミアム弁当、社内パーティー料理まで、100%厳選食材と徹底した衛生管理でお応えします。"
                    : "Shinsei cung cấp giải pháp ẩm thực tập thể chuẩn mực: từ suất ăn công nghiệp nhà máy, cơm bento văn phòng đến tiệc sự kiện doanh nghiệp với nguồn nguyên liệu 100% sạch và kiểm soát khép kín."}
                </p>

                <div className="flex flex-wrap gap-4 pt-2">
                  <a href="#menu-packages" className="shushi-btn !bg-white !text-[#75182d] hover:!bg-[#f1e2c8] shadow-lg">
                    <span>{isJa ? "献立プラン一覧を見る" : "Xem các gói thực đơn"}</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                  <a href="#contact" className="shushi-btn shushi-btn-outline !border-white/30 !text-white hover:!bg-white/10">
                    <span>{isJa ? "無料ご試食のお申し込み" : "Đăng ký nếm thử miễn phí"}</span>
                  </a>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="relative rounded-lg overflow-hidden border border-white/20 shadow-2xl group">
                  <img
                    src="/images/shinsei-hero-bento-kitchen.jpg"
                    alt={isJa ? "栄養バランスに配慮した給食弁当トレーと衛生的な厨房" : "Khay cơm bento dinh dưỡng và bếp chế biến 5S Shinsei"}
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
                    <div>
                      <span className="text-xs font-mono uppercase tracking-widest text-[#f1e2c8]">
                        {isJa ? "SHINSEI セントラルキッチン" : "Bếp trung tâm Shinsei"}
                      </span>
                      <h3 className="font-title text-xl text-white font-light">
                        {isJa ? "HACCP & ISO 22000 認証基準" : "Tiêu chuẩn HACCP & ISO 22000"}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4 Dịch Vụ Cốt Lõi */}
        <section className="py-24 bg-white border-b border-black/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs uppercase font-mono tracking-[0.2em] text-[#75182d] font-bold block mb-2">
                {isJa ? "提供サービス体系" : "Hệ Sinh Thái Phục Vụ"}
              </span>
              <h2 className="font-title text-3xl sm:text-4xl lg:text-5xl font-light text-[#222222]">
                {isJa ? "4つの専門的給食サービスモデル" : "4 Mô Hình Dịch Vụ Ẩm Thực Chuyên Nghiệp"}
              </h2>
              <p className="text-sm sm:text-base text-[#222222]/75 mt-3">
                {isJa
                  ? "ベトナム国内の企業規模、シフト勤務、教育機関の形態に合わせて柔軟に対応いたします。"
                  : "Linh hoạt thích ứng với từng mô hình tổ chức của doanh nghiệp, cơ quan và trường học tại Việt Nam."}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-[#fbf7ef] border border-black/10 overflow-hidden shadow-sm hover:border-[#75182d] transition-all group flex flex-col justify-between"
                >
                  <div className="aspect-[16/10] overflow-hidden relative">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4 bg-[#75182d] text-[#f1e2c8] text-[10px] font-mono uppercase px-2.5 py-1 font-bold">
                      {isJa ? `サービス 0${idx + 1}` : `Dịch vụ 0${idx + 1}`}
                    </div>
                  </div>

                  <div className="p-8 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-title text-2xl font-light text-[#222222] mb-3 group-hover:text-[#75182d] transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#222222]/80 leading-relaxed mb-6">
                        {item.desc}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-black/10 space-y-2">
                      {item.points.map((pt, pIdx) => (
                        <div key={pIdx} className="flex items-center gap-2 text-xs font-mono text-[#75182d]">
                          <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                          <span>{pt}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Các Gói Thực Đơn Chi Tiết */}
        <section id="menu-packages" className="py-24 bg-[#fbf7ef] border-b border-black/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs uppercase font-mono tracking-[0.2em] text-[#75182d] font-bold block mb-2">
                {isJa ? "栄養献立表" : "Bảng Thực Đơn Dinh Dưỡng"}
              </span>
              <h2 className="font-title text-3xl sm:text-4xl lg:text-5xl font-light text-[#222222]">
                {isJa ? "SHINSEI 標準給食パッケージ" : "Các Gói Khẩu Phần Tiêu Chuẩn Shinsei"}
              </h2>
              <p className="text-sm sm:text-base text-[#222222]/75 mt-3">
                {isJa
                  ? "管理栄養士が監修し、正確なグラム管理と厳格な衛生検査をクリアした安全な献立。"
                  : "Được nghiên cứu bởi chuyên gia dinh dưỡng, định lượng rõ ràng và cam kết kiểm nghiệm vệ sinh an toàn."}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
              {mealPackages.map((pkg, idx) => (
                <div
                  key={idx}
                  className="bg-white p-6 sm:p-8 border border-black/10 hover:border-[#75182d] transition-all shadow-sm flex flex-col justify-between relative group"
                >
                  <div>
                    <div className="inline-block bg-[#f1e2c8]/60 text-[#75182d] text-[10px] font-mono uppercase px-2.5 py-0.5 rounded-full font-bold mb-4">
                      {pkg.tag}
                    </div>

                    <div className="border-b border-black/10 pb-5 mb-5">
                      <div className="font-title text-3xl sm:text-4xl font-light text-[#75182d]">
                        {pkg.price}
                      </div>
                      <h4 className="font-title text-lg font-medium text-[#222222] mt-1">
                        {pkg.name}
                      </h4>
                      <p className="text-[11px] text-[#222222]/60 mt-1 font-mono">
                        {pkg.target}
                      </p>
                    </div>

                    <div className="space-y-3 mb-6">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-[#75182d] font-bold block">
                        {isJa ? "献立構成の内訳：" : "Chi tiết khẩu phần:"}
                      </span>
                      {pkg.features.map((feat, fIdx) => (
                        <div key={fIdx} className="text-xs text-[#222222]/80 leading-relaxed flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#75182d] shrink-0 mt-1.5"></span>
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-black/10">
                    <p className="text-[11px] text-[#222222]/60 italic mb-4">
                      {pkg.desc}
                    </p>
                    <a
                      href="#contact"
                      className="block text-center w-full py-2.5 bg-[#fbf7ef] group-hover:bg-[#75182d] text-[#75182d] group-hover:text-white border border-[#75182d]/30 font-mono text-xs uppercase font-bold tracking-wider transition-colors"
                    >
                      {isJa ? "試食を申し込む" : "Đăng ký nếm thử"}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-xs text-[#222222]/70 font-mono">
                {isJa
                  ? "※ ベジタリアン、減塩食、学校給食・アスリート向けの特別食メニューの個別設計も承っております。"
                  : "* Doanh nghiệp có thể yêu cầu thiết kế thực đơn riêng biệt: Ăn chay, kiêng mặn hoặc chế độ dinh dưỡng đặc thù cho trường học và vận động viên."}
              </p>
            </div>
          </div>
        </section>

        {/* Cam Kết 5S ATVSTP */}
        <section className="py-20 bg-white border-b border-black/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-5">
                <span className="text-xs uppercase font-mono tracking-[0.2em] text-[#75182d] font-bold block mb-2">
                  {isJa ? "品質保証の誓約" : "Cam Kết Chất Lượng"}
                </span>
                <h3 className="font-title text-3xl sm:text-4xl font-light text-[#222222] leading-tight mb-4">
                  {isJa ? "完全クローズド 5S衛生管理システム" : "Quy Trình Kiểm Soát 5S Khép Kín 100%"}
                </h3>
                <p className="text-xs sm:text-sm text-[#222222]/80 leading-relaxed mb-6">
                  {isJa
                    ? "食品衛生をすべての根幹に据えています。すべてのシフトで3段階の検食を実施し、24時間保管を徹底しています。"
                    : "Chúng tôi đặt yếu tố an toàn vệ sinh thực phẩm lên hàng đầu. Mọi ca phục vụ đều có hồ sơ kiểm thực 3 bước và mẫu thức ăn lưu trữ 24 giờ đúng tiêu chuẩn Bộ Y tế."}
                </p>
                <div className="space-y-3">
                  {(isJa
                    ? [
                        "100%の食材について請求書・明確な産地証明書を完備",
                        "二次汚染を完全に遮断する一方通行厨房オペレーション",
                        "国立食品安全衛生研究所での定期的な細菌検査の実施",
                        "包括的な生産物賠償責任保険（PL保険）への加入",
                      ]
                    : [
                        "100% Thực phẩm có hóa đơn, chứng nhận xuất xứ rõ ràng",
                        "Quy trình bếp một chiều phân định ranh giới nhiễm bẩn",
                        "Định kỳ kiểm nghiệm vi sinh tại Viện Kiểm nghiệm ATVSTP Quốc gia",
                        "Bảo hiểm trách nhiệm vệ sinh an toàn thực phẩm toàn diện",
                      ]
                  ).map((text, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-xs sm:text-sm text-[#222222]">
                      <ShieldCheck className="w-4 h-4 text-[#75182d] shrink-0" />
                      <span>{text}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="rounded overflow-hidden border border-black/10 shadow-sm bg-white flex flex-col">
                  <div className="h-48 overflow-hidden">
                    <img src="/images/service-suat-com-dac-biet.jpg" alt={isJa ? "新鮮で本格的な味わい" : "Khẩu phần tươi ngon, chuẩn vị"} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-3 text-center text-xs font-medium text-[#222222]/85 border-t border-black/5 bg-[#fbf7ef]/50">
                    {isJa ? "新鮮で本格的な味わい" : "Khẩu phần tươi ngon, chuẩn vị"}
                  </div>
                </div>
                <div className="rounded overflow-hidden border border-black/10 shadow-sm bg-white flex flex-col">
                  <div className="h-48 overflow-hidden">
                    <img src="/images/shinsei-truck.jpg" alt={isJa ? "自社保温配送トラック" : "Xe bán tải bảo ôn giao hàng"} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-3 text-center text-xs font-medium text-[#222222]/85 border-t border-black/5 bg-[#fbf7ef]/50">
                    {isJa ? "適温を保つ定温配送" : "Giao hàng bảo ôn nhiệt độ chuẩn"}
                  </div>
                </div>
                <div className="rounded overflow-hidden border border-black/10 shadow-sm bg-white flex flex-col">
                  <div className="h-48 overflow-hidden bg-[#fbf7ef] flex items-center justify-center p-1">
                    <img src="/images/shinsei-uniform-chef-full.jpg" alt={isJa ? "5S厨房ユニフォーム規程" : "Quy chuẩn đồng phục bếp 5S"} className="w-full h-full object-contain" />
                  </div>
                  <div className="p-3 text-center text-xs font-medium text-[#222222]/85 border-t border-black/5 bg-[#fbf7ef]/50">
                    {isJa ? "5S厨房ユニフォーム規程" : "Quy chuẩn đồng phục bếp 5S"}
                  </div>
                </div>
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
