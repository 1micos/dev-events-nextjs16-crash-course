"use client";

import Link from "next/link";
import Image from "next/image";
import posthog from "posthog-js";
import { posthogAppLogger } from "@/lib/posthog-logger";

interface Props{
    title: string,
    image: string,
    slug: string,
    date: string,
    location: string,
    time: string,
}

const EventCard = ({title, image, slug, location,time, date }: Props
) => {
    const handleEventCardClick = () => {
        if (process.env.NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN && process.env.NEXT_PUBLIC_POSTHOG_HOST) {
            posthog.capture("event_card_selected", { event_slug: slug, event_date: date });
            posthogAppLogger.info("featured event selected", {
                event_slug: slug,
                event_date: date,
            });
        }
    };

    return (
        <Link href={`/events/{$slug}`} id="event-card" onClick={handleEventCardClick}>
           <Image src={image} alt={title} width={410} height={300} className="poster"/>
            <div className="flex flex-row gap-2">
                <Image src="/icons/pin.svg"  alt="loation"  width={14} height={14}/>
                <p>{location}</p>
            </div>
            <p className="title">{title}</p>
            <div className="datetime">

            </div>
        </Link>
    )
}
export default EventCard
