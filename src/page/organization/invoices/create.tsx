"use client";
import Page from "@/components/PageProps";
import { SelectField } from "@/components/form";
import InputField from "@/components/form/InputField";
import {
  InvoiceDetailSchema,
  TInvoice,
} from "@/schemaValidations/invoice.schema";
import { TInvoiceTemplateBody } from "@/schemaValidations/invoiceTemplate.schema";
import { TStore } from "@/schemaValidations/store.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Card, Grid } from "@mui/material";
import React from "react";
import { FormProvider, useFieldArray, useForm } from "react-hook-form";

type Props = {
  props: any;
  data: {
    stores: TStore[];
    templates: TInvoiceTemplateBody[];
  };
};

export default function OrganizationsInvoiceCreatePage({ data }: Props) {
  const storeOptions = data.stores.map((store: TStore) => ({
    label: store.name,
    value: store.id,
  }));

  const templateOptions = data.templates.map(
    (template: TInvoiceTemplateBody) => ({
      label: template.templateName,
      value: template.organizationId,
    })
  );

  const methods = useForm<TInvoice>({
    resolver: zodResolver(InvoiceDetailSchema),
    defaultValues: {},
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

  const handleAppendItems = () => {
    appendItem({
      ordinalNumber: appendItem.length + 1,
      name: "",
      code: "",
      quantity: 1,
      property: "",
      unit: "",
      price: 0,
      taxAmount: 0,
      amountAfterTax: 0,
      amountWithoutTax: 0,
      amount: 1,
      tax: "",
      amountWithoutDiscount: 0,
      discountAmount: 0,
      discountRate: 0,
    });
  };

  console.log("fieldsItems", fieldsItems);
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
    // Handle form submission logic here (e.g., send data to the server)
  };

  return (
    <FormProvider {...methods}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} lg={6}>
          <Card style={{ width: "100%" }}>
            <Grid container item xs={12} spacing={1}>
              <Page title="Chi tiết hóa đơn" spacing={2}>
                <Grid item xs={6}>
                  <InputField
                    name="invoiceDetail.receiptCode"
                    label="Mã biên nhận"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={6}>
                  <InputField
                    name="invoiceDetail.buyerCustomerCode"
                    label="Mã khách hàng"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={6}>
                  <InputField
                    name="invoiceDetail.buyerTaxCode"
                    label="Mã số thuế"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={6}>
                  <InputField
                    name="invoiceDetail.buyerName"
                    label="Tên khách hàng"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={6}>
                  <InputField
                    name="invoiceDetail.buyerAddress"
                    label="Địa chỉ khách hàng"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={6}>
                  <InputField
                    name="invoiceDetail.buyerFullName"
                    label="Tên đầy đủ khách hàng"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={6}>
                  <InputField
                    name="invoiceDetail.buyerPhoneNumber"
                    label="Số điện thoại khách hàng"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={6}>
                  <InputField
                    name="invoiceDetail.buyerEmail"
                    label="Email khách hàng"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={6}>
                  <InputField
                    name="invoiceDetail.buyerBankName"
                    label="Tên ngân hàng của khách hàng"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={6}>
                  <InputField
                    name="invoiceDetail.buyerBankAccountNumber"
                    label="Số tài khoản ngân hàng của khách hàng"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={6}>
                  <InputField
                    name="invoiceDetail.invoiceNote"
                    label="Ghi chú hóa đơn"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={6}>
                  <InputField
                    name="invoiceDetail.internalNote"
                    label="Ghi chú nội bộ"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={6}>
                  <InputField
                    name="invoiceDetail.discount"
                    label="Chiết khấu"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={6}>
                  <InputField
                    name="invoiceDetail.code"
                    label="Mã sản phẩm"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={6}>
                  <InputField
                    name="invoiceDetail.quantity"
                    label="Số lượng"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={6}>
                  <InputField
                    name="invoiceDetail.totalAmount"
                    label="Tổng số tiền"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={6}>
                  <InputField
                    name="invoiceDetail.discountAmount"
                    label="Số tiền chiết khấu"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={6}>
                  <InputField
                    name="invoiceDetail.finalAmount"
                    label="Số tiền cuối cùng"
                    fullWidth
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
                    <InputField
                      name="invoiceCode"
                      label="Mã hóa đơn"
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <InputField
                      name="lookupCode"
                      label="Mã tra cứu"
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <SelectField name="type" label="Loại hóa đơn" fullWidth />
                  </Grid>
                  <Grid item xs={4}>
                    <SelectField name="status" label="Trạng thái" fullWidth />
                  </Grid>
                  <Grid item xs={4}>
                    <SelectField
                      name="storeId"
                      label="Chọn cửa hàng"
                      options={storeOptions}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <SelectField
                      name="templateId"
                      label="Chọn mẫu hóa đơn"
                      options={templateOptions}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <SelectField
                      name="partnerId"
                      label="Chọn đối tác"
                      fullWidth
                    />
                  </Grid>
                </Page>
              </Grid>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card style={{ width: "100%" }}>
              <Grid container item xs={12} spacing={1} padding={1}>
                <Grid item xs={6}>
                  <InputField name="billCode" label="Mã Bill" fullWidth />
                </Grid>
                <Grid item xs={6}>
                  <InputField
                    name="paymentMethod"
                    label="Phương thức thanh toán"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={6}>
                  <InputField
                    name="currencyUnit"
                    label="Đơn vị tiền tệ"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={6}>
                  <InputField
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
                  <InputField
                    name="totalTaxAmount"
                    label="Tổng số tiền thuế"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={6}>
                  <InputField
                    name="totalAmountAfterTax"
                    label="Tổng số tiền sau thuế"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={6}>
                  <InputField
                    name="totalSaleAmount"
                    label="Tổng số tiền bán hàng"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={6}>
                  <InputField
                    name="totalDiscountAmount"
                    label="Tổng số tiền chiết khấu"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={6}>
                  <InputField
                    name="totalAmountWithoutTax"
                    label="Tổng số tiền trước thuế"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={6}>
                  <InputField
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
                      <InputField
                        name={`taxTypes.${index}.tax`}
                        label="Tax"
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={4}>
                      <InputField
                        name={`taxTypes.${index}.amountWithoutTax`}
                        label="Amount Without Tax"
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={4}>
                      <InputField
                        name={`taxTypes.${index}.taxAmount`}
                        label="Tax Amount"
                        fullWidth
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
            <Page
              title="Hàng hóa"
              spacing={2}
              action={
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => appendItem}
                >
                  Thêm Hàng Hóa
                </Button>
              }
            >
              {fieldsItems.map((item, index) => (
                <Grid item xs={12} key={index}>
                  <Grid container spacing={1} padding={1}>
                    <Grid item xs={3}>
                      <InputField
                        name={`items.${index}.ordinalNumber`}
                        label="Ordinal Number"
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={3}>
                      <InputField
                        name={`items.${index}.code`}
                        label="Code"
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={3}>
                      <InputField
                        name={`items.${index}.name`}
                        label="Name"
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={3}>
                      <InputField
                        name={`items.${index}.quantity`}
                        label="Quantity"
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={3}>
                      <InputField
                        name={`items.${index}.unit`}
                        label="Unit"
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={3}>
                      <InputField
                        name={`items.${index}.price`}
                        label="Price"
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={3}>
                      <InputField
                        name={`items.${index}.taxAmount`}
                        label="Tax Amount"
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={3}>
                      <InputField
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
