    import * as redux from 'redux';
// import { combineReducers } from 'redux';
import { todoReducer } from './reducers/todoReducer';
import { noteReducer } from './reducers/noteReducer';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

// const result=combineReducers({
//    todoReducer,
//     noteReducer,
// }),

export const store=configureStore({
    reducer:{
        todoReducer,
        noteReducer
    },
    
middleware: (getDefaultMiddleware) =>
       getDefaultMiddleware({
        serializableCheck: false,
  }),
});


export const todoSelector=(store)=>store.todoReducer.todos;
export const noteSelector=(store)=>store.noteReducer.notes;
