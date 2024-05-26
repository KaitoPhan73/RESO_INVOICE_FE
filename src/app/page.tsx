import { TableColumnsType } from "antd";
import Image from "next/image";
interface UserData {
  id: string;
  name: string;
  avatar: string;
  role: string;
}
export default async function Home(props: any) {
  // const res = await fetch(
  //   `https://660bbdb3ccda4cbc75dd950a.mockapi.io/api/student/users`,
  //   {
  //     method: "GET",
  //     cache: "no-store",
  //   }
  // );
  // const data = await res.json();
  // console.log(data);
  // const res = await getUsers();
  // console.log(res);
  return <div>Home</div>;
}
