import MovieCard from "./MovieCard";

function MovieSection({ title, movies }) {
  return (
    <section className="mb-10 md:mb-14 px-4 md:px-10">

      {/* Ukuran judul responsif */}
      <h2 className="text-white text-xl md:text-3xl font-bold mb-4 md:mb-6">
        {title}
      </h2>

      
      <div 
        className="flex flex-nowrap md:grid md:grid-cols-5 gap-3 md:gap-5 overflow-x-auto [&::-webkit-scrollbar]:hidden"
        style={{ scrollbarWidth: 'none' }} 
      >
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            image={movie.image}
          />
        ))}
      </div>

    </section>
  );
}

export default MovieSection;