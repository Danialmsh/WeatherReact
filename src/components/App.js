import React from 'react';
import {Provider} from "react-redux";
import Weather from './Weather';
import store from "../redux/store";


const App = ()=>{
    return (
        <Provider store={store}>
            <div>
                <Weather/>
            </div>
        </Provider>
    ) 
}

export default App;
