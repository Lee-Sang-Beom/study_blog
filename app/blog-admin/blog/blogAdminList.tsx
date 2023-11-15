"use client";
import { Table, Tbody, Td, Th, Thead, Tr, background } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { format } from "date-fns";
import { Link } from "@chakra-ui/next-js";

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
      <Table>
        <Thead bgColor={"#DFE3E8"} borderTop={"2px solid #040404"}>
          <Tr>
            <Th
              textAlign={"center"}
              fontFamily={"var(--font-godo)"}
              fontSize={"14px"}
              width={"7%"}
            >
              no.
            </Th>
            <Th
              textAlign={"center"}
              fontFamily={"var(--font-godo)"}
              fontSize={"14px"}
            >
              제목
            </Th>
            <Th
              textAlign={"center"}
              fontFamily={"var(--font-godo)"}
              fontSize={"14px"}
              width={"12%"}
            >
              작성자
            </Th>
            <Th
              textAlign={"center"}
              fontFamily={"var(--font-godo)"}
              fontSize={"14px"}
              width={"13%"}
            >
              작성일
            </Th>
            <Th
              textAlign={"center"}
              fontFamily={"var(--font-godo)"}
              fontSize={"14px"}
              width={"13%"}
            >
              수정일
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          {tableData.map((data) => {
            return (
              <Tr key={data.id}>
                <Td textAlign={"center"} borderBottom={"1px solid #DFE3E8"}>
                  {data.id}
                </Td>
                <Td borderBottom={"1px solid #DFE3E8"}>
                  <Link href={`/blog-admin/blog/${data.id}`}>{data.title}</Link>
                </Td>
                <Td textAlign={"center"} borderBottom={"1px solid #DFE3E8"}>
                  {data.authorId}
                </Td>
                <Td
                  textAlign={"center"}
                  color={"#555"}
                  borderBottom={"1px solid #DFE3E8"}
                >
                  {format(new Date(data.crtDate), "yyyy-MM-dd")}
                </Td>
                <Td
                  textAlign={"center"}
                  color={"#555"}
                  borderBottom={"1px solid #DFE3E8"}
                >
                  {format(new Date(data.udtDate), "yyyy-MM-dd")}
                </Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>

      <Link
        border={"1px solid #4200FF"}
        borderRadius={"3px"}
        fontSize={"18px"}
        fontFamily={"var(--font-godo)"}
        color={"#4200FF"}
        marginTop={"15px"}
        display={"inline-block"}
        padding={"12px 30px"}
        float={"right"}
        href={"/blog-admin/blog/write"}
        prefetch={false}
      >
        글쓰기
      </Link>
    </div>
  );
}
