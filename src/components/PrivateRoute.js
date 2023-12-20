import { useContext } from 'react';
import { AppContext } from '../Context/AppContext';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';


function PrivateRoute({children}){
    // const {state} = useContext(AppContext)
    const { token, loginData } = useSelector(store => store.Signin)
    // const token = useSelector(state => state.Signin_Reducer.token);
    console.log("token :" , token )

    if(token == null)
    {
        return <Navigate to="/Login" />
    }

    return children
}

export default PrivateRoute