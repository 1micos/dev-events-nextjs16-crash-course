'use client'


import Image from "next/image";
import posthog from "posthog-js";
import { posthogAppLogger } from "@/lib/posthog-logger";

const ExploreBtn = () => {
    const handleExploreClick = () => {
        if (process.env.NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN && process.env.NEXT_PUBLIC_POSTHOG_HOST) {
            posthog.capture("events_explore_clicked", { source: "hero" });
            posthogAppLogger.info("event exploration requested", { source: "hero" });
        }
    };

    return (
        <button type="button" id="explore-btn" className="mt-7 mx-auto" onClick={handleExploreClick}>
            <a href="#events">
                Explore Events
                <Image src="/icons/arrow-down.svg" alt="arrow-down"  width={24} height={24} />
            </a>
        </button>
    )
}
export default ExploreBtn
