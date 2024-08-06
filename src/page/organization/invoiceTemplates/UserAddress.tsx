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

const UserAddress: React.FC = () => (
  
  <View style={styless.text}>
  <View style={styles.companyLineContainer}>
    <View style={styles.companyContainer}>
      <View style={styles.spaceBetween}>
        <View style={{ maxWidth: 200 }}>
          <View style={styles.infoRowContent}>
            <Text style={[styles.addressTitle]}>
              Công ty/Đơn vị (Company):
            </Text>
            <Text style={[styles.address]}>
              CÔNG TY CỔ PHẦN GIẢI PHÁP THANH TOÁN VIỆT NAM
            </Text>
          </View>
          <View style={styles.infoRowContent}>
            <Text style={[styles.addressTitle]}>
              Người mua hàng (Customer):
            </Text>
            <Text style={[styles.address]}>Datnm</Text>
          </View>
          <View style={styles.infoRowContent}>
            <Text style={[styles.addressTitle]}>
              Địa chỉ (Address):
            </Text>
            <Text style={[styles.address]}>
              Tầng 8, Số 22, phố Láng Hạ, Phường Láng Hạ, Quận Đống Đa, Hà Nội
            </Text>
          </View>
          <View style={styles.infoRowContent}>
            <Text style={[styles.addressTitle]}>
              Hình thức thanh toán (Payment method):
            </Text>
            <Text style={[styles.address]}>
              TM/CK                                   MST (Tax code): 0102182292-999
            </Text>
          </View>
          <View style={styles.infoRowContent}>
            <Text style={[styles.addressTitle]}>
              Số tài khoản (Acc No):
            </Text>
            <Text style={[styles.address]}>0912111111</Text>
          </View>
        </View>
      </View>
    </View>
  </View>
  </View>
);

export default UserAddress;