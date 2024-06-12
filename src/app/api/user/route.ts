import { cookies } from "next/headers";

export async function GET(request: Request) {
  const cookieStore = cookies();
  const userRaw = cookieStore.get("user")?.value;
  console.log("userAPi", userRaw);
  return new Response(userRaw, {
    status: 200,
  });
}
