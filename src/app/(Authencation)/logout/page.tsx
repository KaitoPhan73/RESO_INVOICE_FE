"use client";
import authApi from "@/actions/auth";
import { setUser, setUserServer } from "@/redux/User/userSlice";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Suspense, useEffect } from "react";
import { useDispatch } from "react-redux";

function LogoutLogic() {
  const router = useRouter();
  const pathname = usePathname();
  const dispatch = useDispatch();
  const searchParams = useSearchParams();

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const logout = async () => {
      try {
        dispatch(setUser(null));
        dispatch(setUserServer(null));
        localStorage.clear();
        sessionStorage.clear();
        await authApi.logoutFromNextClientToNextServer(true, signal);
        router.push(`/login?redirectFrom=${pathname}`);
      } catch (error) {
        console.error("Logout failed:", error);
      } finally {
        router.refresh();
      }
    };

    logout();

    return () => {
      controller.abort();
    };
  }, [router, pathname, dispatch]);

  return <div>Logging out...</div>;
}

export default function LogoutPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LogoutLogic />
    </Suspense>
  );
}
