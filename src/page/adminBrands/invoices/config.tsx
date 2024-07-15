enum InvoiceStatus {
  Draft = 0,
  Success = 1,
  Sent = 2,
  PendingApproval = 3,
  Completed = 4,
  Failed = 5,
  Pending = 6,
  RetryPending = 7,
}

// Tạo mảng `statusConfig` từ enum
export const invoiceStatusOptions = [
  { value: InvoiceStatus.Draft, label: "Bản nháp" },
  { value: InvoiceStatus.Success, label: "Gửi thành công" },
  { value: InvoiceStatus.Sent, label: "Đã gửi" },
  { value: InvoiceStatus.PendingApproval, label: "Đang chờ phê duyệt" },
  { value: InvoiceStatus.Completed, label: "Hoàn tất" },
  { value: InvoiceStatus.Failed, label: "Thất bại" },
  { value: InvoiceStatus.Pending, label: "Đang chờ" },
  { value: InvoiceStatus.RetryPending, label: "Đang chờ thử lại" },
];
