import Title from '@/app/[lang]/components/title'
import React from 'react'
import { BlogItem } from './blog-item';
import b1 from "@/public/img/base/b1.jpg"

export const LastBlogPosts = () => {
  return (
    <div className="mt-[48px] md:mt-[80px]">
      <Title title="Last Blog posts" link="" linkeText="see all" />
      <div className=" mt-4 md:mt-[48px] container">
        <div className="grid grid-cols-2 gap-2 md:gap-6">
          <BlogItem
            id={1}
            title="Qeshm, the bride of the Persian Gulf"
            description="Business tourism or business travel is a more limited and focused subset of regular tourism. During business tourism (traveling), individuals."
            image={b1.src}
          />

          <BlogItem
            id={1}
            title="Qeshm, the bride of the Persian Gulf"
            description="Business tourism or business travel is a more limited and focused subset of regular tourism. During business tourism (traveling), individuals."
            image={b1.src}
          />
        </div>
      </div>
    </div>
  );
}
