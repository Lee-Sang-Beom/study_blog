"use client";
import React, { Ref, forwardRef, useEffect, useState } from "react";
import "./Input.css";

interface InputProps {
  /**
   * @title : 웹접근성. 해당 Form 요소가 무슨 역할을 하는지에 대한 설명역할
   */
  title: string;

  /**
   * @id : 웹접근성. 해당 Form 요소를 구분하기 위한 기본적인 식별자
   */
  id: string;
}

const Input = (
  {
    title,
    id,
    className,
    ...props
  }: InputProps & React.HTMLProps<HTMLInputElement>,
  ref: Ref<HTMLInputElement>
) => {
  return (
    <label htmlFor={id}>
      <span className="screen_out">{title}</span>
      <input id={id} ref={ref} className={className} {...props} />
    </label>
  );
};
Input.displayName = "Input";
export default forwardRef(Input);
