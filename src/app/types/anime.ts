export type Anime = {
  title: String;
  status: String;
  img: {
    jpg: {
      image_url: String;
    };
  };
  genre: object[];
};

export type Genres = {
  name: String;
};
