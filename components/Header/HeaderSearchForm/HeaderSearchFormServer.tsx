export const dynamic = "force/dynamic";
import { authOptions } from "@/lib/auth";
import HeaderSearchForm from "./HeaderSearchForm";
import { getServerSession } from "next-auth";

export default async function HeaderSearchFormServer() {
  const session = await getServerSession(authOptions);
  return <HeaderSearchForm session={session} />;
}
