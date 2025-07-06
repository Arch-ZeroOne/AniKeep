import React from "react";
import { Anime } from "../types/anime";
import Image from "next/image";
import { useState } from "react";
import { Genres } from "../types/anime";

function AnimeCard({ title, status, img, genre }: Anime) {
  console.log(genre);
  //TODO Study more about types
  //Genres[] here instead of item:Genre since its a array of objects
  const genres: Genres[] = genre.map((item) => {
    return item.name;
  });
  console.log(genre);

  return (
    <>
      <div className="card bg-base-100 w-full shadow-sm">
        <figure>
          <img src={img.jpg.image_url} className="w-full" alt="Anime Image" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p></p>
          <div className="card-actions justify-end">
            <>
              {genres &&
                genres.map((item: any) => (
                  <div className="badge badge-dash badge-primary">{item}</div>
                ))}
            </>
          </div>
        </div>
      </div>
    </>
  );
}

export default AnimeCard;
