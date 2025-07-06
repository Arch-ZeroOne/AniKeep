"use client";

import React from "react";
import AnimeCard from "../components/AnimeCard";
import { useEffect, useState } from "react";
import { getAnime } from "../api/requests";

function AllAnime() {
  const [animes, setAnimes] = useState();

  useEffect(() => {
    const fetchAnime = async () => {
      const allAnime = await getAnime();
      setAnimes(allAnime.data);
      getGenre(allAnime.data.genres);
    };
    fetchAnime();
  }, []);

  return (
    <>
      <div className="grid grid-cols-4 gap-3 mt-5 p-2">
        {animes &&
          animes.map((anime) => (
            <AnimeCard
              title={anime.title}
              img={anime.images}
              genre={anime.genres}
            />
          ))}
      </div>
    </>
  );
}

export default AllAnime;
