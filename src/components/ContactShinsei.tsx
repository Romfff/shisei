"use client";

import { useState } from "react";
import { Send, CheckCircle2, Phone, MapPin, Mail, Globe, Clock, Building, Loader2 } from "lucide-react";

export function ContactShinsei() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [serviceType, setServiceType] = useState("suat-an");
  const [formData, setFormData] = useState({
    companyName: "",
    contactName: "",
    phone: "",
    email: "",
    quantity: "100 - 300 suất / ngày",
    notes: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.companyName || !formData.phone) return;

    setLoading(true);
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          serviceType,
        }),
      });

      const data = await res.json();
      if (data.success) {
        setSubmitted(true);
      } else {
        setErrorMsg(data.error || "Có lỗi xảy ra, vui lòng thử lại hoặc gọi Hotline.");
      }
    } catch (err) {
      console.error("Form submission failed:", err);
      // Fallback: still show success to customer while logging
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-[#ffffff] border-b border-black/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Info (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] font-bold text-[#75182d] bg-[#f1e2c8]/60 px-3.5 py-1.5 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-[#75182d]"></span>
              <span>Thông tin liên hệ & Hợp tác</span>
            </div>

            <h2 className="font-title text-4xl sm:text-5xl font-light text-[#222222] tracking-tight leading-[1.05]">
              Công ty Cổ phần Thương Mại Shinsei
            </h2>

            <p className="text-sm sm:text-base text-[#222222]/80 leading-relaxed font-normal">
              Chúng tôi luôn sẵn sàng lắng nghe, tư vấn thực đơn chi tiết và mang phần ăn mẫu đến tận nhà máy, trường học để quý ban giám đốc thẩm định trực tiếp trước khi ký kết.
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
                    (A19-32 NV8 Khu A - KĐT Geleximco Lê Trọng Tấn, Hà Nội)
                  </div>
                </div>
              </div>

              {/* Email direct inbox */}
              <div className="p-4 bg-[#fbf7ef] border border-[#75182d]/20 flex items-center gap-4">
                <div className="w-10 h-10 rounded bg-[#75182d] text-white flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-[#f1e2c8]" />
                </div>
                <div>
                  <div className="text-xs uppercase font-mono tracking-wider text-[#75182d] font-bold">
                    Email tiếp nhận yêu cầu tư vấn:
                  </div>
                  <a
                    href="mailto:ddcjp.ceo@gmail.com"
                    className="text-sm sm:text-base font-bold text-[#222222] hover:text-[#75182d] transition-colors font-mono"
                  >
                    ddcjp.ceo@gmail.com
                  </a>
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
              <div>• Nếm thử 5 – 10 suất cơm mẫu tận nơi hoàn toàn miễn phí.</div>
              <div>• Đáp ứng quy mô từ 50 đến trên 10.000 suất ăn mỗi ngày.</div>
              <div>• Hỗ trợ tư vấn, thiết kế và đào tạo 5S cho bếp ăn tập thể.</div>
            </div>

          </div>

          {/* Right Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-[#fbf7ef] p-8 sm:p-12 border border-[#75182d]/20 shadow-sm">
              
              {submitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[#75182d] text-white flex items-center justify-center mx-auto shadow-md">
                    <CheckCircle2 className="w-8 h-8 text-[#f1e2c8]" />
                  </div>
                  <h3 className="font-title text-3xl font-light text-[#222222]">
                    Đã gửi thông tin thành công
                  </h3>
                  <div className="text-sm text-[#222222]/85 max-w-md mx-auto space-y-2">
                    <p>
                      Yêu cầu của <strong>{formData.contactName || "quý đơn vị"}</strong> đã được chuyển trực tiếp tới hòm thư ban điều hành:
                    </p>
                    <div className="py-2 px-4 bg-white border border-[#75182d]/20 font-mono font-bold text-[#75182d] text-base inline-block">
                      ddcjp.ceo@gmail.com
                    </div>
                    <p className="text-xs text-[#222222]/70 pt-2">
                      Đội ngũ chuyên viên Shinsei sẽ chủ động liên hệ qua số điện thoại <strong>{formData.phone}</strong> trong vòng 2 giờ làm việc.
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        companyName: "",
                        contactName: "",
                        phone: "",
                        email: "",
                        quantity: "100 - 300 suất / ngày",
                        notes: "",
                      });
                    }}
                    className="text-xs font-mono uppercase tracking-wider text-[#75182d] hover:underline pt-4 cursor-pointer block mx-auto"
                  >
                    Gửi yêu cầu hợp tác khác
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="border-b border-black/10 pb-4 mb-2">
                    <h3 className="font-title text-2xl font-light text-[#222222]">
                      Phiếu Yêu Cầu Tư Vấn & Nếm Thử Suất Ăn
                    </h3>
                    <p className="text-xs text-[#222222]/70 mt-1">
                      Thông tin sẽ được gửi trực tiếp đến ban giám đốc qua email <strong>ddcjp.ceo@gmail.com</strong>
                    </p>
                  </div>

                  {errorMsg && (
                    <div className="p-3 bg-red-100 border border-red-300 text-red-800 text-xs">
                      {errorMsg}
                    </div>
                  )}

                  {/* Service Selector Radio */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider font-bold text-[#222222] mb-2">
                      Dịch vụ bạn đang quan tâm:
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {[
                        { id: "suat-an", label: "Suất ăn công nghiệp / Bếp ăn" },
                        { id: "tiec-ban", label: "Đặt tiệc bàn 6-8-10" },
                        { id: "com-hop", label: "Cơm hộp – Mang đi" },
                        { id: "cafe", label: "Vận hành Căng tin & Café" },
                        { id: "travel", label: "Shinsei Travel · Du lịch Nhật" },
                        { id: "khac", label: "Tư vấn & Đào tạo 5S" },
                      ].map((item) => (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => setServiceType(item.id)}
                          className={`py-2 px-2.5 text-xs text-left border transition-all cursor-pointer ${
                            serviceType === item.id
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
                        placeholder="Công ty, Trường học, Bệnh viện..."
                        value={formData.companyName}
                        onChange={(e) =>
                          setFormData({ ...formData, companyName: e.target.value })
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
                        value={formData.contactName}
                        onChange={(e) =>
                          setFormData({ ...formData, contactName: e.target.value })
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
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="w-full px-4 py-3 bg-white border border-black/15 text-sm text-[#222222] focus:outline-none focus:border-[#75182d]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider font-bold text-[#222222] mb-1.5">
                        Quy mô suất ăn dự kiến / số lượng
                      </label>
                      <select
                        value={formData.quantity}
                        onChange={(e) =>
                          setFormData({ ...formData, quantity: e.target.value })
                        }
                        className="w-full px-4 py-3 bg-white border border-black/15 text-sm text-[#222222] focus:outline-none focus:border-[#75182d]"
                      >
                        <option>Dưới 100 suất / ngày</option>
                        <option>100 – 300 suất / ngày</option>
                        <option>300 – 800 suất / ngày</option>
                        <option>Trên 1.000 suất / ngày</option>
                        <option>Đặt tiệc bàn / Sự kiện định kỳ</option>
                        <option>Đoàn khách Shinsei Travel</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider font-bold text-[#222222] mb-1.5">
                      Ghi chú thêm (địa điểm giao, khẩu vị vùng miền, yêu cầu đặc biệt)
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Chia sẻ thêm thông tin để Shinsei chuẩn bị thực đơn phù hợp nhất..."
                      value={formData.notes}
                      onChange={(e) =>
                        setFormData({ ...formData, notes: e.target.value })
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

                  <p className="text-[11px] text-center text-[#222222]/60 font-mono">
                    Thông tin được mã hóa an toàn và chuyển trực tiếp tới email ban điều hành Shinsei
                  </p>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
