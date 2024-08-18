import VideoPlayer from "@/app/components/AnimeList/VideoPlayer";
import { getAnimeResponse } from "@/app/libs/api";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Page = async ({ params: { id } }) => {
  const { data } = await getAnimeResponse(`anime/${id}`);
  return (
    <>
      <div className="flex justify-between px-4 pt-4 mx-auto">
        <h3 className="text-2xl font-bold text-color-primary">
          {data.title} - {data.year}
        </h3>
        <Link href="/" className="px-4 py-2 transition-all duration-300 ease-in-out border-2 rounded-md bg-color-accent text-color-dark border-color-accent hover:bg-color-dark hover:text-color-accent ">Kembali ke Home</Link>
      </div>
      <div className="flex gap-4 px-4 pt-4 overflow-x-auto">
        <div className="px-4 py-2 text-center transition-all duration-300 ease-in-out border-2 rounded-sm cursor-pointer text-color-dark border-color-accent bg-color-accent hover:bg-color-dark hover:text-color-accent">
            <h1 className="font-bold">Peringkat</h1>
            <p>{data.rank}</p>
        </div>
        <div className="px-4 py-2 text-center transition-all duration-300 ease-in-out border-2 rounded-sm cursor-pointer text-color-dark border-color-accent bg-color-accent hover:bg-color-dark hover:text-color-accent">
            <h1 className="font-bold">Score</h1>
            <p>{data.score}</p>
        </div>
        <div className="px-4 py-2 text-center transition-all duration-300 ease-in-out border-2 rounded-sm cursor-pointer text-color-dark border-color-accent bg-color-accent hover:bg-color-dark hover:text-color-accent">
            <h1 className="font-bold">Anggota</h1>
            <p>{data.members}</p>
        </div>
        <div className="px-4 py-2 text-center transition-all duration-300 ease-in-out border-2 rounded-sm cursor-pointer text-color-dark border-color-accent bg-color-accent hover:bg-color-dark hover:text-color-accent">
            <h1 className="font-bold">Episode</h1>
            <p>{data.episodes}</p>
        </div>
      </div>
      <div className="flex flex-wrap gap-2 px-4 pt-4 sm:flex-nowrap text-color-primary">
        <Image
          src={data.images.webp.image_url}
          alt={data.images.jpg.image_url}
          width={250}
          height={250}
        className="object-cover w-full rounded"
        />
        <p className="py-2 text-xl text-justify md:px-4">{data.synopsis}</p>
      </div>
      <div>
        <VideoPlayer youtubeId={data.trailer.youtube_id}/>
      </div>
    </>
  );
};

export default Page;
