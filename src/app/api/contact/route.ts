import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { 
      formType = "food",
      companyName, 
      contactName, 
      phone, 
      email, 
      serviceType, 
      quantity, 
      notes,
      travelType,
      groupSize,
      departureTime
    } = body;

    const recipientEmail = "info.shinseivn@gmail.com";
    const ccEmail = "ddcjp.ceo@gmail.com";
    const timestamp = new Date().toLocaleString("vi-VN", { timeZone: "Asia/Ho_Chi_Minh" });

    // Format service labels for Food
    const foodServiceLabels: Record<string, string> = {
      "suat-an": "Suất ăn công nghiệp / Bếp ăn tập thể 5S",
      "cafe": "Đồ uống & Café doanh nghiệp",
      "tiec-ban": "Đặt tiệc bàn 6-8-10 người",
      "com-hop": "Cơm hộp bento – Mang đi",
      "khac": "Tư vấn & Đào tạo 5S bếp ăn",
    };

    // Format service labels for Travel
    const travelServiceLabels: Record<string, string> = {
      "y-te": "Du lịch Y tế & Khám chuyên sâu Ningen Dock",
      "dfpp": "Liệu pháp lọc máu DFPP & Thanh lọc cơ thể",
      "stem-cell": "Trị liệu Tế bào gốc tự thân & Chống lão hóa",
      "nk-cell": "Liệu pháp Tế bào miễn dịch NK phòng ung thư",
      "stemsup": "Tế bào gốc StemSup (Exosomes) - Viện BIJ",
      "golf": "Du lịch Golf tiêu chuẩn PGA chân núi Phú Sĩ",
      "trai-nghiem": "Du lịch Trải nghiệm văn hóa Kyoto, Onsen & Kaiseki",
      "custom-tour": "Tour riêng thiết kế theo yêu cầu (Custom VIP)",
    };

    const isTravel = formType === "travel";

    // Console audit log
    console.log("==================================================");
    if (isTravel) {
      const travelText = travelServiceLabels[travelType] || travelType || "Tư vấn chung";
      console.log(`[SHINSEI TRAVEL INQUIRY] New consultation request for: ${recipientEmail}, ${ccEmail}`);
      console.log(`Time: ${timestamp}`);
      console.log(`Contact Person: ${contactName}`);
      console.log(`Phone: ${phone}`);
      console.log(`Email: ${email || "Không cung cấp"}`);
      console.log(`Tour Type: ${travelText}`);
      console.log(`Group Size: ${groupSize || "Chưa rõ"}`);
      console.log(`Departure Time: ${departureTime || "Chưa rõ"}`);
      console.log(`Notes: ${notes || "Không có"}`);
    } else {
      const foodText = foodServiceLabels[serviceType] || serviceType || "Chưa chọn";
      console.log(`[SHINSEI FOOD B2B INQUIRY] New consultation request for: ${recipientEmail}, ${ccEmail}`);
      console.log(`Time: ${timestamp}`);
      console.log(`Company: ${companyName}`);
      console.log(`Contact Person: ${contactName}`);
      console.log(`Phone: ${phone}`);
      console.log(`Email: ${email || "Không cung cấp"}`);
      console.log(`Service: ${foodText}`);
      console.log(`Quantity: ${quantity}`);
      console.log(`Notes: ${notes || "Không có"}`);
    }
    console.log("==================================================");

    // Forward to FormSubmit to deliver directly to info.shinseivn@gmail.com
    try {
      const emailPayload = isTravel ? {
        _subject: `[Shinsei Travel] Yêu cầu tư vấn tour Nhật Bản: ${contactName} - ${phone}`,
        _template: "table",
        _captcha: "false",
        _cc: ccEmail,
        "Thời gian gửi": timestamp,
        "Phân loại dịch vụ": "✈️ Shinsei Travel · Du Lịch Nhật Bản",
        "Họ và tên khách hàng": contactName,
        "Số điện thoại / Zalo": phone,
        "Email nhận thông tin": email || "Chưa cung cấp",
        "Dịch vụ tour quan tâm": travelServiceLabels[travelType] || travelType || "Tư vấn chung",
        "Số lượng khách dự kiến": groupSize || "1 - 2 người",
        "Thời gian dự kiến khởi hành": departureTime || "Linh hoạt",
        "Yêu cầu chi tiết / Tình trạng sức khỏe": notes || "Không có",
      } : {
        _subject: `[Shinsei Food] Yêu cầu tư vấn bếp ăn & ẩm thực: ${companyName || contactName} - ${contactName}`,
        _template: "table",
        _captcha: "false",
        _cc: ccEmail,
        "Thời gian gửi": timestamp,
        "Phân loại dịch vụ": "🍱 Shinsei Food & Coffee · Ẩm Thực B2B",
        "Tên doanh nghiệp / Đơn vị": companyName || "Chưa cung cấp",
        "Người phụ trách / Chức vụ": contactName,
        "Số điện thoại / Zalo": phone,
        "Email liên hệ": email || "Chưa cung cấp",
        "Dịch vụ quan tâm": foodServiceLabels[serviceType] || serviceType || "Chưa chọn",
        "Quy mô suất ăn dự kiến": quantity || "100 - 300 suất / ngày",
        "Ghi chú / Yêu cầu đặc biệt": notes || "Không có",
      };

      const formSubmitResponse = await fetch(`https://formsubmit.co/ajax/${recipientEmail}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(emailPayload),
      });

      if (!formSubmitResponse.ok) {
        console.warn("[FormSubmit Warning] Response status:", formSubmitResponse.status);
      }
    } catch (deliveryError) {
      console.error("[Email Delivery Warning] Could not reach mail forwarder:", deliveryError);
    }

    return NextResponse.json({
      success: true,
      recipient: recipientEmail,
      message: `Thông tin đã được chuyển thành công tới hòm thư ${recipientEmail}`,
    });
  } catch (error) {
    console.error("[Contact API Error]:", error);
    return NextResponse.json(
      { success: false, error: "Đã xảy ra lỗi khi tiếp nhận thông tin. Vui lòng thử lại hoặc gọi hotline." },
      { status: 500 }
    );
  }
}
