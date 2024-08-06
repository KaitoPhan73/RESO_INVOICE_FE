"use client";

import React from "react";
import { Page, Document, Image, View } from "@react-pdf/renderer";
import InvoiceTitle from "./InvoiceTitle";
import Address from "./Address";
import UserAddress from "./UserAddress";
import styles from "./styles";
import TableInvoice from "./TableHead";
import SignatureSection from "./SignatureSection";
import { TInvoice } from "@/schemaValidations/invoice.schema";

type Props = {
  data: TInvoice;
};
const Invoice = ({ data }: Props) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.content}>
        <Image src="/images/SDSD.jpg" style={styles.pageBackground} />
        <InvoiceTitle />
        <Address />
        <UserAddress />
        <TableInvoice data={data} />
        <SignatureSection />
      </View>
    </Page>
  </Document>
);

export default Invoice;
