const initialState = {number : null, employee : []};

const check = (state = initialState, action) => {
    switch (action.type) {
      case 'storeEven':
        initialState.number = action.payload.number;
        initialState.employee = action.payload.data.data;
        return state = initialState
      default:
        return state
    }
  }
   
export default check;