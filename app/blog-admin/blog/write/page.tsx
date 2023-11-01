"use client";
import { Box, Button, chakra, Flex, Input } from "@chakra-ui/react";
import style from "./page.module.css";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { ToastEditor } from "@/components/common/Editor/Editor";
import { BlogForm } from "@/types/BlogForm";

interface BlogWritePageProps {}

const BlogWritePage = ({}: BlogWritePageProps) => {
  const [editor, setEditor] = useState();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<BlogForm>();

  const { data: session } = useSession();
  const router = useRouter();

  const onSubmit = async (data: BlogForm) => {
    if (!session) return router.push("/login");
    if (!editor) return;
    data.authorId = session.user.userId as string;
    //@ts-ignore
    data.content = editor.getHTML();
    const res = await fetch("/api/blog", {
      method: "POST",
      body: JSON.stringify(data),
      cache: "no-store",
    });
    console.log(res);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={style.wrap}>
        <label>제목</label>
        <Input type={"text"} {...register("title")} />
        <div className={style.editor}>
          <ToastEditor
            onEditor={(editor) => {
              setEditor(editor);
            }}
            initialValue={""}
          />
        </div>
        <Button type={"submit"}>저장</Button>
      </div>
    </form>
  );
};
export default BlogWritePage;
