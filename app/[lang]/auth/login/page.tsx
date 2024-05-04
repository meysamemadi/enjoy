import Image from "next/image";
import mountains from "@/public/img/auth/login-bg.png";
import { LoginForm } from "./_components/form";
import { cn } from "@/lib/utils";
import { Messina_Serif } from "../../font";
import Logo from "./_components/logo";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import LoginWithGoogle from "./_components/login-with-google";

function LoginPage() {



  return (
    <div className="relative flex flex-col md:flex-row h-screen ">
      <div className=" relative container  order-2 md:order-1  w-full h-screen lg:w-1/2 bg-[#FAF5EF]">
        <div className=" max-w-[352px] mx-auto ">
          <div className="bg-white lg:bg-inherit p-4   relative   -mt-[150px] md:mt-auto  w-full md:h-full  ">
            <div className="flex flex-col mx-auto ">
              <Logo />

              <h3
                className={cn(
                  " self-center md:self-start text-2xl text-[#A07E62] font-semibold lg:text-[40px]",
                  Messina_Serif.className
                )}
              >
                Login
              </h3>
              <LoginForm />

              <div className="mt-6 flex flex-col items-center justify-center gap-6">
                <Link
                  className="text-[#A07E62] font-medium underline underline-offset-[4px] text-[13px]"
                  href={"/"}
                >
                  I forgot my password
                </Link>

                <div className="relative  w-full">
                  <div className="h-4 px-1 capitalize absolute bg-white lg:bg-[#FAF5EF] -top-2 left-1/2 -translate-x-1/2 font-semibold text-[10px] text-[#A07E62] leading-[16px]">
                    other login
                  </div>
                  <Separator />
                </div>

                <LoginWithGoogle />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-1/2   order-1 md:order-2 min-h-[370px] relative pt-[84px] md:pt-[114px]">
        <div className=" absolute lg:hidden top-4 left-1/2 -translate-x-1/2 ">
          <Link href={"/"}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="41"
              height="26"
              viewBox="0 0 41 26"
              fill="none"
            >
              <path
                d="M0.5 11.4034C0.5 6.20151 4.07182 1.79484 8.92824 1.03279C12.7194 0.436397 15.7899 1.82798 18.2651 4.84306C18.4531 5.07499 18.4531 5.20753 18.2651 5.43946C16.5732 7.59309 14.8813 9.74672 13.1894 11.8672C12.1867 13.1263 10.5262 13.5239 9.1789 12.8281C8.42694 12.4636 7.98829 11.8672 7.8003 11.0058C7.76897 10.807 7.70631 10.6413 8.01962 10.7407C8.4896 10.8732 8.83425 10.6082 9.14757 10.2768C9.68021 9.71359 10.1189 9.05093 10.5888 8.45454C11.2468 7.62622 11.9048 6.76477 12.5627 5.96958C12.7821 5.70452 12.7194 5.63825 12.4374 5.53885C9.05357 4.24667 5.2311 6.56597 4.63579 10.3431C3.97783 14.2859 6.86035 17.8311 10.6515 17.7317C12.0301 17.6986 13.252 17.1353 14.3486 16.2076C15.5706 15.1142 16.5419 13.8221 17.4505 12.4636C19.0484 10.1112 20.615 7.72562 22.2756 5.40632C24.1555 2.7557 26.5994 1.19845 29.7012 0.900257C32.5837 0.635194 35.1529 1.59605 37.2835 3.68341C39.5707 5.93645 40.6673 8.75274 40.4793 11.9998C40.166 17.4004 36.4062 21.045 32.2077 21.8071C30.1712 22.1715 28.2286 21.9065 26.3487 21.0119C26.0667 20.8794 25.9101 20.9456 25.7221 21.1775C25.0328 22.1053 24.3121 22.9999 23.5915 23.8944C22.5889 25.1866 20.8343 25.518 19.487 24.6896C18.8604 24.3252 18.4531 23.7288 18.2964 22.9999C18.2338 22.8011 18.2024 22.6354 18.5471 22.7017C19.0484 22.8342 19.4244 22.5029 19.7377 22.1053C21.5236 19.8191 23.3095 17.5661 25.0954 15.2799C25.3148 15.0148 25.4401 14.9486 25.6907 15.2136C26.0667 15.5781 26.4427 15.9094 26.85 16.2408C28.7612 17.8974 30.8918 18.1293 33.085 17.0359C35.3096 15.9094 36.4689 13.9546 36.4375 11.3371C36.4062 8.68647 35.1843 6.73164 32.897 5.70452C30.6412 4.6774 28.5106 5.07499 26.6307 6.76477C25.4714 7.79189 24.6568 9.1172 23.8108 10.4094C22.5889 12.298 21.4609 14.2528 20.1137 16.0088C19.1424 17.301 18.0771 18.5601 16.8552 19.5872C13.8473 22.0721 10.4635 22.7348 6.89168 21.2438C3.22586 19.7528 1.12664 16.8371 0.562664 12.7287C0.5 12.298 0.5 11.8672 0.5 11.4034Z"
                fill="white"
              />
            </svg>
          </Link>
        </div>
        <Image
          alt="login"
          src={mountains}
          placeholder="blur"
          quality={100}
          fill
          sizes="100vw"
          style={{
            objectFit: "cover",
            backgroundSize: "cover",
            zIndex: -1,
          }}
        />
      </div>
    </div>
  );
}

export default LoginPage