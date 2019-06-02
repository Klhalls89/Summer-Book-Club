import { booksCleaner } from './cleaner'

 export const fetchBooks = async (key,bookType) => {
    const url = `https://api.nytimes.com/svc/books/v3/lists/current/hardcover-${bookType}.json?api-key=${key}`
  try {
      const response = await fetch(url)
      const books = await response.json()
      const cleanBooks = await booksCleaner(books)
      return cleanBooks
    } catch (error) {
    alert(error)
  }
}