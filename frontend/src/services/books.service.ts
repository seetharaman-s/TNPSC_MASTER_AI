const API = "http://127.0.0.1:8000";

export async function getBooks() {
  const response = await fetch(`${API}/books`);

  if (!response.ok) {
    throw new Error("Failed to fetch books");
  }

  return response.json();
}