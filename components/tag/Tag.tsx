"use client";
import React from "react";
import { chakra, HStack } from "@chakra-ui/react";

const Tag = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <chakra.span
    ref={ref}
    display={"block"}
    padding={"5px 18px 5px 15px"}
    borderRadius={"15px"}
    border={"1px solid #00C7AF"}
    color={"#00C7AF"}
    {...props}
  />
));
Tag.displayName = "Tag";

export { Tag };
