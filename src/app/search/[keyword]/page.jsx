import AnimeList from "@/app/components/AnimeList";
import Header from "@/app/components/AnimeList/Header";
import { getAnimeResponse } from "@/app/libs/api";

const Page = async ({ params }) => {
  const { keyword } = params;
  const decodedKeyword = decodeURI(keyword)
  const searchAnime = await getAnimeResponse('anime',`q=${decodedKeyword}`)

  return (
    <>
      <section>
        <Header
          title={`Hasil pencarian ${decodedKeyword}....`}
          linkRef="/"
        />
        <AnimeList api={searchAnime} />
      </section>
    </>
  );
};

export default Page;
