"use client";

import IconButton from "../../common/IconButton/IconButton";
import styles from "./HeaderSearchForm.module.css";
import { useState, useEffect } from "react";

import { BsSun } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
import { LuMoon } from "react-icons/lu";
import { FiLogIn, FiLogOut } from "react-icons/fi";
import ThemeToggleButton from "../ThemeToggleButton/ThemeToggleButton";

import React from "react";
import Input from "../../common/BasicInput/Input";
import { useRef } from "react";
import { signOut, useSession } from "next-auth/react";
import { redirect } from "next/dist/server/api-utils";

const HeaderSearchForm = React.forwardRef<
  HTMLDivElement,
  // React.HTMLAttributes<HTMLDivElement>
  any
>(({ className, session, ...props }, ref) => {
  // 검색어
  const [searchValue, setSearchValue] = useState<string>("");

  // 테마 현재 상태 불러오기
  const [themeSelect, setThemeSelect] = useState<string>("light");

  // 테마 토글버튼 컴포넌트에 전달할 ref
  const toggleRef = useRef<any>(null);

  // 로그인 정보
  const [isLogin, setIsLogin] = useState<boolean | undefined>(undefined);

  useEffect(() => {
    console.log("session is ", session);
    if (session !== null && session !== undefined) {
      console.log("1");
      setIsLogin(true);
    } else {
      console.log("2");

      setIsLogin(false);
    }
  }, [session]);

  return (
    <div
      className={`${styles.header_search_form_box} ${className}`}
      ref={ref}
      {...props}
    >
      {/* 검색창 */}
      <div className={styles.input_form_box}>
        <Input
          style={{
            width: "256px",
            height: "100%",
            padding: "11px 15px",
            borderRadius: "10px 0 0 10px",

            border: "1px solid var(--main-line-contents-area-2)",
            borderRight: "none",
          }}
          placeholder="검색어를 입력하세요."
          title="검색어 입력"
          id="header_search_box"
          value={searchValue}
          onChange={(e) => setSearchValue(e.currentTarget.value.toString())}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              alert(`검색어 입력됨: ${searchValue}`);
            }
          }}
        />

        {/* 검색아이콘 */}
        <IconButton
          tabIndex={0}
          className={"icon_button"}
          title="헤더 통합검색 버튼"
          style={{
            width: "44px",
            height: "40px",
            backgroundColor: "var(--main-hover-accent)",
            borderRadius: "0 10px 10px 0",
          }}
          onClick={() => {
            alert(`검색어 입력됨: ${searchValue}`);
          }}
        >
          <AiOutlineSearch color="#ffffff" role="img" size={22} />
        </IconButton>
      </div>

      {/* 테마버튼박스 */}
      <div className={styles.theme_box}>
        <LuMoon
          style={{
            left: "8px",
            position: "absolute",
            zIndex: 2,
            color: "#ffffff",
          }}
          role="img"
          size={24}
        />
        <ThemeToggleButton
          ref={toggleRef}
          title={`클릭하여 ${
            themeSelect === "light" ? "화이트" : "다크"
          }테마로 변경`}
          checked={themeSelect === "light"}
          onChange={() => {
            if (themeSelect === "light") {
              setThemeSelect("dark");
            } else {
              setThemeSelect("light");
            }
          }}
        />
        <BsSun
          role="img"
          style={{
            position: "absolute",
            right: "10px",
            zIndex: 2,
            color: "#ffffff",
          }}
          size={22}
        />
      </div>

      {/* 로그인/로그아웃 박스 */}
      <div className={styles.login_box}>
        <IconButton
          tabIndex={0}
          title={isLogin ? "로그아웃 버튼" : "로그인 버튼"}
          onClick={() => {
            if (isLogin) {
              signOut();
            } else {
              // alert("로그인!");
            }
          }}
        >
          {isLogin ? (
            <div>
              <FiLogOut color="#1B95D6" size={24} role="img" />
              <p>LogOut</p>
            </div>
          ) : (
            <div>
              <FiLogIn color="#1B95D6" size={24} role="img" />
              <p>Login</p>
            </div>
          )}
        </IconButton>
      </div>
    </div>
  );
});
HeaderSearchForm.displayName = "HeaderSearchForm";
export default HeaderSearchForm;
