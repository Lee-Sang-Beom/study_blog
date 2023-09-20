import {
  Card,
  CardBody,
  CardContent,
  CardImage,
  CardTag,
  CardTitle,
} from "@/components/card/Card";

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
    <div>
      <h1>메인 페이지</h1>
      <Card>
        <CardImage />
        <CardBody>
          <CardTag>
            <ul
              style={{
                display: "flex",
                gap: "18px",
              }}
            >
              {tags.map((tag: any) => (
                <li
                  key={tag.tagId}
                  style={{
                    color: "var(--mint, #00C7AF)",
                    fontFamily: "Godo M",
                    fontSize: "18px",
                    fontStyle: "normal",
                    fontWeight: 400,
                    lineHeight: "normal",
                  }}
                >
                  #{tag.tagName}
                </li>
              ))}
            </ul>
            <button>+ more</button>
          </CardTag>
          <CardTitle>안녕하세요 만나서 반갑니다.</CardTitle>
          <CardContent style={{ width: "1040px" }}>
            여기는 게시글 내용이 4줄 보여지는 영역입니다.여기는 게시글 내용이
            4줄 보여지는 영역입니다.여기는 게시글 내용이 4줄 보여지는
            영역입니다.여기는 게시글 내용이 4줄 보여지는 영역입니다.여기는
            게시글 내용이 4줄 보여지는 영역입니다.여기는 게시글 내용이 4줄
            보여지는 영역입니다.여기는 게시글 내용이 4줄 보여지는
            영역입니다.여기는 게시글 내용이 4줄 보여지는 영역입니다.여기는
            게시글 내용이 4줄 보여지는 영역입니다.여기는 게시글 내용이 4줄
            보여지는 영역입니다.여기는 게시글 내용이 4줄 보여지는
            영역입니다.여기는 게시글 내용이 4줄 보여지는 영역입니다.여기는
            게시글 내용이 4줄 보여지는 영역입니다.여기는 게시글 내용이 4줄
            보여지는 영역입니다.
          </CardContent>
        </CardBody>
      </Card>
    </div>
  );
}
