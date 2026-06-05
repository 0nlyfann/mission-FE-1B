function ContinueSection({ movies }) {
  return (
    <section className="mb-14">
      <h2 className="text-white text-3xl font-bold mb-6">
        Melanjutkan Tonton Film
      </h2>

      
      <div 
        className="flex flex-nowrap md:grid md:grid-cols-4 gap-4 md:gap-5 overflow-x-auto [&::-webkit-scrollbar]:hidden w-full"
        style={{ scrollbarWidth: 'none' }}
      >
        {movies.slice(0, 4).map((movie) => (
          <div 
            key={movie.id}
           
            className="w-[300px] md:w-full h-[160px] relative rounded-xl overflow-hidden cursor-pointer group flex-shrink-0"
          >
            
            <img 
              src={movie.image} 
              className="w-full h-full object-cover"
            />

            
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

          </div>
        ))}
      </div>
    </section>
  );
}

export default ContinueSection;