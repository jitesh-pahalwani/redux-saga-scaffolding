const initialState = {
  someResponse: ''
}

export default function detailsReducer(state=initialState, action){
  switch(action.type){
    case 'RESULT_FETCHED':
    console.log(action);
    return {
      ...initialState,
      someResponse: action.payload.title
    }
    default:
    return initialState
  }
}
