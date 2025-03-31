"use server"

 // Import your local data array
 import { data } from "./data"; 
export async function fetchAnimeById(id) {
  try {
    console.log(`Fetching anime with ID: ${id}`);
    
    // Convert id to string to ensure type matching
    const stringId = String(id);
    
    // Find the anime in your local data array
    const anime = data.find(anime => anime.id === stringId);
    
    console.log(`Found anime:`, anime ? anime.name : "Not found");
    
    return anime || null;
  } catch (error) {
    console.error(`Error fetching anime with ID ${id}:`, error);
    return null;
  }
}

export async function fetchAnime(page = 1) {
  try {
    console.log(`Fetching anime page ${page}`);
    
    // For simplicity, just return all data for now
    // In a real app, you'd implement pagination
    return data;
  } catch (error) {
    console.error("Error fetching anime list:", error);
    return [];
  }
}