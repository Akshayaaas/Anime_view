import Link from "next/link";

export default async function TestPage() {
  // Try to fetch a known anime directly
  const testId = 1; // Usually ID 1 exists in most anime APIs
  
  try {
    console.log(`Test page: Fetching anime with ID ${testId}`);
    
    const response = await fetch(`https://shikimori.one/api/animes/${testId}`, {
      headers: {
        "User-Agent": "AnimeVault/1.0",
        "Accept": "application/json"
      },
      cache: 'no-store'
    });
    
    console.log(`Test page: API response status: ${response.status}`);
    
    if (!response.ok) {
      throw new Error(`API returned status: ${response.status}`);
    }
    
    const anime = await response.json();
    
    return (
      <div className="container mx-auto p-8">
        <h1 className="text-3xl font-bold mb-6">API Test Page</h1>
        
        <div className="bg-green-800 p-4 rounded-lg mb-6">
          <p className="text-white">✅ API is working!</p>
          <p className="text-white">Successfully fetched: {anime.name}</p>
        </div>
        
        <div className="bg-gray-800 p-4 rounded-lg mb-6">
          <h2 className="text-xl mb-2">Anime Data:</h2>
          <pre className="bg-gray-900 p-4 rounded overflow-auto max-h-96 text-sm">
            {JSON.stringify(anime, null, 2)}
          </pre>
        </div>
        
        <div className="mt-6">
          <Link href={`/anime/${testId}`} className="px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition mr-4">
            View This Anime
          </Link>
          <Link href="/" className="px-6 py-3 bg-gray-600 rounded-lg hover:bg-gray-700 transition">
            Back to Home
          </Link>
        </div>
      </div>
    );
  } catch (error) {
    console.error("Test page error:", error);
    
    return (
      <div className="container mx-auto p-8">
        <h1 className="text-3xl font-bold mb-6">API Test Page</h1>
        
        <div className="bg-red-800 p-4 rounded-lg mb-6">
          <p className="text-white">❌ API is not working!</p>
          <p className="text-white">Error: {error.message}</p>
        </div>
        
        <p className="mb-6">
          There seems to be an issue with the API connection. This could be due to:
        </p>
        
        <ul className="list-disc pl-6 mb-6">
          <li>Network connectivity issues</li>
          <li>API rate limiting</li>
          <li>API service being down</li>
          <li>CORS restrictions</li>
        </ul>
        
        <Link href="/" className="px-6 py-3 bg-gray-600 rounded-lg hover:bg-gray-700 transition">
          Back to Home
        </Link>
      </div>
    );
  }
}