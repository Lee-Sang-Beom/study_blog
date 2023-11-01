"use client";
import React, { useEffect, useRef, useState } from "react";
import Editor from "@toast-ui/editor";
import "@toast-ui/editor/dist/toastui-editor.css";
import "@toast-ui/editor/dist/theme/toastui-editor-dark.css";
interface ToastEditorProps extends React.HTMLAttributes<HTMLDivElement> {
  onEditor: (editor: any) => void;
  initialValue: string;
}

const ToastEditor = React.forwardRef<HTMLDivElement, ToastEditorProps>(
  ({ className, onEditor, initialValue, ...props }, ref) => {
    const [editor, setEditor] = useState();
    const editorRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
      if (editorRef.current) {
        const editor = new Editor({
          el: editorRef.current,
          initialValue: initialValue,
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
