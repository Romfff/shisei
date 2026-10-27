"use client";

import { useState } from "react";
import { Send, CheckCircle2, Phone, MapPin, ShieldCheck, ArrowRight } from "lucide-react";

export function TastingForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    companyName: "",
    location: "",
    headcount: "100 - 300 suất",
    budget: "32.000đ / suất",
    contactName: "",
    phone: "",
    notes: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.companyName || !formData.phone) return;
    setSubmitted(true);
  };

  return (
    <section id="trial-tasting" className="py-24 bg-[#fff9f3] border-b border-black/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Description (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] font-bold text-[#e94222]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#e94222]"></span>
              <span>Trải nghiệm thực tế · 試食体験</span>
            </div>

            <h2 className="font-title text-4xl sm:text-5xl font-light text-[#0d1717] tracking-tight leading-[1.05]">
              Đăng ký nếm thử 5 đến 10 suất ăn mẫu tại nhà máy.
            </h2>

            <p className="text-sm sm:text-base text-[#3a3a3a]/80 leading-relaxed font-normal">
              Chúng tôi hiểu quyết định lựa chọn đối tác cung cấp suất ăn liên quan trực tiếp đến 
              sức khỏe và năng suất làm việc của hàng trăm công nhân. Shisei Food trân trọng kính mời 
              ban lãnh đạo, phòng nhân sự và đại diện công đoàn nếm thử trực tiếp các phần ăn mẫu 
              để tự mình đánh giá khẩu vị và độ nóng sốt trước khi ký kết.
            </p>

            <div className="space-y-3 pt-2 text-xs sm:text-sm text-[#0d1717]">
              <div className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#e94222] mt-2 shrink-0"></span>
                <span>Hoàn toàn miễn phí và không ràng buộc ký kết hợp đồng</span>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#e94222] mt-2 shrink-0"></span>
                <span>Giao hàng đúng giờ ăn trưa thực tế tại căng-tin của quý công ty</span>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#e94222] mt-2 shrink-0"></span>
                <span>Kèm theo hồ sơ năng lực và chứng nhận kiểm nghiệm an toàn thực phẩm</span>
              </div>
            </div>

            <div className="p-5 bg-[#f5ece4] border border-black/10 flex items-center gap-4">
              <div className="w-10 h-10 bg-[#0d1717] text-white flex items-center justify-center shrink-0">
                <Phone className="w-4 h-4 text-[#e94222]" />
              </div>
              <div>
                <div className="text-xs text-[#3a3a3a]/70 font-mono uppercase tracking-wider">
                  Hotline tư vấn B2B 24/7
                </div>
                <div className="font-title text-xl font-bold text-[#0d1717]">
                  090 888 9999
                </div>
              </div>
            </div>

          </div>

          {/* Right Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-[#f5ece4] p-8 sm:p-12 border border-black/10">
              
              {submitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-14 h-14 rounded-full bg-[#e94222] text-white flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h3 className="font-title text-3xl font-light text-[#0d1717]">
                    Đã tiếp nhận yêu cầu nếm thử
                  </h3>
                  <p className="text-sm text-[#3a3a3a]/80 max-w-md mx-auto">
                    Chuyên viên dinh dưỡng của Shisei Food sẽ liên hệ với {formData.contactName || "quý công ty"} qua số điện thoại {formData.phone} trong vòng 2 giờ làm việc để thống nhất thực đơn và thời gian giao mẫu.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs font-mono uppercase tracking-wider text-[#e94222] hover:underline pt-4 cursor-pointer"
                  >
                    Gửi yêu cầu khác
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="border-b border-black/10 pb-4 mb-2">
                    <h3 className="font-title text-2xl font-light text-[#0d1717]">
                      Phiếu đăng ký nếm thử món ăn
                    </h3>
                    <p className="text-xs text-[#3a3a3a]/70 mt-1">
                      Đội ngũ bếp Shisei sẽ chuẩn bị suất ăn mẫu theo đúng tiêu chuẩn mà quý công ty yêu cầu
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider font-bold text-[#0d1717] mb-1.5">
                        Tên doanh nghiệp / Đơn vị *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Công ty TNHH Sản xuất..."
                        value={formData.companyName}
                        onChange={(e) =>
                          setFormData({ ...formData, companyName: e.target.value })
                        }
                        className="w-full px-4 py-3 bg-white border border-black/15 text-sm text-[#0d1717] focus:outline-none focus:border-[#0d1717]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider font-bold text-[#0d1717] mb-1.5">
                        Khu công nghiệp / Khu vực *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Ví dụ: KCN VSIP 1, Bình Dương"
                        value={formData.location}
                        onChange={(e) =>
                          setFormData({ ...formData, location: e.target.value })
                        }
                        className="w-full px-4 py-3 bg-white border border-black/15 text-sm text-[#0d1717] focus:outline-none focus:border-[#0d1717]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider font-bold text-[#0d1717] mb-1.5">
                        Quy mô suất ăn dự kiến
                      </label>
                      <select
                        value={formData.headcount}
                        onChange={(e) =>
                          setFormData({ ...formData, headcount: e.target.value })
                        }
                        className="w-full px-4 py-3 bg-white border border-black/15 text-sm text-[#0d1717] focus:outline-none focus:border-[#0d1717]"
                      >
                        <option>Dưới 100 suất / ngày</option>
                        <option>100 - 300 suất / ngày</option>
                        <option>300 - 800 suất / ngày</option>
                        <option>Trên 1.000 suất / ngày</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider font-bold text-[#0d1717] mb-1.5">
                        Mức đơn giá quan tâm
                      </label>
                      <select
                        value={formData.budget}
                        onChange={(e) =>
                          setFormData({ ...formData, budget: e.target.value })
                        }
                        className="w-full px-4 py-3 bg-white border border-black/15 text-sm text-[#0d1717] focus:outline-none focus:border-[#0d1717]"
                      >
                        <option>28.000đ - 30.000đ / suất</option>
                        <option>32.000đ - 35.000đ / suất</option>
                        <option>38.000đ - 45.000đ / suất</option>
                        <option>Trên 50.000đ / suất (chuyên gia)</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider font-bold text-[#0d1717] mb-1.5">
                        Họ tên người phụ trách *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Họ tên đại diện HR / Mua hàng"
                        value={formData.contactName}
                        onChange={(e) =>
                          setFormData({ ...formData, contactName: e.target.value })
                        }
                        className="w-full px-4 py-3 bg-white border border-black/15 text-sm text-[#0d1717] focus:outline-none focus:border-[#0d1717]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider font-bold text-[#0d1717] mb-1.5">
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
                        className="w-full px-4 py-3 bg-white border border-black/15 text-sm text-[#0d1717] focus:outline-none focus:border-[#0d1717]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider font-bold text-[#0d1717] mb-1.5">
                      Ghi chú thêm (khẩu vị, ca ăn, yêu cầu riêng)
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Chia sẻ thêm thông tin để đầu bếp chuẩn bị tốt nhất..."
                      value={formData.notes}
                      onChange={(e) =>
                        setFormData({ ...formData, notes: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-white border border-black/15 text-sm text-[#0d1717] focus:outline-none focus:border-[#0d1717]"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="shushi-btn shushi-btn-primary w-full text-center cursor-pointer"
                  >
                    <span>Gửi đăng ký nếm thử thực đơn tận nơi</span>
                  </button>

                  <p className="text-[11px] text-center text-[#3a3a3a]/60 font-mono">
                    Thông tin hoàn toàn bảo mật, chỉ dùng cho mục đích giao mẫu cơm dùng thử
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
