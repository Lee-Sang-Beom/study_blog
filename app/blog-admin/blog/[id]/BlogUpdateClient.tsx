"use client";
import { ToastEditor } from "@/components/common/Editor/Editor";
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  VStack,
} from "@chakra-ui/react";
import moment from "moment";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
interface IProps {
  id: number;
  data?: any;
}

interface BlogUpdateForm {
  id: number;
  title: string;
  authorId: string;
  content: string;
}
export default function BlogUpdateClient({ id, data }: IProps) {
  const [editor, setEditor] = useState();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<BlogUpdateForm>({
    defaultValues: {
      id: parseInt(data.id),
      title: data.title,
      authorId: data.authorId,
      content: data.content,
    },
  });

  const onSubmit = async (data: BlogUpdateForm) => {
    console.log(data);
    //@ts-ignore
    data.content = editor.getHTML();
    const res = await fetch("/api/blog", {
      method: "PATCH",
      body: JSON.stringify(data),
      cache: "no-store",
    });
    console.log(res);
    const resData = await res.json();
    if (resData.status === 200) {
      router.push("/blog-admin/blog");
    }
  };
  return (
    <div>
      <VStack w={"100%"} justifyContent={"flex-start"}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl>
            <FormLabel>제목</FormLabel>
            <Input type={"text"} {...register("title")} />
          </FormControl>
          <FormControl>
            <FormLabel>내용</FormLabel>
            <ToastEditor
              onEditor={(editor) => {
                setEditor(editor);
              }}
              initialValue={data.content}
            />
          </FormControl>
          <Button type={"submit"} variant={"solid"}>
            수정
          </Button>
        </form>
      </VStack>
    </div>
  );
}
