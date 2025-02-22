import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface MovieDataProps {
  imdbID: string;
  onClose: () => void;
}

interface MovieDetails {
  Title: string;
  Year: string;
  Released: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Poster: string;
  imdbRating: string;
}

const MovieData: React.FC<MovieDataProps> = ({ imdbID, onClose }) => {
  const apiKey = import.meta.env.VITE_API_KEY;
  const apiUrl = import.meta.env.VITE_API_URL;

  const fetchMovieDetails = async (): Promise<MovieDetails> => {
    const response = await axios.get(`${apiUrl}${apiKey}&i=${imdbID}`);
    return response.data; // Asegúrate de que la API devuelva un objeto que coincida con MovieDetails
  };

  const {
    data: movie,
    isLoading,
    isError,
    error,
  } = useQuery<MovieDetails, Error>({
    queryKey: ["movieDetails", imdbID], // Clave única para la consulta
    queryFn: fetchMovieDetails, // Función que realiza la solicitud
    staleTime: 1000 * 60 * 5, // Los datos se consideran frescos durante 5 minutos
  });

  if (isLoading) {
    return <p>Cargando...</p>;
  }

  if (isError) {
    return <p>Error: {error.message}</p>;
  }

  if (!movie) {
    return <p>No se encontraron detalles de la película.</p>;
  }

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-2xl w-full p-6">
      {/* Botón para cerrar el modal */}
      <button
        onClick={onClose}
        className="absolute top-2 right-2 p-2 bg-gray-200 rounded-full hover:bg-gray-300"
      >
        &times;
      </button>

      {/* Título y detalles principales */}
      <div className="mb-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">{movie.Title}</h2>
        <p className="text-gray-600">
          {movie.Year} | {movie.imdbRating} | {movie.Released}
        </p>
      </div>

      {/* Contenedor principal (imagen y detalles) */}
      <div className="flex flex-col md:flex-row gap-6">
        {/* Poster de la película */}
        {movie.Poster && (
          <img
            src={movie.Poster}
            alt={`Poster de ${movie.Title}`}
            className="w-full md:w-1/3 h-auto rounded-lg shadow-sm"
          />
        )}

        {/* Detalles de la película */}
        <div className="flex-1">
          <div className="space-y-4">
            <p className="text-gray-700">
              <span className="font-semibold">Género:</span> {movie.Genre}
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">Director:</span> {movie.Director}
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">Escritor:</span> {movie.Writer}
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">Actores:</span> {movie.Actors}
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">Idioma:</span> {movie.Language}
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">País:</span> {movie.Country}
            </p>
          </div>

          {/* Trama de la película */}
          <div className="mt-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Trama</h3>
            <p className="text-gray-700">{movie.Plot}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieData;
