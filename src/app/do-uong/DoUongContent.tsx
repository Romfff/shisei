"use client";

import { useLanguage } from "@/context/LanguageContext";
import { Navbar } from "@/components/Navbar";
import { ContactShinsei } from "@/components/ContactShinsei";
import { Footer } from "@/components/Footer";
import { ArrowRight } from "lucide-react";

export function DoUongContent() {
  const { isJa } = useLanguage();

  const drinkCategories = isJa
    ? [
        {
          category: "エスプレッソ & ベトナム本格コーヒー",
          desc: "カウダット産アラビカ種およびロブスタ種の手煎り豆を使用。芳醇なアロマと深いコクを抽出。",
          items: [
            { name: "エスプレッソ (Espresso)", price: "25.000đ", note: "本場イタリア製マシン抽出の本格シングル" },
            { name: "アメリカーノ (Americano)", price: "30.000đ", note: "すっきりとした飲み口と長く続く余韻" },
            { name: "カフェラテ (Caffe Latte)", price: "38.000đ", note: "低温殺菌スチームミルクと濃厚エスプレッソ" },
            { name: "カプチーノ (Cappuccino)", price: "38.000đ", note: "きめ細やかなフォームミルクとベルギーココア" },
            { name: "宮廷ソルトコーヒー (Salt Coffee)", price: "35.000đ", note: "SHINSEI特製 濃厚ソルトクリームの絶妙な塩味" },
            { name: "ココナッツコーヒーフローズン", price: "39.000đ", note: "ベンチェ産ココナッツの濃厚な甘みと香り" },
            { name: "伝統的ベトナムフィンコーヒー", price: "25.000đ", note: "伝統器具フィンでゆっくり抽出した濃厚な味わい" },
          ],
        },
        {
          category: "宇治抹茶 & ほうじ茶ラテ",
          desc: "京都府宇治産の最高級茶葉を100%使用。カテキン・テアニン豊富で心身を整える一杯。",
          items: [
            { name: "京都宇治抹茶ラテ", price: "42.000đ", note: "濃厚な宇治抹茶と新鮮なミルクの調和" },
            { name: "抹茶チーズフォーム", price: "45.000đ", note: "なめらかな塩味チーズクリームを贅沢にトッピング" },
            { name: "焙煎ほうじ茶ラテ", price: "42.000đ", note: "香ばしく低カフェインでリラックスに最適" },
            { name: "玄米茶ラテ (Genmaicha)", price: "32.000đ", note: "炒り米の香ばしさと優しい味わい" },
            { name: "SHINSEI 焙煎烏龍ミルクティー", price: "38.000đ", note: "もちもちのゴールデンタピオカ入り" },
          ],
        },
        {
          category: "フレッシュフルーツティー & ハーブティー",
          desc: "新鮮な果実をじっくり浸出。人工シロップ不使用、自然な甘みとビタミンを補給。",
          items: [
            { name: "ピーチ・オレンジ・レモングラスティー", price: "35.000đ", note: "果肉たっぷりピーチと蜂蜜の爽やかな香り" },
            { name: "ピンクグアバ・ホワイトロータスティー", price: "38.000đ", note: "上品なグアバの甘みと蓮の実ゼリー" },
            { name: "ロイヤルローズライチティー", price: "38.000đ", note: "華やかなフレンチローズとみずみずしいライチ" },
            { name: "マンゴー・パッションフルーツティー", price: "35.000đ", note: "ビタミン満点の爽やかなトロピカルフレーバー" },
            { name: "ナツメとクコの実の薬膳ハーブティー", price: "35.000đ", note: "美肌・健康をサポートする温活ドリンク" },
          ],
        },
        {
          category: "コールドプレスジュース & スムージー",
          desc: "低速搾汁コールドプレス製法でビタミン・酵素を壊さず丸ごと抽出。",
          items: [
            { name: "オレンジ・キャロット ビタミンスムージー", price: "35.000đ", note: "ビタミンA・Cを豊富に含み美肌を促進" },
            { name: "アップル・セロリ デトックスジュース", price: "38.000đ", note: "食物繊維豊富でスッキリした健康維持に" },
            { name: "スイカ・ミント スッキリジュース", price: "32.000đ", note: "乾いた喉を瞬時に潤す天然の清涼感" },
            { name: "アボカド・ココナッツ リッチスムージー", price: "42.000đ", note: "ダクラク産アボカドの上質でクリーミーな味わい" },
            { name: "マンゴー・バナナ・オーツ麦スムージー", price: "40.000đ", note: "良質なエネルギータンク、午後の間食に最適" },
          ],
        },
      ]
    : [
        {
          category: "Cà Phê Pha Máy & Cà Phê Việt Nam",
          desc: "Chiết xuất từ hạt Arabica Cầu Đất & Robusta rang mộc, giữ trọn hương vị đậm đà nguyên bản.",
          items: [
            { name: "Espresso Đậm Đà", price: "25.000đ", note: "Shot cà phê nguyên chất chuẩn Ý" },
            { name: "Americano Đá / Nóng", price: "30.000đ", note: "Thanh mát, hậu vị ngọt kéo dài" },
            { name: "Latte Bọt Mịn", price: "38.000đ", note: "Sữa tươi thanh trùng tiệt trùng cùng espresso" },
            { name: "Cappuccino Cổ Điển", price: "38.000đ", note: "Lớp bọt sữa xốp mịn rắc bột cacao Bỉ" },
            { name: "Cà Phê Muối Cung Đình", price: "35.000đ", note: "Kem muối béo ngậy độc quyền Shinsei" },
            { name: "Cà Phê Cốt Dừa Đá Xay", price: "39.000đ", note: "Cốt dừa Bến Tre thơm béo ngậy" },
            { name: "Cà Phê Đen / Nâu Truyền Thống", price: "25.000đ", note: "Pha phin truyền thống đậm gu Việt" },
          ],
        },
        {
          category: "Trà Nhật Bản & Matcha Uji Signature",
          desc: "Sử dụng 100% bột trà xanh Uji cao cấp nhập khẩu từ Kyoto, giàu chất chống oxy hóa EGCG.",
          items: [
            { name: "Uji Matcha Latte", price: "42.000đ", note: "Matcha Kyoto thơm đậm kết hợp sữa tươi" },
            { name: "Matcha Kem Cheese", price: "45.000đ", note: "Lớp kem phô mai béo mặn sánh mịn" },
            { name: "Hojicha Latte Rang Nướng", price: "42.000đ", note: "Trà xanh rang thơm lừng ít caffeine" },
            { name: "Genmaicha Gạo Lứt Rang", price: "32.000đ", note: "Hương thơm thanh tao, hỗ trợ tiêu hóa" },
            { name: "Trà Sữa Oolong Nướng Shinsei", price: "38.000đ", note: "Trân châu hoàng kim dai giòn sần sật" },
          ],
        },
        {
          category: "Trà Trái Cây Tươi & Trà Thảo Mộc",
          desc: "Trái cây tươi tự nhiên ngâm ủ trong ngày, không dùng siro hóa chất, thanh lọc và bồi bổ cơ thể.",
          items: [
            { name: "Trà Đào Cam Sả Mật Ong", price: "35.000đ", note: "Miếng đào giòn tan cùng cam vàng tươi" },
            { name: "Trà Ổi Hồng Sen Tuyết", price: "38.000đ", note: "Hương ổi hồng ngọt thanh và thạch sen" },
            { name: "Trà Vải Hoa Hồng Hoàng Gia", price: "38.000đ", note: "Cánh hoa hồng Pháp thơm ngát quyến rũ" },
            { name: "Trà Xoài Chanh Leo Nhiệt Đới", price: "35.000đ", note: "Vị chua ngọt bùng nổ năng lượng" },
            { name: "Trà Dưỡng Nhan Táo Đỏ Kỷ Tử", price: "35.000đ", note: "Thảo mộc thanh mát, tốt cho làn da" },
          ],
        },
        {
          category: "Nước Ép Tươi & Sinh Tố Dinh Dưỡng",
          desc: "Nước ép nguyên chất ép chậm giữ trọn vitamin và khoáng chất tự nhiên.",
          items: [
            { name: "Nước Ép Cam - Cà Rốt Sáng Da", price: "35.000đ", note: "Bổ sung Vitamin A & C dồi dào" },
            { name: "Nước Ép Táo - Cần Tây Detox", price: "38.000đ", note: "Hỗ trợ thải độc, giữ dáng thon gọn" },
            { name: "Nước Ép Dưa Hấu Bạc Hà", price: "32.000đ", note: "Thanh nhiệt sảng khoái tức thì" },
            { name: "Sinh Tố Bơ Dừa Béo Ngậy", price: "42.000đ", note: "Bơ sáp Đắk Lắk ngọt thơm tự nhiên" },
            { name: "Sinh Tố Xoài Chuối Yến Mạch", price: "40.000đ", note: "Giàu năng lượng lành mạnh cho bữa xế" },
          ],
        },
      ];

  const cafeServices = isJa
    ? [
        {
          title: "プロ仕様マシン & 厳選レシピ",
          desc: "イタリア直輸入のエスプレッソマシン、保冷ショーケース、厳選されたコーヒー豆と宇治抹茶を配備。",
        },
        {
          title: "日本のおもてなし接客スタッフ",
          desc: "プロのバリスタ教育を受けたスタッフがワインレッドの清潔なポロシャツを着用し、丁寧・迅速に応対。",
        },
        {
          title: "SHINSEIブランドカップ & 保温タンブラー",
          desc: "環境に優しいエコペーパーカップ、企業ロゴ入れ対応の保温タンブラーで職場に洗練された一体感を演出。",
        },
        {
          title: "社員向け福利厚生 特別割引価格",
          desc: "貴社従業員様限定の優待価格（1杯15,000〜25,000VND程度）で毎日のリフレッシュをサポート。",
        },
      ]
    : [
        {
          title: "Thiết kế & Pha chế chuyên nghiệp",
          desc: "Shinsei trang bị hệ thống máy pha cà phê Ý cao cấp, tủ bảo quản lạnh và nguyên liệu tuyển chọn chuẩn vị.",
        },
        {
          title: "Nhân sự chuẩn phong cách Nhật Omotenashi",
          desc: "Đội ngũ Barista được đào tạo bài bản, mặc đồng phục polo đỏ burgundy Shinsei thanh lịch, thái độ ân cần, phục vụ nhanh chóng.",
        },
        {
          title: "Bao bì & Cốc giữ nhiệt nhận diện riêng",
          desc: "Ly giấy thân thiện môi trường và cốc giữ nhiệt in logo doanh nghiệp hoặc Shinsei, tạo dấu ấn chuyên nghiệp.",
        },
        {
          title: "Chính sách trợ giá nội bộ cho nhân viên",
          desc: "Mức giá ưu đãi đặc biệt dành riêng cho cán bộ công nhân viên trong đơn vị (chỉ từ 15k - 25k/ly).",
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
                  <span>{isJa ? "SHINSEI フード & カフェ · ドリンク" : "Shinsei Food & Coffee · Đồ Uống"}</span>
                </div>

                <h1 className="font-title text-4xl sm:text-5xl lg:text-6xl font-light text-white leading-[1.08]">
                  {isJa ? "オフィス向け ドリンク & カフェメニュー" : "Menu Đồ Uống & Café Văn Phòng"}
                </h1>

                <p className="text-base sm:text-lg text-[#f1e2c8]/85 font-normal leading-relaxed max-w-2xl">
                  {isJa
                    ? "本格エスプレッソ、京都宇治抹茶、絞りたてフルーツティーをオフィス空間でお届け。SHINSEIのカフェサービスが、働く皆様の活力を高めます。"
                    : "Trải nghiệm hương vị cà phê pha máy thượng hạng, matcha Kyoto chuẩn Nhật và trà trái cây tươi mát ngay tại không gian làm việc. Giải pháp đồ uống & cà phê từ Shinsei giúp nâng cao đời sống tinh thần cho toàn bộ nhân sự."}
                </p>

                <div className="flex flex-wrap gap-4 pt-2">
                  <a href="#drink-menu" className="shushi-btn !bg-white !text-[#75182d] hover:!bg-[#f1e2c8] shadow-lg">
                    <span>{isJa ? "ドリンクメニューを見る" : "Khám phá menu đồ uống"}</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                  <a href="#cafe-service" className="shushi-btn shushi-btn-outline !border-white/30 !text-white hover:!bg-white/10">
                    <span>{isJa ? "法人向けカフェサービス" : "Dịch vụ Café doanh nghiệp"}</span>
                  </a>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="relative rounded-lg overflow-hidden border border-white/20 shadow-2xl group">
                  <img
                    src="/images/shinsei-hero-cups.jpg"
                    alt={isJa ? "SHINSEI オリジナル保温タンブラー & テイクアウトカップ" : "Bộ cốc giữ nhiệt và thức uống mang đi thương hiệu Shinsei"}
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
                    <div>
                      <span className="text-xs font-mono uppercase tracking-widest text-[#f1e2c8]">
                        {isJa ? "ブランドアイデンティティ" : "Nhận diện thương hiệu"}
                      </span>
                      <h3 className="font-title text-xl text-white font-light">
                        {isJa ? "SHINSEI オリジナル保温タンブラー & 高級ペーパーカップ" : "Bộ cốc giữ nhiệt & Ly giấy Shinsei cao cấp"}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Dịch Vụ Cà Phê & Đồ Uống Doanh Nghiệp */}
        <section id="cafe-service" className="py-24 bg-white border-b border-black/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6 space-y-6">
                <span className="text-xs uppercase font-mono tracking-[0.2em] text-[#75182d] font-bold block">
                  {isJa ? "オフィス F&B ソリューション" : "Giải Pháp Không Gian F&B"}
                </span>
                <h2 className="font-title text-3xl sm:text-4xl lg:text-5xl font-light text-[#222222] leading-tight">
                  {isJa ? "企業・オフィス向け カフェ & ドリンクサービス" : "Dịch Vụ Đồ Uống & Café Phục Vụ Doanh Nghiệp"}
                </h2>
                <p className="text-sm sm:text-base text-[#222222]/80 leading-relaxed">
                  {isJa
                    ? "SHINSEIは、オフィスビル、工場、社員食堂、休憩ラウンジ向けに、上質なカフェサービスの導入・運営を一括提供いたします："
                    : "Shinsei cung cấp giải pháp thiết lập và phục vụ trọn gói đồ uống & cà phê cho tòa nhà, văn phòng, căng-tin hoặc khu nghỉ giải lao của doanh nghiệp:"}
                </p>

                <div className="space-y-4">
                  {cafeServices.map((feat, idx) => (
                    <div key={idx} className="p-4 bg-[#fbf7ef] border border-black/10 rounded-sm">
                      <h4 className="font-title text-lg font-medium text-[#75182d] mb-1">
                        0{idx + 1}. {feat.title}
                      </h4>
                      <p className="text-xs text-[#222222]/75 leading-relaxed">
                        {feat.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-6 space-y-6">
                <div className="rounded overflow-hidden border border-black/10 shadow-lg">
                  <img
                    src="/images/shinsei-staff-polo.jpg"
                    alt={isJa ? "SHINSEI カフェスタッフ" : "Đội ngũ nhân sự quầy café Shinsei"}
                    className="w-full h-auto object-cover"
                  />
                  <div className="p-4 bg-[#fbf7ef] text-center border-t border-black/10">
                    <span className="text-xs font-mono text-[#75182d] font-bold">
                      {isJa ? "SHINSEI カフェスタッフ · プロのおもてなし接客" : "Đồng phục nhân sự quầy café Shinsei · Tác phong chuyên nghiệp"}
                    </span>
                  </div>
                </div>

                <div className="rounded overflow-hidden border border-black/10 shadow-lg">
                  <img
                    src="/images/shinsei-hero-packaging.jpg"
                    alt={isJa ? "SHINSEI ギフトボックス & エコパッケージ" : "Bao bì hộp bánh và túi giấy Shinsei"}
                    className="w-full h-auto object-cover"
                  />
                  <div className="p-4 bg-[#fbf7ef] text-center border-t border-black/10">
                    <span className="text-xs font-mono text-[#75182d] font-bold">
                      {isJa ? "ギフトスイーツBOX & エコパッケージ" : "Hộp bánh ngọt quà tặng & Bao bì thân thiện môi trường"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Menu Chi Tiết */}
        <section id="drink-menu" className="py-24 bg-[#fbf7ef] border-b border-black/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs uppercase font-mono tracking-[0.2em] text-[#75182d] font-bold block mb-2">
                {isJa ? "ドリンクメニュー一覧" : "Thực Đơn Đồ Uống"}
              </span>
              <h2 className="font-title text-3xl sm:text-4xl lg:text-5xl font-light text-[#222222]">
                {isJa ? "代表的ドリンクラインナップ" : "Menu Đồ Uống Tiêu Biểu"}
              </h2>
              <p className="text-sm sm:text-base text-[#222222]/75 mt-3">
                {isJa
                  ? "産地にこだわった厳選素材を、甘さ控えめでヘルシーな黄金比レシピでご提供。"
                  : "Nguyên liệu tuyển chọn từ những vùng nông sản trứ danh, pha chế theo công thức chuẩn vị, ít ngọt lành mạnh."}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              {drinkCategories.map((cat, idx) => (
                <div
                  key={idx}
                  className="bg-white p-8 sm:p-10 border border-black/10 shadow-sm hover:border-[#75182d] transition-all"
                >
                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-black/10">
                    <div>
                      <h3 className="font-title text-2xl font-light text-[#222222]">
                        {cat.category}
                      </h3>
                    </div>
                    <span className="font-mono text-xs text-[#75182d] bg-[#f1e2c8]/60 px-2.5 py-1 rounded font-bold">
                      0{idx + 1}
                    </span>
                  </div>

                  <p className="text-xs text-[#222222]/70 mb-6 italic">
                    {cat.desc}
                  </p>

                  <div className="space-y-4">
                    {cat.items.map((item, itemIdx) => (
                      <div
                        key={itemIdx}
                        className="flex items-start justify-between gap-4 pb-3 border-b border-dashed border-black/10 last:border-b-0"
                      >
                        <div>
                          <div className="font-title text-base text-[#222222] font-medium">
                            {item.name}
                          </div>
                          <div className="text-[11.5px] text-[#222222]/65 mt-0.5 font-normal">
                            {item.note}
                          </div>
                        </div>
                        <div className="font-mono font-bold text-[#75182d] text-sm shrink-0">
                          {item.price}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <a
                href="#contact"
                className="shushi-btn shushi-btn-primary inline-flex"
              >
                <span>{isJa ? "カフェサービスのご相談・お見積り" : "Đăng ký tư vấn dịch vụ Đồ uống & Café"}</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
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
