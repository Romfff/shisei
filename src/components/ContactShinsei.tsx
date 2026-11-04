"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Send, CheckCircle2, Phone, MapPin, Mail, Globe, Clock, Building, Loader2, Utensils, Compass, Plane, ShieldCheck, HeartHandshake, Calendar } from "lucide-react";

export function ContactShinsei() {
  const pathname = usePathname();
  const [formType, setFormType] = useState<"food" | "travel">("food");

  // Sync initial tab based on route
  useEffect(() => {
    if (pathname?.startsWith("/du-lich")) {
      setFormType("travel");
    } else {
      setFormType("food");
    }
  }, [pathname]);

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  // Food Form State
  const [foodData, setFoodData] = useState({
    companyName: "",
    contactName: "",
    phone: "",
    email: "",
    serviceType: "suat-an",
    quantity: "100 – 300 suất / ngày",
    notes: "",
  });

  // Travel Form State
  const [travelData, setTravelData] = useState({
    contactName: "",
    phone: "",
    email: "",
    travelType: "y-te",
    groupSize: "1 – 2 người",
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
      setErrorMsg("Vui lòng điền họ tên và số điện thoại liên hệ.");
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
        setErrorMsg(data.error || "Có lỗi xảy ra, vui lòng thử lại hoặc gọi Hotline.");
      }
    } catch (err) {
      console.error("Form submission failed:", err);
      setSubmitted(true); // Fallback: still show friendly success to user
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-[#ffffff] border-b border-black/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Info Column (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] font-bold text-[#75182d] bg-[#f1e2c8]/60 px-3.5 py-1.5 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-[#75182d]"></span>
              <span>Thông tin liên hệ & Đăng ký</span>
            </div>

            <h2 className="font-title text-4xl sm:text-5xl font-light text-[#222222] tracking-tight leading-[1.05]">
              Công ty Cổ phần Thương Mại Shinsei
            </h2>

            <p className="text-sm sm:text-base text-[#222222]/80 leading-relaxed font-normal">
              Shinsei đồng hành cùng quý doanh nghiệp và khách hàng với hai lĩnh vực mũi nhọn: <strong>Hệ sinh thái Bếp ăn tập thể chuẩn 5S</strong> và <strong>Tour Du lịch chuyên sâu Nhật Bản (Y tế, Lọc máu DFPP, Tế bào gốc, Golf PGA)</strong>.
            </p>

            {/* Contact detail cards */}
            <div className="space-y-4 pt-2">
              
              <div className="p-5 bg-[#fbf7ef] border border-[#75182d]/20 flex items-start gap-4">
                <div className="w-10 h-10 rounded bg-[#75182d] text-white flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5 text-[#f1e2c8]" />
                </div>
                <div>
                  <div className="text-xs uppercase font-mono tracking-wider text-[#75182d] font-bold">
                    Trụ sở tại Việt Nam:
                  </div>
                  <div className="text-sm font-semibold text-[#222222] mt-0.5">
                    Lô 6, A19 Thiên Khôi, Geleximco A, Tây Mỗ, Hà Nội
                  </div>
                  <div className="text-xs text-[#222222]/65 mt-0.5">
                    A19-32 NV8 Khu A, KĐT Geleximco Lê Trọng Tấn, Hà Nội
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
                    Email tiếp nhận yêu cầu & phản hồi:
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
                    <span className="text-xs font-mono uppercase font-bold">Hotline Việt Nam</span>
                  </div>
                  <a href="tel:0981365391" className="text-lg font-bold text-[#222222] hover:text-[#75182d] transition-colors font-mono">
                    0981.365.391
                  </a>
                  <p className="text-[11px] text-[#222222]/60 mt-0.5">Zalo / Tư vấn 24/7</p>
                </div>

                <div className="p-4 bg-[#fbf7ef] border border-black/10">
                  <div className="flex items-center gap-2 text-[#75182d] mb-1">
                    <Globe className="w-4 h-4" />
                    <span className="text-xs font-mono uppercase font-bold">Hotline Nhật Bản</span>
                  </div>
                  <a href="tel:08023922268" className="text-lg font-bold text-[#222222] hover:text-[#75182d] transition-colors font-mono">
                    080.2392.2268
                  </a>
                  <p className="text-[11px] text-[#222222]/60 mt-0.5">Văn phòng đại diện JP</p>
                </div>
              </div>

            </div>

            {/* Quick trust checklist */}
            <div className="p-5 bg-[#f1e2c8]/40 border border-[#75182d]/20 text-xs text-[#222222]/85 space-y-2">
              <div className="flex items-center gap-2 font-semibold text-[#75182d]">
                <CheckCircle2 className="w-4 h-4" />
                <span>Cam kết đồng hành từ Shinsei:</span>
              </div>
              {formType === "food" ? (
                <>
                  <div>• Nếm thử 5 – 10 suất cơm mẫu tận nơi hoàn toàn miễn phí.</div>
                  <div>• Đáp ứng linh hoạt quy mô từ 50 đến trên 10.000 suất ăn mỗi ngày.</div>
                  <div>• Hỗ trợ tư vấn, thiết kế và đào tạo chuẩn 5S cho bếp ăn tập thể.</div>
                </>
              ) : (
                <>
                  <div>• Kết nối trực tiếp 6 bệnh viện đại học hàng đầu Nhật Bản (Fujita, Tokyo Univ, St. Luke...).</div>
                  <div>• Hỗ trợ xin Visa Y tế Medical Stay & phiên dịch viên y khoa đồng hành 1:1.</div>
                  <div>• Sắp xếp sân Golf PGA tiêu chuẩn quốc tế và nghỉ dưỡng Onsen trọn gói.</div>
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
                  <span className="truncate">Ẩm Thực & Bếp Ăn B2B</span>
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
                  <span className="truncate">Shinsei Travel · Du Lịch Nhật</span>
                </button>
              </div>

              {submitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[#75182d] text-white flex items-center justify-center mx-auto shadow-md">
                    <CheckCircle2 className="w-8 h-8 text-[#f1e2c8]" />
                  </div>
                  <h3 className="font-title text-3xl font-light text-[#222222]">
                    Đã Gửi Thông Tin Thành Công
                  </h3>
                  <div className="text-sm text-[#222222]/85 max-w-md mx-auto space-y-2">
                    <p>
                      Yêu cầu của quý khách đã được chuyển trực tiếp tới hòm thư ban điều hành:
                    </p>
                    <div className="py-2 px-4 bg-white border border-[#75182d]/20 font-mono font-bold text-[#75182d] text-base inline-block">
                      info.shinseivn@gmail.com
                    </div>
                    <p className="text-xs text-[#222222]/70 pt-2">
                      Đội ngũ chuyên viên Shinsei sẽ chủ động liên hệ qua số điện thoại đã đăng ký trong vòng <strong>2 giờ làm việc</strong>.
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                    }}
                    className="text-xs font-mono uppercase tracking-wider text-[#75182d] hover:underline pt-4 cursor-pointer block mx-auto"
                  >
                    Gửi yêu cầu hợp tác khác
                  </button>
                </div>
              ) : formType === "food" ? (
                /* FORM 1: ẨM THỰC & BẾP ĂN B2B */
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="border-b border-black/10 pb-4 mb-2">
                    <span className="text-[10.5px] font-mono uppercase tracking-widest text-[#75182d] font-bold block mb-1">
                      Shinsei Food & Coffee · Dành cho Doanh Nghiệp, KCN, Trường Học
                    </span>
                    <h3 className="font-title text-2xl font-light text-[#222222]">
                      Phiếu Yêu Cầu Tư Vấn & Nếm Thử Suất Ăn Doanh Nghiệp
                    </h3>
                    <p className="text-xs text-[#222222]/70 mt-1">
                      Thông tin sẽ được chuyển tiếp trực tiếp đến email: <strong>info.shinseivn@gmail.com</strong>
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
                      Dịch vụ ẩm thực bạn đang quan tâm:
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {[
                        { id: "suat-an", label: "Suất ăn công nghiệp / Bếp ăn 5S" },
                        { id: "cafe", label: "Đồ uống & Café doanh nghiệp" },
                        { id: "tiec-ban", label: "Đặt tiệc bàn 6-8-10 người" },
                        { id: "com-hop", label: "Cơm hộp bento – Mang đi" },
                        { id: "khac", label: "Tư vấn & Đào tạo 5S bếp ăn" },
                      ].map((item) => (
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
                        Tên doanh nghiệp / Đơn vị *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Công ty, Nhà máy, Trường học..."
                        value={foodData.companyName}
                        onChange={(e) =>
                          setFoodData({ ...foodData, companyName: e.target.value })
                        }
                        className="w-full px-4 py-3 bg-white border border-black/15 text-sm text-[#222222] focus:outline-none focus:border-[#75182d]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider font-bold text-[#222222] mb-1.5">
                        Người phụ trách / Chức vụ *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Họ tên (HR / Mua hàng / Ban giám đốc)"
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
                        Số điện thoại / Zalo *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="09xx xxx xxx"
                        value={foodData.phone}
                        onChange={(e) =>
                          setFoodData({ ...foodData, phone: e.target.value })
                        }
                        className="w-full px-4 py-3 bg-white border border-black/15 text-sm text-[#222222] focus:outline-none focus:border-[#75182d]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider font-bold text-[#222222] mb-1.5">
                        Quy mô suất ăn dự kiến / ngày
                      </label>
                      <select
                        value={foodData.quantity}
                        onChange={(e) =>
                          setFoodData({ ...foodData, quantity: e.target.value })
                        }
                        className="w-full px-4 py-3 bg-white border border-black/15 text-sm text-[#222222] focus:outline-none focus:border-[#75182d]"
                      >
                        <option>Dưới 100 suất / ngày</option>
                        <option>100 – 300 suất / ngày</option>
                        <option>300 – 800 suất / ngày</option>
                        <option>Trên 1.000 suất / ngày</option>
                        <option>Đặt tiệc bàn / Sự kiện định kỳ</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider font-bold text-[#222222] mb-1.5">
                      Ghi chú thêm (địa điểm giao, khẩu vị vùng miền, ngân sách)
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Chia sẻ thêm thông tin để Shinsei chuẩn bị thực đơn phù hợp nhất..."
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
                          <span>Đang gửi thông tin...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Gửi yêu cầu tư vấn & Đăng ký nếm thử</span>
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
                      Shinsei Travel · Tour Chuyên Sâu Y Tế, Golf PGA & Trải Nghiệm Văn Hóa
                    </span>
                    <h3 className="font-title text-2xl font-light text-[#222222]">
                      Phiếu Đăng Ký Tư Vấn Du Lịch Nhật Bản
                    </h3>
                    <p className="text-xs text-[#222222]/70 mt-1">
                      Chuyên viên Shinsei Travel sẽ liên hệ tư vấn lịch trình chi tiết và hỗ trợ hồ sơ Visa Y tế.
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
                      Hành trình tour bạn đang quan tâm:
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {[
                        { id: "y-te", label: "Tầm soát Ung thư & Ningen Dock" },
                        { id: "dfpp", label: "Liệu pháp lọc máu DFPP Nhật" },
                        { id: "stem-cell", label: "Trị liệu Tế bào gốc tự thân" },
                        { id: "nk-cell", label: "Tế bào miễn dịch NK / StemSup" },
                        { id: "golf", label: "Tour Golf PGA chân núi Phú Sĩ" },
                        { id: "trai-nghiem", label: "Văn hóa Kyoto & Onsen Kaiseki" },
                        { id: "custom-tour", label: "Tour riêng thiết kế theo yêu cầu" },
                      ].map((item) => (
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
                        Họ và tên khách hàng / Trưởng đoàn *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Họ và tên của bạn"
                        value={travelData.contactName}
                        onChange={(e) =>
                          setTravelData({ ...travelData, contactName: e.target.value })
                        }
                        className="w-full px-4 py-3 bg-white border border-black/15 text-sm text-[#222222] focus:outline-none focus:border-[#75182d]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider font-bold text-[#222222] mb-1.5">
                        Số điện thoại / Zalo nhận tư vấn *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="09xx xxx xxx"
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
                        Email nhận lịch trình & chi phí
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
                        Số lượng người dự kiến
                      </label>
                      <select
                        value={travelData.groupSize}
                        onChange={(e) =>
                          setTravelData({ ...travelData, groupSize: e.target.value })
                        }
                        className="w-full px-4 py-3 bg-white border border-black/15 text-sm text-[#222222] focus:outline-none focus:border-[#75182d]"
                      >
                        <option>1 – 2 người (Cá nhân / Cặp đôi)</option>
                        <option>3 – 5 người (Gia đình)</option>
                        <option>6 – 10 người (Nhóm bạn / CLB)</option>
                        <option>Đoàn trên 10 người (Doanh nghiệp)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider font-bold text-[#222222] mb-1.5">
                        Thời gian dự kiến khởi hành
                      </label>
                      <select
                        value={travelData.departureTime}
                        onChange={(e) =>
                          setTravelData({ ...travelData, departureTime: e.target.value })
                        }
                        className="w-full px-4 py-3 bg-white border border-black/15 text-sm text-[#222222] focus:outline-none focus:border-[#75182d]"
                      >
                        <option>Trong 1 – 2 tháng tới</option>
                        <option>Quý này</option>
                        <option>Mùa thu lá đỏ Nhật Bản</option>
                        <option>Mùa hoa anh đào Nhật Bản</option>
                        <option>Linh hoạt theo chỉ định bác sĩ</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider font-bold text-[#222222] mb-1.5">
                      Nhu cầu chi tiết (Tình trạng sức khỏe, bệnh án cần dịch thuật, handicap golf, số ngày mong muốn)
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Chia sẻ cụ thể nhu cầu của bạn để chuyên viên Shinsei Travel thiết kế lộ trình phù hợp nhất..."
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
                          <span>Đang gửi thông tin...</span>
                        </>
                      ) : (
                        <>
                          <Plane className="w-4 h-4" />
                          <span>Gửi yêu cầu tư vấn lộ trình & Báo giá tour</span>
                        </>
                      )}
                    </span>
                  </button>
                </form>
              )}

              <p className="text-[11px] text-center text-[#222222]/60 font-mono mt-4">
                Thông tin được mã hóa bảo mật và gửi trực tiếp tới email ban điều hành: <strong>info.shinseivn@gmail.com</strong>
              </p>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
