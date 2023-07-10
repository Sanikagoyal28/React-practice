import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    data: [
        {
            id: '',
            first_name: '',
            last_name: '',
            number: ''
        }
    ]
}

const DetailSlice = createSlice({
    name: "add",
    initialState,
    reducer: {
        addItem: (state, action) => {
            state.data = [...state.data, action.payload]
        },
        getItem: (state, action) => {
            return state.data
        },
        deleteItem: (state, action) => {
            state.data = state.data.filter((d) => { return d.id != action.payload.id })
        }
    }
})

export default DetailSlice