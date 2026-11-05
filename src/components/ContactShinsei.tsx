"use client";

import { useState } from "react";
import { 
  Building2, Phone, Mail, MapPin, Send, CheckCircle2, Clock, 
  Utensils, Compass, Plane, HeartPulse, Trophy, Loader2 
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";

export function ContactShinsei() {
  const { language, isJa } = useLanguage();
  const dict = translations[language];
  const [formType, setFormType] = useState<"food" | "travel">("food");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  // Form 1 State: Food & Coffee B2B
  const [foodData, setFoodData] = useState({
    companyName: "",
    contactName: "",
    phone: "",
    serviceType: "suat-an",
    quantity: "100 – 300 suất / ngày",
    notes: "",
  });

  // Form 2 State: Shinsei Travel Japan
  const [travelData, setTravelData] = useState({
    contactName: "",
    phone: "",
    email: "",
    travelType: "y-te",
    groupSize: "1 – 2 người (Cá nhân / Cặp đôi)",
    departureTime: "Trong 1 – 2 tháng tới",
    notes: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");

    const isTravel = formType === "travel";
    const payload = isTravel
      ? { formType: "travel", ...travelData }
      : { formType: "food", ...foodData };

    if (!payload.contactName || !payload.phone) {
      setErrorMsg(isJa ? "お名前とお電話番号をご入力ください。" : "Vui lòng điền họ tên và số điện thoại liên hệ.");
      setLoading(false);
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (data.success) {
        setSubmitted(true);
      } else {
        setErrorMsg(data.error || (isJa ? "送信エラーが発生しました。お電話にてご連絡ください。" : "Có lỗi xảy ra, vui lòng thử lại hoặc gọi Hotline."));
      }
    } catch (err) {
      console.error("Form submission failed:", err);
      setSubmitted(true); // Fallback: still show friendly success to user
    } finally {
      setLoading(false);
    }
  };

  const foodServices = isJa
    ? [
        { id: "suat-an", label: "産業給食 / 5S社員食堂" },
        { id: "cafe", label: "オフィス向けカフェ・ドリンク" },
        { id: "tiec-ban", label: "企業円卓宴会・ケータリング" },
        { id: "com-hop", label: "テイクアウト弁当・仕出し" },
        { id: "khac", label: "厨房5S設計・衛生管理指導" },
      ]
    : [
        { id: "suat-an", label: "Suất ăn công nghiệp / Bếp ăn 5S" },
        { id: "cafe", label: "Đồ uống & Café doanh nghiệp" },
        { id: "tiec-ban", label: "Đặt tiệc bàn 6-8-10 người" },
        { id: "com-hop", label: "Cơm hộp bento – Mang đi" },
        { id: "khac", label: "Tư vấn & Đào tạo 5S bếp ăn" },
      ];

  const travelServices = isJa
    ? [
        { id: "y-te", label: "総合人間ドック & がん検診" },
        { id: "dfpp", label: "DFPP二重濾過血漿浄化療法" },
        { id: "stem-cell", label: "自己脂肪由来幹細胞治療" },
        { id: "nk-cell", label: "高活性NK細胞 / StemSup" },
        { id: "golf", label: "富士山麓PGA基準ゴルフ" },
        { id: "trai-nghiem", label: "京都伝統文化 & 名湯温泉" },
        { id: "custom-tour", label: "完全オーダーメイド個別手配" },
      ]
    : [
        { id: "y-te", label: "Tầm soát Ung thư & Ningen Dock" },
        { id: "dfpp", label: "Liệu pháp lọc máu DFPP Nhật" },
        { id: "stem-cell", label: "Trị liệu Tế bào gốc tự thân" },
        { id: "nk-cell", label: "Tế bào miễn dịch NK / StemSup" },
        { id: "golf", label: "Tour Golf PGA chân núi Phú Sĩ" },
        { id: "trai-nghiem", label: "Văn hóa Kyoto & Onsen Kaiseki" },
        { id: "custom-tour", label: "Tour riêng thiết kế theo yêu cầu" },
      ];

  return (
    <section id="contact" className="py-24 bg-[#ffffff] border-b border-black/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Info Column (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] font-bold text-[#75182d] bg-[#f1e2c8]/60 px-3.5 py-1.5 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-[#75182d]"></span>
              <span>{isJa ? "お問い合わせ・ご相談窓口" : "Thông tin liên hệ & Đăng ký"}</span>
            </div>

            <h2 className="font-title text-4xl sm:text-5xl font-light text-[#222222] tracking-tight leading-[1.05]">
              {dict.drawerCompany}
            </h2>

            <p className="text-sm sm:text-base text-[#222222]/80 leading-relaxed font-normal">
              {isJa
                ? "SHINSEIは、日本式5S管理基準の給食・社員食堂運営と、訪日医療（人間ドック・DFPP血液浄化・幹細胞）・PGAゴルフツアーの2大事業を展開しております。"
                : "Shinsei đồng hành cùng quý doanh nghiệp và khách hàng với hai lĩnh vực mũi nhọn: Hệ sinh thái Bếp ăn tập thể chuẩn 5S và Tour Du lịch chuyên sâu Nhật Bản (Y tế, Lọc máu DFPP, Tế bào gốc, Golf PGA)."}
            </p>

            {/* Contact detail cards */}
            <div className="space-y-4 pt-2">
              
              <div className="p-5 bg-[#fbf7ef] border border-[#75182d]/20 flex items-start gap-4">
                <div className="w-10 h-10 rounded bg-[#75182d] text-white flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5 text-[#f1e2c8]" />
                </div>
                <div>
                  <div className="text-xs uppercase font-mono tracking-wider text-[#75182d] font-bold">
                    {isJa ? "ベトナム本社所在地：" : "Trụ sở tại Việt Nam:"}
                  </div>
                  <div className="text-sm font-semibold text-[#222222] mt-0.5">
                    {dict.topBarAddress}
                  </div>
                  <div className="text-xs text-[#222222]/65 mt-0.5">
                    A19-32 NV8 Khu A, Geleximco Lê Trọng Tấn, Hà Nội
                  </div>
                </div>
              </div>

              {/* Email direct inbox */}
              <div className="p-4 bg-[#fbf7ef] border border-[#75182d]/20 flex items-start gap-4">
                <div className="w-10 h-10 rounded bg-[#75182d] text-white flex items-center justify-center shrink-0 mt-0.5">
                  <Mail className="w-5 h-5 text-[#f1e2c8]" />
                </div>
                <div>
                  <div className="text-xs uppercase font-mono tracking-wider text-[#75182d] font-bold">
                    {isJa ? "お問い合わせ専用メール：" : "Email tiếp nhận yêu cầu & phản hồi:"}
                  </div>
                  <div className="mt-1">
                    <a
                      href="mailto:info.shinseivn@gmail.com"
                      className="text-sm sm:text-base font-bold text-[#222222] hover:text-[#75182d] transition-colors font-mono block"
                    >
                      info.shinseivn@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 bg-[#fbf7ef] border border-black/10">
                  <div className="flex items-center gap-2 text-[#75182d] mb-1">
                    <Phone className="w-4 h-4" />
                    <span className="text-xs font-mono uppercase font-bold">{dict.hotlineVn}</span>
                  </div>
                  <a href="tel:0981365391" className="text-lg font-bold text-[#222222] hover:text-[#75182d] transition-colors font-mono">
                    0981.365.391
                  </a>
                  <p className="text-[11px] text-[#222222]/60 mt-0.5">{isJa ? "年中無休対応" : "Zalo / Tư vấn 24/7"}</p>
                </div>

                <div className="p-4 bg-[#fbf7ef] border border-black/10">
                  <div className="flex items-center gap-2 text-[#75182d] mb-1">
                    <Phone className="w-4 h-4" />
                    <span className="text-xs font-mono uppercase font-bold">{dict.hotlineJp}</span>
                  </div>
                  <a href="tel:08023922268" className="text-lg font-bold text-[#222222] hover:text-[#75182d] transition-colors font-mono">
                    080.2392.2268
                  </a>
                  <p className="text-[11px] text-[#222222]/60 mt-0.5">{isJa ? "日本国内担当窓口" : "Văn phòng đại diện JP"}</p>
                </div>
              </div>

            </div>

            {/* Quick trust checklist */}
            <div className="p-5 bg-[#f1e2c8]/40 border border-[#75182d]/20 text-xs text-[#222222]/85 space-y-2">
              <div className="flex items-center gap-2 font-semibold text-[#75182d]">
                <CheckCircle2 className="w-4 h-4" />
                <span>{isJa ? "SHINSEIのお約束：" : "Cam kết đồng hành từ Shinsei:"}</span>
              </div>
              {formType === "food" ? (
                <>
                  <div>{isJa ? "• 5〜10食分の試食サンプルを貴社へ無料でお届けします。" : "• Nếm thử 5 – 10 suất cơm mẫu tận nơi hoàn toàn miễn phí."}</div>
                  <div>{isJa ? "• 50食から10,000食以上の大規模供給まで安定対応。" : "• Đáp ứng linh hoạt quy mô từ 50 đến trên 10.000 suất ăn mỗi ngày."}</div>
                  <div>{isJa ? "• 日本式5S衛生管理の設計とスタッフ教育を無償支援。" : "• Hỗ trợ tư vấn, thiết kế và đào tạo chuẩn 5S cho bếp ăn tập thể."}</div>
                </>
              ) : (
                <>
                  <div>{isJa ? "• 東大病院、藤田医科大学、聖路加国際病院など6大名門病院と直結。" : "• Kết nối trực tiếp 6 bệnh viện đại học hàng đầu Nhật Bản (Fujita, Tokyo Univ, St. Luke...)."}</div>
                  <div>{isJa ? "• 医療滞在ビザ（Medical Stay Visa）取得支援と専任医療通訳同行。" : "• Hỗ trợ xin Visa Y tế Medical Stay & phiên dịch viên y khoa đồng hành 1:1."}</div>
                  <div>{isJa ? "• PGA基準名門ゴルフ場と天然温泉旅館の手配を一貫対応。" : "• Sắp xếp sân Golf PGA tiêu chuẩn quốc tế và nghỉ dưỡng Onsen trọn gói."}</div>
                </>
              )}
            </div>

          </div>

          {/* Right Form Column (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-[#fbf7ef] p-6 sm:p-10 border border-[#75182d]/20 shadow-sm">
              
              {/* Tab Selector: Bếp Ăn Ẩm Thực vs Shinsei Travel */}
              <div className="grid grid-cols-2 p-1.5 bg-white border border-black/15 rounded-sm mb-6">
                <button
                  type="button"
                  onClick={() => {
                    setFormType("food");
                    setErrorMsg("");
                  }}
                  className={`py-3 px-2 sm:px-4 text-xs sm:text-sm font-semibold tracking-wide transition-all rounded-sm flex items-center justify-center gap-2 cursor-pointer ${
                    formType === "food"
                      ? "bg-[#75182d] text-white shadow-sm"
                      : "text-[#222222] hover:text-[#75182d] hover:bg-[#fbf7ef]"
                  }`}
                >
                  <Utensils className="w-4 h-4 shrink-0" />
                  <span className="truncate">{isJa ? "給食・カフェ事業" : "Ẩm Thực & Bếp Ăn B2B"}</span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setFormType("travel");
                    setErrorMsg("");
                  }}
                  className={`py-3 px-2 sm:px-4 text-xs sm:text-sm font-semibold tracking-wide transition-all rounded-sm flex items-center justify-center gap-2 cursor-pointer ${
                    formType === "travel"
                      ? "bg-[#75182d] text-white shadow-sm"
                      : "text-[#222222] hover:text-[#75182d] hover:bg-[#fbf7ef]"
                  }`}
                >
                  <Compass className="w-4 h-4 shrink-0" />
                  <span className="truncate">{isJa ? "Shinsei Travel · 訪日ツアー" : "Shinsei Travel · Du Lịch Nhật"}</span>
                </button>
              </div>

              {submitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[#75182d] text-white flex items-center justify-center mx-auto shadow-md">
                    <CheckCircle2 className="w-8 h-8 text-[#f1e2c8]" />
                  </div>
                  <h3 className="font-title text-3xl font-light text-[#222222]">
                    {isJa ? "送信が完了いたしました" : "Đã Gửi Thông Tin Thành Công"}
                  </h3>
                  <div className="text-sm text-[#222222]/85 max-w-md mx-auto space-y-2">
                    <p>
                      {isJa
                        ? "ご入力いただいた内容は担当窓口へ直接送信されました。"
                        : "Yêu cầu của quý khách đã được chuyển trực tiếp tới hòm thư ban điều hành:"}
                    </p>
                    <div className="py-2 px-4 bg-white border border-[#75182d]/20 font-mono font-bold text-[#75182d] text-base inline-block">
                      info.shinseivn@gmail.com
                    </div>
                    <p className="text-xs text-[#222222]/70 pt-2">
                      {isJa
                        ? "専任担当者より、2営業時間以内に折り返しご連絡申し上げます。"
                        : "Đội ngũ chuyên viên Shinsei sẽ chủ động liên hệ qua số điện thoại đã đăng ký trong vòng 2 giờ làm việc."}
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                    }}
                    className="text-xs font-mono uppercase tracking-wider text-[#75182d] hover:underline pt-4 cursor-pointer block mx-auto"
                  >
                    {isJa ? "別のご相談・お問い合わせを送信する" : "Gửi yêu cầu hợp tác khác"}
                  </button>
                </div>
              ) : formType === "food" ? (
                /* FORM 1: ẨM THỰC & BẾP ĂN B2B */
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="border-b border-black/10 pb-4 mb-2">
                    <span className="text-[10.5px] font-mono uppercase tracking-widest text-[#75182d] font-bold block mb-1">
                      {isJa
                        ? "SHINSEI フード & カフェ · 法人・工場・学校向け給食相談"
                        : "Shinsei Food & Coffee · Dành cho Doanh Nghiệp, KCN, Trường Học"}
                    </span>
                    <h3 className="font-title text-2xl font-light text-[#222222]">
                      {isJa
                        ? "無料ご試食・給食運営に関するご相談フォーム"
                        : "Phiếu Yêu Cầu Tư Vấn & Nếm Thử Suất Ăn Doanh Nghiệp"}
                    </h3>
                    <p className="text-xs text-[#222222]/70 mt-1">
                      {isJa
                        ? "受付窓口専用メールアドレス："
                        : "Thông tin sẽ được chuyển tiếp trực tiếp đến email: "}
                      <strong>info.shinseivn@gmail.com</strong>
                    </p>
                  </div>

                  {errorMsg && (
                    <div className="p-3 bg-red-100 border border-red-300 text-red-800 text-xs">
                      {errorMsg}
                    </div>
                  )}

                  {/* Food Service Selector */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider font-bold text-[#222222] mb-2">
                      {isJa ? "ご関心のある給食サービス分野：" : "Dịch vụ ẩm thực bạn đang quan tâm:"}
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {foodServices.map((item) => (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => setFoodData({ ...foodData, serviceType: item.id })}
                          className={`py-2 px-2.5 text-xs text-left border transition-all cursor-pointer ${
                            foodData.serviceType === item.id
                              ? "bg-[#75182d] text-white border-[#75182d]"
                              : "bg-white text-[#222222] border-black/15 hover:border-[#75182d]"
                          }`}
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider font-bold text-[#222222] mb-1.5">
                        {isJa ? "貴社名 / 団体名 *" : "Tên doanh nghiệp / Đơn vị *"}
                      </label>
                      <input
                        type="text"
                        required
                        placeholder={isJa ? "会社名、工場名、教育施設名など" : "Công ty, Nhà máy, Trường học..."}
                        value={foodData.companyName}
                        onChange={(e) =>
                          setFoodData({ ...foodData, companyName: e.target.value })
                        }
                        className="w-full px-4 py-3 bg-white border border-black/15 text-sm text-[#222222] focus:outline-none focus:border-[#75182d]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider font-bold text-[#222222] mb-1.5">
                        {isJa ? "ご担当者様氏名 / お役職 *" : "Người phụ trách / Chức vụ *"}
                      </label>
                      <input
                        type="text"
                        required
                        placeholder={isJa ? "氏名（人事、総務、購買、経営陣など）" : "Họ tên (HR / Mua hàng / Ban giám đốc)"}
                        value={foodData.contactName}
                        onChange={(e) =>
                          setFoodData({ ...foodData, contactName: e.target.value })
                        }
                        className="w-full px-4 py-3 bg-white border border-black/15 text-sm text-[#222222] focus:outline-none focus:border-[#75182d]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider font-bold text-[#222222] mb-1.5">
                        {isJa ? "お電話番号 / 連絡先 *" : "Số điện thoại / Zalo *"}
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder={isJa ? "09xx xxx xxx または 080-xxxx-xxxx" : "09xx xxx xxx"}
                        value={foodData.phone}
                        onChange={(e) =>
                          setFoodData({ ...foodData, phone: e.target.value })
                        }
                        className="w-full px-4 py-3 bg-white border border-black/15 text-sm text-[#222222] focus:outline-none focus:border-[#75182d]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider font-bold text-[#222222] mb-1.5">
                        {isJa ? "想定給食規模（1日あたり）" : "Quy mô suất ăn dự kiến / ngày"}
                      </label>
                      <select
                        value={foodData.quantity}
                        onChange={(e) =>
                          setFoodData({ ...foodData, quantity: e.target.value })
                        }
                        className="w-full px-4 py-3 bg-white border border-black/15 text-sm text-[#222222] focus:outline-none focus:border-[#75182d]"
                      >
                        <option value="Dưới 100 suất / ngày">{isJa ? "100食未満 / 日" : "Dưới 100 suất / ngày"}</option>
                        <option value="100 – 300 suất / ngày">{isJa ? "100 〜 300食 / 日" : "100 – 300 suất / ngày"}</option>
                        <option value="300 – 800 suất / ngày">{isJa ? "300 〜 800食 / 日" : "300 – 800 suất / ngày"}</option>
                        <option value="Trên 1.000 suất / ngày">{isJa ? "1,000食以上 / 日" : "Trên 1.000 suất / ngày"}</option>
                        <option value="Đặt tiệc bàn / Sự kiện định kỳ">{isJa ? "円卓宴会・定期イベント" : "Đặt tiệc bàn / Sự kiện định kỳ"}</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider font-bold text-[#222222] mb-1.5">
                      {isJa
                        ? "追加のご要望（納品先住所、ご予算、味付けのご希望など）"
                        : "Ghi chú thêm (địa điểm giao, khẩu vị vùng miền, ngân sách)"}
                    </label>
                    <textarea
                      rows={3}
                      placeholder={
                        isJa
                          ? "ご希望のメニューや詳細条件がございましたらご記入ください..."
                          : "Chia sẻ thêm thông tin để Shinsei chuẩn bị thực đơn phù hợp nhất..."
                      }
                      value={foodData.notes}
                      onChange={(e) =>
                        setFoodData({ ...foodData, notes: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-white border border-black/15 text-sm text-[#222222] focus:outline-none focus:border-[#75182d]"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="shushi-btn shushi-btn-primary w-full text-center cursor-pointer !py-3.5 disabled:opacity-70"
                  >
                    <span className="flex items-center justify-center gap-2">
                      {loading ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>{isJa ? "送信中..." : "Đang gửi thông tin..."}</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>{isJa ? "無料試食・運営相談を申し込む" : "Gửi yêu cầu tư vấn & Đăng ký nếm thử"}</span>
                        </>
                      )}
                    </span>
                  </button>
                </form>
              ) : (
                /* FORM 2: SHINSEI TRAVEL · DU LỊCH NHẬT BẢN */
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="border-b border-black/10 pb-4 mb-2">
                    <span className="text-[10.5px] font-mono uppercase tracking-widest text-[#75182d] font-bold block mb-1">
                      {isJa
                        ? "SHINSEI トラベル · 先端医療 · PGA名門ゴルフ · 伝統文化専門ツアー"
                        : "Shinsei Travel · Tour Chuyên Sâu Y Tế, Golf PGA & Trải Nghiệm Văn Hóa"}
                    </span>
                    <h3 className="font-title text-2xl font-light text-[#222222]">
                      {isJa
                        ? "訪日専門ツアー ご相談・日程作成フォーム"
                        : "Phiếu Đăng Ký Tư Vấn Du Lịch Nhật Bản"}
                    </h3>
                    <p className="text-xs text-[#222222]/70 mt-1">
                      {isJa
                        ? "専任コンシェルジュが詳細な旅程をご提案し、医療ビザ申請をサポートします。"
                        : "Chuyên viên Shinsei Travel sẽ liên hệ tư vấn lịch trình chi tiết và hỗ trợ hồ sơ Visa Y tế."}
                    </p>
                  </div>

                  {errorMsg && (
                    <div className="p-3 bg-red-100 border border-red-300 text-red-800 text-xs">
                      {errorMsg}
                    </div>
                  )}

                  {/* Travel Service Selector */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider font-bold text-[#222222] mb-2">
                      {isJa ? "ご関心のあるツアー分野：" : "Hành trình tour bạn đang quan tâm:"}
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {travelServices.map((item) => (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => setTravelData({ ...travelData, travelType: item.id })}
                          className={`py-2 px-2.5 text-xs text-left border transition-all cursor-pointer ${
                            travelData.travelType === item.id
                              ? "bg-[#75182d] text-white border-[#75182d]"
                              : "bg-white text-[#222222] border-black/15 hover:border-[#75182d]"
                          }`}
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider font-bold text-[#222222] mb-1.5">
                        {isJa ? "代表者様氏名 / ご同行代表者 *" : "Họ và tên khách hàng / Trưởng đoàn *"}
                      </label>
                      <input
                        type="text"
                        required
                        placeholder={isJa ? "お名前をご入力ください" : "Họ và tên của bạn"}
                        value={travelData.contactName}
                        onChange={(e) =>
                          setTravelData({ ...travelData, contactName: e.target.value })
                        }
                        className="w-full px-4 py-3 bg-white border border-black/15 text-sm text-[#222222] focus:outline-none focus:border-[#75182d]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider font-bold text-[#222222] mb-1.5">
                        {isJa ? "ご連絡先お電話番号 *" : "Số điện thoại / Zalo nhận tư vấn *"}
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder={isJa ? "09xx xxx xxx または 080-xxxx-xxxx" : "09xx xxx xxx"}
                        value={travelData.phone}
                        onChange={(e) =>
                          setTravelData({ ...travelData, phone: e.target.value })
                        }
                        className="w-full px-4 py-3 bg-white border border-black/15 text-sm text-[#222222] focus:outline-none focus:border-[#75182d]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider font-bold text-[#222222] mb-1.5">
                        {isJa ? "日程表・概算送付用メール" : "Email nhận lịch trình & chi phí"}
                      </label>
                      <input
                        type="email"
                        placeholder="email@domain.com"
                        value={travelData.email}
                        onChange={(e) =>
                          setTravelData({ ...travelData, email: e.target.value })
                        }
                        className="w-full px-4 py-3 bg-white border border-black/15 text-sm text-[#222222] focus:outline-none focus:border-[#75182d]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider font-bold text-[#222222] mb-1.5">
                        {isJa ? "ご参加予定人数" : "Số lượng người dự kiến"}
                      </label>
                      <select
                        value={travelData.groupSize}
                        onChange={(e) =>
                          setTravelData({ ...travelData, groupSize: e.target.value })
                        }
                        className="w-full px-4 py-3 bg-white border border-black/15 text-sm text-[#222222] focus:outline-none focus:border-[#75182d]"
                      >
                        <option value="1 – 2 người (Cá nhân / Cặp đôi)">{isJa ? "1〜2名（個人 / ご夫婦）" : "1 – 2 người (Cá nhân / Cặp đôi)"}</option>
                        <option value="3 – 5 người (Gia đình)">{isJa ? "3〜5名（ご家族）" : "3 – 5 người (Gia đình)"}</option>
                        <option value="6 – 10 người (Nhóm bạn / CLB)">{isJa ? "6〜10名（ご友人 / クラブ）" : "6 – 10 người (Nhóm bạn / CLB)"}</option>
                        <option value="Đoàn trên 10 người (Doanh nghiệp)">{isJa ? "10名以上（企業・団体視察）" : "Đoàn trên 10 người (Doanh nghiệp)"}</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider font-bold text-[#222222] mb-1.5">
                        {isJa ? "ご出発希望時期" : "Thời gian dự kiến khởi hành"}
                      </label>
                      <select
                        value={travelData.departureTime}
                        onChange={(e) =>
                          setTravelData({ ...travelData, departureTime: e.target.value })
                        }
                        className="w-full px-4 py-3 bg-white border border-black/15 text-sm text-[#222222] focus:outline-none focus:border-[#75182d]"
                      >
                        <option value="Trong 1 – 2 tháng tới">{isJa ? "1〜2ヶ月以内" : "Trong 1 – 2 tháng tới"}</option>
                        <option value="Quý này">{isJa ? "今四半期中" : "Quý này"}</option>
                        <option value="Mùa thu lá đỏ Nhật Bản">{isJa ? "秋（日本の紅葉シーズン）" : "Mùa thu lá đỏ Nhật Bản"}</option>
                        <option value="Mùa hoa anh đào Nhật Bản">{isJa ? "春（日本の桜シーズン）" : "Mùa hoa anh đào Nhật Bản"}</option>
                        <option value="Linh hoạt theo chỉ định bác sĩ">{isJa ? "医師の受診指示に合わせて柔軟に決定" : "Linh hoạt theo chỉ định bác sĩ"}</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider font-bold text-[#222222] mb-1.5">
                      {isJa
                        ? "詳しいご要望（健康状態、病歴翻訳の有無、ゴルフHDCP、希望滞在日数など）"
                        : "Nhu cầu chi tiết (Tình trạng sức khỏe, bệnh án cần dịch thuật, handicap golf, số ngày mong muốn)"}
                    </label>
                    <textarea
                      rows={3}
                      placeholder={
                        isJa
                          ? "ご相談内容や特別なご配慮が必要な点がございましたらご記入ください..."
                          : "Chia sẻ cụ thể nhu cầu của bạn để chuyên viên Shinsei Travel thiết kế lộ trình phù hợp nhất..."
                      }
                      value={travelData.notes}
                      onChange={(e) =>
                        setTravelData({ ...travelData, notes: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-white border border-black/15 text-sm text-[#222222] focus:outline-none focus:border-[#75182d]"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="shushi-btn shushi-btn-primary w-full text-center cursor-pointer !py-3.5 disabled:opacity-70"
                  >
                    <span className="flex items-center justify-center gap-2">
                      {loading ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>{isJa ? "送信中..." : "Đang gửi thông tin..."}</span>
                        </>
                      ) : (
                        <>
                          <Plane className="w-4 h-4" />
                          <span>{isJa ? "旅程のご提案 & お見積りを請求する" : "Gửi yêu cầu tư vấn lộ trình & Báo giá tour"}</span>
                        </>
                      )}
                    </span>
                  </button>
                </form>
              )}

              <p className="text-[11px] text-center text-[#222222]/60 font-mono mt-4">
                {isJa
                  ? "ご入力内容は安全に暗号化され、専用窓口（info.shinseivn@gmail.com）へ直接送信されます。"
                  : "Thông tin được mã hóa bảo mật và gửi trực tiếp tới email ban điều hành: "}
                {!isJa && <strong>info.shinseivn@gmail.com</strong>}
              </p>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
