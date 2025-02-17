import { useState } from "react";
import Seeker from "./components/seeker/Seeker";
import MovieData from "./components/MovieData";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMovieId, setSelectedMovieId] = useState<string | null>(null);

  const handleOpenModal = (imdbID: string) => {
    setSelectedMovieId(imdbID);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedMovieId(null);
  };

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Seeker onMovieClick={handleOpenModal} />
        {isModalOpen && selectedMovieId && (
          <div className="fixed inset-0 bg-black/75 flex justify-center items-center p-4">
            <div className="bg-white rounded-lg shadow-lg max-w-2xl w-full overflow-hidden">
              <MovieData imdbID={selectedMovieId} onClose={handleCloseModal} />
            </div>
          </div>
        )}
      </QueryClientProvider>
    </>
  );
}

export default App;
