import { CHANGETEXTLIVE, DECREMENT, HANDLESHOW, INCREMENT } from "./ActionTypes"

export const increment=()=>{
    return {
        type : INCREMENT
    }
}

export const decrement=()=>{
    return{
        type : DECREMENT
    }
}

export const changeTextLive=(payload)=>{
    return{
        type : CHANGETEXTLIVE,
        payload
    }
}

export const handleShow=()=>{
    return {
        type : HANDLESHOW
    }
}