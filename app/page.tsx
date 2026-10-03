import Explorebtn from "@/components/explorebtn";
import EventCard from "@/components/eventCard";
import events from "@/lib/constants";

const Page = () => {
    return (
        <section>
            <h1 className="text-center">The Hub for Every Dev <br /> Event You Can't Miss</h1>
            <p className="text-center mt-5">Hackathons, Meetups, and Conferences, all in one place. </p>

            <Explorebtn/>

            <div>
                <h3>Featured Events</h3>
                <ul>
                    {events.map((event) => (
                        <li key={event.title} ><EventCard {...event}/></li>
                    ))}
                </ul>
            </div>
        </section>

    )
}
export default Page
