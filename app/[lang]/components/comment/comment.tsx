import React from 'react'
import { Messina_Serif } from '../../font';
import { cn } from '@/lib/utils';
import { CommentForm } from './form';

export function Comment() {
  return (
    <div className=" container my-6 md:my-8">
      <div className=" relative mt-6 md:mt-8 py-2 border-b border-[#A07E624D]/30">
        <span
          className={cn(
            "text-lg md:text-[32px] font-semibold text-[#A07E62] capitalize",
            Messina_Serif.className
          )}
        >
          Your comment
        </span>
      </div>
      <div className="mt-6 lg:mt-[48px] bg-white p-4 lg:p-[40px] ">
            <CommentForm />
      </div>
    </div>
  );
}
