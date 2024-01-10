import { RootState } from "./store";

export const selectCurrentBook = (state: RootState) => state.currentBook.book;
export const selectLoadingBook = (state: RootState) => state.currentBook.loadingBook;
export const selectBooks = ({ state }: RootState) => state.books;
export const selectFilter = ({ state }: RootState) => state.filter;
export const selectSort = ({ state }: RootState) => state.sort;
export const selectLoading = ({ state }: RootState) => state.loading;
export const selectLoadingMore = ({ state }: RootState) => state.loadingMore;
export const selectSearchPhrase = ({ state }: RootState) => state.searchPhrase;
