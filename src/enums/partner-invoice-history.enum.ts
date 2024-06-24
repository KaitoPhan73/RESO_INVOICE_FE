enum Status {
  new = "Tạo mới",
  released = "Đã phát hành",
  signed = "Đã ký số",
  sign_error = "Ký số lỗi",
  deleted = "Đã xóa",
  canceled = "Đã hủy",
}

enum TvanStatus {
  Chưa_gửi_Cơ_quan_thuế = 1,
  Chờ_Cơ_quan_thuế_phản_hồi = 2,
  Gửi_TVAN_lỗi = 3,
  Cơ_quan_thuế_không_tiếp_nhận = 4,
  Cơ_quan_thuế_chấp_nhận = 5,
  Cơ_quan_thuế_từ_chối = 6,
  Cơ_quan_thuế_tiếp_nhận = 7,
  Cơ_quan_thuế_trả_kết_quả = 8,
}

enum InvoiceStatus {
  origin = "Hóa đơn gốc",
  adjustment = "Hóa đơn điều chỉnh",
  adjusted = "Hóa đơn bị điều chỉnh",
  replacement = "Hóa đơn thay thế",
  replaced = "Hóa đơn bị thay thế",
  cancel = "Hóa đơn đã hủy",
}

export { Status, TvanStatus, InvoiceStatus };
