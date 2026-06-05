import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import GenreDropdown from "../components/GenreDropdown";
import MovieSection from "../components/MovieSection";
import Footer from "../components/Footer";

import { movies } from "../data/movies";
import ContinueSection from "../components/ContinueSection";

function Home() {
  const chillMovies = movies.filter(movie => movie.category === "chill");
  const topRatedMovies = movies.filter(movie => movie.category === "top-rated");
  const trendingMovies = movies.filter(movie => movie.category === "trending");
  const newReleaseMovies = movies.filter(movie => movie.category === "new-release");
  return (
    <div className="bg-[#0d1117] min-h-screen">

      <Navbar />

      <Hero />

      <div className="px-10 py-8">

        <GenreDropdown />


        <ContinueSection
          title="Film Persembahan Chill"
          movies={chillMovies}
        />

        <MovieSection
          title="Top Rating Film Hari Ini"
          movies={topRatedMovies}
        />

        <MovieSection
          title="Film Trending"
          movies={trendingMovies}
        />

        <MovieSection
          title="Rilis Baru"
          movies={newReleaseMovies}
        />

        <Footer />

      </div>

    </div>
  );
}

export default Home;