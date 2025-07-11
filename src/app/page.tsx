import Image from "next/image";
import Head from "next/head";

//TODO Figure out why font awesome is now working
export default function Home() {
  return (
    <div className="flex flex-col items-center gap-10">
      <Head>
        <title>Home</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css"
        />
      </Head>
      <Hero />
      <Button />
    </div>
  );
}

function Hero() {
  const features = [
    {
      id: 1,

      logo: "/hero/Favourites.png",
      title: "Discover Your Favourites",
      description:
        "AniKeep allows users to easily add and manage their favorite anime. With a single click, users can save titles they love to a personalized favorites list — accessible anytime, even after refreshing or signing in again. This feature is perfect for building your own anime collection, tracking what you enjoy, or planning your next binge.",
    },
    {
      id: 2,
      title: "Explore Movie Recommendations",
      logo: "/hero/Recommendation.png",
      description:
        "AniKeep is a sleek and user-focused anime tracking website where users can search, explore, and save their favorite anime. Built using Next.js and TypeScript, AniKeep delivers fast performance and clean UI, powered by real-time data from the Jikan API.",
    },
    {
      id: 3,
      title: "Watch Trailers",
      logo: "/hero/Trailer.png",
      description:
        "AniKeep lets users watch official anime trailers directly on each anime's detail page. By embedding trailers from YouTube, users can preview anime before adding them to their favorites or watchlist — making discovery faster and more exciting.",
    },
    {
      id: 4,
      title: "Be Informed",
      logo: "/hero/Upcoming.png",
      description:
        "AniKeep will soon include an Upcoming Anime feature, allowing users to view titles scheduled to air soon. With release dates, countdowns, and early trailers, you’ll always know what’s next in the anime world — and be the first to add it to your list.",
    },
  ];
  return (
    <div className="flex flex-col gap-10 justify-center items-center mt-5 ">
      <div className="flex flex-col items-center gap-3">
        <h1 className="text-3xl font-bold">
          The Anime List Platform You Only Need
        </h1>
        <p className="font-semibold text-center w-120 ">
          Add, explore,boomark and discover your favourite manga, anime with
          AniKeep
        </p>
      </div>
      <div className="grid grid-cols-2 gap-8 w-full  justify-items-center ">
        {features.map((data) => (
          <Features
            key={data.id}
            title={data.title}
            logo={data.logo}
            description={data.description}
          />
        ))}
      </div>
    </div>
  );
}

function Features({ logo, title, description }: any) {
  return (
    <div className="flex  w-120 gap-3">
      <Image
        src={String(logo)}
        height={200}
        width={200}
        alt="Logo"
        className="h-17"
      />
      <div>
        <h3 className="font-bold">{title}</h3>
        <p className="text-sm indent-2">{description}</p>
      </div>
    </div>
  );
}

function Button() {
  return <button className="btn btn-primary">Sign In</button>;
}
