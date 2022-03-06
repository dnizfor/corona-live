import type { AppState } from '../redux/store'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
    value: string
}

const initialState: CounterState = {
    value: "turkey",
}



export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
      updateTarget: (state,action:PayloadAction<string>) => {
        state.value = action.payload
      },


    },

  })
  
  export const { updateTarget } = counterSlice.actions
  
  // The function below is called a selector and allows us to select a value from
  // the state. Selectors can also be defined inline where they're used instead of
  // in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`


  export default counterSlice.reducer