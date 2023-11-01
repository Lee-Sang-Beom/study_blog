"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function BlogAdminList({}) {
  const [tableData, setTableData] = useState<any[]>([]);
  ("");
  useEffect(() => {
    const fetchData = async () => {
      // 명시적 GET 요청
      const data = await fetch("http://localhost:3000/api/blog", {
        cache: "no-store",
        method: "GET",
      });
      const resData = await data.json();

      if (resData.status == "200") setTableData(resData.data);
      else setTableData([]);
    };

    fetchData();
  }, []);

  useEffect(() => {
    console.log("table Data is ", tableData);
  }, [tableData]);
  return (
    <div>
      {JSON.stringify({ tableData })}
      <Link href={"/blog-admin/blog/write"} prefetch={false}>
        링크이동하기
      </Link>
    </div>
  );
}
