
const ADD = "ADD"
const DELETE = "DELETE"
const IMPORTANT = "IMPORTANT"
const DONE = "DONE"


const initialState = {
    todos: [{
            title: 'буду пить кофе',
            isDelete: false,
            isImportant: false,
            isDone: false,
            id: 4466474747,
            change: false
        }],
    count: 0
    // title: '';

}

export default(state = initialState, action) => {
    switch(action.type) {
        // case "Change": {
        //     return {
        //         ...state,
        //         title: 'Sanjar'
        //     }
        // }
        case "ADD": {
            return{
                ...state,
                todos: [...state.todos, {
                    title: action.title,
                    isDelete: false,
                    isImportant: false,
                    isDone: false,
                    id: Math.floor(Math.random() * 10000)
                }],
                count: state.count + 1
            }
        }
        case DELETE: {
            return{
                ...state,
                todos: state.todos.filter((item) => item.id !== action.id),
                count: state.count -1
            }
        }
        case IMPORTANT: {
            return{
                ...state,
                todos: state.todos.map((item) => {
                    if(item.id === action.id) {
                        return {
                            ...item, isImportant:!item.isImportant}
                        
                    }
                    return item
                }),
            }
        }
        case DONE : {
            return {
                ...state, 
                todos: state.todos.map((item) => {
                    if(item.id === action.id) {
                        return {
                            ...item, isDone: !item.isDone}
                    }
                    return item
                }),
            }
        }
        case 'DELETE_ALL': {
            return{
                ...state,
                todos:[]
            }
        }
        case 'EDIT': {
            return{
                ...state,
                todos: state.todos.map(item => {
                    if(item.id === action.id) {
                        return{...item, title: action.title}
                    }else{
                        return item 
                    }
                })
            }
        }
        
        case 'EDIT2': {
            return{
                ...state,
                todos: state.todos.map(item => {
                    if(item.id === action.id) {
                        return{...item, change:!item.change}
                    }else{
                        return item
                    }
                })
            }
        }
        default: return state
    }
}


export const changeName = () => {
    return (dispatch) => {
        return dispatch({type: "Change"})//action creator
    }
}

export const addTask = (title) => {
    return(dispatch) => {
        return dispatch({type: ADD, title})
    }
}
export const deleteTask = (id) => {
    return(dispatch) => {
        return dispatch({type: DELETE, id})
    }
}
export const doImportant = (id) => {
    return(dispatch) => {
        return dispatch({type: IMPORTANT, id})
    }
}
export const doDone = (id) => {
    return(dispatch) => {
        return dispatch({type: DONE, id})
    }
}
export const deleteAll = () => {
    return(dispatch) => {
        return dispatch({type: 'DELETE_ALL'})
    }
}

export const editTask = (id, title, change) => {
    return(dispatch) => {
        if(change){
            return dispatch({type: 'EDIT', id, title })
        } else{
            return dispatch({type: 'EDIT2', id})
        }
    }
}


