import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface CatState {
  id: number | null;
  name: string;
  gender: string;
  imageFileName: string;
  description: string;
  age: string;
}

const initialState: { catList: CatState[]; cat: CatState | object } = {
  catList: [],
  cat: {},
};
const catSlice = createSlice({
  name: 'cat',
  initialState,
  reducers: {
    updateCatList(state, action: PayloadAction<CatState[]>) {
      state.catList = action.payload;
    },
    updateCat(state, action: PayloadAction<CatState>) {
      state.cat = action.payload;
    },
  },
});

export const { updateCatList, updateCat } = catSlice.actions;
export default catSlice.reducer;
