import React, { useEffect } from 'react'
import './App.css';
// import Navbar from './components/Nav/Navbar';
// import Card from './components/Card/Card';
import DashView from './components/DashBoard/Dash';
import { useDispatch, useSelector} from 'react-redux'
import { fetchAllData } from './action/actions';
import Loading from './components/load/load';
import Navbar from './components/Nav/Navbar';

const App = () => {
  const dispatch = useDispatch();
  const {allTickets} = useSelector(state => state.DataReducer);
   
  useEffect(() => {
    dispatch(fetchAllData());
  }, [dispatch])

  return allTickets ? (
    <div style={{paddingTop : "15px"}} >
      <Navbar/>
      <hr style={{marginTop : "15px"}} />
      <DashView/>
    </div>
  ) : <Loading/>
}

export default App