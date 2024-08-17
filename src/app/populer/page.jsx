"use client";

import { useEffect, useState } from "react";
import HeaderMenu from "../components/Utilities/HeaderMenu";
import Pagination from "../components/Utilities/Pagination";
import AnimeList from "../components/AnimeList";

const Page = () => {
    const [page, setPage] = useState(1);
    const [topAnime, setTopAnime] = useState({});
    const [lastPage, setLastPage] = useState(null);

    const fetchData = async () => {
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?page=${page}`
        );
        const data = await res.json();
        setTopAnime(data);
    }

    useEffect(() => {
        fetchData();
    }, [page]);

    console.log("Last Visible Page:", lastPage);

    return (
        <>
            <HeaderMenu title={`Anime Terpopuler ${page}`} />
            <Pagination page={page} lastPage={topAnime.pagination?.last_visible_page} setPage={setPage} />
            <AnimeList api={topAnime} />
            <Pagination page={page} lastPage={topAnime.pagination?.last_visible_page} setPage={setPage} />
        </>
    );
}

export default Page;
