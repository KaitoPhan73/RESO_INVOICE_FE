import { httpInvoice } from "@/lib/http";
import { TOrganizationsBody } from "@/schemaValidations/organizations.schema";
import { TOrganizationsBase } from "@/types/Organization";
import { TTableResponse } from "@/types/Table";

const organizationsApi = {
  getOrganizations: (sessionToken: string, params?: any) => {
    return httpInvoice.get<TTableResponse<TOrganizationsBase>>(
      "organizations",
      {
        params,
        headers: { Authorization: `Bearer ${sessionToken}` },
      }
    );
  },
  createOrganizations: (data: TOrganizationsBody) => {
    return httpInvoice.post<TOrganizationsBody>("organizations", data);
  },
};
console.log("hihihi", organizationsApi);

export default organizationsApi;
