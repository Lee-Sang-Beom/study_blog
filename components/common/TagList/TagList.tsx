"use client";
import React from "react";
import styles from "./Tag.module.css";

const TagList = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => (
  <div
    ref={ref}
    className={`${styles.tagList_box} ${className ? className : ""}`}
    {...props}
  >
    {children}
  </div>
));
TagList.displayName = "TagList";

interface TagItemProps {
  className?: string;
  key: string | number;
  name: string;
}
const TagItem = React.forwardRef<HTMLDivElement, TagItemProps>(
  ({ className, name, ...props }: TagItemProps, ref) => (
    <div
      ref={ref}
      className={`${styles.tagItem_box} ${className ? className : ""}`}
      {...props}
    >
      <span className={styles.tagItem_hash_text}>
        <span className={styles.tagItem_hash_icon}>{`# `}</span>
        {name}
      </span>
    </div>
  )
);
TagItem.displayName = "TagItem";

export { TagList, TagItem };
