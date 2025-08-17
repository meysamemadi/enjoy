import Title from '@/app/[lang]/components/title'
import React from 'react'
import {TouristSayCarousel} from './tourist-say-carousel';
import {getComments} from "@/actions/base";

export const TouristSay = async () => {

    const comments = await getComments();

    return (
        <div>
            <Title title="Tourists say"/>
            <div className="container">
                <div className="mt-6 md:mt-[40px]">
                    <TouristSayCarousel comments={comments.items}/>
                </div>
            </div>
        </div>
    );
}
