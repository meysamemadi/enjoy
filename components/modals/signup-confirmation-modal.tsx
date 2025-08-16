
import { Modal } from "@/components/ui/modal";
import { useSignupConfirmationModal } from "@/hooks/use-signup-confirmation-modal";
import { SignupConfirmation } from "@/app/[lang]/auth/signup/_components/signup-confirmation";
import Image from "next/image";
import imgBg from "@/public/img/auth/signup-confirmation.png"


type Props = {};

const SignupConfirmationModal = (props: Props) => {
  const loginModal = useSignupConfirmationModal();




  return (
    <Modal title="" isOpen={loginModal.isOpen} onClose={loginModal.onClose}>
      <div className="flex flex-col gap-4 justify-center items-center lg:flex-row my-6 lg:p-4 ">
        <div className="lg:max-w-[337px] order-2 lg:order-1">
          <SignupConfirmation />
        </div>
        <div className=" order-1 lg:order-2 ">
          <Image className="aspect-[1/1.6] " alt="" src={imgBg} />
        </div>
      </div>
    </Modal>
  );
};

export default SignupConfirmationModal;
