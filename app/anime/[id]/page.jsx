

import { data } from '../../data';
import Image from 'next/image';
import Link from 'next/link';
import AnimeTrailer from '../../../components/AnimeTrailer';

export async function generateMetadata({ params }) {
  const { id } = params;
  const anime = data.find(anime => anime.id === id);
  
  if (!anime) {
    return {
      title: 'Anime Not Found',
    };
  }
  
  return {
    title: `${anime.name.replace(/_/g, ' ')} | Anime Vault`,
    description: anime.description || `Watch ${anime.name.replace(/_/g, ' ')} anime online.`,
  };
}

export default function AnimePage({ params }) {
  const { id } = params;
  const anime = data.find(anime => anime.id === id);
  
  if (!anime) {
    return (
      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold mb-4">Anime Not Found</h1>
        <Link href="/" className="text-blue-500 hover:underline">
          Return to Home
        </Link>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-8">
        <Link href="/" className="text-blue-500 hover:underline mb-6 inline-block">
          ← Back to Home
        </Link>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Anime Image */}
          <div className="md:col-span-1">
            <div className="relative aspect-[2/3] rounded-lg overflow-hidden">
              <Image
                src={anime.image.original}
                alt={anime.name}
                fill
                className="object-cover"
              />
            </div>
          </div>
          
          {/* Anime Details */}
          <div className="md:col-span-2">
            <h1 className="text-4xl font-bold mb-4 capitalize">
              {anime.name.replace(/_/g, ' ')}
            </h1>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <p className="text-gray-400">Type</p>
                <p>{anime.kind}</p>
              </div>
              <div>
                <p className="text-gray-400">Score</p>
                <p className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500 mr-1" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  {anime.score}
                </p>
              </div>
              <div>
                <p className="text-gray-400">Episodes</p>
                <p>{anime.episodes}</p>
              </div>
              <div>
                <p className="text-gray-400">Aired</p>
                <p>{anime.episodes_aired}</p>
              </div>
            </div>
            
            {/* Description */}
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-2">Synopsis</h3>
              <p className="text-gray-300">
                {anime.description || "No description available."}
              </p>
            </div>
            
            {/* Trailer Component - Make sure this is correct */}
            {anime.trailer ? (
              <AnimeTrailer 
                trailerUrl={anime.trailer} 
                title={anime.name}
              />
            ) : (
              <div className="mt-8">
                <h3 className="text-xl font-bold text-white mb-4">Trailer</h3>
                <div className="bg-gray-800 rounded-lg p-4 text-center">
                  No trailer available for this anime.
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
