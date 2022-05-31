import { useSelector, useDispatch } from 'react-redux'
import { storeEven } from '../src/action/index'

const Data = () => {
    const myState = useSelector((state) => state.storeEven)
    return(
        <>
            <h1>Hello</h1>
        </>
    )
}

export default Data;