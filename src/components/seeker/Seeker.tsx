import { useEffect, useState } from "react";
import axios from "axios";
import InputSeeker from "./InputSeeker";
import MovieCard from "./MovieCard";

interface Movie {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

interface ApiResponse {
  Search: Movie[];
  totalResults: string;
  Response: string;
}

interface SeekerProps {
  onMovieClick: (imdbID: string) => void;
}

const Seeker: React.FC<SeekerProps> = ({ onMovieClick }) => {
  const [inputValue, setInputValue] = useState("");
  const [movies, setMovies] = useState<ApiResponse | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const changeInputValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    setCurrentPage(1);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const searchMovie = setTimeout(() => {
      if (inputValue.trim() === "") {
        setMovies(null);
        return;
      }

      setIsLoading(true);
      setError(null);

      const apiKey = import.meta.env.VITE_API_KEY;
      const apiUrl = import.meta.env.VITE_API_URL;
      axios
        .get<ApiResponse>(
          `${apiUrl}${apiKey}&s=${inputValue}&page=${currentPage}`
        )
        .then((response) => {
          setMovies(response.data);
          const totalResults = parseInt(response.data.totalResults);
          setTotalPages(Math.ceil(totalResults / 10));
        })
        .catch((err) => {
          console.error("Error fetching data:", err);
          setError("Error al cargar los datos. Inténtalo de nuevo.");
        })
        .finally(() => {
          setIsLoading(false);
        });
    }, 500);

    return () => clearTimeout(searchMovie);
  }, [inputValue, currentPage]);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      scrollToTop();
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      scrollToTop();
    }
  };

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <div className="max-w-2xl mx-auto mb-6">
        <InputSeeker value={inputValue} onChange={changeInputValue} />
      </div>

      {isLoading && (
        <p className="text-center text-gray-600 mt-4">Cargando...</p>
      )}
      {error && <p className="text-center text-red-500 mt-4">{error}</p>}

      {movies && movies.Response === "True" ? (
        <>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {movies.Search.map((movie) => (
              <MovieCard
                key={movie.imdbID}
                Title={movie.Title}
                Year={movie.Year}
                Poster={movie.Poster}
                imdbID={movie.imdbID}
                onClick={() => onMovieClick(movie.imdbID)}
              />
            ))}
          </div>

          {/* Controles de paginación */}
          <div className="flex justify-center items-center mt-6 space-x-4 ">
            <button
              onClick={handlePreviousPage}
              disabled={currentPage === 1}
              className="px-4 py-2 bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-white rounded-lg disabled:bg-gray-300 disabled:cursor-not-allowed cursor-pointer"
            >
              Anterior
            </button>
            <span className="text-gray-700">
              Página {currentPage} de {totalPages}
            </span>
            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className="px-4 py-2 bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-white rounded-lg disabled:bg-gray-300 disabled:cursor-not-allowed cursor-pointer"
            >
              Siguiente
            </button>
          </div>
        </>
      ) : (
        !isLoading && (
          <p className="text-center text-gray-600 mt-4">
            {inputValue
              ? "No se encontraron resultados."
              : "Escribe algo para buscar películas."}
          </p>
        )
      )}
    </div>
  );
};

export default Seeker;
