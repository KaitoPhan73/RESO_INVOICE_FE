"use client";
import Page from "@/components/PageProps";
import TyphoField from "@/components/TyphoField ";
import {
  InvoiceDetailSchema,
  TInvoice,
} from "@/schemaValidations/invoice.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Card, Grid } from "@mui/material";
import React from "react";
import { FormProvider, useFieldArray, useForm } from "react-hook-form";
type Props = {
  data: any;
};

export default function OrganizationsInvoiceDetailPage({ data }: Props) {
  const methods = useForm<TInvoice>({
    resolver: zodResolver(InvoiceDetailSchema),
    defaultValues: {
      ...data,
    },
  });

  const { handleSubmit, control } = methods;

  const {
    fields: fieldsItems,
    remove: removeItem,
    append: appendItem,
  } = useFieldArray<TInvoice>({
    control,
    name: `items`,
  });

  const {
    fields: fieldsTaxTypes,
    remove: removeTaxTypes,
    append: appendTaxTypes,
  } = useFieldArray<TInvoice>({
    control,
    name: `taxTypes`,
  });

  const onSubmit = (values: TInvoice) => {
    console.log("Form submitted with values:", values);
    // Xử lý logic khi submit form ở đây (ví dụ: gửi dữ liệu lên server)
  };
  return (
    <FormProvider {...methods}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} lg={6}>
          <Card style={{ width: "100%" }}>
            <Grid container item xs={12} spacing={1}>
              <Page title="Chi tiết hóa đơn" spacing={2}>
                <Grid item xs={6}>
                  <TyphoField
                    name="invoiceDetail.receiptCode"
                    label="Mã biên nhận"
                    fullWidth
                    showBorder
                  />
                </Grid>
                <Grid item xs={6}>
                  <TyphoField
                    name="invoiceDetail.buyerCustomerCode"
                    label="Mã khách hàng"
                    fullWidth
                    showBorder
                  />
                </Grid>
                <Grid item xs={6}>
                  <TyphoField
                    name="invoiceDetail.buyerTaxCode"
                    label="Mã số thuế"
                    fullWidth
                    showBorder
                  />
                </Grid>
                <Grid item xs={6}>
                  <TyphoField
                    name="invoiceDetail.buyerName"
                    label="Tên khách hàng"
                    fullWidth
                    showBorder
                  />
                </Grid>
                <Grid item xs={6}>
                  <TyphoField
                    name="invoiceDetail.buyerAddress"
                    label="Địa chỉ khách hàng"
                    fullWidth
                    showBorder
                  />
                </Grid>
                <Grid item xs={6}>
                  <TyphoField
                    name="invoiceDetail.buyerFullName"
                    label="Tên đầy đủ khách hàng"
                    fullWidth
                    showBorder
                  />
                </Grid>
                <Grid item xs={6}>
                  <TyphoField
                    name="invoiceDetail.buyerPhoneNumber"
                    label="Số điện thoại khách hàng"
                    fullWidth
                    showBorder
                  />
                </Grid>
                <Grid item xs={6}>
                  <TyphoField
                    name="invoiceDetail.buyerEmail"
                    label="Email khách hàng"
                    fullWidth
                    showBorder
                  />
                </Grid>
                <Grid item xs={6}>
                  <TyphoField
                    name="invoiceDetail.buyerBankName"
                    label="Tên ngân hàng của khách hàng"
                    fullWidth
                    showBorder
                  />
                </Grid>
                <Grid item xs={6}>
                  <TyphoField
                    name="invoiceDetail.buyerBankAccountNumber"
                    label="Số tài khoản ngân hàng của khách hàng"
                    fullWidth
                    showBorder
                  />
                </Grid>
                <Grid item xs={6}>
                  <TyphoField
                    name="invoiceDetail.invoiceNote"
                    label="Ghi chú hóa đơn"
                    fullWidth
                    showBorder
                  />
                </Grid>
                <Grid item xs={6}>
                  <TyphoField
                    name="invoiceDetail.internalNote"
                    label="Ghi chú nội bộ"
                    fullWidth
                    showBorder
                  />
                </Grid>
                <Grid item xs={6}>
                  <TyphoField
                    name="invoiceDetail.discount"
                    label="Chiết khấu"
                    fullWidth
                    showBorder
                  />
                </Grid>
                <Grid item xs={6}>
                  <TyphoField
                    name="invoiceDetail.code"
                    label="Mã sản phẩm"
                    fullWidth
                    showBorder
                  />
                </Grid>
                <Grid item xs={6}>
                  <TyphoField
                    name="invoiceDetail.quantity"
                    label="Số lượng"
                    fullWidth
                    showBorder
                  />
                </Grid>
                <Grid item xs={6}>
                  <TyphoField
                    name="invoiceDetail.totalAmount"
                    label="Tổng số tiền"
                    fullWidth
                    showBorder
                  />
                </Grid>
                <Grid item xs={6}>
                  <TyphoField
                    name="invoiceDetail.discountAmount"
                    label="Số tiền chiết khấu"
                    fullWidth
                    showBorder
                  />
                </Grid>
                <Grid item xs={6}>
                  <TyphoField
                    name="invoiceDetail.finalAmount"
                    label="Số tiền cuối cùng"
                    fullWidth
                    showBorder
                  />
                </Grid>
              </Page>
            </Grid>
          </Card>
        </Grid>
        <Grid container item xs={12} md={6} lg={6} spacing={2}>
          <Grid item xs={12}>
            <Card style={{ width: "100%" }}>
              <Grid container item xs={12} spacing={1}>
                <Page title="Chi tiết hóa đơn" spacing={2}>
                  <Grid item xs={12}>
                    <TyphoField
                      name="invoiceCode"
                      label="Mã hóa đơn"
                      fullWidth
                      showBorder
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <TyphoField
                      name="lookupCode"
                      label="Mã tra cứu"
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <TyphoField name="type" label="Loại hóa đơn" fullWidth />
                  </Grid>
                  <Grid item xs={4}>
                    <TyphoField name="status" label="Trạng thái" fullWidth />
                  </Grid>
                  <Grid item xs={12}>
                    <TyphoField name="createdDate" label="Ngày tạo" fullWidth />
                  </Grid>
                </Page>
              </Grid>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card style={{ width: "100%" }}>
              <Grid container item xs={12} spacing={1} padding={1}>
                <Grid item xs={6}>
                  <TyphoField name="billCode" label="Mã hóa đơn" fullWidth />
                </Grid>
                <Grid item xs={6}>
                  <TyphoField
                    name="paymentMethod"
                    label="Phương thức thanh toán"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={6}>
                  <TyphoField
                    name="currencyUnit"
                    label="Đơn vị tiền tệ"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={6}>
                  <TyphoField
                    name="currencyExchangeRate"
                    label="Tỷ giá hối đoái"
                    fullWidth
                  />
                </Grid>
              </Grid>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card style={{ width: "100%" }}>
              <Grid container item xs={12} spacing={1} padding={1}>
                <Grid item xs={6}>
                  <TyphoField
                    name="totalTaxAmount"
                    label="Tổng số tiền thuế"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={6}>
                  <TyphoField
                    name="totalAmountAfterTax"
                    label="Tổng số tiền sau thuế"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={6}>
                  <TyphoField
                    name="totalSaleAmount"
                    label="Tổng số tiền bán hàng"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={6}>
                  <TyphoField
                    name="totalDiscountAmount"
                    label="Tổng số tiền chiết khấu"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={6}>
                  <TyphoField
                    name="totalAmountWithoutTax"
                    label="Tổng số tiền trước thuế"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={6}>
                  <TyphoField
                    name="totalAmount"
                    label="Tổng số tiền"
                    fullWidth
                  />
                </Grid>
              </Grid>
            </Card>
          </Grid>
        </Grid>
        <Grid container item xs={12} md={6} lg={6}>
          <Card style={{ width: "100%" }}>
            <Page title="Thuế" spacing={2}>
              {fieldsTaxTypes.map((taxType, index) => (
                <Grid item xs={12} key={index}>
                  <Grid container spacing={1} padding={1}>
                    <Grid item xs={4}>
                      <TyphoField
                        name={`taxTypes.${index}.tax`}
                        label="Tax"
                        fullWidth
                        showBorder
                      />
                    </Grid>
                    <Grid item xs={4}>
                      <TyphoField
                        name={`taxTypes.${index}.amountWithoutTax`}
                        label="Amount Without Tax"
                        fullWidth
                        showBorder
                      />
                    </Grid>
                    <Grid item xs={4}>
                      <TyphoField
                        name={`taxTypes.${index}.taxAmount`}
                        label="Tax Amount"
                        fullWidth
                        showBorder
                      />
                    </Grid>
                  </Grid>
                </Grid>
              ))}
            </Page>
          </Card>
        </Grid>
        <Grid container item xs={12} md={6} lg={6}>
          <Card style={{ width: "100%" }}>
            <Page title="Hàng hóa" spacing={2}>
              {fieldsItems.map((item, index) => (
                <Grid item xs={12} key={index}>
                  <Grid container spacing={1} padding={1}>
                    <Grid item xs={3}>
                      <TyphoField
                        name={`items.${index}.ordinalNumber`}
                        label="Ordinal Number"
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={3}>
                      <TyphoField
                        name={`items.${index}.code`}
                        label="Code"
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={3}>
                      <TyphoField
                        name={`items.${index}.name`}
                        label="Name"
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={3}>
                      <TyphoField
                        name={`items.${index}.quantity`}
                        label="Quantity"
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={3}>
                      <TyphoField
                        name={`items.${index}.unit`}
                        label="Unit"
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={3}>
                      <TyphoField
                        name={`items.${index}.price`}
                        label="Price"
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={3}>
                      <TyphoField
                        name={`items.${index}.taxAmount`}
                        label="Tax Amount"
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={3}>
                      <TyphoField
                        name={`items.${index}.amountAfterTax`}
                        label="Amount After Tax"
                        fullWidth
                      />
                    </Grid>
                  </Grid>
                </Grid>
              ))}
            </Page>
          </Card>
        </Grid>
      </Grid>
    </FormProvider>
  );
}
