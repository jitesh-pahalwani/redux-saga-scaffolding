const initialState = {
  name: '',
  age: '',
  gender: 'Male'
}

export default function homeReducer(state=initialState, action){
  switch(action.type){
    case 'DETAILS_ACTION':
    return {
      ...initialState,
      name: action.payload.nameInput,
      age: action.payload.ageInput
    }
    default:
    return initialState
  }
}
