import { useDispatch, useSelector } from 'react-redux'; 
import { addCustomerAction, removeCustomerAction } from './store/customerReducer';


export default function ReduxTest() {


    const dispatch = useDispatch()
    const cash = useSelector(state => state.cash.cash)
    const customers = useSelector(state => state.customers.customers)


    const addCash = (cash) => {
        dispatch({type:"ADD_CASH", payload: cash})
    }

    const getCash = (cash) => {
        if(cash > 0) {
            dispatch({type:"GET_CASH", payload: cash})
        };
    }

    const addCustomer = (name) => {
        const customer = {
            name,
            id: Date.now(),
        }
        dispatch(addCustomerAction(customer))
    }

    const removeCustomer = (customer) => {
        dispatch(removeCustomerAction(customer.id))
    }

    return(
        <div className="reduxtest-wrapper">
            <div>
                <div>{cash}</div>
                <button onClick={() => addCash(Number(prompt()))}>add cash</button>
                <button onClick={() => getCash(Number(prompt()))}>get cash</button>
                <button onClick={() => addCustomer(prompt())}>add client</button>
                <button onClick={() => removeCustomer(prompt())}>remove client</button>
            </div>
            <div>
                {customers.length > 0 ? 
                <div>
                    {customers.map(customer => 
                        <div onClick={() => removeCustomer(customer)}>{customer.name}</div>
                    )}
                </div>
                :
                <div>
                    Clients none!
                </div>
                }
            </div>
        </div>
    )
}