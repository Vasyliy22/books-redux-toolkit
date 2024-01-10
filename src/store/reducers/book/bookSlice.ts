import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { BookType } from '../../../types';
import { getBooks } from '../../../api';
// import { COUNT_PER_PAGE } from '../../../constants/api';

// export const bookThunk = createAsyncThunk('book/getBooks',
//   async (params: { id: string, currentIndex: number }) => {
//     const page = Math.floor(params.currentIndex / COUNT_PER_PAGE);
//     const resolve = await getBooks({ startIndex: String(page * COUNT_PER_PAGE) }).then(({ items }) => {
//       return items.find((book: BookType) => book.id === params.id);
//     });

//     return resolve;
//   }
// );

export const bookThunk = createAsyncThunk('book/getBooks',
  async (currentIndex: number) => {
    const resolve = await getBooks({ startIndex: String(currentIndex) }, 1).then(({ items }) => {
      return items[0];
    });

    return resolve;
  });

type Book = {
  book: BookType | null,
  loadingBook: boolean,
}

const initialState: Book = {
  book: null,
  loadingBook: false,
}

export const bookSlice = createSlice({
  name: 'book',
  initialState,

  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(bookThunk.pending, (state) => {
      state.loadingBook = true;
    });

    builder.addCase(bookThunk.fulfilled, (state, action) => {
      state.loadingBook = false;
      state.book = action.payload;
    });

    builder.addCase(bookThunk.rejected, (state) => {
      state.loadingBook = false;
    });
  }
})

// export const {} = bookSlice.actions;
export default bookSlice.reducer;
