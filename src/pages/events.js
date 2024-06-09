import EventBlock from "../components/event-block";
import Footer from "../components/footer";

import event from "../resources/images/corey-event.webp";
import runclub from "../resources/images/runclub.webp";

function Events() {
  return (
    <>
      <EventBlock
        imagesrc={event}
        date="Friday 4th October 2024"
        location="Whangamata"
        title="211km Run"
        locationHref="https://maps.app.goo.gl/ooQCumg8bDtRDDnu7"
        instaHref="https://www.instagram.com/runningforsal/"
      >
        <>
          In 2022, I ran for 10 hours. Last year, 2023, I ran for 18 hours and
          covered 151km in memory of those we lost to{" "}
          <span class="line-through">suicide</span> in 2022. This year, on the
          4th of October, in memory of my sister, and the 5 years that the world
          has been denied her beauty, I will be running 211km. Which is the
          equivalent of 5 consecutive marathons.
        </>
      </EventBlock>
      <EventBlock
        imagesrc={runclub}
        date="Every Wednesday at 7pm"
        location="The Collins Cafe, Greenhithe"
        title="FORSAL Run / Walk Club"
        locationHref="https://maps.app.goo.gl/35T3LV1UM3ad9Tkw5"
        instaHref="https://www.instagram.com/forsalrwc/"
      >
        <>
          FR/WC is a 3.5km run that was started to create community connection,
          meet new people, and encourage the FORSAL community to move their
          body. It's not about PBs or running long distances. It's all about
          having fun and taking positive steps for both our physical and mental
          health. Runners and walkers of all fitness levels are welcome.
        </>
      </EventBlock>
      <Footer currentPage="event" />
    </>
  );
}

export default Events;
