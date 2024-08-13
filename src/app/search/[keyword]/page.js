import AnimeList from "@/app/components/AnimeList";
import Header from "@/app/components/AnimeList/Header";

const Page = async ({ params }) => {
  const { keyword } = params;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?q=${keyword}`
  );
  const searchAnime = await res.json();

  return (
    <>
      <section>
        <Header
          title={`Hasil pencarian ${keyword}....`}
          f
        />
        <AnimeList api={searchAnime} />
      </section>
    </>
  );
};

export default Page;
