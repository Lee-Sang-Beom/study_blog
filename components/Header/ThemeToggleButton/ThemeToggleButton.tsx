"use client";

import React, { useRef, useState } from "react";
import styled from "./ThemeToggleButton.module.css";

interface ToggleButtonProps {
  /**
   * @checked : 현재 선택된 상태를 보여주는지에 대한 상태값
   */
  checked: boolean;

  /**
   *
   * @onChange : 클릭 이벤트
   */
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;

  /**
   * @title : 웹접근성. 해당 Form 요소가 무슨 역할을 하는지에 대한 설명역할
   */
  title: string;

  /**
   * @tabIndex : 상황에 따라 버튼에 포커스가 잡히거나 잡히지 않도록 구성
   */
  tabIndex?: number;

  /**
   * @style : 토글버튼에 적용할 인라인형 스타일
   */
  style?: React.CSSProperties;
}

const ThemeToggleButton = React.forwardRef(
  (
    {
      checked,
      onChange,
      title,
      tabIndex,
      style,
      children,
      className,
      ...props
    }: ToggleButtonProps & React.HTMLProps<HTMLInputElement>,
    ref: React.Ref<HTMLInputElement>
  ) => {
    const [isBtnFocus, setIsBtnFocus] = useState<boolean>(false);

    return (
      <label
        className={`${styled.switch} ${isBtnFocus ? styled.focus_input : ""}`}
      >
        <span className="screen_out">{title ? title : "토글 버튼"}</span>
        <input
          type="checkbox"
          tabIndex={tabIndex !== undefined ? tabIndex : 0}
          defaultChecked={checked}
          className={className}
          ref={ref}
          {...props}
          onChange={onChange}
          onKeyDown={(e: React.KeyboardEvent) => {
            if (e.key === "Enter") {
              //@ts-ignore
              if (ref !== null && ref.current) {
                //@ts-ignore
                ref.current.click();
              }
            }
          }}
          onFocus={() => {
            setIsBtnFocus(true);
          }}
          onBlur={() => {
            setIsBtnFocus(false);
          }}
        />
        <span className={`${styled.slider}`}></span>
      </label>
    );
  }
);
ThemeToggleButton.displayName = "ThemeToggleButton";
export default ThemeToggleButton;
