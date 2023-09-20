"use client";
import { Box, chakra, HStack } from "@chakra-ui/react";
import { BsEye } from "react-icons/bs";
import { IoShareSocialOutline } from "react-icons/io5";
import Image from "next/image";
import { FiMessageCircle } from "react-icons/fi";
import {
  DetailB,
  DetailBContent,
  DetailBFooter,
  DetailBHeader,
  DetailBHeaderDescription,
  DetailBHeaderTitle,
} from "@/components/detailB/Detail-B";
import { Tag } from "@/components/tag/Tag";

const DetailPage = () => {
  return (
    <>
      <DetailB>
        <DetailBHeader>
          <DetailBHeaderTitle>
            사용법과 함께 작성해본 좌충우돌 AWS DMS 사용기 _feat.RDS 통합 이야기
          </DetailBHeaderTitle>
          <DetailBHeaderDescription>
            <span>2023-08-30</span>
            <chakra.div display={"flex"} alignItems={"center"} gap={"10px"}>
              <HStack gap={"5px"} alignItems={"center"}>
                <BsEye style={{ width: "18px", height: "18px" }} />
                <chakra.span
                  color={"#555"}
                  fontFamily={"Godo M"}
                  fontSize={"18px"}
                  fontWeight={"400"}
                >
                  108902
                </chakra.span>
              </HStack>
              <chakra.div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="2"
                  height="16"
                  viewBox="0 0 2 16"
                  fill="none"
                >
                  <path
                    d="M1 1L0.999999 15"
                    stroke="#C4CDD5"
                    stroke-linecap="round"
                  />
                </svg>
              </chakra.div>
              <chakra.div>
                <IoShareSocialOutline
                  style={{ width: "18px", height: "18px" }}
                />
              </chakra.div>
            </chakra.div>
          </DetailBHeaderDescription>
        </DetailBHeader>
        <DetailBContent>
          <Image
            src={"https://picsum.photos/860/577"}
            width={860}
            height={577}
            alt={""}
          />
          <div>
            안녕하세요, 뱅크샐러드 Core Infra 팀의 DevOps Engineer 이재환
            입니다. AWS DMS를 사용하면서 겪었던 경험들을 기반으로 기본적인
            사용법에 대해 공유해보고자 합니다. RDS 비용 최적화 이야기 (서론)
            요즘 비용 최적화에 다들 관심많으시죠?저희 뱅크샐러드에서도 최근 비용
            최적화에 대해 관심을 갖고 많은 부분에 대한 최적화를 진행하고
            있습니다. 먹이감을 찾는 맹수들처럼 인프라 구석구석을 뒤지며 최적화
            할 수 있는 자원을 찾고 있었는데요. 그 때 눈에 들어온게 RDS
            클러스터들이었습니다.
          </div>
        </DetailBContent>
        <DetailBFooter>
          <HStack spacing={"15px"}>
            <Tag>#AWS</Tag>
            <Tag>#DBS</Tag>
            <Tag>#React</Tag>
          </HStack>
          <HStack spacing={"10px"} px={"20px"} py={"10px"}>
            <FiMessageCircle />
            <chakra.span
              color={"#555"}
              textAlign={"center"}
              fontFamily={"Godo M"}
              fontSize={"18px"}
              fontWeight={"400"}
            >
              목록으로
            </chakra.span>
          </HStack>
        </DetailBFooter>
      </DetailB>
    </>
  );
};
export default DetailPage;
