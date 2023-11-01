"use client";

import { useSession } from "next-auth/react";
import { useEffect } from "react";

export default function Test() {
  const session = useSession();

  useEffect(() => {
    console.log("session is ", session);
  }, [session]);
  return <>jel</>;
}
