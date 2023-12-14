import React from 'react'
import { useDispatch} from 'react-redux';
//use dispatch dispatched the event to the store and finds out what actions is to be taken and used the approppriate reducer to do the same
import increment from '../actions'
const MyButton = ()=>{
    let dispatch = useDispatch();
    return (
        <button onClick={()=>dispatch(increment(1))}>Increase counter</button>
    );
}
export default MyButton;
