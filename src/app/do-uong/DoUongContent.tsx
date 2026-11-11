"use client";

import { useLanguage } from "@/context/LanguageContext";
import { Navbar } from "@/components/Navbar";
import { ContactShinsei } from "@/components/ContactShinsei";
import { Footer } from "@/components/Footer";
import { ArrowRight } from "lucide-react";

export function DoUongContent() {
  const { isJa } = useLanguage();

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
                  {isJa ? "オフィス向け ドリンク & カフェソリューション" : "Giải Pháp Đồ Uống & Café Doanh Nghiệp"}
                </h1>

                <p className="text-base sm:text-lg text-[#f1e2c8]/85 font-normal leading-relaxed max-w-2xl">
                  {isJa
                    ? "本格コーヒーマシン、オリジナルタンブラー、おもてなしスタッフによるオフィス向けカフェサービス。働く皆様の活力を高める上質なF&Bソリューションをご提案します。"
                    : "Giải pháp đồ uống và cà phê phục vụ chuyên nghiệp ngay tại không gian làm việc của doanh nghiệp, nhà máy và sự kiện. Nâng cao đời sống tinh thần và trải nghiệm phúc lợi cho cán bộ công nhân viên."}
                </p>

                <div className="flex flex-wrap gap-4 pt-2">
                  <a href="#contact" className="shushi-btn !bg-white !text-[#75182d] hover:!bg-[#f1e2c8] shadow-lg">
                    <span>{isJa ? "カフェサービスのご相談" : "Tư vấn giải pháp Café"}</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                  <a href="#cafe-service" className="shushi-btn shushi-btn-outline !border-white/30 !text-white hover:!bg-white/10">
                    <span>{isJa ? "Chi tiết dịch vụ" : "Dịch vụ Café doanh nghiệp"}</span>
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

            {/* Custom Plan Callout Box */}
            <div className="mt-16 p-8 sm:p-10 bg-[#fbf7ef] border border-[#75182d]/20 rounded text-center max-w-4xl mx-auto shadow-sm">
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#75182d] font-bold block mb-2">
                {isJa ? "オーダーメイド設計" : "Mô Hình Tùy Chỉnh Theo Nhu Cầu"}
              </span>
              <h3 className="font-title text-2xl sm:text-3xl text-[#222222] font-light mb-3">
                {isJa ? "貴社に合わせたカスタムカフェプランのご提案" : "Thiết Kế Mô Hình Đồ Uống & Café Riêng Cho Doanh Nghiệp"}
              </h3>
              <p className="text-sm text-[#222222]/75 max-w-2xl mx-auto mb-6 leading-relaxed">
                {isJa
                  ? "オフィス規模やご予算、従業員数やご要望に応じて、最適なカフェコーナーの設置・運営をご提案いたします。お気軽にご相談ください。"
                  : "Tùy theo quy mô văn phòng, nhà máy, số lượng nhân sự và ngân sách phúc lợi, Shinsei sẽ khảo sát thực tế và đề xuất phương án quầy cà phê hoặc dịch vụ phục vụ tối ưu nhất."}
              </p>
              <a href="#contact" className="shushi-btn shushi-btn-primary inline-flex">
                <span>{isJa ? "カフェサービスのご相談・お見積り" : "Đăng ký tư vấn giải pháp Đồ uống & Café"}</span>
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
