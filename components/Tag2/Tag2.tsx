"use client";
import React from "react";

const Tag2 = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...Props }, ref) => (
  <div
    ref={ref}
    style={{
      display: "flex",
      paddingLeft: "0px",
      flexDirection: "column",
      alignItems: "flex-start",
      alignSelf: "stretch",
    }}
    {...Props}
  />
));
Tag2.displayName = "Tag2";

interface TagItemProps {
  className?: React.HTMLAttributes<HTMLDivElement>;
  name: string;
}
const TagItem = React.forwardRef<HTMLDivElement, TagItemProps>(
  ({ className, name, ...Props }: TagItemProps, ref) => (
    <div
      ref={ref}
      style={{
        display: "flex",
        padding: "8px 0px",
        alignItems: "center",
        gap: "10px",
        alignSelf: "stretch",
      }}
      {...Props}
    >
      <span
        style={{
          color: "var(--black, #00C7AF)",
          fontFamily: "Godo M",
          fontSize: "18px",
          fontWeight: 400,
        }}
      >
        #
      </span>
      <span
        style={{
          color: "var(--black, #040404)",
          fontFamily: "Godo M",
          fontSize: "18px",
          fontWeight: 400,
        }}
      >
        {name}
      </span>
    </div>
  )
);
TagItem.displayName = "TagItem";

export { Tag2, TagItem };
