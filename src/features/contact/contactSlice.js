import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import contactService from './contactService'

const initialState = {
    contacts: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: '',
}

export const contactList = createAsyncThunk(
    'contact/contactList',
    async(_, thunkAPI)=>{
        try{
            const token = thunkAPI.getState().auth.user.token
            return await contactService.contactList(token)
        }
        catch (error) {
            const message =(error.response &&
            error.response.data &&
            error.response.data.message) ||
            error.message ||
            error.toString()
            return thunkAPI.rejectWithValue(message)
        }
    })

export const createContact = createAsyncThunk(
    'contact/create',
    async(contactData, thunkAPI)=>{
        try{
            const token = thunkAPI.getState().auth.user.token
            return await contactService.createContact(contactData, token)
        }
        catch (error) {
            const message =(error.response &&
            error.response.data &&
            error.response.data.message) ||
            error.message ||
            error.toString()
            return thunkAPI.rejectWithValue(message)
        }
    })

export const contactSlice = createSlice({
    name: 'contact',
    initialState,
    reducers: {
        reset: (state) => initialState
    },
    extraReducers: (builder) => {
        builder
        .addCase(createContact.pending, (state) => {
            state.isLoading = true
        })
        .addCase(createContact.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.contacts.push(action.payload)
        })
        .addCase(createContact.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
        })
        .addCase(contactList.pending, (state) => {
            state.isLoading = true
        })
        .addCase(contactList.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.contacts = action.payload
        })
        .addCase(contactList.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
        })
    }
})

export const { reset } = contactSlice.actions
export default contactSlice.reducer