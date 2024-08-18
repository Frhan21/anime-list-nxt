import AnimeList from "./components/AnimeList";
import Header from "./components/AnimeList/Header";
import { getAnimeResponse } from "./libs/api";

const Page = async () => {
  // const res = await fetch(
  //   `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=8`
  // );
  // const topAnime = await res.json();

  const topAnime = await getAnimeResponse("top/anime", 'limit=8');


  return (
    <>
    {/* Paling populer */}
      <section>
        <Header
          title="Paling populer"
          linkTitle="Lihat selengkapnya"
          linkRef="/populer"
        />
        <AnimeList api={topAnime}/>
      </section>
    </>
  );
};

export default Page;
