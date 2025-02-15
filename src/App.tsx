import { useState } from "react";
import Seeker from "./components/seeker/Seeker";
import MovieData from "./components/MovieData";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false); // Estado para controlar el modal
  const [selectedMovieId, setSelectedMovieId] = useState<string | null>(null); // Estado para almacenar el imdbID

  // Función para abrir el modal con el imdbID de la película seleccionada
  const handleOpenModal = (imdbID: string) => {
    setSelectedMovieId(imdbID);
    setIsModalOpen(true);
  };

  // Función para cerrar el modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedMovieId(null);
  };

  return (
    <>
      {/* Seeker con la función para abrir el modal */}
      <Seeker onMovieClick={handleOpenModal} />

      {/* Modal con MovieData */}
      {isModalOpen && selectedMovieId && (
        <div className="fixed inset-0 bg-black/75 flex justify-center items-center p-4">
          <div className="bg-white rounded-lg shadow-lg max-w-2xl w-full overflow-hidden">
            <MovieData imdbID={selectedMovieId} onClose={handleCloseModal} />
          </div>
        </div>
      )}
    </>
  );
}

export default App;
