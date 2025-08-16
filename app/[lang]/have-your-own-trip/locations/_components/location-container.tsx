import React from 'react'
import { LocationItem } from './location-item'
import { Locale } from '@/i18n-config';
import { getLocations } from '@/actions/have-your-own-trip';

export const LocationContainer = async ({ lang, searchParams }: { lang: Locale, searchParams: { [key: string]: string | string[] | undefined } }) => {

    const locations = await getLocations(lang, searchParams);
    return (
        <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>

            {locations.items.map((location: any) => <LocationItem
                key={location.id}
                id={location.id}
                title={location.title}
                image={location.image}
            />)}

        </div>
    )
}
