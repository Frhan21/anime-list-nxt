import Image from "next/image";
import Link from "next/link";
const AnimeList = ({ api }) => {
  return (
    <>
      <div className="grid grid-cols-2 gap-4 px-4 md:grid-cols-4 sm:grid-cols-3 ">
        {api.data?.map((anime, index) => {
          return (
            <Link
              href={`/anime/${anime.mal_id}`}
              className="transition-all cursor-pointer text-color-primary hover:text-color-accent"
              key={index}
            >
              <Image
                src={anime.images.webp.image_url}
                width={350}
                height={350}
                alt={anime.title}
                className="object-cover w-full max-h-64"
              />
              <h1 className="p-4 font-bold transition-all md:text-xl text-md">
                {anime.title}
              </h1>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default AnimeList;
