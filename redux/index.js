import { combineReducers } from "redux"
import DetailSlice from "./formSlice"

const userReducer = combineReducers({
    details: DetailSlice.reducer
})

export default userReducer