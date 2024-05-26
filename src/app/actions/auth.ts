import { httpInvoice, httpServer } from "@/lib/http";
import { TLogin, TResponseLogin } from "@/types/User";
const authApi = {
  checkLogin: (body: TLogin) =>
    httpInvoice.post<TResponseLogin>("/auth/login", body),
  auth: (body: { sessionToken: string }) => httpServer.post("/api/auth", body),
  logoutFromNextServerToServer: (sessionToken: string) =>
    httpServer.post<any>(
      "/auth/logout",
      {},
      {
        headers: {
          Authorization: `Bearer ${sessionToken}`,
        },
      }
    ),
  logoutFromNextClientToNextServer: (
    force?: boolean | undefined,
    signal?: AbortSignal | undefined
  ) =>
    httpServer.post<any>(
      "/api/auth/logout",
      {
        force,
      },
      {
        baseUrl: "",
        signal,
      }
    ),
};

export default authApi;
