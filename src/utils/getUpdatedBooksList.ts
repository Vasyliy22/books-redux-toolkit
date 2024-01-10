import { BookType } from "../types";

type OptionsType = {
  search: string,
  filter: string,
  sort: string,
}

export const getUpdatedBooksList = (booksList: BookType[], options: OptionsType) => {
  let booksCopy = [...booksList];

  if (options.search) {
    booksCopy = booksCopy.filter(book => 
      book.volumeInfo.title.toLowerCase().trim()
      .includes(options.search.toLowerCase().trim())
    )
  }

  if (options.sort === 'newest') {
    booksCopy.sort((a, b) => Number(new Date(a.volumeInfo.publishedDate)) - Number(new Date(b.volumeInfo.publishedDate)))
  }
  if (options.filter && options.filter !== 'all') {
    booksCopy = booksCopy.filter((book => book.volumeInfo.categories && book.volumeInfo.categories[0] === options.filter))
  }

  return booksCopy;
}