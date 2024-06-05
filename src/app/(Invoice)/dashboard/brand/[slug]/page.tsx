import React from "react";

export default function UserDetail({ params }: { params: { slug: string } }) {
  console.log(params.slug);
  return <div>pagedetail u</div>;
}
