import Image from "next/image";
import Link from "next/link";
const AnimeList = ({ api }) => {
  return (
    <>
      <div className="grid md:grid-cols-4 sm:grid-cols-3 gap-4 grid-cols-2 px-4">
        {api.data.map((anime) => {
          return (
            <Link href={`/${anime.mal_id}`} className="cursor-pointer">
              <Image
                src={anime.images.webp.image_url}
                width={350}
                height={350}
                alt={anime.title}
                className="w-full object-cover max-h-64"
              />
              <h1 className="font-bold md:text-xl text-md p-4">{anime.title}</h1>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default AnimeList;
