"use client";

import React, { forwardRef } from "react";
import Style from "./Card.module.css";
import { HiOutlinePlusSm } from "react-icons/hi";

const Card = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={Style.card} {...props} />
  )
);
Card.displayName = "Card";

const CardImage = forwardRef<
  HTMLImageElement,
  React.HTMLAttributes<HTMLImageElement>
>(({ className, ...props }, ref) => (
  <img
    src={"https://picsum.photos/240/200"}
    alt={"강아지"}
    width={240}
    height={200}
    className={Style.card_image}
    ref={ref}
    {...props}
  />
));
CardImage.displayName = "CardImage";

const CardBody = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={Style.card_body} {...props} />
));
CardBody.displayName = "CardBody";

const CardBodyTop = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div className={Style.card_body_top} ref={ref} {...props} />
));
CardBodyTop.displayName = "CardBodyTop";

const CardTagWrap = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={Style.card_tag_wrap} {...props} />
));
CardTagWrap.displayName = "CardTagWrap";

const CardTag = forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement>
>(({ className, ...props }, ref) => (
  <span ref={ref} className={Style.card_tag} {...props} />
));
CardTag.displayName = "CardTag";

const CardMoreButton = forwardRef<
  HTMLButtonElement,
  React.HTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => (
  <button ref={ref} className={Style.card_more_button} {...props}>
    <HiOutlinePlusSm size={24} color={"white"} />
    <span>More</span>
  </button>
));
CardMoreButton.displayName = "CardMoreButton";

const CardContent = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={Style.card_content} {...props} />
));
CardContent.displayName = "CardContent";

const CardTitle = forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <div className={Style.card_title_wrap}>
    <p ref={ref} className={Style.card_title} {...props} />
  </div>
));
CardTitle.displayName = "CardTitle";

const CardText = forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <div className={Style.card_text_wrap}>
    <p ref={ref} className={Style.card_text} {...props} />
  </div>
));
CardText.displayName = "CardText";

export {
  Card,
  CardImage,
  CardBody,
  CardBodyTop,
  CardTagWrap,
  CardTag,
  CardMoreButton,
  CardContent,
  CardTitle,
  CardText,
};
