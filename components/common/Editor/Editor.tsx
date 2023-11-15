"use client";
import React, { useEffect, useRef, useState } from "react";
import Editor from "@toast-ui/editor";
import "@toast-ui/editor/dist/toastui-editor.css";
import "@toast-ui/editor/dist/theme/toastui-editor-dark.css";
interface ToastEditorProps extends React.HTMLAttributes<HTMLDivElement> {
  onEditor: (editor: any) => void;
  initialValue: string;
}

const addImageBlobHook = async (blob: Blob, callback: any) => {
  const formData = new FormData();
  formData.append("image", blob);
  try {
    const res = await fetch("/api/file/upload", {
      method: "POST",
      body: formData,
    });
    const { fileUrl } = await res.json();
    callback(fileUrl, "사진 대체 텍스트 입력");
  } catch (e) {
    console.log(e);
    callback("이미지 업로드 실패", "대체 텍스트");
  }
};

const ToastEditor = React.forwardRef<HTMLDivElement, ToastEditorProps>(
  ({ className, onEditor, initialValue, ...props }, ref) => {
    const [editor, setEditor] = useState();
    const editorRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
      if (editorRef.current) {
        const editor = new Editor({
          el: editorRef.current,
          previewStyle: "vertical",
          initialValue: initialValue,
          hooks: {
            addImageBlobHook: addImageBlobHook,
          },
        });
        setEditor(editor);
      }
    }, []);

    useEffect(() => {
      if (editor) {
        onEditor(editor);
      }
    }, [editor]);
    return <div ref={editorRef} className={className} {...props} />;
  }
);
ToastEditor.displayName = "ToastEditor";

export { ToastEditor };
