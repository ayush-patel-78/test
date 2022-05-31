import "./App.css";
import axios from "axios";
import Data from "./data";
import { useSelector, useDispatch } from 'react-redux'
import { storeEven } from '../src/action/index'

function App() {

  let number;
  const dispatch = useDispatch();
  const myState = useSelector((state) => state.storeEven)
  let res;
  const callApi = async () => {
    const url = "https://hirebus-backend.herokuapp.com/getData";
    res = await axios.post(url);
    console.log(res);

    number = res.data.number;

    console.log("Number is : " + number);

    console.log("My data : " + myState);
  };

  return (
    <div>
      <div className="head">
        <h1> BooksApp Assessment Task </h1>
      </div>
      <button
        onClick={() => {
          callApi();
          if (number % 2 == 0)  
            dispatch(storeEven(res.data));
            console.log("Hello")
          
        }}
      >
        Refresh
      </button>
      <Data/>
    </div>
  );
}

export default App;