import React from 'react';
import { Image, Text, View } from '@react-pdf/renderer';
import { StyleSheet, Font } from '@react-pdf/renderer';
import styles from './styles';

const styless = StyleSheet.create({
  text: {
    fontFamily: 'Roboto',
    fontSize: 12,
  },
});

const InvoiceTitle: React.FC = () => (
  <View style={styless.text}>
    <View style={styles.titleContainer}>
      <View style={styles.headerContainer}>
        <Image style={styles.logo} src="/images/logo-deercoffee.jpg" />
        <View style={styles.titleContent}>
          <Text style={styles.reportTitle}>VNPAY - KIỂM THỬ HÓA ĐƠN ĐIỆN TỬ CÓ MÃ</Text>
          <View style={styles.infoRow}>
            <Text style={styles.label}>Mã số thuế (Tax Code):</Text>
            <Text style={styles.value}>0  1  0  2  1  8  2  2  9  2  -  9  9  9</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.label}>Địa chỉ (Address):</Text>
            <Text style={styles.value}>22 Láng Hạ - Đống Đa - Hà Nội</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.label}>Điện thoại (Tel):</Text>
            <Text style={styles.value}>0358309608         - Website: https://vnpay.vn</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.label}>Số tài khoản (Acc No.):</Text>
            <Text style={styles.value}>VNPAY                  - Tại VNPAY</Text>
          </View>
        </View>
      </View>
    </View>
  </View>

);

export default InvoiceTitle;
