import { createSlice } from "@reduxjs/toolkit"
const initialState={
    todos:[
        {text:"hy Ashish",completed:false},
        {text:"Are u going to fuck the work",completed:false},
        ]
}

const todoSlice= createSlice({
    name:'todo',
    initialState:initialState,
    reducers:{
        add:(state,action)=>{
            state.todos.push({text:action.payload,completed:false});
        },
        toggle:(state,action)=>{
            state.todos.map((todo, i)=>{
                if(i==action.payload){
                    todo.completed=!todo.completed;
                }
                return todo;
            })
        },
        remove:(state,action)=>{
           state.todos.splice(action.payload,1)
        }

    }
})
// export const todoReducer=(state=initialState,action)=>{
//  switch(action.type){
//     case ADD_TODO :
//                 return {...state,
//                     todos:[...state.todos,{
//                         text:action.text,
//                        completed:false
//                     }]}

//         case TOGGLE_TODO:
//                 return{...state,
//                     todos:state.todos.map((todo,i)=>{
//                             if(i===action.index){
//                                 todo.completed=!todo.completed
//                             }
//                             return todo
//                     })} 
//          case DELETE_TODO:
//             return{...state,
//                 todos:state.todos.filter((todo,i)=>
//                  i!==action.index
//                 )
//             }
         
         
//          default:
//                 return state;
//  }


// }
export const todoReducer=todoSlice.reducer;
export const todoActions=todoSlice.actions;
