import { httpInvoice } from "@/lib/http";
import { TInvoiceReport } from "@/schemaValidations/invoice-report.schema";

const BarChartApi = {
  getInvoiceReportByOrganizationId: (
    organizationId: string,
    sessionToken: string,
    params?: any
  ) => {
    return httpInvoice.get<TInvoiceReport>(
      `organizations/${organizationId}/invoice-report`,
      { params, headers: { Authorization: `Bearer ${sessionToken}` } }
    );
  },
};

export default BarChartApi;
