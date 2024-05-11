
import { Modal } from "@/components/ui/modal";
import { useCommentConfirmationModal } from "@/hooks/use-comment-confirmation-modal";
import Image from "next/image";
import imgBg from "@/public/img/auth/signup-confirmation.png";
import { CheckCircle } from "lucide-react";
import { RiCheckboxCircleLine } from "react-icons/ri";



const CommentConfirmationModal = () => {
  const commentModal = useCommentConfirmationModal();




  return (
    <Modal title="" isOpen={commentModal.isOpen} onClose={commentModal.onClose}>
      <div className="flex flex-col gap-4 justify-center items-center lg:flex-row my-6 lg:p-4 ">
        <div className="lg:max-w-[337px] order-2 lg:order-1 flex flex-col justify-center items-center gap-6">
          <RiCheckboxCircleLine className="w-[82px] h-[82px] text-[#A07E62]" />

          <p className=" leading-[26px] lg:leading-[32px] font-semibold text-sm lg:text-[24px] text-[#594636] text-center">
            Your comment has been submitted and will be displayed after approval
          </p>
        </div>
        <div className=" order-1 lg:order-2 ">
          <Image className="aspect-[1/1.6] " alt="" src={imgBg} />
        </div>
      </div>
    </Modal>
  );
};

export default CommentConfirmationModal;
