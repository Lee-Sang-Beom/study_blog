"use client";
import { Box, chakra, HStack, Tag } from "@chakra-ui/react";
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
import React from "react";

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
            <p> Q1 간단한 자기소개와 담당하고 계신 업무를 소개해주세요!</p>
            안녕하세요, 뱅크샐러드 Core Infra 팀의 DevOps Engineer 이재환
            입니다. AWS DMS를 사용하면서 겪었던 경험들을 기반으로 기본적인
            사용법에 대해 공유해보고자 합니다. RDS 비용 최적화 이야기 (서론)
            요즘 비용 최적화에 다들 관심많으시죠?저희 뱅크샐러드에서도 최근 비용
            최적화에 대해 관심을 갖고 많은 부분에 대한 최적화를 진행하고
            있습니다. 먹이감을 찾는 맹수들처럼 인프라 구석구석을 뒤지며 최적화
            할 수 있는 자원을 찾고 있었는데요. 그 때 눈에 들어온게 RDS
            클러스터들이었습니다.
          </div>

          <div>
            <p>Q2 코딩속도를 올리는 노동요가 있나요?</p>
            코딩은 논리를 구축해 나가는 과정이기 때문에, 주로 가사가 없는 음악을
            듣는 편입니다. 가사가 없는 음악은 소리와 멜로디로만 이루어져 있어서
            논리적인 사고와 집중력을 높여주고, 코딩할 때 문제 해결에 더 집중할
            수 있습니다.
          </div>
          <div>
            <p>
              Q3 What's on my desk?! 나를 가장 잘 표현하는 내 책상을 보여주세요!
            </p>
            책상 위에 항상 있는 아이템은 다이어리와 노트인데요. 🤭 저는 계획
            세우는 것을 좋아해, 일을 할 때에도 철저하게 마감일을 설정하는
            편입니다. 코드 설계, 개발, 테스트와 같은 여러 프로세스를 차근차근
            계획하여 일정을 지연시키지 않고, 꼼꼼하게 개발하려고 노력합니다.
            개발 과정에서 중복 변수 선언, 프로세스 이해 부족 등의 경우에 노트에
            도식화하여 이해, 설계하면 이해력이 높아져 업무의 능률 또한
            올라갑니다. 간단하지만 직접 도식화하는 방식으로 업무를 처리할 때,
            보다 효율적이고 원활한 작업이 가능합니다.
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
