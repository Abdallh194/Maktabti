import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
export const GetBooks = createAsyncThunk(
  "books/GetBooks",
  async (_, thunckAPLI) => {
    const { rejectWithValue } = thunckAPLI;
    try {
      const res = await fetch("/api/books");
      const books = await res.json();
      return books;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const StoreSlice = createSlice({
  name: "books",
  initialState: {
    AllBooks: [],
    isloading: null,
    cartitems: [],
  },
  reducers: {
    AddItemToCart: (state, action) => {
      let isexit = false;
      state.cartitems.forEach((p) => {
        if (p.id === action.payload.id) {
          p.qty++;
          isexit = true;
        }
      });
      if (!isexit) {
        state.cartitems.push(action.payload);
      }
    },
    DeleteItemFromCart: (state, action) => {
      state.cartitems = state.cartitems.filter((p) => p.id !== action.payload);
    },
  },
  extraReducers: {
    [GetBooks.pending]: (state) => {
      state.isloading = true;
    },
    [GetBooks.fulfilled]: (state, action) => {
      state.isloading = null;
      state.AllBooks = action.payload;
    },
    [GetBooks.rejected]: (state, action) => {
      state.isloading = false;
      state.AllBooks = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { AddItemToCart, DeleteItemFromCart } = StoreSlice.actions;

export default StoreSlice.reducer;
