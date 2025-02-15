interface Movie {
  Title: string;
  Year: string;
  Poster?: string;
  imdbID: string;
  onClick: () => void;
}
const ResultList: React.FC<Movie> = ({
  Title,
  Year,
  Poster,
  imdbID,
  onClick,
}) => {
  return (
    <div
      key={imdbID}
      className="flex flex-col items-center bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 m-2 w-full sm:w-64 cursor-pointer"
      onClick={onClick}
    >
      <img
        src={Poster !== "N/A" ? Poster : "https://via.placeholder.com/300x450"} // Placeholder si no hay poster
        alt={`Poster de ${Title}`}
        className="w-full h-64 object-cover"
      />

      <div className="p-4 w-full">
        <h1 className="text-xl font-bold text-gray-800 truncate">{Title}</h1>
        <h2 className="text-lg text-gray-600">{Year}</h2>
      </div>
    </div>
  );
};

export default ResultList;
