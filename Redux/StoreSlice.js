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
export const getSories = createAsyncThunk(
  "books/getSories",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await fetch("/api/stories");
      const stories = await res.json();
      return stories;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const getCatigoires = createAsyncThunk(
  "books/getCatigoires",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await fetch("/api/Catigories");
      const catigoires = await res.json();
      return catigoires;
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
    stories: [],
    Catigories: [],
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
    DeleteAllItemINCart: (state) => {
      while (state.cartitems.length > 0) {
        state.cartitems.shift();
      }
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
    [getSories.pending]: (state) => {
      state.isloading = true;
    },
    [getSories.fulfilled]: (state, action) => {
      state.isloading = null;
      state.stories = action.payload;
    },
    [getSories.rejected]: (state, action) => {
      state.isloading = false;
      state.stories = action.payload;
    },
    [getCatigoires.pending]: (state) => {
      state.isloading = true;
    },
    [getCatigoires.fulfilled]: (state, action) => {
      state.isloading = null;
      state.Catigories = action.payload;
    },
    [getCatigoires.rejected]: (state, action) => {
      state.isloading = false;
      state.Catigories = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { AddItemToCart, DeleteItemFromCart, DeleteAllItemINCart } =
  StoreSlice.actions;

export default StoreSlice.reducer;
