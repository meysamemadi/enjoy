import React from "react";
import UserAlert from "./_components/alert";
import { Profile } from "./_components/profile";
import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";
import { Comment } from "../components/comment/comment";

const PanelPage = async () => {
  const session = await auth();

  return (
    <div className=" container">
      <UserAlert />
      <Profile />
      <div className="container">
      <Comment />
      </div>
    </div>
  );
};

export default PanelPage;
