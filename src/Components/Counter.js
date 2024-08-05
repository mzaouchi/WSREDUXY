import { useDispatch, useSelector } from "react-redux"
import { changeTextLive, decrement, increment } from "../Redux/Actions"

const Counter=()=>{
    const count = useSelector(state=> state.count)
    const textLive = useSelector(state=> state.textLive)
    const dispatch = useDispatch()
    return(
        <div>
            <h2>Counter Component</h2>

            <button onClick={()=>count >0 && dispatch(decrement())}>-</button>
            <span>{count}</span>
            <button onClick={()=> dispatch(increment())}>+</button>

            <br/>
            <br/>
            <input type="text" onChange={(e)=>dispatch(changeTextLive(e.target.value))}/>
            <h2>{textLive}</h2>
        </div>
    )
}

export default Counter