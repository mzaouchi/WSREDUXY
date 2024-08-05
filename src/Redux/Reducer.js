import { CHANGETEXTLIVE, DECREMENT, HANDLESHOW, INCREMENT } from "./ActionTypes"

const initialState = {
    count : 0,
    textLive : "",
    show : false
}

const Reducer=(state = initialState,action)=>{
    switch (action.type) {
        case INCREMENT : return {...state, count : state.count + 1}   
        case DECREMENT : return {...state, count : state.count - 1}
        case CHANGETEXTLIVE : return {...state, textLive : action.payload}
        case HANDLESHOW : return {...state, show : !state.show}
        default: return state
    }
}

export default Reducer