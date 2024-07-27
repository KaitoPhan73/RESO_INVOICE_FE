import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';
import { CheckCircleOutlined } from '@ant-design/icons';

const styles = StyleSheet.create({
    text: {
        fontFamily: 'Roboto',
        fontSize: 9,
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
        paddingTop: 10,
    },
    column: {
        width: '48%',
        textAlign: 'center',
    },
    label: {
        fontSize: 10,
        fontWeight: 'bold',
        marginBottom: 2,
    },
    line: {
        borderBottom: '1px solid #000',
        marginTop: 10,
        marginBottom: 10,
        height: 40,
    },
    noteContainer: {
        border: '2px solid #008000',
        padding: 5,
        marginTop: 10,
        borderRadius: 1,
        width: '98%',
        textAlign: 'center',
        alignSelf: 'center',
    },
    noteText: {
        fontSize: 9,
        color: '#008000',
    },
});

const SignatureSection: React.FC = () => (
    <View style={styles.text}>
        <View style={styles.container}>
            <View style={styles.column}>
                <Text style={styles.label}>NGƯỜI MUA HÀNG (Buyer)</Text>
                <Text style={styles.text}>(Ký, ghi rõ họ tên)</Text>
                <Text style={styles.text}>(Signature & Fullname)</Text>
            </View>
            <View style={styles.column}>
                <Text style={styles.label}>NGƯỜI BÁN HÀNG (Seller)</Text>
                <Text style={styles.text}>(Ký, ghi rõ họ tên)</Text>
                <Text style={styles.text}>(Signature & Fullname)</Text>
                <View style={styles.noteContainer}>
                    <CheckCircleOutlined style={{ color: 'green', fontSize: '16px' }} />
                    <Text style={styles.noteText}>
                    ✅ Được ký bởi: VNPAY - KIỂM THỬ HĐĐT CÓ MÃ</Text>
                    <Text style={styles.noteText}>Ngày ký: 26 / 07 / 2024</Text>
                </View>
            </View>
        </View>
    </View>
);

export default SignatureSection;
