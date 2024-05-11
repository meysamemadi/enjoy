"use client"

import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useParams } from "next/navigation";

export const UserButton = ({ dictionary }: any) => {
  const params = useParams();
  const lang = params.lang;
  const { data: session, update } = useSession();

  if (session?.user) {
    return (
      <>
        <Button
          variant={"outline"}
          className=" capitalize bg-inherit border-none text-[11px] text-[#594636] rounded-none"
          asChild
        >
          <Link href={`/${lang}/panel`}>dashboard</Link>
        </Button>
      </>
    );
  }

  return (
    <>
      <Button
        variant={"outline"}
        className=" bg-inherit border-none text-[11px] text-[#594636] rounded-none"
        asChild
      >
        <Link href={`/${lang}/auth/login`}>{dictionary.Login}</Link>
      </Button>
      <Button
        variant={"outline"}
        className=" bg-inherit border-[#A07E6280] text-[11px] text-[#594636] rounded-none"
        asChild
      >
        <Link href={`/${lang}/auth/signup`}>{dictionary.Register}</Link>
      </Button>
    </>
  );
};
