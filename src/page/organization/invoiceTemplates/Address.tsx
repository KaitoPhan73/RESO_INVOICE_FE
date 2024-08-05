import React from 'react';
import { Text, View } from '@react-pdf/renderer';
import { StyleSheet, Font } from '@react-pdf/renderer';
import styles from './styles';

const styless = StyleSheet.create({
  text: {
    fontFamily: 'Roboto',
    fontSize: 12,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: "12px",

  },
  leftColumn: {
    alignItems: 'center',
    textAlign: 'center',
    marginLeft: "100px",
    paddingLeft: "50px",
  },
  rightColumn: {
    fontSize: 10,
    marginLeft: "40px",
    width: '30%',
    textAlign: 'left',
  },
});

const Address: React.FC = () => (
  <View style={styless.text}>
    <View style={styless.container}>
      {/* Left Column */}
      <View style={styless.leftColumn}>
        <Text style={styles.invoiceTitle}>HÓA ĐƠN</Text>
        <Text style={styles.invoiceTitle}>GIÁ TRỊ GIA TĂNG</Text>
        <Text style={styles.invoice}>(Bản thể hiện của hóa đơn điện tử)</Text>
        <Text style={styles.invoice}>Ngày (date) 26 tháng (month) 07 năm (year) 2024</Text>
        <Text style={styles.invoiceBold}>Mã tra cứu: 3URHFWRFB1</Text>
        <Text style={styles.invoiceBold}>Mã của CQT:</Text>
      </View>

      {/* Right Column */}
      <View style={styless.rightColumn}>
        <Text style={styles.invoiceTitleLeft}>INVOICE (VAT)</Text>
        <Text style={styles.invoiceLeft}>Ký hiệu (Serial No): 1C24TDT</Text>
        <Text style={styles.invoiceLeft}>Số (No): 4</Text>
      </View>
    </View>
  </View>
);

export default Address;
