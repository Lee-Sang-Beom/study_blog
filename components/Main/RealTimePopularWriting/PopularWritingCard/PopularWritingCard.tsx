"use client";
import Image from "next/image";
import styles from "../RealTimePopularWriting.module.css";
import Link from "next/link";

interface PopularWrtitingCardProps {
  /**
   * @src : 이미지 경로
   */
  src: string;

  /**
   * @title : 포스트 타이틀
   */
  title: string;

  /**
   * @href : 링크
   */
  href: string;
}

export default function PopularWrtitingCard({ cardData }: any) {
  return (
    <Link href={cardData.href} prefetch={false}>
      <div className={styles.card_box}>
        <Image
          src={cardData.src}
          width={100}
          height={80}
          alt={"타이틀 이미지"}
        />
        <p>{cardData.title}</p>
      </div>
    </Link>
  );
}
