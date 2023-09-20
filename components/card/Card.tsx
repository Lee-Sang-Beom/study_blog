"use client";

import React from "react";

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    style={{
      display: "flex",
      width: "100%",
      alignItems: "flex-start",
      gap: "40px",
    }}
    {...props}
  />
));
Card.displayName = "Card";

const CardBody = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      gap: "12px",
      width: "100%",
    }}
    {...props}
  />
));
CardBody.displayName = "CardBody";

const CardImage = React.forwardRef<
  HTMLImageElement,
  React.HTMLAttributes<HTMLImageElement>
>(({ className, ...props }, ref) => (
  <img
    ref={ref}
    src={"https://picsum.photos/240/200"}
    style={{
      borderRadius: "10px",
    }}
    alt={"강아지"}
    {...props}
  />
));
CardImage.displayName = "CardImage";

const CardTag = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={"cardTag"}
    style={{
      display: "flex",
      justifyContent: "space-between",
      width: "100%",
    }}
    {...props}
  />
));
CardTag.displayName = "CardTag";

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    style={{
      color: "#040404",
      fontFamily: "Godo B",
      fontSize: "32px",
      fontStyle: "normal",
      fontWeight: 400,
      lineHeight: "normal",
    }}
    {...props}
  />
));
CardTitle.displayName = "CardTitle";

const CardContent = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    style={{
      width: "100%",
      color: "#555",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
      fontFamily: "Pretendard",
      fontSize: "20px",
      fontStyle: "normal",
      fontWeight: 400,
      lineHeight: "32px" /* 32px */,
    }}
    {...props}
  />
));
CardContent.displayName = "CardContent";

export { Card, CardBody, CardImage, CardTag, CardTitle, CardContent };
/*const Card = ({ children, ...props }: any) => {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        alignItems: "flex-start",
        gap: "40px",
      }}
    >
      {children}
    </div>
  );
};
export default Card;*/
