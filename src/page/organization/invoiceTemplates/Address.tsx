import React from 'react';
import { Text, View } from '@react-pdf/renderer';
import { StyleSheet, Font } from '@react-pdf/renderer';
import styles from './styles';

const styless = StyleSheet.create({
  text: {
    fontFamily: 'Roboto',
    fontSize: 12,
  },
});

const Address: React.FC = () => (
  // <View style={styless.text}>
    <View style={styles.titleSecond}>
      <View style={styles.lineSecond}>
        <View style={styles.spaceBetween}>
          <View style={styles.centeredContent}>
            <Text style={styles.invoiceTitle}>HOA DON</Text>
            <Text style={styles.invoiceTitle}>GIA TRI GIA TANG</Text>
            <Text style={styles.invoice}>(Ban the hien cua hoa don dien tu)</Text>
            <Text style={styles.invoice}>Ngay(date) 26 thang(month) 07 nam(year) 2024</Text>
            <Text style={styles.invoiceBold}>Ma tra cuu: 3URHFWRFB1</Text>
            <Text style={styles.invoiceBold}>Ma cua CQT:</Text>
          </View>
        </View>
      </View>
    </View>
  // </View>

);

export default Address;
