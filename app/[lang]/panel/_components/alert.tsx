import { Button } from "@/components/ui/button";

const UserAlert = () => {
    return (
      <div className="bg-[#F07148] mt-4 py-4 lg:py-[20px] lg:px-6 capitalize flex flex-col gap-6 lg:flex-row items-center justify-center lg:justify-between text-xs  font-medium leading-[noraml]">
        <span className="text-white opacity-80">
          you have not completed your profile yet!
        </span>
        <Button className="bg-[#F07148]  text-white border px-[48px] py-4 border-white rounded-none">
          Complete profile
        </Button>
      </div>
    );
}
 
export default UserAlert;