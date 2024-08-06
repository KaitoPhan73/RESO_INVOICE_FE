// components/styles.ts
import { StyleSheet, Font } from '@react-pdf/renderer';

Font.register({ family: 'Roboto', src: '/fonts/Roboto-Regular.ttf' });
Font.register({ family: 'Roboto-Bold', src: '/fonts/Roboto-Bold.ttf' });

const styles = StyleSheet.create({
  pageBackground: {
    position: 'absolute',
    top: -20,
    left: -60,
    width: '123%',
    height: 'calc(120% + 500px)',
    zIndex: -1,
  },
  page: {
    fontSize: 7,
    paddingTop: 20,
    paddingLeft: 40,
    paddingRight: 40,
    lineHeight: 1.5,
    flexDirection: 'column',
    position: 'relative',
  },
  content: {
    position: 'relative',
    zIndex: 1,
  },
  spaceBetween: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    color: "#3E3E3E",
  },
  titleContainer: {
    flexDirection: 'column',
    marginTop: 24,
    width: '100%',
  },
  titleSecond: {
    flexDirection: 'column',
    width: '100%',
    marginTop: 1,
    borderTopWidth: 1.5,
    borderTopColor: 'green',
    paddingTop: 4,

  },
  // lineSecond: {
  //   marginBottom: 20,
  //   paddingBottom: 4,

  // },
  headerContainer: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'flex-start',
    borderBottomWidth: 1.5,
    borderBottomColor: 'red',
    paddingBottom: 4,
  },
  logoContainer: {
    flexDirection: 'row',
    width: '100%',
  },
  logo: {
    width: 110,
  },
  titleContent: {
    marginLeft: 1,
    flexDirection: 'column',
    width: '100%',
  },
  infoRow: {
    flexDirection: 'row',
    marginBottom: 1,
    width: '100%',
  },
  infoRowContent: {
    flexDirection: 'row',
    marginBottom: 1,
    width: '250%',
  },

  reportTitle: {
    fontSize: 13,
    color: "red",
    textAlign: 'left',
    fontWeight: 'bold',
  },
  gridItem: {
    padding: 5,
    boxSizing: 'border-box',
  },
  label: {
    fontSize: 10,
    width: '30%',
    marginRight: 5,
  },
  value: {
    fontSize: 10,
    width: '70%', // Adjust width to fit your layout
  },
  centeredContent: {
    alignItems: 'center',
    textAlign: 'center',
    marginLeft: "100px",
    paddingLeft: "50px",
  },
  invoiceTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: "red",
    alignItems: 'center',
    textAlign: 'center',
  },
  invoiceTitleLeft: {
    fontSize: 10,
    fontWeight: 'bold',
    alignItems: 'flex-start',
    textAlign: 'left',
  },
  invoiceLeft: {
    fontSize: 10,
    alignItems: 'flex-start',
    textAlign: 'left'
  },
  invoice: {
    fontSize: 10,
    alignItems: 'center',
    textAlign: 'center',
  },
  invoiceBold: {
    fontSize: 10,
    fontWeight: 'bold',
    alignItems: 'center',
    textAlign: 'center',
  },
  companyContainer: {
    flexDirection: 'row',
    marginTop: 4,
    width: '100%',
  },
  companyLineContainer: {
    marginTop: 15,
    borderTopWidth: 1.5,
    borderTopColor: 'red',
    paddingTop: 4,
  },
  addressTitle: {
    fontSize: 10,
    fontWeight: 'bold',
    width: '40%', 
    textAlign: 'left',
  },
  address: {
    fontSize: 10,
    width: '60%', 
    textAlign: 'left',
  },
  invoiceNumber: { fontSize: 11, fontWeight: 'bold' },
  theader: {
    fontSize: 10,
    fontWeight: 'bold',
    padding: 4,
    flex: 1,
    height: 40,
    backgroundColor: '#DEDEDE',
    borderColor: 'black',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  theader2: {
    flex: 2,
    borderRightWidth: 1,
  },
  tbody: {
    fontSize: 9,
    padding: 4,
    flex: 1,
    borderColor: 'black',
    borderTopWidth: 0,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1, justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  tbody2: {
    flex: 2,
    borderRightWidth: 1,
  },
  total: {
    fontSize: 10,
    padding: 4,
    borderColor: 'black',
    borderTopWidth: 0,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    textAlign: 'right',
  },
  total1: {
    fontSize: 10,
    padding: 4,
    borderColor: 'black',
    borderTopWidth: 0,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    textAlign: 'center',
    flexDirection: 'row',
  },
  final: {
    fontSize: 10,
    padding: 4,
    borderColor: 'black',
    borderTopWidth: 0,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1, justifyContent: 'flex-start',
    alignItems: 'flex-start',
    textAlign: 'left',
  },
});

export default styles;
