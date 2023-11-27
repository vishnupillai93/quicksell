import {configureStore} from '@reduxjs/toolkit';
import { DataReducer, SelectDataReducer } from './reducer/reducers';

const store = configureStore({
    reducer : {
        DataReducer, SelectDataReducer
    }
})

export default store;