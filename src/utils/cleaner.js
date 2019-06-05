
export const booksCleaner = (books) => {
  const allBooks = books.results.books;
  return allBooks.map(book => {
    return {
      by: book.author,
      description: book.description,
      id : book.primary_isbn10,
      image: book.book_image,
      purchase: book.amazon_product_url,
      rank: book.rank,
      title: book.title
    };
  });
};