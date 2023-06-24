 import {createSlice} from '@reduxjs/toolkit'

const initialState={
    notes:[
        {title:'Lorem ipsum dom' , createdOn: new Date()},
        {title:'Aliquam era.', createdOn: new Date()}
    ]
}
// Reducer Using Redux
const noteSlice=createSlice({
    name:'note',
    initialState:initialState,
    reducers:{
        // this is add action
        add:(state,action)=>{
            state.notes.push({title:action.payload,createdOn:new Date()});
        },
        remove:(state,action)=>{
          state.notes=state.notes.filter((note,i)=>i!=action.payload);
        }
    }
})


//  Reducer using redux

// export const noteReducer=(state=initialState,action)=>{
// switch(action.type){
//     case ADD_NOTE:
//         return {...state,notes:[...state.notes,
//             {title:action.text,createdOn:new Date()}]}
//   case DELETE_NOTE:
//         state.notes.splice(action.index,1);
       
//          return {
//             ...state,
//             notes:[...state.notes]
//          } 
//             default:return state;
// }


// }

 export const noteReducer=noteSlice.reducer;
 export const noteActions=noteSlice.actions;