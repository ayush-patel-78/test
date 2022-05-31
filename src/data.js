import { useSelector, useDispatch } from 'react-redux'
import { storeEven } from '../src/action/index'

const Data = () => {
  const myState = useSelector((state) => state.check)

  return (
    <>
      <h1>Hello!</h1>
      <h2>The number is {myState.number ? myState.number : 'no data found'}</h2>
      {myState.employee.map((item, index) => {
        return (
          <div key={index}>
            <br></br>
            <h3>Employee name : {item.empName}</h3>
            <h4>Role : {item.role}</h4>
            <h4>Employee ID : {item.Id}</h4>
            <br></br>
          </div>
        )
      })}
    </>
  )
}

export default Data
