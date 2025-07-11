import { Anime } from "../types/interfaces";

export async function getAnime() {
  try {
    const request = await fetch("https://api.jikan.moe/v4/top/anime");

    if (request.ok) {
      return await request.json();
    }
  } catch (error) {
    console.log(error);
  }
}
