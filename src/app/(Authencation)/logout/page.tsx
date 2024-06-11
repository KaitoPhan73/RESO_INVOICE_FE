"use client";
import authApi from "@/actions/auth";
import { setUser } from "@/redux/User/userSlice";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Suspense, useEffect } from "react";
import { useDispatch } from "react-redux";

function clearCookies() {
  const cookies = document.cookie.split("; ");
  for (const cookie of cookies) {
    const eqPos = cookie.indexOf("=");
    const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
    document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/";
  }
}

function LogoutLogic() {
  const router = useRouter();
  const pathname = usePathname();
  const dispatch = useDispatch();
  const searchParams = useSearchParams();
  const accessToken = searchParams.get("accessToken");

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const logout = async () => {
      try {
        await authApi.logoutFromNextClientToNextServer(true, signal);

        clearCookies();
        localStorage.clear();
        sessionStorage.clear();

        router.push(`/login?redirectFrom=${pathname}`);
      } catch (error) {
        console.error("Logout failed:", error);
      }
    };

    if (accessToken === localStorage.getItem("accessToken")) {
      logout();
    } else {
      //tạm thời cho log out lun nếu sửa ở cookie
      logout();
      console.error("Access token does not match");
    }

    return () => {
      controller.abort();
    };
  }, [accessToken, router, pathname, dispatch]);

  return <div>Logging out...</div>;
}

export default function LogoutPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LogoutLogic />
    </Suspense>
  );
}
