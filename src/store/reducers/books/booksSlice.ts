import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { BookType } from '../../../types';
import { getBooks } from '../../../api';


export const booksThunk = createAsyncThunk('books/getBooks',
  async () => {
    const resolve = await getBooks().then(({ items, totalItems }) => {
      return { items, totalItems }
    });

    return resolve;
  }
)

export const moreBooksThunk = createAsyncThunk('moreBooks/getBooks',
  async (booksList: BookType[]) => {
    const result = await getBooks({ startIndex: String(booksList.length) }).then(({ items }) => items);

    return result;
  }
)

type TStore = {
  books: BookType[],
  filter: string,
  sort: string,
  totalCount: number,
  searchPhrase: string,
  loading: boolean,
  loadingMore: boolean,
}

const initialState: TStore = {
  books: [],
  filter: '',
  sort: '',
  totalCount: 0,
  searchPhrase: '',
  loading: false,
  loadingMore: false,
}

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    setFilter: (state, action: PayloadAction<string>) => {
      state.filter = action.payload;
    },

    setSort: (state, action: PayloadAction<string>) => {
      state.sort = action.payload;
    },

    setSearchPhrase: (state, action: PayloadAction<string>) => {
      state.searchPhrase = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(booksThunk.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(booksThunk.fulfilled, (state, action) => {
      state.loading = false;
      state.books = action.payload.items;
      state.totalCount = action.payload.totalItems;
      
    });

    builder.addCase(booksThunk.rejected, (state) => {
      state.loading = false;
    });


    builder.addCase(moreBooksThunk.pending, (state) => {
      state.loadingMore = true;
    });

    builder.addCase(moreBooksThunk.fulfilled, (state, action) => {
      state.loadingMore = false;
      state.books = [...state.books, ...action.payload];
      
    });

    builder.addCase(moreBooksThunk.rejected, (state) => {
      state.loadingMore = false;
    });
  },
})

export const { setFilter, setSort, setSearchPhrase } = booksSlice.actions;
export default booksSlice.reducer;
