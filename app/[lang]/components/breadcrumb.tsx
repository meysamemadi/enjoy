'use client'
import { cn } from "@/lib/utils";
import { ChevronRightIcon } from "lucide-react";
import React from "react";
import useDirection from "./direction";

interface BreadCrumbProps {
  pages: {
    name: string;
    href: string;
    current?: boolean;
  }[];
}

const BreadCrumb = ({
  pages,
}:BreadCrumbProps) => {


  const rightDirection = useDirection()
  return (
    <nav className="container mt-2 mb-6 flex" aria-label="Breadcrumb">
      <ol role="list" className="flex items-center space-x-2">
        <li>
          <div>
            <a href="#" className="text-gray-400 hover:text-gray-500">
              First page
              <span className="sr-only">Home</span>
            </a>
          </div>
        </li>
        {pages.map((page) => (
          <li key={page.name}>
            <div className="flex items-center">
              <ChevronRightIcon
                className={cn(
                  "flex-shrink-0  h-5 w-5 text-gray-400",
                  rightDirection && " rotate-180"
                )}
                aria-hidden="true"
              />
              <a
                href={page.href}
                className="ml-2 text-sm font-medium text-gray-500 hover:text-gray-700"
                aria-current={page.current ? "page" : undefined}
              >
                {page.name}
              </a>
            </div>
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default BreadCrumb;
