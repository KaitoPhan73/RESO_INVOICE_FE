import React, { Fragment } from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";
import styles from "./styles";
import { TInvoice } from "@/schemaValidations/invoice.schema";

const formatCurrency = (amount: number): string => {
  return amount.toLocaleString("vi-VN", { style: "currency", currency: "VND" });
};

const receiptData = {
  items: [
    { id: 1, desc: "Bảo hiểm du lịch", unit: "", price: 5987000, qty: 2 },
    {
      id: 2,
      desc: "Sách học tiếng Anh",
      unit: "Chiếc",
      price: 39000000,
      qty: 3,
    },
    // { id: 3, desc: 'Tai nghe Bluetooth', unit: 'Piece', price: 350000, qty: 1 },
    // { id: 4, desc: 'Chuột máy tính', unit: 'Piece', price: 80000, qty: 2 }
  ],
};

const styless = StyleSheet.create({
  text: {
    fontFamily: "Roboto",
    fontSize: 12,
    fontWeight: "bold",
  },
});

type Props = {
  data: TInvoice;
};

const TableInvoice = ({ data }: Props) => {
  const totalAmount = data.items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const vatRate = 0.08; // 8%
  const vatAmount = (totalAmount * vatRate).toFixed(2);
  const totalPayment = (totalAmount + parseFloat(vatAmount)).toFixed(2);

  return (
    <View>
      <View style={styless.text}>
        <View style={{ marginTop: 2 }}>
          {/* Table Header */}
          <View style={{ width: "100%", flexDirection: "row" }}>
            <View style={styles.theader}>
              <Text>STT{"\n"}(No)</Text>
            </View>
            <View style={[styles.theader, styles.theader2]}>
              <Text>Tên hàng hóa, dịch vụ{"\n"}(Description)</Text>
            </View>
            <View style={styles.theader}>
              <Text>ĐVT{"\n"}(Unit)</Text>
            </View>
            <View style={styles.theader}>
              <Text>Số lượng{"\n"}(Quantity)</Text>
            </View>
            <View style={styles.theader}>
              <Text>Đơn giá{"\n"}(Unit Price)</Text>
            </View>
            <View style={styles.theader}>
              <Text>Thành tiền{"\n"}(Amount)</Text>
            </View>
          </View>

          {/* Table Body */}
          {data.items.map((receipt) => (
            <Fragment key={receipt.ordinalNumber}>
              <View style={{ width: "100%", flexDirection: "row" }}>
                <View style={styles.tbody}>
                  <Text>{receipt.ordinalNumber}</Text>
                </View>
                <View style={[styles.tbody, styles.tbody2]}>
                  <Text>{receipt.name}</Text>
                </View>
                <View style={styles.tbody}>
                  <Text>{receipt.unit}</Text>
                </View>
                <View style={styles.tbody}>
                  <Text>{receipt.quantity}</Text>
                </View>
                <View style={styles.tbody}>
                  <Text>{formatCurrency(receipt.price)}</Text>
                </View>
                <View style={styles.tbody}>
                  <Text>
                    {formatCurrency(receipt.price * receipt.quantity)}
                  </Text>
                </View>
              </View>
            </Fragment>
          ))}

          {/* Table Total */}
          <View style={{ width: "100%", flexDirection: "row" }}>
            <View style={[styles.total, { flex: 5, borderRightWidth: 0 }]}>
              <Text>Cộng tiền hàng hóa, dịch vụ (Total):</Text>
            </View>
            <View style={[styles.total, { flex: 1, borderRightWidth: 1 }]}>
              <Text>{formatCurrency(totalAmount)}</Text>
            </View>
          </View>

          <View style={{ width: "100%", flexDirection: "row" }}>
            <View style={[styles.total1, { flex: 5, borderRightWidth: 0 }]}>
              <Text>Thuế suất GTGT (VAT rate): KCT</Text>
              <Text>Tiền thuế GTGT (VAT amount):</Text>
            </View>
            <View style={[styles.total, { flex: 1, borderRightWidth: 1 }]}>
              <Text>0</Text>
            </View>
          </View>

          <View style={{ width: "100%", flexDirection: "row" }}>
            <View style={[styles.total1, { flex: 5, borderRightWidth: 0 }]}>
              <Text>Thuế suất GTGT (VAT rate): {data.taxTypes[0].tax}</Text>
              <Text>Tiền thuế GTGT (VAT amount):</Text>
            </View>
            <View style={[styles.total, { flex: 1, borderRightWidth: 1 }]}>
              <Text>{formatCurrency(parseFloat(vatAmount))}</Text>
            </View>
          </View>

          <View style={{ width: "100%", flexDirection: "row" }}>
            <View style={[styles.total, { flex: 5, borderRightWidth: 0 }]}>
              <Text>Tổng tiền thanh toán (Total amount):</Text>
            </View>
            <View style={[styles.total, { flex: 1, borderRightWidth: 1 }]}>
              <Text>{formatCurrency(parseFloat(totalPayment))}</Text>
            </View>
          </View>

          <View style={{ width: "100%", flexDirection: "row" }}>
            <View style={[styles.final, { flex: 6, borderRightWidth: 1 }]}>
              <Text>
                Số tiền bằng chữ (In words): Một trăm ba mươi tám triệu ba trăm
                ba mươi tư nghìn đồng
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default TableInvoice;
