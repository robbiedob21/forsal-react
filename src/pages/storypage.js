import Block from "../components/block";
import Footer from "../components/footer";
import ImageBlock from "../components/image-block";

import sally from "../resources/images/sally.webp";

export default function StoryPage() {
  return (
    <>
      <Block className="col-span-12 grid gap-2 md:col-span-6">
        <h1 className="text-4xl font-bold">Our Story</h1>
        <p className="leading-loose">
          "I lost my sister to <span class="line-through">suicide</span> on the
          21st September 2019... We tried and tried but we couldn't save her
          from herself that feeling being in that emergency room and the doctors
          telling you that they 'do not think she will make it.' That feeling.
          That'll stay with me forever... The hard thing for me is that my
          sister struggled for a long time. She was amazing, beautiful, kind,
          caring, and a great sister. I feel like I let her down, I feel like I
          let her down as a brother. I was not there enough for her. I was not
          there for her when I should have been. I tried but not hard enough.
          That will forever haunt me, that pain will live with me for the rest
          of my life. That is one of the big problems in my eyes for the family
          and friends left behind. The "Why did I not see that coming?", "I
          should've done more", and the "If only…" are hard statements to
          swallow."
        </p>
        <p className="text-right text-zinc-400">Corey Choat</p>
      </Block>
      <ImageBlock className="col-span-12 md:col-span-6" src={sally} />
      <Footer currentPage="story" />
    </>
  );
}
