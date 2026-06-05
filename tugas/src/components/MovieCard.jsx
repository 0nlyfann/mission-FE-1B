function MovieCard({ image }) {
  return (
    <div
      className="
      w-[110px] md:w-full 
      aspect-[2/3] 
      rounded-lg
      overflow-hidden
      flex-shrink-0
      bg-gray-700
      "
    >
      
      <img 
        src={image}  
        className="w-full h-full object-cover"
        alt="Movie Poster"
      />
    </div>
  );
}

export default MovieCard;