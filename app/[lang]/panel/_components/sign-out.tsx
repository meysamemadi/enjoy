"use client"
import { logout } from "@/actions/auth/logout";
// import { signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";
export function SignOut() {
  return (
    // <form action={logout}>
      <Button
        onClick={() => signOut({ redirect:true})}
        className=" capitalize py-4 px-[48px] rounded-none border border-[#594636] bg-white text-[#594636] hover:border-[#BFBFBF] hover:text-[#BFBFBF] hover:bg-white"
      >
        log out
      </Button>
    // </form>
  );
}
