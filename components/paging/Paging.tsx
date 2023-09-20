"use client";

import React, { ForwardedRef, forwardRef, HTMLProps } from "react";
import Style from "./Paging.module.css";
import {
  HiOutlineChevronDoubleLeft,
  HiOutlineChevronDoubleRight,
  HiOutlineChevronLeft,
  HiOutlineChevronRight,
} from "react-icons/hi";

const Paging = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={Style.paging} {...props} />
  ),
);
Paging.displayName = "Paging";

const PagingFirstButton = forwardRef<
  HTMLButtonElement,
  React.HTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => (
  <button ref={ref} className={Style.paging_prev} {...props}>
    <HiOutlineChevronDoubleLeft className={Style.paging_prev_icon} />
  </button>
));
PagingFirstButton.displayName = "PagingFirstButton";

const PagingPrevButton = forwardRef<
  HTMLButtonElement,
  React.HTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => (
  <button ref={ref} className={Style.paging_prev} {...props}>
    <HiOutlineChevronLeft className={Style.paging_prev_icon} />
  </button>
));
PagingPrevButton.displayName = "PagingPrevButton";

const PagingNumberWrap = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={Style.paging_number_wrap} {...props} />
));
PagingNumberWrap.displayName = "PagingNumberWrap";

// const PagingNumberButton = forwardRef<
//   HTMLButtonElement,
//   React.HTMLAttributes<HTMLButtonElement>
// >(({ className, ...props }, ref) => (
//   <button ref={ref} className={Style.paging_number} {...props} />
// ));
// PagingNumberButton.displayName = "PagingNumberButton";

const PagingNumberButton = forwardRef(
  (
    {
      active,
      className,
      ...props
    }: { active?: boolean } & HTMLProps<HTMLButtonElement>,
    ref: ForwardedRef<HTMLButtonElement>,
  ) => {
    return (
      <>
        {/* @ts-ignore */}
        <button
          className={`${Style.paging_number} ${
            active ? Style.paging_number_active : ""
          }`}
          ref={ref}
          {...props}
        />
      </>
    );
  },
);
PagingNumberButton.displayName = "PagingNumberButton";

const PagingNumberText = forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p ref={ref} className={Style.paging_number_text} {...props} />
));
PagingNumberText.displayName = "PagingNumberText";

const PagingNextButton = forwardRef<
  HTMLButtonElement,
  React.HTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => (
  <button ref={ref} className={Style.paging_number} {...props}>
    <HiOutlineChevronRight className={Style.paging_next_icon} />
  </button>
));
PagingNextButton.displayName = "PagingNextButton";

const PagingLastButton = forwardRef<
  HTMLButtonElement,
  React.HTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => (
  <button ref={ref} className={Style.paging_number} {...props}>
    <HiOutlineChevronDoubleRight className={Style.paging_next_icon} />
  </button>
));
PagingLastButton.displayName = "PagingLastButton";

export {
  Paging,
  PagingFirstButton,
  PagingPrevButton,
  PagingNumberWrap,
  PagingNumberButton,
  PagingNumberText,
  PagingNextButton,
  PagingLastButton,
};
