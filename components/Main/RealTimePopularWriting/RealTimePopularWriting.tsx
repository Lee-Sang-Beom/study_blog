"use client";

import PopularWrtitingCard from "./PopularWritingCard/PopularWritingCard";
import styles from "./RealTimePopularWriting.module.css";
export default function RealTimePopularWriting() {
  const popluarProperty = [
    {
      src: "/img/icon-card-img1.svg",
      title:
        "This component is based on the a element and supports common margin props.",
      href: "/",
    },
    {
      src: "/img/icon-card-img2.svg",
      title:
        "A modal confirmation dialog that interrupts the user and expects a response. This component is based on the a element and supports common margin props.",
      href: "/",
    },
    {
      src: "/img/icon-card-img3.svg",
      title: "컴포넌트",
      href: "/",
    },
  ];
  return (
    <div className={styles.writing_box}>
      <p className={styles.title}>실시간 인기글</p>
      <div className={styles.popluar_card_wrap}>
        {popluarProperty.map((property, index) => {
          return <PopularWrtitingCard cardData={property} />;
        })}
      </div>
    </div>
  );
}
