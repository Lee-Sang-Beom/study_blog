"use client";

import React from "react";
import { Box, chakra, HStack } from "@chakra-ui/react";
import { BsEye } from "react-icons/bs";
import { IoShareSocialOutline } from "react-icons/io5";
const DetailB = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <chakra.div
    ref={ref}
    display={"flex"}
    flexDirection={"column"}
    alignItems={"flex-start"}
    gap={"30px"}
    maxW={"860px"}
    margin={"0 auto"}
    {...props}
  />
));
DetailB.displayName = "DetailB";

const DetailBHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <chakra.div
    display={"flex"}
    flexDirection={"column"}
    gap={"30px"}
    {...props}
  />
));
DetailBHeader.displayName = "DetailBHeader";

const DetailBHeaderTitle = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <chakra.h3
    ref={ref}
    color={"#040404"}
    fontFamily={"Godo B"}
    fontSize={"38px"}
    fontWeight={"400"}
    lineHeight={"150%"}
    {...props}
  />
));
DetailBHeaderTitle.displayName = "DetailBHeaderTitle";

const DetailBHeaderDescription = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <chakra.div
    ref={ref}
    display={"flex"}
    justifyContent={"space-between"}
    alignItems={"center"}
    pb={"12px"}
    borderBottom={"1px solid #C4CDD5"}
    {...props}
  />
));
DetailBHeaderDescription.displayName = "DetailBHeaderDescription";

const DetailBContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <chakra.div
    ref={ref}
    display={"flex"}
    flexDirection={"column"}
    gap={"30px"}
    {...props}
  />
));
DetailBContent.displayName = "DetailBContent";

const DetailBFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <HStack
    ref={ref}
    w={"100%"}
    justifyContent={"space-between"}
    alignItems={"center"}
    {...props}
  />
));
DetailBFooter.displayName = "DetailBFooter";

export {
  DetailB,
  DetailBHeader,
  DetailBHeaderTitle,
  DetailBHeaderDescription,
  DetailBContent,
  DetailBFooter,
};
