"use client";


import { useEffect, useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import SignupConfirmationModal from "@/components/modals/signup-confirmation-modal";
import CommentConfirmationModal from "@/components/modals/comment-confirmation-modal";

export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);


  useEffect(() => {
    setIsMounted(true);
  }, []);

 

  if (!isMounted) {
    return null;
  }

 

  return (
    <>
      <SignupConfirmationModal />

      <CommentConfirmationModal />
  
      <Toaster />
  

    </>
  );
};
