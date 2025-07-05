import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface SearchState {
    isLoading: boolean,
    item: {
        normal: Array<any>,
        shorts: Array<any>
    }
}

const initialState: SearchState = {
    isLoading: false,
    item: {
        normal: [],
        shorts: []
    }
}

export const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        setLoading: (state, { payload }: PayloadAction<boolean>) => {
            return {
                ...state,
                isLoading: payload
            }
        },
        setItem: (state, { payload }: PayloadAction<SearchState["item"]>) => {
            const { shorts, normal } = payload || {};
            return {
                ...state,
                item: {
                    shorts,
                    normal
                }
            }
        }
    },
})

export const { setLoading, setItem } = searchSlice.actions

export default searchSlice.reducer