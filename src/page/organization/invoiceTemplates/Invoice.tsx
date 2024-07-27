"use client"; 

import React from 'react';
import { Page, Document } from '@react-pdf/renderer';
import InvoiceTitle from './InvoiceTitle';
import Address from './Address';
import UserAddress from './UserAddress';
import styles from './styles';
import TableInvoice from './TableHead';
import SignatureSection from './SignatureSection';

const receiptData = {
  id: "642be0b4bbe5d71a5341dfb1",
  invoice_no: "20200669",
  address: "739 Porter Avenue, Cade, Missouri, 1134",
  date: "24-09-2019",
  items: [
    { id: 1, desc: "do ex anim quis velit excepteur non", qty: 8, price: 179.25 },
    { id: 2, desc: "incididunt cillum fugiat aliqua Lorem sit Lorem", qty: 9, price: 107.78 },
    { id: 3, desc: "quis Lorem ad laboris proident aliqua laborum", qty: 4, price: 181.62 },
    { id: 4, desc: "exercitation non do eu ea ullamco cillum", qty: 4, price: 604.55 },
    { id: 5, desc: "ea nisi non excepteur irure Lorem voluptate", qty: 6, price: 687.08 }
  ]
};

const Invoice: React.FC = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <InvoiceTitle />

      <Address/>

      <UserAddress/>

      <TableInvoice />

      <SignatureSection />

    </Page>
  </Document>
);

export default Invoice;
