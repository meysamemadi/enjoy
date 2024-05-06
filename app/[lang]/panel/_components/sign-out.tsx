import { logout } from "@/actions/auth/logout";
import { signOut } from "@/auth";
import { Button } from "@/components/ui/button";

export function SignOut() {
  return (
    <form
      action={logout}
    >
      <Button className=" capitalize py-4 px-[48px] rounded-none border border-[#594636] bg-white text-[#594636] hover:border-[#BFBFBF] hover:text-[#BFBFBF] hover:bg-white">
        log out
      </Button>
    </form>
  );
}
