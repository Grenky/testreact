import { useDispatch, useSelector } from 'react-redux'; 


export default function ReduxTest() {


    const dispatch = useDispatch()
    const cash = useSelector(state => state.cash)


    const addCash = (cash) => {
        dispatch({type:"ADD_CASH", payload: cash})
    }

    const getCash = (cash) => {
        if(cash > 0) {
            dispatch({type:"GET_CASH", payload: cash})
        };
    }

    return(
        <div className="reduxtest-wrapper">
            <div>
                <div>{cash}</div>
                <button onClick={() => addCash(Number(prompt()))}>add cash</button>
                <button onClick={() => getCash(Number(prompt()))}>get cash</button>
            </div>
        </div>
    )
}