import React from "react";
import { Anime } from "../types/interfaces";
import Image from "next/image";

function AnimeCard({ title, status, images, genres }: Anime) {
  const { image_url } = images.jpg;

  return (
    <>
      <div className="card bg-base-100 w-full shadow-sm">
        <figure>
          <Image
            src={String(image_url)}
            width={500}
            height={300}
            alt="Anime Image"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p></p>
          <div className="card-actions justify-end">
            <>
              {genres &&
                genres.map((item: any) => (
                  <div className="badge badge-dash badge-primary">
                    {item.name}
                  </div>
                ))}
            </>
          </div>
        </div>
      </div>
    </>
  );
}

export default AnimeCard;
