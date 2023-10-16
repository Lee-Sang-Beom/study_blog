"use client";
import Link from "next/link";
import styles from "./TagCollection.module.scss";

import React, { useState } from "react";
import { Button, Tag, transition } from "@chakra-ui/react";
import { TagItem, TagList } from "@/components/common/TagList/TagList";

const TagCollection = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const [isScroll, setIsScroll] = useState<boolean>(false);
  const tagProperty = [
    {
      seq: 1,
      name: "tag1",
    },
    {
      seq: 2,
      name: "tag2",
    },
    {
      seq: 3,
      name: "tag3",
    },
    {
      seq: 4,
      name: "tag4",
    },
    {
      seq: 5,

      name: "tag5",
    },
    {
      seq: 6,
      name: "tag6",
    },
    {
      seq: 7,
      name: "tag7",
    },
    {
      seq: 8,
      name: "tag8",
    },
    {
      seq: 9,
      name: "tag9",
    },
    {
      seq: 10,
      name: "tag10",
    },
    {
      seq: 11,
      name: "tag11",
    },
    {
      seq: 12,
      name: "tag12",
    },
    {
      seq: 13,
      name: "tag13",
    },
    {
      seq: 14,
      name: "tag14",
    },
    {
      seq: 15,
      name: "LongNameTagTestLongNameTagTestLongNameTagTest",
    },
  ];

  return (
    <div className={`${styles.tag_box} ${className}`} ref={ref} {...props}>
      <p className={styles.title}># 태그</p>
      <div className={styles.tag_wrap}>
        <TagList className={isScroll ? styles.scroll_tag_box : styles.tag_box}>
          {tagProperty.map((tag, index) => {
            if (isScroll) {
              return (
                <Link
                  href="/"
                  style={{ display: "inline-block" }}
                  aria-label={tag.name}
                >
                  <TagItem key={tag.seq} name={tag.name} />
                </Link>
              );
            } else {
              if (index < 10) {
                return (
                  <Link
                    href="/"
                    style={{ display: "inline-block" }}
                    aria-label={tag.name}
                  >
                    <TagItem key={tag.seq} name={tag.name} />
                  </Link>
                );
              }
            }
          })}
        </TagList>
      </div>
      <button
        onClick={() => {
          setIsScroll((prev) => !prev);
          window.scrollTo(0, 0);
        }}
      >
        <span>...</span>
      </button>
    </div>
  );
});

export default TagCollection;
