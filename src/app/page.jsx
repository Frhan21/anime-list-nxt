import AnimeList from "./components/AnimeList";
import Header from "./components/AnimeList/Header";
import { getAnimeResponse, getNestedAnimeResponses, reproduce } from "./libs/api";

const Page = async () => {
  const topAnime = await getAnimeResponse("top/anime", "limit=8");
  let recommendAnime = await getNestedAnimeResponses(
    "recommendations/anime",
    "entry"
  );
  recommendAnime = reproduce(recommendAnime, 4)

  return (
    <>
      {/* Paling populer */}
      <section>
        <Header
          title="Paling populer"
          linkTitle="Lihat selengkapnya"
          linkRef="/populer"
        />
        <AnimeList api={topAnime} />
      </section>
      <section>
        <Header title="Recommendation" />
        <AnimeList api={recommendAnime} />
      </section>
    </>
  );
};

export default Page;
