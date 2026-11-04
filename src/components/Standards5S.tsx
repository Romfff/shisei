"use client";

import { useLanguage } from "@/context/LanguageContext";
import { CheckCircle2, ThermometerSnowflake, Flame, PackageCheck, Clock, Truck, ClipboardList, FileSpreadsheet, Sparkles, UserCheck, BarChart3 } from "lucide-react";

export function Standards5S() {
  const { isJa } = useLanguage();

  const steps5S = isJa
    ? [
        {
          code: "1S",
          name: "整理 (Seiri)",
          desc: "要るものと要らないものを明確に区分し、不要なものを徹底的に処分。在庫を最小限に管理。",
        },
        {
          code: "2S",
          name: "整頓 (Seiton)",
          desc: "必要なものを定位置・定品・定量で配置。色分け管理と一方通行動線で交差汚染を防止。",
        },
        {
          code: "3S",
          name: "清掃 (Seiso)",
          desc: "厨房内・調理器具・設備を常に清潔に保ち、清掃と点検を一体化して異常を早期発見。",
        },
        {
          code: "4S",
          name: "清潔 (Seiketsu)",
          desc: "整理・整頓・清掃の3S状態を維持・標準化。チェックリストによる日常点検の徹底。",
        },
        {
          code: "5S",
          name: "躾 (Shitsuke)",
          desc: "決められたルール・マナーを正しく守る習慣づけ。継続的な衛生教育とカイゼン活動の定着。",
        },
      ]
    : [
        {
          code: "1S",
          name: "Sàng Lọc",
          desc: "Loại bỏ vật dụng, hồ sơ và nguyên liệu không cần thiết; kiểm soát tồn kho chặt chẽ.",
        },
        {
          code: "2S",
          name: "Sắp Xếp",
          desc: "Quy định vị trí dụng cụ, nguyên liệu, biển chỉ dẫn và luồng di chuyển một chiều khoa học.",
        },
        {
          code: "3S",
          name: "Sạch Sẽ",
          desc: "Vệ sinh theo từng khu vực, ca làm việc và lịch kiểm tra định kỳ trước – trong – sau chế biến.",
        },
        {
          code: "4S",
          name: "Săn Sóc",
          desc: "Chuẩn hóa bảng kiểm, hướng dẫn thao tác, duy trì vệ sinh và lịch bảo trì thiết bị bếp.",
        },
        {
          code: "5S",
          name: "Sẵn Sàng",
          desc: "Đào tạo nghiệp vụ, đánh giá nội bộ, rèn luyện ý thức kỷ luật và khuyến khích cải tiến liên tục.",
        },
      ];

  const implementationSteps = isJa
    ? [
        {
          step: "STEP 1",
          title: "現地調査・ヒアリング",
          desc: "食数、厨房・食堂の平面図、給食時間、ご予算、栄養要件、インフラ設備を詳細に調査。",
          icon: ClipboardList,
        },
        {
          step: "STEP 2",
          title: "運営プランのご提案",
          desc: "運営体制、適正人員配置、ローテーション献立、厨房機器選定、詳細見積りと導入工程表を策定。",
          icon: FileSpreadsheet,
        },
        {
          step: "STEP 3",
          title: "開設準備・総合演習",
          desc: "厨房設備の整備、担当者研修、一方通行オペレーション演習、オープン前衛生総合検査の実施。",
          icon: Sparkles,
        },
        {
          step: "STEP 4",
          title: "本稼働・提供開始",
          desc: "安全な食材調達、一方通行調理、温かい食事の提供、徹底した品質管理と日次フィードバック記録。",
          icon: UserCheck,
        },
        {
          step: "STEP 5",
          title: "定期評価・改善（カイゼン）",
          desc: "月次報告書の提出、定期運営会議、利用満足度調査、透明性のある検食記録と品質の継続的向上。",
          icon: BarChart3,
        },
      ]
    : [
        {
          step: "BƯỚC 1",
          title: "Khảo sát thực địa",
          desc: "Khảo sát số lượng người ăn, mặt bằng bếp/căng tin, giờ phục vụ, ngân sách, yêu cầu dinh dưỡng và hạ tầng kỹ thuật.",
          icon: ClipboardList,
        },
        {
          step: "BƯỚC 2",
          title: "Đề xuất phương án",
          desc: "Lập phương án vận hành, định biên nhân sự, thực đơn luân phiên, trang thiết bị, dự toán chi phí và lộ trình triển khai.",
          icon: FileSpreadsheet,
        },
        {
          step: "BƯỚC 3",
          title: "Chuẩn bị vận hành",
          desc: "Hoàn thiện cơ sở vật chất, phân công trách nhiệm, diễn tập quy trình và tổng kiểm tra ATTP trước ngày khai trương.",
          icon: Sparkles,
        },
        {
          step: "BƯỚC 4",
          title: "Vận hành phục vụ",
          desc: "Tổ chức mua hàng VietGAP, sản xuất một chiều, phục vụ chu đáo, kiểm soát chất lượng và ghi nhận phản hồi hàng ngày.",
          icon: UserCheck,
        },
        {
          step: "BƯỚC 5",
          title: "Đánh giá & Cải tiến",
          desc: "Báo cáo định kỳ, họp đánh giá với ban điều hành đối tác, đối soát minh bạch, khắc phục tồn tại và nâng cao chất lượng.",
          icon: BarChart3,
        },
      ];

  const safetyProcess = isJa
    ? [
        {
          step: "01",
          title: "原材料・仕入先の厳格管理",
          desc: "認証取得サプライヤーの選定、産地トレーサビリティ証明書、VietGAP認証、適正保管条件の確認。",
          icon: ThermometerSnowflake,
        },
        {
          step: "02",
          title: "検収・受入品質検査",
          desc: "官能検査、品目・数量確認、消費期限、納品時の芯温測定、搬入口での受入厳格検査。",
          icon: CheckCircle2,
        },
        {
          step: "03",
          title: "下処理・温度管理保管",
          desc: "生食材と加熱済食材の完全動線分離、色別まな板・包丁の使用、規定温度での冷凍冷蔵保管。",
          icon: Flame,
        },
        {
          step: "04",
          title: "盛り付け・配膳管理",
          desc: "清潔区での盛り付け、芯温65℃以上の加熱・保温維持、規定グラム数の均一計量。",
          icon: PackageCheck,
        },
        {
          step: "05",
          title: "24時間検食サンプルの保管",
          desc: "3段階検食の実施、滅菌ステンレス密閉容器による24時間冷凍検食保存の厳格な運用。",
          icon: Clock,
        },
        {
          step: "06",
          title: "定温配送・時間厳守の給食",
          desc: "専用保温コンテナ・自社保温配送車により、規定温度を保持したまま時間通りに配膳。",
          icon: Truck,
        },
      ]
    : [
        {
          step: "01",
          title: "Kiểm soát nguồn nguyên liệu",
          desc: "Lựa chọn nhà cung ứng uy tín, kiểm tra hồ sơ nguồn gốc, chứng nhận VietGAP và điều kiện bảo quản.",
          icon: ThermometerSnowflake,
        },
        {
          step: "02",
          title: "Nhập hàng – Kiểm tra chất lượng",
          desc: "Kiểm tra cảm quan, chủng loại, định lượng, hạn sử dụng và tiếp nhận nghiêm ngặt tại cửa kho.",
          icon: CheckCircle2,
        },
        {
          step: "03",
          title: "Sơ chế – Bảo quản nguyên liệu",
          desc: "Phân tách tuyệt đối khu vực sống – chín, rửa qua hệ thống bồn inox chuyên dụng và cấp đông tiêu chuẩn.",
          icon: Flame,
        },
        {
          step: "04",
          title: "Chia suất – Đóng gói",
          desc: "Chia suất trong phòng vô trùng, kiểm soát nhiệt độ tâm món trên 65°C và định lượng cân đối.",
          icon: PackageCheck,
        },
        {
          step: "05",
          title: "Lưu mẫu thức ăn 24h",
          desc: "Thực hiện kiểm thực 3 bước, lưu mẫu niêm phong trong dụng cụ inox vô trùng đủ 24 giờ theo quy định.",
          icon: Clock,
        },
        {
          step: "06",
          title: "Vận chuyển – Phục vụ",
          desc: "Hệ thống xe tải bảo ôn giữ nhiệt chuyên dụng, đảm bảo đúng giờ và điều kiện an toàn đến tận bàn ăn.",
          icon: Truck,
        },
      ];

  return (
    <section id="standards-5s" className="py-24 bg-[#fbf7ef] border-b border-black/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] font-bold text-[#75182d] mb-3 bg-[#f1e2c8]/60 px-3.5 py-1.5 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-[#75182d]"></span>
            <span>{isJa ? "日本式5S管理基準" : "Tiêu chuẩn vận hành 5S Nhật Bản"}</span>
          </div>
          <h2 className="font-title text-4xl sm:text-5xl font-light text-[#222222] tracking-tight leading-[1.05]">
            {isJa ? "専門的マネジメント体制と食の安全" : "Nền tảng quản lý chuyên nghiệp & An toàn thực phẩm"}
          </h2>
          <p className="text-base text-[#222222]/80 mt-4 leading-relaxed font-normal">
            {isJa
              ? "SHINSEIは、日本発祥の5S管理手法およびHACCP・ISO 22000基準を、仕入れ・下処理・調理・配膳・品質管理の全工程に徹底適用しています。"
              : "Shinsei áp dụng triệt để phương pháp quản lý 5S Nhật Bản cùng các tiêu chuẩn quốc tế HACCP và ISO 22000 trong toàn bộ chuỗi tiếp nhận, chế biến, phục vụ và kiểm soát chất lượng."}
          </p>
        </div>

        {/* 5S Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-16">
          {steps5S.map((s, idx) => (
            <div
              key={idx}
              className="bg-white p-6 border border-black/10 hover:border-[#75182d] transition-all shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-black/10 mb-4">
                  <span className="font-mono text-2xl font-light text-[#75182d]">
                    {s.code}
                  </span>
                </div>
                <h4 className="font-title text-xl font-normal text-[#222222] mb-2">
                  {s.name}
                </h4>
                <p className="text-xs text-[#222222]/75 leading-relaxed font-normal">
                  {s.desc}
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-black/5 text-[11px] font-mono text-[#75182d]">
                {isJa ? "SHINSEI 5S品質基準" : "Chuẩn hóa 5S Shinsei"}
              </div>
            </div>
          ))}
        </div>

        {/* 5 Bước Mô Hình Triển Khai Dịch Vụ */}
        <div className="bg-[#ffffff] p-8 sm:p-12 border border-[#75182d]/15 shadow-sm mb-16">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10 pb-8 border-b border-black/10">
            <div className="max-w-2xl">
              <span className="font-mono text-xs uppercase tracking-widest text-[#75182d] font-bold block mb-1">
                {isJa ? "標準導入ロードマップ" : "Lộ trình chuẩn hóa"}
              </span>
              <h3 className="font-title text-2xl sm:text-3xl font-light text-[#222222]">
                {isJa ? "確実な運用のための5ステップ導入モデル" : "Mô hình triển khai 5 bước chặt chẽ"}
              </h3>
              <p className="text-xs sm:text-sm text-[#222222]/70 mt-2">
                {isJa
                  ? "品質目標、配膳時間に関するSLA、満足度指標、定期報告体制を契約ごとに明確に定めます。"
                  : "Chỉ tiêu chất lượng và cam kết SLA về thời gian phục vụ, tỷ lệ hài lòng và báo cáo định kỳ được xác lập rõ ràng trong từng hợp đồng."}
              </p>
            </div>
            <div className="text-xs font-mono text-[#75182d] bg-[#f1e2c8]/60 px-4 py-2 rounded-full border border-[#75182d]/20 shrink-0">
              {isJa ? "SLA品質保証 & 緊密な連携体制" : "Cam kết dịch vụ & Cơ chế phối hợp"}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {implementationSteps.map((stepItem, idx) => {
              const Icon = stepItem.icon;
              return (
                <div key={idx} className="bg-[#fbf7ef] p-5 border border-black/10 hover:border-[#75182d] transition-all flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-3 text-[#75182d]">
                      <Icon className="w-5 h-5" />
                      <span className="font-mono text-xs font-bold">{stepItem.step}</span>
                    </div>
                    <h4 className="font-title text-base font-medium text-[#222222] mb-2">
                      {stepItem.title}
                    </h4>
                    <p className="text-xs text-[#222222]/75 leading-relaxed">
                      {stepItem.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 6 Bước Quản Lý An Toàn Thực Phẩm */}
        <div className="bg-[#ffffff] p-8 sm:p-12 border border-[#75182d]/15 shadow-sm mb-16">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10 pb-8 border-b border-black/10">
            <div className="max-w-xl">
              <span className="font-mono text-xs uppercase tracking-widest text-[#75182d] font-bold block mb-1">
                {isJa ? "クローズド・一方通行動線" : "Quy trình một chiều khép kín"}
              </span>
              <h3 className="font-title text-2xl sm:text-3xl font-light text-[#222222]">
                {isJa ? "食品衛生・品質管理 6つの厳格ステップ" : "6 Bước kiểm soát chất lượng & an toàn thực phẩm"}
              </h3>
            </div>
            <div className="text-xs font-mono text-[#75182d] bg-[#f1e2c8]/60 px-4 py-2 rounded-full border border-[#75182d]/20 shrink-0">
              {isJa ? "HACCP & ISO 22000 準拠" : "Tiêu chuẩn HACCP & ISO 22000"}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {safetyProcess.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-[#fbf7ef] p-6 border border-black/10 hover:border-[#75182d] transition-all group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-lg bg-white border border-[#75182d]/20 flex items-center justify-center text-[#75182d]">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-2xl font-light text-[#222222]/30 group-hover:text-[#75182d] transition-colors">
                      {item.step}
                    </span>
                  </div>
                  <h4 className="font-title text-lg font-normal text-[#222222] mb-1.5">
                    {item.title}
                  </h4>
                  <p className="text-xs text-[#222222]/75 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Tiêu Chuẩn Trang Phục Bếp & Logistics Vận Chuyển Shinsei */}
        <div className="bg-[#ffffff] p-8 sm:p-12 border border-[#75182d]/15 shadow-sm">
          <div className="max-w-2xl mb-8">
            <span className="font-mono text-xs uppercase tracking-widest text-[#75182d] font-bold block mb-1">
              {isJa ? "プロフェッショナルな身だしなみ & ロジスティクス" : "Nhận diện & Hậu cần chuyên nghiệp"}
            </span>
            <h3 className="font-title text-2xl sm:text-3xl font-light text-[#222222]">
              {isJa ? "スタッフユニフォーム規程 & 自社配送ロジスティクス" : "Quy chuẩn trang phục nhân sự & Logistics Shinsei"}
            </h3>
            <p className="text-xs sm:text-sm text-[#222222]/70 mt-1">
              {isJa
                ? "ユニフォームおよび車両は日本式5S基準に則り、「清潔・安全・プロフェッショナル」の3大原則を徹底しています。"
                : "Đồng phục và phương tiện được chuẩn hóa theo tiêu chuẩn 5S Nhật Bản, đáp ứng 3 tiêu chí cốt lõi: Sạch sẽ • An toàn • Chuyên nghiệp."}
            </p>
          </div>

          {/* Full-width Detailed Showcase: Đồng phục Bếp 5S (Front + Back + Accessories) */}
          <div className="bg-[#fbf7ef] border border-black/10 overflow-hidden mb-8 group">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              <div className="lg:col-span-8 overflow-hidden bg-white">
                <img
                  src="/images/shinsei-uniform-chef-full.jpg"
                  alt={isJa ? "SHINSEI 厨房ユニフォーム規程（前面・背面・コック帽）" : "Bảng quy chuẩn chi tiết Đồng phục Bếp 5S Shinsei mặt trước, mặt sau và nón bếp"}
                  className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-[1.01]"
                />
              </div>

              <div className="lg:col-span-4 p-6 sm:p-8 space-y-4">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#75182d] font-bold block mb-1">
                    {isJa ? "厨房内5S基準" : "Tiêu chuẩn 5S khu bếp"}
                  </span>
                  <h4 className="font-title text-2xl font-light text-[#222222]">
                    {isJa ? "プロフェッショナル厨房ユニフォーム" : "Đồng Phục Bếp Chuyên Nghiệp"}
                  </h4>
                  <p className="text-xs text-[#222222]/80 mt-2 leading-relaxed">
                    {isJa
                      ? "前面・背面および各種備品の完全統一：ワインレッド縁取りの白コックコート、SHINSEI刺繍ロゴ、プリーツコック帽、毛髪混入防止バンダナ、厚手エプロン。"
                      : "Đầy đủ chi tiết mặt trước, mặt sau và phụ kiện: Áo bếp trắng viền đỏ rượu vang thêu logo Shinsei, mũ bếp xếp ly cao cấp, khăn bandana giữ tóc vô trùng và tạp dề bếp dày dặn."}
                  </p>
                </div>

                <div className="space-y-2 text-xs font-mono text-[#75182d] pt-3 border-t border-black/10">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#75182d]"></span>
                    <span>{isJa ? "定期健康診断受診 & 入室前の手指消毒徹底" : "Khám sức khỏe định kỳ & khử trùng tay"}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#75182d]"></span>
                    <span>{isJa ? "調理作業時の完全防護具着用義務化" : "Tuân thủ bảo hộ khép kín trong chế biến"}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#75182d]"></span>
                    <span>{isJa ? "厨房専用の滑り止め安全靴を常時着用" : "Giày bảo hộ chuyên dụng chống trượt"}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 2 Sub-cards: Đồng phục Quầy Café & Đội xe tải Logistics HD */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Card 1: Đồng phục Quầy Café & Phục vụ */}
            <div className="bg-[#fbf7ef] border border-black/10 overflow-hidden flex flex-col justify-between group">
              <div>
                <div className="aspect-[16/10] overflow-hidden bg-stone-100">
                  <img
                    src="/images/shinsei-staff-polo.jpg"
                    alt={isJa ? "カフェカウンター・ホールサービス ユニフォーム" : "Đồng phục quầy café Shinsei"}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#75182d] font-bold block mb-1">
                    {isJa ? "カウンター & ホール接客" : "Khu vực quầy & phục vụ"}
                  </span>
                  <h4 className="font-title text-xl font-normal text-[#222222] mb-2">
                    {isJa ? "カフェ & ホールスタッフ ユニフォーム" : "Đồng phục Quầy Café & Phục vụ"}
                  </h4>
                  <p className="text-xs text-[#222222]/75 leading-relaxed">
                    {isJa
                      ? "ブランドカラー#75182Dの胸元刺繍ポロシャツ、上品なエプロン、日本のおもてなし精神に基づく丁寧で温かい接客態度。"
                      : "Áo polo đỏ rượu vang #75182D thêu logo ngực, tạp dề buộc nơ trang nhã, tác phong niềm nở, thân thiện và chu đáo chuẩn phong cách phục vụ Nhật Bản Omotenashi."}
                  </p>
                </div>
              </div>
              <div className="px-6 pb-6 text-[11px] font-mono text-[#75182d] font-semibold">
                {isJa ? "✓ コミュニケーション & おもてなし接客研修の実施" : "✓ Đào tạo kỹ năng giao tiếp & phục vụ khách hàng"}
              </div>
            </div>

            {/* Card 2: Đội xe bán tải & xe bảo ôn vận chuyển sắc nét */}
            <div className="bg-[#fbf7ef] border border-black/10 overflow-hidden flex flex-col justify-between group">
              <div>
                <div className="aspect-[16/10] overflow-hidden bg-stone-100">
                  <img
                    src="/images/shinsei-truck.jpg"
                    alt={isJa ? "SHINSEI 保温配送トラック" : "Xe bán tải giao hàng bảo ôn nhận diện Shinsei"}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#75182d] font-bold block mb-1">
                    {isJa ? "配送 & ロジスティクス" : "Logistics & Vận chuyển"}
                  </span>
                  <h4 className="font-title text-xl font-normal text-[#222222] mb-2">
                    {isJa ? "自社専用 保温配送車両" : "Xe Bán Tải & Xe Bảo Ôn Giao Hàng"}
                  </h4>
                  <p className="text-xs text-[#222222]/75 leading-relaxed">
                    {isJa
                      ? "SHINSEIブランドデザインを施した専用配送車群。厳格な温度管理コンテナを搭載し、走行中も65℃以上の適温をキープ。昼勤・夜勤を問わず時間通りの納品を保証します。"
                      : "Đội xe bán tải và xe bảo ôn nhận diện thương hiệu Shinsei, trang bị thùng chuyên dụng kiểm soát nhiệt độ nghiêm ngặt, giữ ấm liên tục trên 65°C trong suốt quá trình lưu thông. Cam kết giao thức ăn đúng giờ cho mọi ca ngày và ca đêm."}
                  </p>
                </div>
              </div>
              <div className="px-6 pb-6 text-[11px] font-mono text-[#75182d] font-semibold">
                {isJa ? "✓ 特殊保温コンテナ搭載 · 厳格な時間厳守配送" : "✓ Thùng bảo ôn giữ nhiệt chuyên dụng · Giao đúng giờ tuyệt đối"}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
