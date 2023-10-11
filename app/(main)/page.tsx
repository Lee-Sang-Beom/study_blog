import {
  Card,
  CardBody,
  CardBodyTop,
  CardContent,
  CardImage,
  CardMoreButton,
  CardTag,
  CardTagWrap,
  CardText,
  CardTitle,
} from "@/components/card/Card";
import {
  Paging,
  PagingFirstButton,
  PagingLastButton,
  PagingNextButton,
  PagingNumberButton,
  PagingNumberText,
  PagingNumberWrap,
  PagingPrevButton,
} from "@/components/paging/Paging";
import React from "react";

const tags = [
  { tagName: "react", tagId: 1 },
  { tagName: "자바스크립트", tagId: 2 },
  { tagName: "자바", tagId: 3 },
  { tagName: "파이썬", tagId: 4 },
  { tagName: "Golang", tagId: 5 },
  { tagName: "Rust", tagId: 6 },
  { tagName: "C#", tagId: 7 },
];
export default function Home() {
  return (
    <div style={{ position: "relative" }}>
      <div style={{ maxWidth: "1460px" }}>
        <Card>
          <CardImage />
          <CardBody>
            <CardBodyTop>
              <CardTagWrap>
                {tags.map(
                  (item: { tagName: string; tagId: number }, index: number) => {
                    return <CardTag key={index}>#{item.tagName}</CardTag>;
                  }
                )}
              </CardTagWrap>
              <CardMoreButton />
            </CardBodyTop>
            <CardContent>
              <CardTitle>여기는 타이틀영역 입니다.</CardTitle>
              <CardText>
                여기는 게시글 내용이 4줄 보여지는 영역입니다.여기는 게시글
                내용이 4줄 보여지는 영역입니다.여기는 게시글 내용이 4줄 보여지는
                영역입니다.여기는 게시글 내용이 4줄 보여지는 영역입니다.여기는
                게시글 내용이 4줄 보여지는 영역입니다.여기는 게시글 내용이 4줄
                보여지는 영역입니다.여기는 게시글 내용이 4줄 보여지는
                영역입니다.여기는 게시글 내용이 4줄 보여지는 영역입니다.여기는
                게시글 내용이 4줄 보여지는 영역입니다.여기는 게시글 내용이 4줄
                보여지는 영역입니다.여기는 게시글 내용이 4줄 보여지는
                영역입니다.여기는 게시글 내용이 4줄 보여지는 영역입니다.여기는
                게시글 내용이 4줄 보여지는 영역입니다.여기는 게시글 내용이 4줄
                보여지는 영역입니다.
              </CardText>
            </CardContent>
          </CardBody>
        </Card>
        {/* 구분선 */}
        <span
          style={{ height: "30px", width: "100%", display: "block" }}
        ></span>
        <Paging>
          <PagingFirstButton />
          <PagingPrevButton />
          <PagingNumberWrap>
            <PagingNumberButton active={true}>
              <PagingNumberText>1</PagingNumberText>
            </PagingNumberButton>
            <PagingNumberButton>
              <PagingNumberText>2</PagingNumberText>
            </PagingNumberButton>
            <PagingNumberButton>
              <PagingNumberText>3</PagingNumberText>
            </PagingNumberButton>
            <PagingNumberButton>
              <PagingNumberText>4</PagingNumberText>
            </PagingNumberButton>
            <PagingNumberButton>
              <PagingNumberText>5</PagingNumberText>
            </PagingNumberButton>
            <PagingNextButton />
            <PagingLastButton />
          </PagingNumberWrap>
        </Paging>
      </div>
    </div>
  );
}
