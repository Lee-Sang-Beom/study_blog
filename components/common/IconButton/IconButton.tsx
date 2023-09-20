"use client";
import React, { forwardRef } from "react";
import styles from "./IconButton.module.css";

interface IconButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  /**
   * @onClick : onKeyDown 이벤트 발생 시, onClick 이벤를 명시적으로 전달하기 위해 별도로 명시적 전달
   */
  onClick: () => void;

  /**
   * @tabIndex : 상황에 따라 버튼에 포커스가 잡히거나 잡히지 않도록 구성
   */
  tabIndex?: number;

  /**
   * @title : 웹접근성. 해당 Form 요소가 무슨 역할을 하는지에 대한 설명역할
   */
  title: string;

  /**
   * @style : 버튼에 적용할 인라인형 스타일
   */
  style?: React.CSSProperties;

  /**
   * @children : 출력할 버튼 역할의 아이콘
   */
  children: any;
}

const IconButton = React.forwardRef(
  (
    {
      onClick,
      tabIndex,
      title,
      style,
      children,
      className,
      ...props
    }: IconButtonProps,
    ref: React.Ref<HTMLButtonElement>
  ) => {
    return (
      <button
        ref={ref}
        className={`${styles.button} ${className}`}
        tabIndex={tabIndex !== undefined ? tabIndex : 0}
        title={title}
        aria-label={title}
        onClick={onClick}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();
            onClick();
          }
        }}
        style={style}
        {...props}
      >
        {children}
      </button>
    );
  }
);
IconButton.displayName = "IconButton";
export default IconButton;
