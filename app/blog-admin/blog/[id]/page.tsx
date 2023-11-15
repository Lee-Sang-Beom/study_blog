import { useEffect } from "react";
import BlogUpdateClient from "./BlogUpdateClient";

const blogSelectDetail = async (id: number) => {
  const res = await fetch(`http://localhost:3000/api/blog/${id}`, {
    method: "GET",
    cache: "no-store",
  });

  const data = await res.json();
  if (data.status == "200") {
    return data.data;
  } else {
    return new Error(data);
  }
};

export default async function Page({ params }: any) {
  const res = await blogSelectDetail(Number(params.id));
  return (
    <>
      <BlogUpdateClient data={res} id={parseInt(params.id.toString())} />
    </>
  );
}
